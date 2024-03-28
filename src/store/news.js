import { defineStore } from 'pinia';

export const useNewsStore = defineStore({
  id: 'news',
  state: () => ({
    searchValue: 'default',
  }),
  actions: {
    setSearch(value) {
      this.searchValue = value;
    },
  },
});