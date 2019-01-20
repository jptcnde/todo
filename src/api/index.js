const DB = 'TODO_DB';

const NETWORK_BUFF = 1000; // dummy network buffer

export function upsert(item, keyProp = 'id') {
  return Promise((resolve) => (
    window.setTimeout(() => {
      const db = localStorage.getItem(DB) || {};

      db[keyProp] = { ...db[keyProp], ...item };
    
      localStorage.setItem(DB, db);
      resolve();
    }, NETWORK_BUFF)
  ));

}

export const get = () => new Promise((resolve) => (
  window.setTimeout(() => 
    resolve(Object.entries(localStorage.getItem(DB) || {}).map(([,v]) => v))
  , NETWORK_BUFF)
));