import { BIish } from "@ckb-lumos/bi";
import { BI } from "@ckb-lumos/lumos";

export function BIToUint32Buffer(num: BIish, bigEndian?: boolean): ArrayBuffer {
  if(bigEndian) {
    return BIToUint32BEBuffer(BI.from(num));
  }
  return BIToUint32LEBuffer(BI.from(num));
}

/* 转换为大端数buffer */
function BIToUint32BEBuffer(num: BI): ArrayBuffer {
  return new Uint32Array(num.toNumber());
}
/* 转换为小端数buffer */
function BIToUint32LEBuffer(num: BI): ArrayBuffer {
  return new Uint32Array(num.toNumber());
}

export function Uint32BufferToBI(buf: ArrayBuffer, bigEndian?: boolean): BI {
  if(bigEndian) {
    return Uint32BEBufferToBI(buf);
  }
  return Uint32LEBufferToBI(buf);
}

/* 转换大端数buffer */
function Uint32BEBufferToBI(buf: ArrayBuffer): BI {
  const uint8Array = new Uint8Array(buf);
  return BI.from(uint8Array);
}
/* 转换小端数buffer */
function Uint32LEBufferToBI(buf: ArrayBuffer): BI {
  const uint8Array = new Uint8Array(buf);
  return BI.from(uint8Array);
}

/* mock 64 位的大数转换函数 */
export function BIToUint64Buffer(num: BIish, bigEndian?: boolean): ArrayBuffer { return new ArrayBuffer(0)}
export function Uint64BufferToBI(buf: ArrayBuffer, bigEndian?: boolean): BI { return BI.from(0)}

/* mock 128 位的大数转换函数 */
export function BIToUint128Buffer(num: BIish, bigEndian?: boolean): ArrayBuffer { return new ArrayBuffer(0)}
export function Uint128BufferToBI(buf: ArrayBuffer, bigEndian?: boolean): BI { return BI.from(0)}