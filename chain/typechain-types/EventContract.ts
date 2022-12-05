/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface EventContractInterface extends utils.Interface {
  functions: {
    "buyTicket()": FunctionFragment;
    "createEvent(string,uint256,uint256)": FunctionFragment;
    "getAddress()": FunctionFragment;
    "getBalance()": FunctionFragment;
    "getEntry()": FunctionFragment;
    "returnTicket()": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyTicket"
      | "createEvent"
      | "getAddress"
      | "getBalance"
      | "getEntry"
      | "returnTicket"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "buyTicket", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createEvent",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getEntry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "returnTicket",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buyTicket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getEntry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "returnTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export interface EventContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    buyTicket(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createEvent(
      name: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAddress(overrides?: CallOverrides): Promise<[string]>;

    getBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEntry(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnTicket(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  buyTicket(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createEvent(
    name: PromiseOrValue<string>,
    price: PromiseOrValue<BigNumberish>,
    quantity: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAddress(overrides?: CallOverrides): Promise<string>;

  getBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getEntry(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnTicket(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyTicket(overrides?: CallOverrides): Promise<void>;

    createEvent(
      name: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAddress(overrides?: CallOverrides): Promise<string>;

    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getEntry(overrides?: CallOverrides): Promise<boolean>;

    returnTicket(overrides?: CallOverrides): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    buyTicket(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createEvent(
      name: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getEntry(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnTicket(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTicket(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createEvent(
      name: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEntry(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnTicket(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
