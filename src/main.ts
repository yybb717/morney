import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';  //导入一个文件夹，如果这个文件夹有index文件，那就是导入的是index文件里的东西
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import {tagListModel} from '@/models/tagListModel';

Vue.config.productionTip = false;


Vue.component('Nav', Nav);  //把Nav组件变成全局组件
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

//在全局获取标签列表，标签列表直接成为了windows的tagList属性。其他组件直接用
window.tagList = tagListModel.fetch();
new Vue({
  router,  //把router传给Vue
  store,
  render: h => h(App)
}).$mount('#app');
