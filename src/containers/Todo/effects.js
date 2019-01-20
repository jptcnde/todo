import { upsert, get } from '../../api';

export default function effects() {
  return {
    async upsert(data) {
      await upsert(data);
      this.configure(data);
    },

    async getData() {
      const data = await get();
      this.loadData(data);
    }
  };
}