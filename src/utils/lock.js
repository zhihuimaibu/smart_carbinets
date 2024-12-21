export function bccCheck(str) {
  const hexStrs = str.split(' ')
  let xorDecimal = hexStrs.reduce((pre, cur) => {
    return pre ^ parseInt(cur, 16)
  }, 0)
  console.log('十进制的bcc校验码:', xorDecimal);
  const bccHex = Dec2Hex(xorDecimal, 10, 16)
  console.log('二进制的bcc校验码:', bccHex);
  return bccHex
}

export function hex2Bin(hex) {
  return baseConvertion(hex, 16, 2)
}

export function Dec2Hex(dec) {
  return baseConvertion(dec, 10, 16)
}

function baseConvertion(num, from, to) {
  return parseInt(num, from).toString(to)
}