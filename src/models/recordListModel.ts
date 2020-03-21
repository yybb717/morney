const localStorageKeyName = 'recordList';

const recordListModel = {
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
  },  //获取数据
  clone(data: RecordItem | RecordItem[]) { return JSON.parse(JSON.stringify(data));}, //克隆数据
  save(data: RecordItem[]) { return window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));} //保存数据
};
  export {recordListModel}