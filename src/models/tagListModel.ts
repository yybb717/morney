import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';

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
      const id = createId().toString();
      this.data.push({id: id, name: name});
      this.save();
      return 'success';
    },
    //把标签列表保存到数据库里
    save() {
      window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    update(id, name) {
      const idList = this.data.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          return 'duplicated';
        } else {
          const tag = this.data.filter(item => item.id === id)[0];
          tag.name = name;
          this.save();
          return 'success';
        }
      } else {
        return 'not found';
      }
    },
    remove(id: string) {
      let index = -1;
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].id === id) {
          index = i;
          break;
        }
      }
      this.data.splice(index, 1);
      this.save();
      return true;
    },

  }
;
export {tagListModel};