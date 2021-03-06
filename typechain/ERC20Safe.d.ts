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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ERC20SafeInterface extends ethers.utils.Interface {
  functions: {
    "ETHReserve()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ETHReserve",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "ETHReserve", data: BytesLike): Result;

  events: {};
}

export class ERC20Safe extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ERC20SafeInterface;

  functions: {
    ETHReserve(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "ETHReserve()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  ETHReserve(overrides?: CallOverrides): Promise<BigNumber>;

  "ETHReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ETHReserve(overrides?: CallOverrides): Promise<BigNumber>;

    "ETHReserve()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    ETHReserve(overrides?: CallOverrides): Promise<BigNumber>;

    "ETHReserve()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ETHReserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ETHReserve()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
