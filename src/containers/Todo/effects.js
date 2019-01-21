import guid from 'uuid/v4';
import { upsert, get, remove } from '../../api';

export default function effects() {
  return {
    async addTodo(data) {
      await upsert({ ...data, id: guid()});
      await this.getData();
    },

    async editTodo(data) {
      await upsert(data);
      await this.getData();
    },

    async removeTodo(id) {
      await remove(id);
      await this.getData();
    },

    async getData() {
      const data = await get();
      this.loadData(data);
    }
  };
}