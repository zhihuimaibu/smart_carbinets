import { useCounterStore } from "./counter";
import { useUserStore } from "./user";
import { createPinia } from 'pinia'

const pinia = new createPinia()

const piniaPlugin = {
  install(app) {
    app.use(pinia)
    app.config.globalProperties.$store = {
      counter: useCounterStore(),
      user: useUserStore(), 
    }
  },
}

export {
  piniaPlugin,
}