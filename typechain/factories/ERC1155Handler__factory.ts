/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC1155Handler } from "../ERC1155Handler";

export class ERC1155Handler__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    bridgeAddress: string,
    overrides?: Overrides
  ): Promise<ERC1155Handler> {
    return super.deploy(
      bridgeAddress,
      overrides || {}
    ) as Promise<ERC1155Handler>;
  }
  getDeployTransaction(
    bridgeAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(bridgeAddress, overrides || {});
  }
  attach(address: string): ERC1155Handler {
    return super.attach(address) as ERC1155Handler;
  }
  connect(signer: Signer): ERC1155Handler__factory {
    return super.connect(signer) as ERC1155Handler__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Handler {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Handler;
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_burnList",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_contractWhitelist",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "_resourceIDToTokenContractAddress",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_tokenContractAddressToResourceID",
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
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "depositer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "setBurnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "setResource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516110ce3803806110ce83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161103c6100926000396000818161016a015261058b015261103c6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80637f79bea81161008c578063bc197c8111610066578063bc197c8114610205578063c8ba6c871461023d578063e248cff21461026b578063f23a6e611461027e57600080fd5b80637f79bea8146101af578063b07e54bb146101d2578063b8fa3736146101f257600080fd5b806301ffc9a7146100d457806307b7ed99146100fc5780630968f264146101115780630a6d55d814610124578063318c136e146101655780636a70d0811461018c575b600080fd5b6100e76100e23660046107d1565b61029d565b60405190151581526020015b60405180910390f35b61010f61010a366004610817565b6102d4565b005b61010f61011f3660046108f9565b6102e8565b61014d610132366004610936565b6000602081905290815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016100f3565b61014d7f000000000000000000000000000000000000000000000000000000000000000081565b6100e761019a366004610817565b60036020526000908152604090205460ff1681565b6100e76101bd366004610817565b60026020526000908152604090205460ff1681565b6101e56101e0366004610998565b61032e565b6040516100f39190610a50565b61010f610200366004610a63565b61042b565b610224610213366004610b1d565b63bc197c8160e01b95945050505050565b6040516001600160e01b031990911681526020016100f3565b61025d61024b366004610817565b60016020526000908152604090205481565b6040519081526020016100f3565b61010f610279366004610bcb565b610480565b61022461028c366004610c17565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b14806102ce57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6102dc610580565b6102e5816105fa565b50565b6102f0610580565b60008060608060608580602001905181019061030c9190610cdb565b939850919650945092509050610326853086868686610692565b505050505050565b6060610338610580565b60608061034784860186610dc7565b60008981526020819052604090205491935091506001600160a01b0316806103c15760405162461bcd60e51b815260206004820152602260248201527f70726f7669646564207265736f75726365494420646f6573206e6f74206578696044820152611cdd60f21b60648201526084015b60405180910390fd5b6001600160a01b03811660009081526003602052604090205460ff16156103f3576103ee81888585610703565b610410565b610410818830868660405180602001604052806000815250610692565b50506040805160008152602081019091529695505050505050565b610433610580565b60008281526020818152604080832080546001600160a01b0319166001600160a01b039590951694851790559282526001808252838320949094556002905220805460ff19169091179055565b610488610580565b606080808061049985870187610e2b565b60208083015160008d81528083526040808220546001600160a01b031680835260029094529020549599509397509195509350909160ff1661052e5760405162461bcd60e51b815260206004820152602860248201527f70726f766964656420746f6b656e41646472657373206973206e6f74207768696044820152671d195b1a5cdd195960c21b60648201526084016103b8565b6001600160a01b03811660009081526003602052604090205460ff16156105645761055f818360601c888887610763565b610575565b61057581308460601c898988610692565b505050505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105f85760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206d7573742062652062726964676520636f6e7472616374000060448201526064016103b8565b565b6001600160a01b03811660009081526002602052604090205460ff1661066e5760405162461bcd60e51b8152602060048201526024808201527f70726f766964656420636f6e7472616374206973206e6f742077686974656c696044820152631cdd195960e21b60648201526084016103b8565b6001600160a01b03166000908152600360205260409020805460ff19166001179055565b604051631759616b60e11b815286906001600160a01b03821690632eb2c2d6906106c89089908990899089908990600401610f13565b600060405180830381600087803b1580156106e257600080fd5b505af11580156106f6573d6000803e3d6000fd5b5050505050505050505050565b604051631ac8311560e21b815284906001600160a01b03821690636b20c4549061073590879087908790600401610f71565b600060405180830381600087803b15801561074f57600080fd5b505af1158015610575573d6000803e3d6000fd5b604051630fbfeffd60e11b815285906001600160a01b03821690631f7fdffa90610797908890889088908890600401610fb1565b600060405180830381600087803b1580156107b157600080fd5b505af11580156107c5573d6000803e3d6000fd5b50505050505050505050565b6000602082840312156107e357600080fd5b81356001600160e01b0319811681146107fb57600080fd5b9392505050565b6001600160a01b03811681146102e557600080fd5b60006020828403121561082957600080fd5b81356107fb81610802565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561087357610873610834565b604052919050565b600067ffffffffffffffff82111561089557610895610834565b50601f01601f191660200190565b600082601f8301126108b457600080fd5b81356108c76108c28261087b565b61084a565b8181528460208386010111156108dc57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561090b57600080fd5b813567ffffffffffffffff81111561092257600080fd5b61092e848285016108a3565b949350505050565b60006020828403121561094857600080fd5b5035919050565b60008083601f84011261096157600080fd5b50813567ffffffffffffffff81111561097957600080fd5b60208301915083602082850101111561099157600080fd5b9250929050565b600080600080606085870312156109ae57600080fd5b8435935060208501356109c081610802565b9250604085013567ffffffffffffffff8111156109dc57600080fd5b6109e88782880161094f565b95989497509550505050565b60005b83811015610a0f5781810151838201526020016109f7565b83811115610a1e576000848401525b50505050565b60008151808452610a3c8160208601602086016109f4565b601f01601f19169290920160200192915050565b6020815260006107fb6020830184610a24565b60008060408385031215610a7657600080fd5b823591506020830135610a8881610802565b809150509250929050565b600067ffffffffffffffff821115610aad57610aad610834565b5060051b60200190565b600082601f830112610ac857600080fd5b81356020610ad86108c283610a93565b82815260059290921b84018101918181019086841115610af757600080fd5b8286015b84811015610b125780358352918301918301610afb565b509695505050505050565b600080600080600060a08688031215610b3557600080fd5b8535610b4081610802565b94506020860135610b5081610802565b9350604086013567ffffffffffffffff80821115610b6d57600080fd5b610b7989838a01610ab7565b94506060880135915080821115610b8f57600080fd5b610b9b89838a01610ab7565b93506080880135915080821115610bb157600080fd5b50610bbe888289016108a3565b9150509295509295909350565b600080600060408486031215610be057600080fd5b83359250602084013567ffffffffffffffff811115610bfe57600080fd5b610c0a8682870161094f565b9497909650939450505050565b600080600080600060a08688031215610c2f57600080fd5b8535610c3a81610802565b94506020860135610c4a81610802565b93506040860135925060608601359150608086013567ffffffffffffffff811115610c7457600080fd5b610bbe888289016108a3565b600082601f830112610c9157600080fd5b81516020610ca16108c283610a93565b82815260059290921b84018101918181019086841115610cc057600080fd5b8286015b84811015610b125780518352918301918301610cc4565b600080600080600060a08688031215610cf357600080fd5b8551610cfe81610802565b6020870151909550610d0f81610802565b604087015190945067ffffffffffffffff80821115610d2d57600080fd5b610d3989838a01610c80565b94506060880151915080821115610d4f57600080fd5b610d5b89838a01610c80565b93506080880151915080821115610d7157600080fd5b508601601f81018813610d8357600080fd5b8051610d916108c28261087b565b818152896020838501011115610da657600080fd5b610db78260208301602086016109f4565b8093505050509295509295909350565b60008060408385031215610dda57600080fd5b823567ffffffffffffffff80821115610df257600080fd5b610dfe86838701610ab7565b93506020850135915080821115610e1457600080fd5b50610e2185828601610ab7565b9150509250929050565b60008060008060808587031215610e4157600080fd5b843567ffffffffffffffff80821115610e5957600080fd5b610e6588838901610ab7565b95506020870135915080821115610e7b57600080fd5b610e8788838901610ab7565b94506040870135915080821115610e9d57600080fd5b610ea9888389016108a3565b93506060870135915080821115610ebf57600080fd5b50610ecc878288016108a3565b91505092959194509250565b600081518084526020808501945080840160005b83811015610f0857815187529582019590820190600101610eec565b509495945050505050565b6001600160a01b0386811682528516602082015260a060408201819052600090610f3f90830186610ed8565b8281036060840152610f518186610ed8565b90508281036080840152610f658185610a24565b98975050505050505050565b6001600160a01b0384168152606060208201819052600090610f9590830185610ed8565b8281036040840152610fa78185610ed8565b9695505050505050565b6001600160a01b0385168152608060208201819052600090610fd590830186610ed8565b8281036040840152610fe78186610ed8565b90508281036060840152610ffb8185610a24565b97965050505050505056fea2646970667358221220b523cd157017598a04e508c94612a70df22ea4a24ea084a6b26683b8c5a88c4764736f6c634300080b0033";