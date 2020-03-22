import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordListModel = {
  data: [] as RecordItem[],
  fetch() {
    this.data= JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data
  },  //获取数据
  create(record: RecordItem){
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
    this.save()
  }
  ,
  save() { return window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));} //保存数据
};
  export {recordListModel}