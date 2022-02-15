import { createRawWithdrawalRequestPackable } from "./generated/index";
import  * as NumberConvertor  from './NumberConvertor';
import { BI } from '@ckb-lumos/lumos'

// 第 3 步，用户需要在这里实现 Normalizer，并且传给 codegen 生成的函数创建 packable 实例
// NumberConvertor 需要由该 issue 开发实现
// NumberConvertor 是一个工具包，可以提供 Uint32 <--> ArrayBuffer, Uint32 <--> ArrayBuffer, Uint64 <--> ArrayBuffer, Uint128 <--> ArrayBuffer, Uint256 <--> ArrayBuffer 的转换
const withdrawalReqeustPackable = createRawWithdrawalRequestPackable({ 
  nonce: {
    normalize: (value: BI) => NumberConvertor.BIToUint32LEBuffer(value), // dummy
    denormalize:(buf: ArrayBuffer) => NumberConvertor.Uint32LEBufferToBI(buf), // dummy
  },
  capacity: {
    normalize: (value: BI) => NumberConvertor.BIToUint64LEBuffer(value), // dummy
    denormalize:(buf: ArrayBuffer) => NumberConvertor.Uint64LEBufferToBI(buf), // dummy
  },
  fee: {
    sudt_id: {
      normalize: (value: BI) => NumberConvertor.BIToUint32LEBuffer(value), // dummy
      denormalize:(buf: ArrayBuffer) => NumberConvertor.Uint32LEBufferToBI(buf), // dummy
    },
    amount: {
      normalize: (value: BI) => NumberConvertor.BIToUint128LEBuffer(value), // dummy
      denormalize:(buf: ArrayBuffer) => NumberConvertor.Uint128LEBufferToBI(buf), // dummy
    },
  }
})
// 第 4 步，序列化
withdrawalReqeustPackable.pack({
  nonce: BI.from('1'),
  capacity: BI.from("0x22"),
  fee: {
    sudt_id: BI.from(0),
    amount: BI.from(0),
  }
})
// 第 4 步，反序列化
withdrawalReqeustPackable.unpack(new ArrayBuffer(0)).fee.amount