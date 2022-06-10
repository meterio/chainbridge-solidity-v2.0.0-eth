/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20HandlerUpgradeable } from "../ERC20HandlerUpgradeable";

export class ERC20HandlerUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC20HandlerUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC20HandlerUpgradeable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20HandlerUpgradeable {
    return super.attach(address) as ERC20HandlerUpgradeable;
  }
  connect(signer: Signer): ERC20HandlerUpgradeable__factory {
    return super.connect(signer) as ERC20HandlerUpgradeable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20HandlerUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20HandlerUpgradeable;
  }
}

const _abi = [
  {
    inputs: [],
    name: "ProvidedTokenAddressIsNotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "ETHReserve",
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
        name: "bridgeAddress",
        type: "address",
      },
    ],
    name: "initialize",
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
  {
    inputs: [],
    name: "wtoken",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611243806100206000396000f3fe6080604052600436106100f35760003560e01c80639c0591c81161008a578063c4d66de811610059578063c4d66de8146102f3578063c8ba6c8714610313578063ddafda461461034e578063e248cff21461036457600080fd5b80639c0591c814610273578063ab5c7bf114610293578063b07e54bb146102b3578063b8fa3736146102d357600080fd5b80632129da19116100c65780632129da19146101cd578063318c136e146101ed5780636a70d081146102135780637f79bea81461024357600080fd5b8063045dff97146100f857806307b7ed991461013d5780630968f2641461015f5780630a6d55d81461017f575b600080fd5b34801561010457600080fd5b50610128610113366004610dc4565b60066020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561014957600080fd5b5061015d610158366004610dc4565b610384565b005b34801561016b57600080fd5b5061015d61017a366004610dfe565b610398565b34801561018b57600080fd5b506101b561019a366004610eaf565b6002602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610134565b3480156101d957600080fd5b5061015d6101e8366004610ed6565b6103d1565b3480156101f957600080fd5b506000546101b5906201000090046001600160a01b031681565b34801561021f57600080fd5b5061012861022e366004610dc4565b60056020526000908152604090205460ff1681565b34801561024f57600080fd5b5061012861025e366004610dc4565b60046020526000908152604090205460ff1681565b34801561027f57600080fd5b506001546101b5906001600160a01b031681565b34801561029f57600080fd5b5061015d6102ae366004610dfe565b610404565b6102c66102c1366004610f58565b610437565b6040516101349190610fe0565b3480156102df57600080fd5b5061015d6102ee366004611013565b61051b565b3480156102ff57600080fd5b5061015d61030e366004610dc4565b610576565b34801561031f57600080fd5b5061034061032e366004610dc4565b60036020526000908152604090205481565b604051908152602001610134565b34801561035a57600080fd5b5061034060075481565b34801561037057600080fd5b5061015d61037f366004611038565b6105fa565b61038c610773565b610395816107d5565b50565b6103a0610773565b6000806000838060200190518101906103b99190611084565b919450925090506103cb83838361086d565b50505050565b6103d9610773565b6001600160a01b03919091166000908152600660205260409020805460ff1916911515919091179055565b61040c610773565b6000808280602001905181019061042391906110c7565b90925090506104328282610879565b505050565b6060610441610773565b600061044f83850185610eaf565b6000878152600260209081526040808320546001600160a01b03168084526004909252909120549192509060ff1661049a57604051631556d7e160e11b815260040160405180910390fd5b6001600160a01b03811660009081526005602052604090205460ff16156104cb576104c68187846108d4565b610501565b6001600160a01b03811660009081526006602052604090205460ff16156104f5576104c682610936565b610501818730856109e1565b505060408051600081526020810190915295945050505050565b610523610773565b600082815260026020908152604080832080546001600160a01b0319166001600160a01b03861690811790915583526003825280832085905560049091529020805460ff191660011790555050565b5050565b600054610100900460ff166105915760005460ff1615610595565b303b155b6105ba5760405162461bcd60e51b81526004016105b1906110f5565b60405180910390fd5b600054610100900460ff161580156105dc576000805461ffff19166101011790555b6105e5826109f5565b8015610572576000805461ff00191690555050565b610602610773565b600080606061061384860186611143565b909350915084604085610626858361117b565b9261063393929190611193565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052508a815260026020908152604080832054828801516001600160a01b039091168085526004909352922054959650909490935060ff1691506106f990505760405162461bcd60e51b815260206004820152602860248201527f70726f766964656420746f6b656e41646472657373206973206e6f74207768696044820152671d195b1a5cdd195960c21b60648201526084016105b1565b6001600160a01b03811660009081526005602052604090205460ff161561072d57610728818360601c87610a89565b610769565b6001600160a01b03811660009081526006602052604090205460ff161561075b576107288260601c86610879565b610769818360601c8761086d565b5050505050505050565b6000546201000090046001600160a01b031633146107d35760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206d7573742062652062726964676520636f6e7472616374000060448201526064016105b1565b565b6001600160a01b03811660009081526004602052604090205460ff166108495760405162461bcd60e51b8152602060048201526024808201527f70726f766964656420636f6e7472616374206973206e6f742077686974656c696044820152631cdd195960e21b60648201526084016105b1565b6001600160a01b03166000908152600560205260409020805460ff19166001179055565b826103cb818484610ac1565b476108848383610b24565b61088e82826111bd565b47146104325760405162461bcd60e51b815260206004820152601560248201527445524332303a207769746864726177206661696c2160581b60448201526064016105b1565b60405163079cc67960e41b81526001600160a01b038381166004830152602482018390528491908216906379cc6790906044015b600060405180830381600087803b15801561092257600080fd5b505af1158015610769573d6000803e3d6000fd5b3481146109855760405162461bcd60e51b815260206004820152601d60248201527f6d73672e76616c756520616e642064617461206d69736d61746368656400000060448201526064016105b1565b80600754610993919061117b565b4710156109da5760405162461bcd60e51b815260206004820152601560248201527411551214995cd95c9d99481b5a5cdb585d18da1959605a1b60448201526064016105b1565b5047600755565b836109ee81858585610c25565b5050505050565b600054610100900460ff16610a105760005460ff1615610a14565b303b155b610a305760405162461bcd60e51b81526004016105b1906110f5565b600054610100900460ff16158015610a52576000805461ffff19166101011790555b6000805462010000600160b01b031916620100006001600160a01b038516021790558015610572576000805461ff00191690555050565b6040516340c10f1960e01b81526001600160a01b038381166004830152602482018390528491908216906340c10f1990604401610908565b6040516001600160a01b03831660248201526044810182905261043290849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610c5d565b600080836001600160a01b03168360405160006040518083038185875af1925050503d8060008114610b72576040519150601f19603f3d011682016040523d82523d6000602084013e610b77565b606091505b509150915081610bbe5760405162461bcd60e51b8152602060048201526012602482015271115490cc8c0e8818d85b1b0819985a5b195960721b60448201526064016105b1565b8051156103cb5780806020019051810190610bd991906111d4565b6103cb5760405162461bcd60e51b815260206004820181905260248201527f45524332303a206f7065726174696f6e20646964206e6f74207375636365656460448201526064016105b1565b6040516001600160a01b03808516602483015283166044820152606481018290526103cb9085906323b872dd60e01b90608401610aed565b813b80610ca45760405162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881b9bdd08184818dbdb9d1c9858dd605a1b60448201526064016105b1565b600080846001600160a01b031684604051610cbf91906111f1565b6000604051808303816000865af19150503d8060008114610cfc576040519150601f19603f3d011682016040523d82523d6000602084013e610d01565b606091505b509150915081610d485760405162461bcd60e51b8152602060048201526012602482015271115490cc8c0e8818d85b1b0819985a5b195960721b60448201526064016105b1565b8051156109ee5780806020019051810190610d6391906111d4565b6109ee5760405162461bcd60e51b815260206004820181905260248201527f45524332303a206f7065726174696f6e20646964206e6f74207375636365656460448201526064016105b1565b6001600160a01b038116811461039557600080fd5b600060208284031215610dd657600080fd5b8135610de181610daf565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610e1057600080fd5b813567ffffffffffffffff80821115610e2857600080fd5b818401915084601f830112610e3c57600080fd5b813581811115610e4e57610e4e610de8565b604051601f8201601f19908116603f01168101908382118183101715610e7657610e76610de8565b81604052828152876020848701011115610e8f57600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208284031215610ec157600080fd5b5035919050565b801515811461039557600080fd5b60008060408385031215610ee957600080fd5b8235610ef481610daf565b91506020830135610f0481610ec8565b809150509250929050565b60008083601f840112610f2157600080fd5b50813567ffffffffffffffff811115610f3957600080fd5b602083019150836020828501011115610f5157600080fd5b9250929050565b60008060008060608587031215610f6e57600080fd5b843593506020850135610f8081610daf565b9250604085013567ffffffffffffffff811115610f9c57600080fd5b610fa887828801610f0f565b95989497509550505050565b60005b83811015610fcf578181015183820152602001610fb7565b838111156103cb5750506000910152565b6020815260008251806020840152610fff816040850160208701610fb4565b601f01601f19169190910160400192915050565b6000806040838503121561102657600080fd5b823591506020830135610f0481610daf565b60008060006040848603121561104d57600080fd5b83359250602084013567ffffffffffffffff81111561106b57600080fd5b61107786828701610f0f565b9497909650939450505050565b60008060006060848603121561109957600080fd5b83516110a481610daf565b60208501519093506110b581610daf565b80925050604084015190509250925092565b600080604083850312156110da57600080fd5b82516110e581610daf565b6020939093015192949293505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6000806040838503121561115657600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b6000821982111561118e5761118e611165565b500190565b600080858511156111a357600080fd5b838611156111b057600080fd5b5050820193919092039150565b6000828210156111cf576111cf611165565b500390565b6000602082840312156111e657600080fd5b8151610de181610ec8565b60008251611203818460208701610fb4565b919091019291505056fea2646970667358221220ba45e8f05a65f5639b20156ced70db4aa1ba9df94a91e243ab559c89b79eb99064736f6c634300080b0033";