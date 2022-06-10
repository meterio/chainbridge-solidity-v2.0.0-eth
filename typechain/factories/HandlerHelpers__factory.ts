/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { HandlerHelpers } from "../HandlerHelpers";

export class HandlerHelpers__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    bridgeAddress: string,
    overrides?: Overrides
  ): Promise<HandlerHelpers> {
    return super.deploy(
      bridgeAddress,
      overrides || {}
    ) as Promise<HandlerHelpers>;
  }
  getDeployTransaction(
    bridgeAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(bridgeAddress, overrides || {});
  }
  attach(address: string): HandlerHelpers {
    return super.attach(address) as HandlerHelpers;
  }
  connect(signer: Signer): HandlerHelpers__factory {
    return super.connect(signer) as HandlerHelpers__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HandlerHelpers {
    return new Contract(address, _abi, signerOrProvider) as HandlerHelpers;
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161060c38038061060c83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161057a6100926000396000818161016501526102b2015261057a6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063318c136e11610071578063318c136e146101605780636a70d081146101875780637f79bea8146101aa578063ab5c7bf1146100fb578063b8fa3736146101cd578063c8ba6c87146101e057600080fd5b8063045dff97146100ae57806307b7ed99146100e65780630968f264146100fb5780630a6d55d81461010c5780632129da191461014d575b600080fd5b6100d16100bc3660046103da565b60046020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100f96100f43660046103da565b61020e565b005b6100f9610109366004610412565b50565b61013561011a3660046104c3565b6000602081905290815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016100dd565b6100f961015b3660046104dc565b61021f565b6101357f000000000000000000000000000000000000000000000000000000000000000081565b6100d16101953660046103da565b60036020526000908152604090205460ff1681565b6100d16101b83660046103da565b60026020526000908152604090205460ff1681565b6100f96101db366004610518565b610252565b6102006101ee3660046103da565b60016020526000908152604090205481565b6040519081526020016100dd565b6102166102a7565b61010981610326565b6102276102a7565b6001600160a01b03919091166000908152600460205260409020805460ff1916911515919091179055565b61025a6102a7565b60008281526020818152604080832080546001600160a01b0319166001600160a01b039590951694851790559282526001808252838320949094556002905220805460ff19169091179055565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103245760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206d7573742062652062726964676520636f6e7472616374000060448201526064015b60405180910390fd5b565b6001600160a01b03811660009081526002602052604090205460ff1661039a5760405162461bcd60e51b8152602060048201526024808201527f70726f766964656420636f6e7472616374206973206e6f742077686974656c696044820152631cdd195960e21b606482015260840161031b565b6001600160a01b03166000908152600360205260409020805460ff19166001179055565b80356001600160a01b03811681146103d557600080fd5b919050565b6000602082840312156103ec57600080fd5b6103f5826103be565b9392505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561042457600080fd5b813567ffffffffffffffff8082111561043c57600080fd5b818401915084601f83011261045057600080fd5b813581811115610462576104626103fc565b604051601f8201601f19908116603f0116810190838211818310171561048a5761048a6103fc565b816040528281528760208487010111156104a357600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000602082840312156104d557600080fd5b5035919050565b600080604083850312156104ef57600080fd5b6104f8836103be565b91506020830135801515811461050d57600080fd5b809150509250929050565b6000806040838503121561052b57600080fd5b8235915061053b602084016103be565b9050925092905056fea2646970667358221220e201064f4d53c75182d3c8407b2e4bf0529692869e515dcda17a41515811573a64736f6c634300080b0033";