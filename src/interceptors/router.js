import { useUserStore } from '/src/stores/user.js';
import { router } from '@/router/index.js';

const loginPath = '/pages/login/login';
const whiteList = [
  loginPath,
];

const interceptorMethods = ['navigateTo'];

uni.addInterceptor('navigateTo', {
  invoke(args) {
    let path = args.url.split('?')[0];
    if (useUserStore().token) {
      if (path === loginPath) {
        return false;
      }
      return true;
    }
    if (whiteList.includes(path)) {
      console.log(args.url);
      return true;
    }
    router.push({
      url: '/pages/login/login',
    });
    return false;
  },
});