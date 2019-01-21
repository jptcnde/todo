const DB = 'TODO_DB';

const NETWORK_BUFF = 200; // dummy network buffer

const getJSON = () => JSON.parse(localStorage.getItem(DB) || '{}');

export function upsert(item, keyProp = 'id') {
  return new Promise((resolve) => (
    window.setTimeout(() => {
      const db = getJSON();

      db[item[keyProp]] = item;
    
      localStorage.setItem(DB, JSON.stringify(db));
      resolve();
    }, NETWORK_BUFF)
  ));

}

export function remove(id) {
  return new Promise((resolve) => (
    window.setTimeout(() => {
      const db = getJSON();

      delete db[id];
    
      localStorage.setItem(DB, JSON.stringify(db));
      resolve();
    }, NETWORK_BUFF)
  ));

}

export const get = () => new Promise((resolve) => (
  window.setTimeout(() => 
    resolve(Object.entries(getJSON()).map(([,v]) => v))
  , NETWORK_BUFF)
));