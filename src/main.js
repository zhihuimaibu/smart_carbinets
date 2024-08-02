import { createSSRApp } from 'vue';
import { piniaPlugin } from '@/stores';
import { routerPlugin } from '@/router/index.js';
import { requestPlugin } from '@/request/index.js';
import '@/interceptors/router.js';
import '@/interceptors/request.js';
import uviewPlus from 'uview-plus';

import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App);
  app.use(piniaPlugin);
  app.use(uviewPlus);
  app.use(routerPlugin);
  app.use(requestPlugin);
  return {
    app,
  };
}