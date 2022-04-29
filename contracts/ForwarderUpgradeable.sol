// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity 0.8.11;
pragma experimental ABIEncoderV2;

import {ECDSAUpgradeable as ECDSA} from "@openzeppelin/contracts-upgradeable/utils/cryptography/ECDSAUpgradeable.sol";
import {EIP712Upgradeable as EIP712} from "@openzeppelin/contracts-upgradeable/utils/cryptography/draft-EIP712Upgradeable.sol";

/**
    @notice This contract refers to Openzeppelin's MinimalForwarder contract.
 */
contract ForwarderUpgradeable is EIP712 {
    using ECDSA for bytes32;

    struct ForwardRequest {
        address from;
        address to;
        uint256 value;
        uint256 gas;
        uint256 nonce;
        bytes data;
    }

    bytes32 private constant _TYPEHASH =
        keccak256(
            "ForwardRequest(address from,address to,uint256 value,uint256 gas,uint256 nonce,bytes data)"
        );

    mapping(address => uint256) private _nonces;

    function initialize() public initializer {
        __EIP712_init("Forwarder", "v1.0");
    }

    function getNonce(address from) public view returns (uint256) {
        return _nonces[from];
    }

    function verify(ForwardRequest calldata req, bytes calldata signature)
        public
        view
        returns (bool)
    {
        address signer = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    _TYPEHASH,
                    req.from,
                    req.to,
                    req.value,
                    req.gas,
                    req.nonce,
                    keccak256(req.data)
                )
            )
        ).recover(signature);
        return _nonces[req.from] == req.nonce && signer == req.from;
    }

    function execute(ForwardRequest calldata req, bytes calldata signature)
        public
        payable
        returns (bool, bytes memory)
    {
        require(
            verify(req, signature),
            "MinimalForwarder: signature does not match request"
        );
        _nonces[req.from] = req.nonce + 1;

        (bool success, bytes memory returndata) = req.to.call{
            gas: req.gas,
            value: req.value
        }(abi.encodePacked(req.data, req.from));

        assert(gasleft() > req.gas / 63);

        return (success, returndata);
    }
}