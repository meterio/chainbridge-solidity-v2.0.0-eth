/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TestForwarderInterface extends ethers.utils.Interface {
  functions: {
    "execute(bytes,address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "execute",
    values: [BytesLike, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;

  events: {};
}

export class TestForwarder extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestForwarderInterface;

  functions: {
    execute(
      data: BytesLike,
      to: string,
      sender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "execute(bytes,address,address)"(
      data: BytesLike,
      to: string,
      sender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  execute(
    data: BytesLike,
    to: string,
    sender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "execute(bytes,address,address)"(
    data: BytesLike,
    to: string,
    sender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    execute(
      data: BytesLike,
      to: string,
      sender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "execute(bytes,address,address)"(
      data: BytesLike,
      to: string,
      sender: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    execute(
      data: BytesLike,
      to: string,
      sender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "execute(bytes,address,address)"(
      data: BytesLike,
      to: string,
      sender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      data: BytesLike,
      to: string,
      sender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "execute(bytes,address,address)"(
      data: BytesLike,
      to: string,
      sender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
