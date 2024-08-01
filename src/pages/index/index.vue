<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="">
      <button class="title" @click="handleClick">跳转到store页</button>
      <button class="title" @click="handleLogin">跳转到登录页</button>
      <up-button type="primary" text="Uview-Plus好使"></up-button>
      <button @click="handleSend">发起请求</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
      };
    },
    computed: {},
    onLoad() {},
    methods: {
      handleClick() {
        this.$router.push({
          url: '/pages/store/store',
        });
      },
      handleLogin() {
        this.$router.push({
          url: '/pages/login/login',
        });
      },
      handleSend() {
        uni.request({
          url: 'http://prexcgzjy.yzxsaas.com/api/zwgrid/v1/user/login',
          // url: 'https://prescrm.yzxsaas.com/api/sys/v1/user/login',
          method: 'POST',
          data: {
            'phone': '15600089838',
            'password': '654321',
          },
          // data: {
          //   'userPhone': '18236696587',
          //   'userPassword': '123456',
          //   'platformCode': 'ym_scrm',
          // },
          header: {
            'Login-Source': 'xc_pc', //自定义请求头信息
          },
        }).then(res => {
          console.log('响应值:' + res);
        }).catch(e => {
          console.log('错误码:' + e.status);
        });
      },
    },
  };
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>