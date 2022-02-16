export interface CastToArrayBuffer {
  toArrayBuffer(): ArrayBuffer;
}

export type CanCastToArrayBuffer = ArrayBuffer | CastToArrayBuffer;

export interface CreateOptions {
  validate?: boolean;
}

interface Normalizer<T, U = unknown> {
  normalize: (obj: U) => T;
  denormalize: (value: T) => U;
}

export function SerializeFee(value: object): ArrayBuffer;
export class Fee {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  static size(): number;
  getSudtId(): Uint32;
  getAmount(): Uint128;
}
interface FeeNormalizerType {
  sudt_id: Normalizer<Uint32>;
  amount: Normalizer<Uint128>;
}
export function createFeePackable<T extends FeeNormalizerType>(
  payload: T,
): {
  pack: (value: {
    sudt_id: ReturnType<T['sudt_id']['denormalize']>;
    amount: ReturnType<T['amount']['denormalize']>;
  }) => ArrayBuffer;
  unpack: (buf: ArrayBuffer) => {
    sudt_id: ReturnType<T['sudt_id']['denormalize']>;
    amount: ReturnType<T['amount']['denormalize']>;
  };
};

export function SerializeRawWithdrawalRequest(value: object): ArrayBuffer;
export class RawWithdrawalRequest {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  static size(): number;
  getNonce(): Uint32;
  getCapacity(): Uint64;
  getFee(): Fee;
}
interface WithdrawalNormalizerType {
  nonce: Normalizer<Uint32>;
  capacity: Normalizer<Uint64>;
  fee: {
    sudt_id: Normalizer<Uint32>;
    amount: Normalizer<Uint128>;
  };
}
export function createRawWithdrawalRequestPackable<
  T extends WithdrawalNormalizerType,
>(
  payload: T,
): {
  pack: (value: {
    nonce: ReturnType<T['nonce']['denormalize']>;
    capacity: ReturnType<T['capacity']['denormalize']>;
    fee: {
      sudt_id: ReturnType<T['fee']['sudt_id']['denormalize']>;
      amount: ReturnType<T['fee']['amount']['denormalize']>;
    };
  }) => ArrayBuffer;
  unpack: (buf: ArrayBuffer) => {
    nonce: ReturnType<T['nonce']['denormalize']>;
    capacity: ReturnType<T['capacity']['denormalize']>;
    fee: {
      sudt_id: ReturnType<T['fee']['sudt_id']['denormalize']>;
      amount: ReturnType<T['fee']['amount']['denormalize']>;
    };
  };
};

/* 以下全部都是 primitive 的类型 */
export function SerializeUint32(value: CanCastToArrayBuffer): ArrayBuffer;
export class Uint32 {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  toBigEndianUint32(): number;
  toLittleEndianUint32(): number;
  static size(): number;
}

export function SerializeUint64(value: CanCastToArrayBuffer): ArrayBuffer;
export class Uint64 {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  toBigEndianBigUint64(): bigint;
  toLittleEndianBigUint64(): bigint;
  static size(): number;
}

export function SerializeUint128(value: CanCastToArrayBuffer): ArrayBuffer;
export class Uint128 {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}
