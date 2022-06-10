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
    stateMutability: "payable",
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
    ],
    name: "isWtoken",
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
        internalType: "address",
        name: "wtokenAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isWtoken",
        type: "bool",
      },
    ],
    name: "setWtoken",
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
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161129e38038061129e83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161120c6100926000396000818161021f0152610728015261120c6000f3fe6080604052600436106100f35760003560e01c80637f79bea81161008a578063bc197c8111610059578063bc197c81146102ff578063c8ba6c8714610344578063e248cff21461037f578063f23a6e611461039f57600080fd5b80637f79bea814610271578063ab5c7bf1146102a1578063b07e54bb146102bf578063b8fa3736146102df57600080fd5b80630a6d55d8116100c65780630a6d55d81461019f5780632129da19146101ed578063318c136e1461020d5780636a70d0811461024157600080fd5b806301ffc9a7146100f8578063045dff971461012d57806307b7ed991461015d5780630968f2641461017f575b600080fd5b34801561010457600080fd5b5061011861011336600461096e565b6103cb565b60405190151581526020015b60405180910390f35b34801561013957600080fd5b506101186101483660046109b4565b60046020526000908152604090205460ff1681565b34801561016957600080fd5b5061017d6101783660046109b4565b610402565b005b34801561018b57600080fd5b5061017d61019a366004610a96565b610413565b3480156101ab57600080fd5b506101d56101ba366004610ad3565b6000602081905290815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610124565b3480156101f957600080fd5b5061017d610208366004610aec565b610459565b34801561021957600080fd5b506101d57f000000000000000000000000000000000000000000000000000000000000000081565b34801561024d57600080fd5b5061011861025c3660046109b4565b60036020526000908152604090205460ff1681565b34801561027d57600080fd5b5061011861028c3660046109b4565b60026020526000908152604090205460ff1681565b3480156102ad57600080fd5b5061017d6102bc366004610a96565b50565b6102d26102cd366004610b73565b61048c565b6040516101249190610c2b565b3480156102eb57600080fd5b5061017d6102fa366004610c3e565b6105c8565b34801561030b57600080fd5b5061032b61031a366004610ced565b63bc197c8160e01b95945050505050565b6040516001600160e01b03199091168152602001610124565b34801561035057600080fd5b5061037161035f3660046109b4565b60016020526000908152604090205481565b604051908152602001610124565b34801561038b57600080fd5b5061017d61039a366004610d9b565b61061d565b3480156103ab57600080fd5b5061032b6103ba366004610de7565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b14806103fc57506301ffc9a760e01b6001600160e01b03198316145b92915050565b61040a61071d565b6102bc81610797565b61041b61071d565b6000806060806060858060200190518101906104379190610eab565b93985091965094509250905061045185308686868661082f565b505050505050565b61046161071d565b6001600160a01b03919091166000908152600460205260409020805460ff1916911515919091179055565b606061049661071d565b34156104da5760405162461bcd60e51b815260206004820152600e60248201526d06d73672e76616c756520213d20360941b60448201526064015b60405180910390fd5b6060806104e984860186610f97565b60008981526020819052604090205491935091506001600160a01b03168061055e5760405162461bcd60e51b815260206004820152602260248201527f70726f7669646564207265736f75726365494420646f6573206e6f74206578696044820152611cdd60f21b60648201526084016104d1565b6001600160a01b03811660009081526003602052604090205460ff16156105905761058b818885856108a0565b6105ad565b6105ad81883086866040518060200160405280600081525061082f565b50506040805160008152602081019091529695505050505050565b6105d061071d565b60008281526020818152604080832080546001600160a01b0319166001600160a01b039590951694851790559282526001808252838320949094556002905220805460ff19169091179055565b61062561071d565b606080808061063685870187610ffb565b60208083015160008d81528083526040808220546001600160a01b031680835260029094529020549599509397509195509350909160ff166106cb5760405162461bcd60e51b815260206004820152602860248201527f70726f766964656420746f6b656e41646472657373206973206e6f74207768696044820152671d195b1a5cdd195960c21b60648201526084016104d1565b6001600160a01b03811660009081526003602052604090205460ff1615610701576106fc818360601c888887610900565b610712565b61071281308460601c89898861082f565b505050505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107955760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206d7573742062652062726964676520636f6e7472616374000060448201526064016104d1565b565b6001600160a01b03811660009081526002602052604090205460ff1661080b5760405162461bcd60e51b8152602060048201526024808201527f70726f766964656420636f6e7472616374206973206e6f742077686974656c696044820152631cdd195960e21b60648201526084016104d1565b6001600160a01b03166000908152600360205260409020805460ff19166001179055565b604051631759616b60e11b815286906001600160a01b03821690632eb2c2d69061086590899089908990899089906004016110e3565b600060405180830381600087803b15801561087f57600080fd5b505af1158015610893573d6000803e3d6000fd5b5050505050505050505050565b604051631ac8311560e21b815284906001600160a01b03821690636b20c454906108d290879087908790600401611141565b600060405180830381600087803b1580156108ec57600080fd5b505af1158015610712573d6000803e3d6000fd5b604051630fbfeffd60e11b815285906001600160a01b03821690631f7fdffa90610934908890889088908890600401611181565b600060405180830381600087803b15801561094e57600080fd5b505af1158015610962573d6000803e3d6000fd5b50505050505050505050565b60006020828403121561098057600080fd5b81356001600160e01b03198116811461099857600080fd5b9392505050565b6001600160a01b03811681146102bc57600080fd5b6000602082840312156109c657600080fd5b81356109988161099f565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610a1057610a106109d1565b604052919050565b600067ffffffffffffffff821115610a3257610a326109d1565b50601f01601f191660200190565b600082601f830112610a5157600080fd5b8135610a64610a5f82610a18565b6109e7565b818152846020838601011115610a7957600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215610aa857600080fd5b813567ffffffffffffffff811115610abf57600080fd5b610acb84828501610a40565b949350505050565b600060208284031215610ae557600080fd5b5035919050565b60008060408385031215610aff57600080fd5b8235610b0a8161099f565b915060208301358015158114610b1f57600080fd5b809150509250929050565b60008083601f840112610b3c57600080fd5b50813567ffffffffffffffff811115610b5457600080fd5b602083019150836020828501011115610b6c57600080fd5b9250929050565b60008060008060608587031215610b8957600080fd5b843593506020850135610b9b8161099f565b9250604085013567ffffffffffffffff811115610bb757600080fd5b610bc387828801610b2a565b95989497509550505050565b60005b83811015610bea578181015183820152602001610bd2565b83811115610bf9576000848401525b50505050565b60008151808452610c17816020860160208601610bcf565b601f01601f19169290920160200192915050565b6020815260006109986020830184610bff565b60008060408385031215610c5157600080fd5b823591506020830135610b1f8161099f565b600067ffffffffffffffff821115610c7d57610c7d6109d1565b5060051b60200190565b600082601f830112610c9857600080fd5b81356020610ca8610a5f83610c63565b82815260059290921b84018101918181019086841115610cc757600080fd5b8286015b84811015610ce25780358352918301918301610ccb565b509695505050505050565b600080600080600060a08688031215610d0557600080fd5b8535610d108161099f565b94506020860135610d208161099f565b9350604086013567ffffffffffffffff80821115610d3d57600080fd5b610d4989838a01610c87565b94506060880135915080821115610d5f57600080fd5b610d6b89838a01610c87565b93506080880135915080821115610d8157600080fd5b50610d8e88828901610a40565b9150509295509295909350565b600080600060408486031215610db057600080fd5b83359250602084013567ffffffffffffffff811115610dce57600080fd5b610dda86828701610b2a565b9497909650939450505050565b600080600080600060a08688031215610dff57600080fd5b8535610e0a8161099f565b94506020860135610e1a8161099f565b93506040860135925060608601359150608086013567ffffffffffffffff811115610e4457600080fd5b610d8e88828901610a40565b600082601f830112610e6157600080fd5b81516020610e71610a5f83610c63565b82815260059290921b84018101918181019086841115610e9057600080fd5b8286015b84811015610ce25780518352918301918301610e94565b600080600080600060a08688031215610ec357600080fd5b8551610ece8161099f565b6020870151909550610edf8161099f565b604087015190945067ffffffffffffffff80821115610efd57600080fd5b610f0989838a01610e50565b94506060880151915080821115610f1f57600080fd5b610f2b89838a01610e50565b93506080880151915080821115610f4157600080fd5b508601601f81018813610f5357600080fd5b8051610f61610a5f82610a18565b818152896020838501011115610f7657600080fd5b610f87826020830160208601610bcf565b8093505050509295509295909350565b60008060408385031215610faa57600080fd5b823567ffffffffffffffff80821115610fc257600080fd5b610fce86838701610c87565b93506020850135915080821115610fe457600080fd5b50610ff185828601610c87565b9150509250929050565b6000806000806080858703121561101157600080fd5b843567ffffffffffffffff8082111561102957600080fd5b61103588838901610c87565b9550602087013591508082111561104b57600080fd5b61105788838901610c87565b9450604087013591508082111561106d57600080fd5b61107988838901610a40565b9350606087013591508082111561108f57600080fd5b5061109c87828801610a40565b91505092959194509250565b600081518084526020808501945080840160005b838110156110d8578151875295820195908201906001016110bc565b509495945050505050565b6001600160a01b0386811682528516602082015260a06040820181905260009061110f908301866110a8565b828103606084015261112181866110a8565b905082810360808401526111358185610bff565b98975050505050505050565b6001600160a01b0384168152606060208201819052600090611165908301856110a8565b828103604084015261117781856110a8565b9695505050505050565b6001600160a01b03851681526080602082018190526000906111a5908301866110a8565b82810360408401526111b781866110a8565b905082810360608401526111cb8185610bff565b97965050505050505056fea2646970667358221220dd8953d9536ace36c520ff412be33c7691f70c45f3a419f214319a75489df58864736f6c634300080b0033";