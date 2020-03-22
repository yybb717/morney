type RecordItem = {
  tags: string[];
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

interface Window {
  tagList: Tag[];  //声明window有个属性tagList
}