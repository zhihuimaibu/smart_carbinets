<template>
  <view>
    pagesA
    <button @click="handleLogout">退出登录</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      handleLogout() {
        this.$stores.user.logout();
      },
    },
  };
</script>

<style>

</style>