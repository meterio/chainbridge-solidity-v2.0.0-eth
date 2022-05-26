/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BasicFeeHandler } from "../BasicFeeHandler";

export class BasicFeeHandler__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    bridgeAddress: string,
    overrides?: Overrides
  ): Promise<BasicFeeHandler> {
    return super.deploy(
      bridgeAddress,
      overrides || {}
    ) as Promise<BasicFeeHandler>;
  }
  getDeployTransaction(
    bridgeAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(bridgeAddress, overrides || {});
  }
  attach(address: string): BasicFeeHandler {
    return super.attach(address) as BasicFeeHandler;
  }
  connect(signer: Signer): BasicFeeHandler__factory {
    return super.connect(signer) as BasicFeeHandler__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasicFeeHandler {
    return new Contract(address, _abi, signerOrProvider) as BasicFeeHandler;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bridgeAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "FeeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "fromDomainID",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "destinationDomainID",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "FeeCollected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FeeDistributed",
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
    name: "_bridgeAddress",
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
    inputs: [],
    name: "_fee",
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
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "fromDomainID",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "destinationDomainID",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "depositData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "feeData",
        type: "bytes",
      },
    ],
    name: "calculateFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "changeFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "fromDomainID",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "destinationDomainID",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "depositData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "feeData",
        type: "bytes",
      },
    ],
    name: "collectFee",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "address payable[]",
        name: "addrs",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "transferFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620010ba380380620010ba83398101604081905262000034916200013e565b6001600160a01b0381166080526200004e60003362000055565b5062000170565b62000061828262000065565b5050565b6000828152602081815260409091206200008a91839062000926620000cc821b17901c565b15620000615760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6000620000e3836001600160a01b038416620000ec565b90505b92915050565b60008181526001830160205260408120546200013557508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620000e6565b506000620000e6565b6000602082840312156200015157600080fd5b81516001600160a01b03811681146200016957600080fd5b9392505050565b608051610f27620001936000396000818161017701526109460152610f276000f3fe6080604052600436106100e85760003560e01c80639010d07c1161008a578063c5b37c2211610059578063c5b37c2214610296578063ca15c873146102ac578063d547741f146102cc578063ef4f081f146102ec57600080fd5b80639010d07c14610211578063904e9b2b1461023157806391d1485414610251578063a217fddf1461028157600080fd5b8063318c136e116100c6578063318c136e1461016557806336568abe146101b15780634e0df3f6146101d15780636a1db1bf146101f157600080fd5b8063248a9ca3146100ed57806325307065146101305780632f2ff15d14610145575b600080fd5b3480156100f957600080fd5b5061011d610108366004610c20565b60009081526020819052604090206002015490565b6040519081526020015b60405180910390f35b61014361013e366004610cb0565b610336565b005b34801561015157600080fd5b50610143610160366004610d5d565b6103fb565b34801561017157600080fd5b506101997f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610127565b3480156101bd57600080fd5b506101436101cc366004610d5d565b610489565b3480156101dd57600080fd5b5061011d6101ec366004610d5d565b610503565b3480156101fd57600080fd5b5061014361020c366004610c20565b61052e565b34801561021d57600080fd5b5061019961022c366004610d8d565b610612565b34801561023d57600080fd5b5061014361024c366004610df4565b610631565b34801561025d57600080fd5b5061027161026c366004610d5d565b610876565b6040519015158152602001610127565b34801561028d57600080fd5b5061011d600081565b3480156102a257600080fd5b5061011d60015481565b3480156102b857600080fd5b5061011d6102c7366004610c20565b61088e565b3480156102d857600080fd5b506101436102e7366004610d5d565b6108a5565b3480156102f857600080fd5b50610319610307366004610cb0565b60015460009850989650505050505050565b604080519283526001600160a01b03909116602083015201610127565b61033e61093b565b600154341461038d5760405162461bcd60e51b8152602060048201526016602482015275125b98dbdc9c9958dd08199959481cdd5c1c1b1a595960521b60448201526064015b60405180910390fd5b600154604080516001600160a01b038b16815260ff8a81166020830152891681830152606081018890526080810192909252600060a0830152517fbd231b7fa4103e15e7a238c72f07e8aff310701af121895aa6c793b80245e4339181900360c00190a15050505050505050565b6000828152602081905260409020600201546104179033610876565b61047b5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526e0818591b5a5b881d1bc819dc985b9d608a1b6064820152608401610384565b61048582826109b5565b5050565b6001600160a01b03811633146104f95760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610384565b6104858282610a0e565b6000828152602081815260408083206001600160a01b03851684526001019091529020545b92915050565b610539600033610876565b6105855760405162461bcd60e51b815260206004820152601e60248201527f73656e64657220646f65736e277420686176652061646d696e20726f6c6500006044820152606401610384565b8060015414156105d75760405162461bcd60e51b815260206004820152601f60248201527f43757272656e742066656520697320657175616c20746f206e657720666565006044820152606401610384565b60018190556040518181527f6bbc57480a46553fa4d156ce702beef5f3ad66303b0ed1a5d4cb44966c6584c39060200160405180910390a150565b600082815260208190526040812061062a9083610a67565b9392505050565b61063c600033610876565b6106885760405162461bcd60e51b815260206004820152601e60248201527f73656e64657220646f65736e277420686176652061646d696e20726f6c6500006044820152606401610384565b8281146106d75760405162461bcd60e51b815260206004820152601f60248201527f61646472735b5d2c20616d6f756e74735b5d3a2064696666206c656e677468006044820152606401610384565b60005b8381101561086f5760008585838181106106f6576106f6610e60565b905060200201602081019061070b9190610e76565b6001600160a01b031684848481811061072657610726610e60565b9050602002013560405160006040518083038185875af1925050503d806000811461076d576040519150601f19603f3d011682016040523d82523d6000602084013e610772565b606091505b50509050806107c35760405162461bcd60e51b815260206004820152601960248201527f466565206574686572207472616e73666572206661696c6564000000000000006044820152606401610384565b7faaa40a232aaf133fdd28f3485f6fdd163514cfadbffa981f3610f42398efe34b60008787858181106107f8576107f8610e60565b905060200201602081019061080d9190610e76565b86868681811061081f5761081f610e60565b90506020020135604051610854939291906001600160a01b039384168152919092166020820152604081019190915260600190565b60405180910390a1508061086781610ea9565b9150506106da565b5050505050565b600082815260208190526040812061062a9083610a73565b600081815260208190526040812061052890610a95565b6000828152602081905260409020600201546108c19033610876565b6104f95760405162461bcd60e51b815260206004820152603060248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526f2061646d696e20746f207265766f6b6560801b6064820152608401610384565b600061062a836001600160a01b038416610a9f565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109b35760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206d7573742062652062726964676520636f6e747261637400006044820152606401610384565b565b60008281526020819052604090206109cd9082610926565b156104855760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6000828152602081905260409020610a269082610aee565b156104855760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b600061062a8383610b03565b6001600160a01b0381166000908152600183016020526040812054151561062a565b6000610528825490565b6000818152600183016020526040812054610ae657508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610528565b506000610528565b600061062a836001600160a01b038416610b2d565b6000826000018281548110610b1a57610b1a610e60565b9060005260206000200154905092915050565b60008181526001830160205260408120548015610c16576000610b51600183610ec4565b8554909150600090610b6590600190610ec4565b9050818114610bca576000866000018281548110610b8557610b85610e60565b9060005260206000200154905080876000018481548110610ba857610ba8610e60565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610bdb57610bdb610edb565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610528565b6000915050610528565b600060208284031215610c3257600080fd5b5035919050565b6001600160a01b0381168114610c4e57600080fd5b50565b803560ff81168114610c6257600080fd5b919050565b60008083601f840112610c7957600080fd5b50813567ffffffffffffffff811115610c9157600080fd5b602083019150836020828501011115610ca957600080fd5b9250929050565b60008060008060008060008060c0898b031215610ccc57600080fd5b8835610cd781610c39565b9750610ce560208a01610c51565b9650610cf360408a01610c51565b955060608901359450608089013567ffffffffffffffff80821115610d1757600080fd5b610d238c838d01610c67565b909650945060a08b0135915080821115610d3c57600080fd5b50610d498b828c01610c67565b999c989b5096995094979396929594505050565b60008060408385031215610d7057600080fd5b823591506020830135610d8281610c39565b809150509250929050565b60008060408385031215610da057600080fd5b50508035926020909101359150565b60008083601f840112610dc157600080fd5b50813567ffffffffffffffff811115610dd957600080fd5b6020830191508360208260051b8501011115610ca957600080fd5b60008060008060408587031215610e0a57600080fd5b843567ffffffffffffffff80821115610e2257600080fd5b610e2e88838901610daf565b90965094506020870135915080821115610e4757600080fd5b50610e5487828801610daf565b95989497509550505050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610e8857600080fd5b813561062a81610c39565b634e487b7160e01b600052601160045260246000fd5b6000600019821415610ebd57610ebd610e93565b5060010190565b600082821015610ed657610ed6610e93565b500390565b634e487b7160e01b600052603160045260246000fdfea264697066735822122082f17e3f58f6b57e95fc7aceef0404eead6c0d080f9f27ccd8a9c1ad9d3a691864736f6c634300080b0033";