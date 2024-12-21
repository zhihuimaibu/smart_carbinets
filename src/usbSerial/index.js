import { UsbSerial } from '@/uni_modules/shmily-usb-serial';
import { bccCheck, hex2Bin } from '../utils/lock';

const protocolHeader = '44 5A 4B 4A'
const protocolTail = '4F 56 45 52'
const readFixed = '33'
const writeFixed = '11'
const writeCommand = 'A1'
const writeAllCommand = 'A2'
const readCommand = 'B1'
const usbSerial = new UsbSerial()
let resLockData = '44 5A 4B 4A B1 01 FF FF FF 4F 4F 56 45 5'
// let resLockData = '44 5A 4B 4A B1 01 01 11 A0 4F 56 45 52'
// 连接usb
function connectUsb() {
    usbSerial.connect({
      vendorId: 6790, // 请填写实际值
      productId: 29987, // 请填写实际值
      baudRate: 9600, // 波特率
      dataBits: 8, // 数据位
      stopBits: 1, // 停止位
      parity: 0, // 请填写实际值
    }, ({ success, message}) => {
      console.log('连接设备成功:',message);
      if (success) {
        subscribeMsg();
      }
    });
}

// 订阅消息，收到数据自动执行回调
function subscribeMsg() {
    const { success, message } = usbSerial.subscribe({
      dataType: 'HEX',
      bufferSize: 64
    }, (data) => {
      resLockData = data
    });
    if (success) {
      console.log(message);
    } else {
      console.log(message);
    }
}

//开单个锁
function openLock(boadId, lockId) {
  const bccStr = `${writeCommand} ${boadId} ${lockId} ${writeFixed}`
  const bccHex = bccCheck(bccStr)
  console.log(`${bccStr} ${bccHex}`)
  usbSerial.sendHex(`${protocolHeader} ${bccStr} ${bccHex} ${protocolTail}`)
}

//开全部锁
function openAllLock(boadId) {
  const bccStr = `${writeAllCommand} ${boadId}`
  const bccHex = bccCheck(bccStr)
  console.log(`${bccStr} ${bccHex}`)
  usbSerial.sendHex(`${protocolHeader} ${bccStr} ${bccHex} ${protocolTail}`)
  // console.log(resLockData);
}

//获取锁状态
function getLock(boadId, lockId='00') {
  const bccStr = `${readCommand} ${boadId} ${lockId} ${readFixed}`
  const bccHex = bccCheck(bccStr)
  console.log(`${bccStr} ${bccHex}`)
  usbSerial.sendHex(`${protocolHeader} ${bccStr} ${bccHex} ${protocolTail}`)
  const resArr = resLockData.split(' ')
  if (resArr[5] === readCommand) {
    console.log('不是读命令');
    return
  }
  if (resArr && resArr.length === 14) {
    console.log('读取全部锁的返回值:', resLockData);
    //1 锁 0 开
    //17-24锁的状态
    const locks_17 = hex2Bin(resArr[6])
    //9-16锁的状态
    const locks_9 = hex2Bin(resArr[7])
    //1-8锁的状态
    const locks_1 = hex2Bin(resArr[8])
    return [locks_1, locks_9, locks_17]
  } else {
    console.log('读取单个锁的返回值:', resLockData);
    //11 闭合 00 断开
    const lock = resArr[7]
    return lock
  }
}

connectUsb()

export {
  resLockData,
  connectUsb,
  subscribeMsg,
  openLock,
  openAllLock,
  getLock,
  getAllLock,
}