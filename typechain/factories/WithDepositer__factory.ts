/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WithDepositer } from "../WithDepositer";

export class WithDepositer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<WithDepositer> {
    return super.deploy(overrides || {}) as Promise<WithDepositer>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WithDepositer {
    return super.attach(address) as WithDepositer;
  }
  connect(signer: Signer): WithDepositer__factory {
    return super.connect(signer) as WithDepositer__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WithDepositer {
    return new Contract(address, _abi, signerOrProvider) as WithDepositer;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "argumentOne",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "argumentTwo",
        type: "uint256",
      },
    ],
    name: "WithDepositerCalled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "argumentOne",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "argumentTwo",
        type: "uint256",
      },
    ],
    name: "withDepositer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060f08061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80630a357c4f14602d575b600080fd5b603c60383660046084565b603e565b005b604080516001600160a01b0384168152602081018390527f0c190bb7953fe744192f379d4b36b025584bb5f386755d164648a99b8ff9e5bb910160405180910390a15050565b60008060408385031215609657600080fd5b82356001600160a01b038116811460ac57600080fd5b94602093909301359350505056fea26469706673582212200e9c4d63f038143b5f87bb5dfa45981f4071f09a0a951ccbb90867edac1b39cd64736f6c634300080b0033";
