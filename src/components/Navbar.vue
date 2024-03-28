<template>
	<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white py-3">
	  <div class="container">
	    <a class="navbar-brand text-success fw-semibold" href="#">
	      #test.news
	    </a>
	    <div>
	      <form class="d-flex" @submit.prevent="searchHandle">
	        <input class="form-control me-2 rounded shadow-sm" type="text" v-model="search" placeholder="Search" aria-label="Search">
	        <button class="btn btn-success rounded border-0" type="submit">Search</button>
	      </form>
	    </div>
	  </div>
	</nav>
</template>

<script setup>
	import { ref } from 'vue';
	import { useNewsStore } from '../store/news';

	const searchStore = useNewsStore();
	const search = ref('');

	const searchHandle = () => {
	  searchStore.setSearch(search.value);
	};
</script>