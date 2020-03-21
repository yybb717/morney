const localStorageKeyName = 'tagList';
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated'; // 联合类型
  save: () => void;
}
const tagListModel: TagListModel = {
  //声明标签列表data
  data: [],
  //从数据库中获取最新的标签列表
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  //往标签列表里面新增标签 ①如果已经有了就返回duplicated ②没有就往标签列表里面新增标签，保存，返回success
  create(name) {
    // this.data = [{id:'1', name:'1'}, {id:'2', name:'2'}]
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {return 'duplicated';}
    this.data.push({id:name, name: name});
    this.save();
    return 'success';
  },
  //把标签列表保存到数据库里
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export {tagListModel};