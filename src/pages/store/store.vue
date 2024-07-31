<template>
  <view>
    <view class="content">
      <image class="logo" src="/static/logo.png"></image>
      <view class='sad'></view>
      <view class="text-area">
        <text class="title">{{ title }} {{ count }}</text>
        <button @click="handleClick">subpages</button>
      </view>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'pinia';
  import { useCounterStore } from '/src/stores/counter';
  export default {
    data() {
      return {
        title: 'Hello',
      };
    },
    computed: {
      ...mapState(useCounterStore, {
        count: 'count',
      }),
    },
    onLoad() {
      this.$store.counter.increment(); //getter
    },
    methods: {
      handleClick() {
        uni.navigateTo({
          url: '/pagesA/subpage/subpage',
        });
      },
    },
    onShow() {
      console.log('show');
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
