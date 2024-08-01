export const tabar = [
  '/pages/index/index',
  '/pages/store/store',
];

function push(obj) {
  const path = obj.url.split('?')[0];
  if (tabar.includes(path)) {
    console.log('switch');
    return uni.switchTab(obj);
  } else {
    console.log('navigate');
    return uni.navigateTo(obj);
  }
}

export const router = {
  push,
};

export const routerPlugin = {
  install(app) {
    app.config.globalProperties.$router = router;
  },
};