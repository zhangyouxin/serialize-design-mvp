import { BI } from "@ckb-lumos/lumos";

/* 转换为大端数buffer */
export function BIToUint32BEBuffer(num: BI): ArrayBuffer {
  return new Uint32Array(num.toNumber());
}
 /* 转换为小端数buffer */
export function BIToUint32LEBuffer(num: BI): ArrayBuffer {
  return new Uint32Array(num.toNumber());
}
/* 转换大端数buffer */
export function Uint32BEBufferToBI(buf: ArrayBuffer): BI {
  const uint8Array = new Uint8Array(buf);
  return BI.from(uint8Array);
}
/* 转换小端数buffer */
export function Uint32LEBufferToBI(buf: ArrayBuffer): BI {
  const uint8Array = new Uint8Array(buf);
  return BI.from(uint8Array);
}

/* mock 64 位的大数转换函数 */
/* 转换为大端数buffer */
export function BIToUint64BEBuffer(num: BI): ArrayBuffer {
  return new Uint8Array(num.toNumber());
}
 /* 转换为小端数buffer */
export function BIToUint64LEBuffer(num: BI): ArrayBuffer {
  return new Uint8Array(num.toNumber());
}
/* 转换大端数buffer */
export function Uint64BEBufferToBI(buf: ArrayBuffer): BI {
  const uint8Array = new Uint8Array(buf);
  return BI.from(uint8Array);
}
/* 转换小端数buffer */
export function Uint64LEBufferToBI(buf: ArrayBuffer): BI {
  const uint8Array = new Uint8Array(buf);
  return BI.from(uint8Array);
}

/* mock 128 位的大数转换函数 */
/* 转换为大端数buffer */
export function BIToUint128BEBuffer(num: BI): ArrayBuffer {
  return new Uint8Array(num.toNumber());
}
 /* 转换为小端数buffer */
export function BIToUint128LEBuffer(num: BI): ArrayBuffer {
  return new Uint8Array(num.toNumber());
}
/* 转换大端数buffer */
export function Uint128BEBufferToBI(buf: ArrayBuffer): BI {
  const uint8Array = new Uint8Array(buf);
  return BI.from(uint8Array);
}
/* 转换小端数buffer */
export function Uint128LEBufferToBI(buf: ArrayBuffer): BI {
  const uint8Array = new Uint8Array(buf);
  return BI.from(uint8Array);
}
