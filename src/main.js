import Vue from 'vue';
import Avue from '@smallwei/avue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@smallwei/avue/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Avue);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
