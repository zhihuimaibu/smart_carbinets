import { router } from '../router';
import { useUserStore } from '../stores/user';

let unauthorized = false;
const requestArr = ['request', 'uploadFile', 'downloadFile']

requestArr.forEach(method => {
  uni.addInterceptor(method, {
    invoke(args) {
      console.log(args, '0000000');
      args.url += '';
      args.header = args.header || {}
      args.header.Token = useUserStore().token
      if (unauthorized) {
        console.log('已经有请求到跳转到登录页了');
        return false;
      }
    },
    success(args) {
      console.log('success', args);
    },
    fail(err) {
      console.log('interceptor-fail', err);
    },
    complete(res) {
      console.log('interceptor-complete', res);
    },
    async returnValue(args) {
      const { statusCode, data, errMsg } = await args;
      return new Promise((resolve, reject) => {
        if (statusCode === 200) {
          resolve(data);
        } else if (args.statusCode === 401) {
          unauthorized = true;
          useUserStore().logOut();
        }
        unauthorized = false;
        reject({
          status: statusCode,
          message: errMsg,
        });
      });
    },
  });
})