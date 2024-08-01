<template>
  <view class="">
    <button @click="handleLogin">登录</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      handleLogin() {
        this.$stores.user.login();
      },
    },
  };
</script>

<style>

</style>