const  localStorageKeyName =  'recordList'

const model = {
  fetch(){JSON.parse(window.localStorage.getItem(localStorageKeyName ) || '[]')},
  save(){window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList))}
}
export default model