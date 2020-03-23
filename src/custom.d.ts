type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date ;
}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated'; // 联合类型
  save: () => void;
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';

  remove: (id: string) => boolean;
}
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
interface Window {
  store: {
    tagList: Tag[];  //声明window有个属性tagList
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    findTag: (id: string) => Tag;

    recordList: RecordItem[];
    createRecord: (record: RecordItem) => void;
  };

}

