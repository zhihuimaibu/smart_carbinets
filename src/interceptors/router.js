import { useUserStore } from '/src/stores/user.js';

const loginPath = '/pages/login/login';

const whiteList = [
  loginPath,
];

const interceptorMethods = ['navigateTo'];

// interceptorMethods.forEach(method => {
//   uni.addInterceptor(method, {
//     invoke(args) {
//       console.log('跳转到：' + args.url);
//       if (useUserStore().token || whiteList.includes(args.url)) {
//         return true;
//       } else {
//         uni.navigateTo({
//           url: '/pages/login/login'
//         });
//         return false;
//       }
//     }
//   });
// });