import { createSSRApp } from 'vue';
import { piniaPlugin } from './stores';
import '/src/interceptors/router.js';
import '/src/interceptors/request.js';
import uviewPlus from 'uview-plus';

import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App);
  app.use(piniaPlugin);
  app.use(uviewPlus);
  return {
    app,
  };
}