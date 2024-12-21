<template>
  <view>
    <up-button @click="handleSendMsg">发送消息</up-button>
    <up-button @click="handleOpenLock">开单个锁</up-button>
    <up-button @click="handleOpenAllLock">开全部锁</up-button>
    <up-button @click="handleGetLock">读单个锁</up-button>
    <up-button @click="handleGetAllLock">读全部锁</up-button>
  </view>
</template>

<script>
  import { bccCheck } from '../../utils/lock';
  import { subscribeMsg, connectUsb, openAllLock, openLock, getLock } from '@/usbSerial/index.js'

  export default {
    data() {
      return {
        usbSerial: null,
        usbDevice: null,
      }
    },
    methods: {
      handleSendMsg() {
        bccCheck('a1 01 0c 11')
        // this.$usbSerial.sendHex('44 5A 4B 4A A1 01 12 11 A3 4F 56 45 52');
      },
      handleOpenLock() {
        openLock('01', '01')
      },
      handleOpenAllLock() {
        openAllLock('01')
      },
      handleGetLock() {
        const lock = getLock('01', '01')
        console.log(lock);
      },
      handleGetAllLock() {
        const locks = getLock('01', '00')
        locks.forEach(lock => {
          
        })
        console.log(locks);
      }
    },
    created() {
    }
  }
</script>

<style>

</style>
