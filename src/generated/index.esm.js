

export class RawWithdrawalRequest {
  constructor(reader, { validate = true } = {}) {
    this.view = new DataView(assertArrayBuffer(reader));
    if (validate) {
      this.validate();
    }
  }

  getNonce() {
    return new Uint32(this.view.buffer.slice(0, 0 + Uint32.size()), { validate: false });
  }

  getCapacity() {
    return new Uint64(this.view.buffer.slice(0 + Uint32.size(), 0 + Uint32.size() + Uint64.size()), { validate: false });
  }

  getAmount() {
    return new Uint128(this.view.buffer.slice(0 + Uint32.size() + Uint64.size(), 0 + Uint32.size() + Uint64.size() + Uint128.size()), { validate: false });
  }

  getSudtScriptHash() {
    return new Byte32(this.view.buffer.slice(0 + Uint32.size() + Uint64.size() + Uint128.size(), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size()), { validate: false });
  }

  getAccountScriptHash() {
    return new Byte32(this.view.buffer.slice(0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size(), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size()), { validate: false });
  }

  getSellAmount() {
    return new Uint128(this.view.buffer.slice(0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size(), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size()), { validate: false });
  }

  getSellCapacity() {
    return new Uint64(this.view.buffer.slice(0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size(), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size()), { validate: false });
  }

  getOwnerLockHash() {
    return new Byte32(this.view.buffer.slice(0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size(), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size() + Byte32.size()), { validate: false });
  }

  getPaymentLockHash() {
    return new Byte32(this.view.buffer.slice(0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size() + Byte32.size(), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size() + Byte32.size() + Byte32.size()), { validate: false });
  }

  getFee() {
    return new Fee(this.view.buffer.slice(0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size() + Byte32.size() + Byte32.size(), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size() + Byte32.size() + Byte32.size() + Fee.size()), { validate: false });
  }

  validate(compatible = false) {
    assertDataLength(this.view.byteLength, RawWithdrawalRequest.size());
    this.getNonce().validate(compatible);
    this.getCapacity().validate(compatible);
    this.getAmount().validate(compatible);
    this.getSudtScriptHash().validate(compatible);
    this.getAccountScriptHash().validate(compatible);
    this.getSellAmount().validate(compatible);
    this.getSellCapacity().validate(compatible);
    this.getOwnerLockHash().validate(compatible);
    this.getPaymentLockHash().validate(compatible);
    this.getFee().validate(compatible);
  }
  static size() {
    return 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size() + Byte32.size() + Byte32.size() + Fee.size();
  }
}

export function SerializeRawWithdrawalRequest(value) {
  const array = new Uint8Array(0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size() + Byte32.size() + Byte32.size() + Fee.size());
  const view = new DataView(array.buffer);
  array.set(new Uint8Array(SerializeUint32(value.nonce)), 0);
  array.set(new Uint8Array(SerializeUint64(value.capacity)), 0 + Uint32.size());
  array.set(new Uint8Array(SerializeUint128(value.amount)), 0 + Uint32.size() + Uint64.size());
  array.set(new Uint8Array(SerializeByte32(value.sudt_script_hash)), 0 + Uint32.size() + Uint64.size() + Uint128.size());
  array.set(new Uint8Array(SerializeByte32(value.account_script_hash)), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size());
  array.set(new Uint8Array(SerializeUint128(value.sell_amount)), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size());
  array.set(new Uint8Array(SerializeUint64(value.sell_capacity)), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size());
  array.set(new Uint8Array(SerializeByte32(value.owner_lock_hash)), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size());
  array.set(new Uint8Array(SerializeByte32(value.payment_lock_hash)), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size() + Byte32.size());
  array.set(new Uint8Array(SerializeFee(value.fee)), 0 + Uint32.size() + Uint64.size() + Uint128.size() + Byte32.size() + Byte32.size() + Uint128.size() + Uint64.size() + Byte32.size() + Byte32.size());
  return array.buffer;
}

export function createRawWithdrawalRequestPackable(payload) {
  return  {
    unpack: (value) =>{
      const rawWithdrawalRequest = new RawWithdrawalRequest(value);
      const fee = new Fee(rawWithdrawalRequest.getFee());
      return {
        nonce: payload.nonce.denormalize(rawWithdrawalRequest.getNonce().raw()),
        capacity: payload.capacity.denormalize(rawWithdrawalRequest.getCapacity.raw()),
        fee: {
          sudt_id: payload.fee.sudt_id.denormalize(fee.getSudtId.raw()),
          amount: payload.fee.amount.denormalize(fee.getAmount.raw()),
        }
      }
    },
    pack: (unpacked) =>  {
      return serializeWithdrawalRequest({
        nounce: payload.nonce.normalize(unpacked.nonce),
        capacity: payload.capacity.normalize(unpacked.capacity),
        fee: {
          sudt_id: payload.fee.sudt_id.normalize(unpacked.fee.sudt_id),
          amount: payload.fee.amount.normalize(unpacked.fee.amount),
        }
      })
    }
  }
}

export class Fee {
  constructor(reader, { validate = true } = {}) {
    this.view = new DataView(assertArrayBuffer(reader));
    if (validate) {
      this.validate();
    }
  }

  getSudtId() {
    return new Uint32(this.view.buffer.slice(0, 0 + Uint32.size()), { validate: false });
  }

  getAmount() {
    return new Uint128(this.view.buffer.slice(0 + Uint32.size(), 0 + Uint32.size() + Uint128.size()), { validate: false });
  }

  validate(compatible = false) {
    assertDataLength(this.view.byteLength, Fee.size());
    this.getSudtId().validate(compatible);
    this.getAmount().validate(compatible);
  }
  static size() {
    return 0 + Uint32.size() + Uint128.size();
  }
}

export function SerializeFee(value) {
  const array = new Uint8Array(0 + Uint32.size() + Uint128.size());
  const view = new DataView(array.buffer);
  array.set(new Uint8Array(SerializeUint32(value.sudt_id)), 0);
  array.set(new Uint8Array(SerializeUint128(value.amount)), 0 + Uint32.size());
  return array.buffer;
}

export function createFeePackable(payload) {
  return  {
    unpack: (value) =>{
      const fee = new Fee(value);
      return {
        sudt_id: payload.sudt_id.denormalize(fee.getSudtId.raw()),
        amount: payload.amount.denormalize(fee.getAmount.raw()),
      }
    },
    pack: (unpacked) =>  {
      return serializeWithdrawalRequest({
        sudt_id: payload.sudt_id.normalize(unpacked.sudt_id),
        amount: payload.amount.normalize(unpacked.amount),
      })
    }
  }
}

/* 以下全部都是 primitive 的类型 */
export class Uint32 {
  constructor(reader, { validate = true } = {}) {
    this.view = new DataView(assertArrayBuffer(reader));
    if (validate) {
      this.validate();
    }
  }

  validate(compatible = false) {
    assertDataLength(this.view.byteLength, 4);
  }

  indexAt(i) {
    return this.view.getUint8(i);
  }

  raw() {
    return this.view.buffer;
  }

  toBigEndianUint32() {
    return this.view.getUint32(0, false);
  }

  toLittleEndianUint32() {
    return this.view.getUint32(0, true);
  }

  static size() {
    return 4;
  }
}

export function SerializeUint32(value) {
  const buffer = assertArrayBuffer(value);
  assertDataLength(buffer.byteLength, 4);
  return buffer;
}

export class Uint64 {
  constructor(reader, { validate = true } = {}) {
    this.view = new DataView(assertArrayBuffer(reader));
    if (validate) {
      this.validate();
    }
  }

  validate(compatible = false) {
    assertDataLength(this.view.byteLength, 8);
  }

  indexAt(i) {
    return this.view.getUint8(i);
  }

  raw() {
    return this.view.buffer;
  }

  toBigEndianBigUint64() {
    return this.view.getBigUint64(0, false);
  }

  toLittleEndianBigUint64() {
    return this.view.getBigUint64(0, true);
  }

  static size() {
    return 8;
  }
}

export function SerializeUint64(value) {
  const buffer = assertArrayBuffer(value);
  assertDataLength(buffer.byteLength, 8);
  return buffer;
}

export class Uint128 {
  constructor(reader, { validate = true } = {}) {
    this.view = new DataView(assertArrayBuffer(reader));
    if (validate) {
      this.validate();
    }
  }

  validate(compatible = false) {
    assertDataLength(this.view.byteLength, 16);
  }

  indexAt(i) {
    return this.view.getUint8(i);
  }

  raw() {
    return this.view.buffer;
  }

  static size() {
    return 16;
  }
}

export function SerializeUint128(value) {
  const buffer = assertArrayBuffer(value);
  assertDataLength(buffer.byteLength, 16);
  return buffer;
}
