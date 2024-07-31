let unauthorized = false;

uni.addInterceptor('request', {
  invoke(args) {
    args.url += '';
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
    console.log('returnValue', args);
    return new Promise((resolve, reject) => {
      if (statusCode === 200) {
        resolve(data);
      } else if (args.statusCode === 401) {
        unauthorized = true;
        uni.navigateTo({
          url: '/pages/login/login',
        });
      }
      unauthorized = false;
      reject({
        status: statusCode,
        message: errMsg,
      });
    });
  },
});