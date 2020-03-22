import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';  //导入一个文件夹，如果这个文件夹有index文件，那就是导入的是index文件里的东西
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import {tagListModel} from '@/models/tagListModel';
import {recordListModel} from '@/models/recordListModel';

Vue.config.productionTip = false;


Vue.component('Nav', Nav);  //把Nav组件变成全局组件
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
// tag store
//在全局获取标签列表，标签列表直接成为了windows的tagList属性。其他组件直接用
window.tagList = tagListModel.fetch();

window.createTag=(name: string)=>{
  const message = tagListModel.create(name);
  if (message === 'duplicated') {
    window.alert('标签名重复了');
  } else if (message === 'success') {
    window.alert('添加成功');
  }
};

window.removeTag = (id: string)=>{
  return tagListModel.remove(id)
};

window.updateTag = (id: string, name: string)=>{
 return  tagListModel.update(id, name);
};

window.findTag=(id: string)=>{
 return  window.tagList.filter(t => t.id === id)[0]
};

//record store
window.recordList = recordListModel.fetch();

window.createRecord=(record: RecordItem)=>{
  recordListModel.create(record)
}
;




new Vue({
  router,  //把router传给Vue
  store,
  render: h => h(App)
}).$mount('#app');
