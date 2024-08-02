<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="">
      <button class="title" @click="handleClick">跳转到store页</button>
      <button class="title" @click="handleLogin">跳转到登录页</button>
      <up-button type="primary" text="Uview-Plus好使"></up-button>
      <button @click="handleSend">发起请求</button>
      <button @click="handleChooseImage">上传文件</button>
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
        this.$request.post('http://prexcgzjy.yzxsaas.com/api/zwgrid/v1/user/login', {
          // 'phone': '15610089838',
          // 'password': '6543218',
          'phone': '1823669658744',
          'password': '123456787888',
        }).then(res => {
          console.log('响应值:' + res);
        }).catch(e => {
          console.log('错误码:' + e.status);
        });
      },
      handleChooseImage() {
        uni.chooseImage({
          success: (res) => {
            console.log(res);
            const tempFilePath = res.tempFilePaths;
            this.$request.uploadFile('https://prescrm.yzxsaas.com/api/fileUpload/v1/file/upload', tempFilePath[0])
              .then(resFile => {
                console.log(resFile);
              }).catch(e => {
                console.error(e);
              });
          },
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