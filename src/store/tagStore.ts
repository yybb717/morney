import {tagListModel} from '@/models/tagListModel';

export default {
  // tag store
  //在全局获取标签列表，标签列表直接成为了windows的tagList属性。其他组件直接用
  tagList: tagListModel.fetch(),
  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (message === 'duplicated') {
      window.alert('标签名重复了');
    } else if (message === 'success') {
      window.alert('添加成功');
    }
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  },
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
}