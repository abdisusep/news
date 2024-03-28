import { defineStore } from 'pinia';

export const useNewsStore = defineStore({
  id: 'news',
  state: () => ({
    searchValue: 'a',
  }),
  actions: {
    setSearch(value) {
      this.searchValue = value;
    },
  },
});