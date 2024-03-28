import { defineStore } from 'pinia';

export const useNewsStore = defineStore({
  id: 'news',
  state: () => ({
    searchValue: 'indonesia',
  }),
  actions: {
    setSearch(value) {
      this.searchValue = value;
    },
  },
});