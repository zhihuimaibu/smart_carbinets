function post(url, data, config) {
  return uni.request({
    url,
    method: 'POST',
    data,
    ...config,
  });
}

function uploadFile(url, filePath, name = 'file', config) {
  return uni.uploadFile({
    url,
    filePath,
    name,
    ...config,
  });
}

export const request = {
  post,
  uploadFile,
};

export const requestPlugin = {
  install(app) {
    app.config.globalProperties.$request = request;
  },
};