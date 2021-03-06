/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CentrifugeAsset } from "../CentrifugeAsset";

export class CentrifugeAsset__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CentrifugeAsset> {
    return super.deploy(overrides || {}) as Promise<CentrifugeAsset>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CentrifugeAsset {
    return super.attach(address) as CentrifugeAsset;
  }
  connect(signer: Signer): CentrifugeAsset__factory {
    return super.connect(signer) as CentrifugeAsset__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CentrifugeAsset {
    return new Contract(address, _abi, signerOrProvider) as CentrifugeAsset;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "asset",
        type: "bytes32",
      },
    ],
    name: "AssetStored",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "_assetsStored",
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
        name: "asset",
        type: "bytes32",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061017c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063654cf88c1461003b57806396add60014610050575b600080fd5b61004e61004936600461012d565b610087565b005b61007361005e36600461012d565b60006020819052908152604090205460ff1681565b604051901515815260200160405180910390f35b60008181526020819052604090205460ff16156100ea5760405162461bcd60e51b815260206004820152601760248201527f617373657420697320616c72656164792073746f726564000000000000000000604482015260640160405180910390fd5b600081815260208190526040808220805460ff191660011790555182917f08ae553713effae7116be03743b167b8b803449ee8fb912c2ec43dc2c824f53591a250565b60006020828403121561013f57600080fd5b503591905056fea2646970667358221220d9c3bfdd0ae6574112fa88a309b4d6e4c2f9b3ccf4a8850cfa2fe4b044559a2b64736f6c634300080b0033";
