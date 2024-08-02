import { defineStore } from 'pinia';
import { router } from '../router';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: uni.getStorageSync('token'),
      user: null,
    };
  },
  actions: {
    logout() {
      this.token = '';
      this.user = '';
      uni.clearStorageSync();
      router.push({
        url: '/pages/index/index',
      });
    },
    login() {
      uni.request({
        // url: 'http://prexcgzjy.yzxsaas.com/api/zwgrid/v1/user/login',
        url: 'https://prescrm.yzxsaas.com/api/sys/v1/user/login',
        method: 'POST',
        header: {
          'Login-Source': 'xc_pc', //自定义请求头信息
        },
      }).then(res => {
        const url = getCurrentPages()[0].$page.fullPath || '/pages/index/index';
        const { token } = res.data;
        this.token = token;
        uni.setStorageSync('token', token);
        console.log(url);
        router.push({
          url,
        });
        console.log(res);
      }).catch(e => {
        console.error(e);
        console.log('错误码:' + e.status);
      });
    },
  },
});