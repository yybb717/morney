import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';  //导入一个文件夹，如果这个文件夹有index文件，那就是导入的是index文件里的东西
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';


Vue.config.productionTip = false;


Vue.component('Nav', Nav);  //把Nav组件变成全局组件
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);


new Vue({
  router,  //把router传给Vue
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function () {
  setTimeout(function () {
    window.scroll(0, 10000);
  }, 0);
};