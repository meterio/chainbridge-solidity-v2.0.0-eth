/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Signatures } from "../Signatures";

export class Signatures__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Signatures> {
    return super.deploy(overrides || {}) as Promise<Signatures>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Signatures {
    return super.attach(address) as Signatures;
  }
  connect(signer: Signer): Signatures__factory {
    return super.connect(signer) as Signatures__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Signatures {
    return new Contract(address, _abi, signerOrProvider) as Signatures;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "originDomainID",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "depositNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "SignturePass",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "originDomainID",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "depositNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "SubmitSignature",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RELAYER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_TYPE_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "_relayerThreshold",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "_resourceIDToHandlerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "destinationDomainID",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "newThreshold",
        type: "uint256",
      },
    ],
    name: "adminChangeRelayerThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "handlerAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "adminSetResource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "domainID",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "destinationDomainID",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "destinationBridge",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "depositNonce",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "checkSignature",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getRoleMemberIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "domainID",
        type: "uint8",
      },
      {
        internalType: "uint64",
        name: "depositNonce",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getSignatures",
    outputs: [
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "signatures",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "originDomainID",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "destinationDomainID",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "destinationBridge",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "depositNonce",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "submitSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x600c6080526b5065726d697442726964676560a01b60a0527f058443738ec3641a3233a9f285e16671e4ad9755445580d761017e695f75052b600155610100604052600360c052620312e360ec1b60e0527fe6bbd6277e1bf288eed5e8d1780f9a50b239e86b153736bceebccf4ea79d90b36002553480156200008157600080fd5b506200008f60003362000095565b6200017e565b620000a18282620000a5565b5050565b600082815260208181526040909120620000ca91839062000d066200010c821b17901c565b15620000a15760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b600062000123836001600160a01b0384166200012c565b90505b92915050565b6000818152600183016020526040812054620001755750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000126565b50600062000126565b6119b1806200018e6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063861fd043116100ad578063aa44739d11610071578063aa44739d146102ef578063ca15c87314610324578063cb10f21514610337578063d547741f1461034a578063e5787a751461035d57600080fd5b8063861fd043146102875780639010d07c1461029a57806391d14854146102ad578063926d7d7f146102c0578063a217fddf146102e757600080fd5b806336568abe116100f457806336568abe146101d95780634e0df3f6146101ec5780635d2dab0b146101ff57806374400fd11461022657806384db809f1461024657600080fd5b80631f241eca14610131578063248a9ca3146101595780632f2ff15d1461018a5780632fda959e1461019f57806330adf81f146101b2575b600080fd5b61014461013f36600461153a565b61037d565b60405190151581526020015b60405180910390f35b61017c6101673660046115f8565b60009081526020819052604090206002015490565b604051908152602001610150565b61019d610198366004611611565b61052f565b005b61019d6101ad36600461163d565b6105c2565b61017c7fc4cb5d35714699d6e85b9562b644e60393b418d974a5c1dd8efaadac37a142c581565b61019d6101e7366004611611565b610646565b61017c6101fa366004611611565b6106c0565b61017c7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81565b610239610234366004611667565b6106eb565b60405161015091906116d6565b61026f6102543660046115f8565b6004602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610150565b61019d61029536600461153a565b6107a4565b61026f6102a8366004611667565b610a5c565b6101446102bb366004611611565b610a7b565b61017c7fe2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc481565b61017c600081565b6103126102fd3660046116e9565b60056020526000908152604090205460ff1681565b60405160ff9091168152602001610150565b61017c6103323660046115f8565b610a93565b61019d610345366004611704565b610aaa565b61019d610358366004611611565b610b30565b61037061036b366004611740565b610bb1565b60405161015091906117af565b6000807fc4cb5d35714699d6e85b9562b644e60393b418d974a5c1dd8efaadac37a142c58b898989896040516103b4929190611811565b6040519081900381206103f8959493929160200194855260ff93909316602085015267ffffffffffffffff9190911660408401526060830152608082015260a00190565b60408051601f1981840301815282825280516020918201206001546002547f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8685015285850191909152606085015260ff8e1660808501526001600160a01b038d1660a0808601919091528351808603909101815260c08501845280519083012061190160f01b60e086015260e285015261010280850182905283518086039091018152610122909401909252825192019190912090915060006104f28287878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d1b92505050565b905061051e7fe2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc482610a7b565b9d9c50505050505050505050505050565b60008281526020819052604090206002015461054b9033610a7b565b6105b45760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526e0818591b5a5b881d1bc819dc985b9d608a1b60648201526084015b60405180910390fd5b6105be8282610d3f565b5050565b6105cd600033610a7b565b6106195760405162461bcd60e51b815260206004820152601e60248201527f73656e64657220646f65736e277420686176652061646d696e20726f6c65000060448201526064016105ab565b61062281610d98565b60ff9283166000908152600560205260409020805460ff1916919093161790915550565b6001600160a01b03811633146106b65760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016105ab565b6105be8282610def565b6000828152602081815260408083206001600160a01b03851684526001019091529020545b92915050565b6006602052816000526040600020818154811061070757600080fd5b9060005260206000200160009150915050805461072390611821565b80601f016020809104026020016040519081016040528092919081815260200182805461074f90611821565b801561079c5780601f106107715761010080835404028352916020019161079c565b820191906000526020600020905b81548152906001019060200180831161077f57829003601f168201915b505050505081565b60008581526004602090815260408083205490516001600160a01b0390911692916107d5918491899189910161185c565b60405160208183030381529060405280519060200120905060006107fa8c8a84610e48565b90506001600160a01b0383166108525760405162461bcd60e51b815260206004820152601960248201527f6e6f2068616e646c657220666f72207265736f7572636549440000000000000060448201526064016105ab565b60008151600481111561086757610867611888565b146108b45760405162461bcd60e51b815260206004820152601b60248201527f50726f706f73616c537461747573206e6f7420696e616374697665000000000060448201526064016105ab565b6108c58c8c8c8c8c8c8c8c8c61037d565b6109055760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b60448201526064016105ab565b60008c8a8a8a8a60405161091a929190611811565b6040519081900381206109579493929160200160ff94909416845267ffffffffffffffff9290921660208401526040830152606082015260800190565b60408051601f19818403018152918152815160209283012060008181526006845291822080546001810182559083529290912090925061099991018787611423565b50888d60ff167f61cb4bceda51bce60b1d6ed6a15c758737872a125214641da0ae8bb0f2fd23118c8b8b8b8b6040516109d69594939291906118c7565b60405180910390a360ff808d16600090815260056020908152604080832054858452600690925290912054911611610a4d57888d60ff167f34a202d5d1eb96571e8f79cd5ad505695728f56e0de6df829f702e6d4fc909eb8c8b8b8b8b604051610a449594939291906118c7565b60405180910390a35b50505050505050505050505050565b6000828152602081905260408120610a749083610f16565b9392505050565b6000828152602081905260408120610a749083610f22565b60008181526020819052604081206106e590610f44565b610ab5600033610a7b565b610b015760405162461bcd60e51b815260206004820152601e60248201527f73656e64657220646f65736e277420686176652061646d696e20726f6c65000060448201526064016105ab565b50600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b600082815260208190526040902060020154610b4c9033610a7b565b6106b65760405162461bcd60e51b815260206004820152603060248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526f2061646d696e20746f207265766f6b6560801b60648201526084016105ab565b6060600660008787878787604051610bca929190611811565b604051908190038120610c079493929160200160ff94909416845267ffffffffffffffff9290921660208401526040830152606082015260800190565b604051602081830303815290604052805190602001208152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610cf7578382906000526020600020018054610c6a90611821565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9690611821565b8015610ce35780601f10610cb857610100808354040283529160200191610ce3565b820191906000526020600020905b815481529060010190602001808311610cc657829003601f168201915b505050505081526020019060010190610c4b565b50505050905095945050505050565b6000610a74836001600160a01b038416610f4e565b6000806000610d2a8585610f9d565b91509150610d378161100d565b509392505050565b6000828152602081905260409020610d579082610d06565b156105be5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60006101008210610deb5760405162461bcd60e51b815260206004820152601c60248201527f76616c756520646f6573206e6f742066697420696e203820626974730000000060448201526064016105ab565b5090565b6000828152602081905260409020610e0790826111cb565b156105be5760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b60408051608081018252600080825260208201819052918101829052606081019190915260ff848116600885901b68ffffffffffffffff00161760008181526003602090815260408083208784529091529081902081516080810190925280549293919290918391166004811115610ec257610ec2611888565b6004811115610ed357610ed3611888565b8152905461010081046001600160c81b03166020830152600160d01b810460ff166040830152600160d81b900464ffffffffff1660609091015295945050505050565b6000610a7483836111e0565b6001600160a01b03811660009081526001830160205260408120541515610a74565b60006106e5825490565b6000818152600183016020526040812054610f95575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556106e5565b5060006106e5565b600080825160411415610fd45760208301516040840151606085015160001a610fc88782858561120a565b94509450505050611006565b825160401415610ffe5760208301516040840151610ff38683836112f7565b935093505050611006565b506000905060025b9250929050565b600081600481111561102157611021611888565b141561102a5750565b600181600481111561103e5761103e611888565b141561108c5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105ab565b60028160048111156110a0576110a0611888565b14156110ee5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105ab565b600381600481111561110257611102611888565b141561115b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016105ab565b600481600481111561116f5761116f611888565b14156111c85760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016105ab565b50565b6000610a74836001600160a01b038416611330565b60008260000182815481106111f7576111f761190a565b9060005260206000200154905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561124157506000905060036112ee565b8460ff16601b1415801561125957508460ff16601c14155b1561126a57506000905060046112ee565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156112be573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166112e7576000600192509250506112ee565b9150600090505b94509492505050565b6000806001600160ff1b0383168161131460ff86901c601b611936565b90506113228782888561120a565b935093505050935093915050565b6000818152600183016020526040812054801561141957600061135460018361194e565b85549091506000906113689060019061194e565b90508181146113cd5760008660000182815481106113885761138861190a565b90600052602060002001549050808760000184815481106113ab576113ab61190a565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806113de576113de611965565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506106e5565b60009150506106e5565b82805461142f90611821565b90600052602060002090601f0160209004810192826114515760008555611497565b82601f1061146a5782800160ff19823516178555611497565b82800160010185558215611497579182015b8281111561149757823582559160200191906001019061147c565b50610deb9291505b80821115610deb576000815560010161149f565b803560ff811681146114c457600080fd5b919050565b80356001600160a01b03811681146114c457600080fd5b803567ffffffffffffffff811681146114c457600080fd5b60008083601f84011261150a57600080fd5b50813567ffffffffffffffff81111561152257600080fd5b60208301915083602082850101111561100657600080fd5b600080600080600080600080600060e08a8c03121561155857600080fd5b6115618a6114b3565b985061156f60208b016114b3565b975061157d60408b016114c9565b965061158b60608b016114e0565b955060808a0135945060a08a013567ffffffffffffffff808211156115af57600080fd5b6115bb8d838e016114f8565b909650945060c08c01359150808211156115d457600080fd5b506115e18c828d016114f8565b915080935050809150509295985092959850929598565b60006020828403121561160a57600080fd5b5035919050565b6000806040838503121561162457600080fd5b82359150611634602084016114c9565b90509250929050565b6000806040838503121561165057600080fd5b611659836114b3565b946020939093013593505050565b6000806040838503121561167a57600080fd5b50508035926020909101359150565b6000815180845260005b818110156116af57602081850181015186830182015201611693565b818111156116c1576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610a746020830184611689565b6000602082840312156116fb57600080fd5b610a74826114b3565b60008060006060848603121561171957600080fd5b611722846114c9565b925060208401359150611737604085016114c9565b90509250925092565b60008060008060006080868803121561175857600080fd5b611761866114b3565b945061176f602087016114e0565b935060408601359250606086013567ffffffffffffffff81111561179257600080fd5b61179e888289016114f8565b969995985093965092949392505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561180457603f198886030184526117f2858351611689565b945092850192908501906001016117d6565b5092979650505050505050565b8183823760009101908152919050565b600181811c9082168061183557607f821691505b6020821081141561185657634e487b7160e01b600052602260045260246000fd5b50919050565b6bffffffffffffffffffffffff198460601b168152818360148301376000910160140190815292915050565b634e487b7160e01b600052602160045260246000fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b67ffffffffffffffff861681526060602082015260006118eb60608301868861189e565b82810360408401526118fe81858761189e565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561194957611949611920565b500190565b60008282101561196057611960611920565b500390565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220a3b20c5114892700791142c9a31f964ce346761018a43bd3b592886c0c13a16764736f6c634300080b0033";