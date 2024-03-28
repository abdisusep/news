<template>
	<div class="container news">
		<div class="row mb-2">
			<div class="col-lg-12">
				<h2>Latest News</h2>
			</div>
		</div>

		<div class="row mb-5">
			<div class="col-lg-5">
				<div v-if="isLoading">
					<Skeleton width="100%" height="18rem" borderRadius="16px" class="mb-2"></Skeleton>
					<Skeleton width="40%" class="mb-2"></Skeleton>
					<Skeleton class="mb-2"></Skeleton>
					<Skeleton class="mb-2" width="80%"></Skeleton>
					<Skeleton class="mb-2"></Skeleton>
					<Skeleton class="mb-2" width="60%"></Skeleton>
				</div>
				<div class="card rounded border-0" v-else>
					<div v-for="item in news.slice(0,1)" :key="item.id">
						<a :href="item.url" target="_blank" class="text-decoration-none text-dark">
							<img :src="item.urlToImage" class="card-img-top rounded" :alt="item.title">
						</a>
						<div class="card-body px-0 py-0">
						    <h5 class="card-title my-1">
						    	<a :href="item.url" target="_blank" class="text-decoration-none text-dark">{{ item.title }}</a>
						    </h5>
						    <p class="card-text">{{ item.content }}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-7">
				<div class="row">
					<div class="col-sm-6 mb-2" v-for="item in news.slice(1,5)" :key="item.id" v-if="!isLoading">
						<div class="card rounded border-0">
						  <a :href="item.url" target="_blank" class="text-decoration-none text-dark">
							<img :src="item.urlToImage" class="card-img-top rounded" :alt="item.title">
						  </a>
						  <div class="card-body px-0 py-0">
						    <h5 class="card-title my-1">
						    	<a :href="item.url" target="_blank" class="text-decoration-none text-dark">{{ item.title }}</a>
						    </h5>
						  </div>
						</div>
					</div>

					<div class="col-sm-6 mb-2" v-if="isLoading">
						<Skeleton width="100%" height="10.8rem" borderRadius="16px" class="mb-2"></Skeleton>
						<Skeleton width="40%" class="mb-2"></Skeleton>
					</div>
					<div class="col-sm-6 mb-2" v-if="isLoading">
						<Skeleton width="100%" height="10.8rem" borderRadius="16px" class="mb-2"></Skeleton>
						<Skeleton width="40%" class="mb-2"></Skeleton>
					</div>
					<div class="col-sm-6 mb-2" v-if="isLoading">
						<Skeleton width="100%" height="10.8rem" borderRadius="16px" class="mb-2"></Skeleton>
						<Skeleton width="40%" class="mb-2"></Skeleton>
					</div>
					<div class="col-sm-6 mb-2" v-if="isLoading">
						<Skeleton width="100%" height="10.8rem" borderRadius="16px" class="mb-2"></Skeleton>
						<Skeleton width="40%" class="mb-2"></Skeleton>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-7">
				<div class="row">
					<div class="col-sm-6 mb-2" v-if="isLoading">
						<Skeleton width="100%" height="10.8rem" borderRadius="16px" class="mb-2"></Skeleton>
						<Skeleton width="40%" class="mb-2"></Skeleton>
					</div>
					<div class="col-sm-6 mb-2" v-if="isLoading">
						<Skeleton width="100%" height="10.8rem" borderRadius="16px" class="mb-2"></Skeleton>
						<Skeleton width="40%" class="mb-2"></Skeleton>
					</div>
					<div class="col-sm-6 mb-2" v-if="isLoading">
						<Skeleton width="100%" height="10.8rem" borderRadius="16px" class="mb-2"></Skeleton>
						<Skeleton width="40%" class="mb-2"></Skeleton>
					</div>
					<div class="col-sm-6 mb-2" v-if="isLoading">
						<Skeleton width="100%" height="10.8rem" borderRadius="16px" class="mb-2"></Skeleton>
						<Skeleton width="40%" class="mb-2"></Skeleton>
					</div>

					<div class="col-sm-6 mb-2" v-for="item in news.slice(5,9)" :key="item.id" v-if="!isLoading">
						<div class="card rounded border-0">
						  <a :href="item.url" target="_blank" class="text-decoration-none text-dark">
							<img :src="item.urlToImage" class="card-img-top rounded" :alt="item.title">
						  </a>
						  <div class="card-body px-0 py-0">
						    <h5 class="card-title my-1">
						    	<a :href="item.url" target="_blank" class="text-decoration-none text-dark">{{ item.title }}</a>
						    </h5>
						  </div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-5">
				<div v-if="isLoading">
					<Skeleton width="100%" height="18rem" borderRadius="16px" class="mb-2"></Skeleton>
					<Skeleton width="40%" class="mb-2"></Skeleton>
					<Skeleton class="mb-2"></Skeleton>
					<Skeleton class="mb-2" width="80%"></Skeleton>
					<Skeleton class="mb-2"></Skeleton>
					<Skeleton class="mb-2" width="60%"></Skeleton>
				</div>
				<div class="card rounded border-0" v-else>
					<div v-for="item in news.slice(9,10)" :key="item.id">
						<a :href="item.url" target="_blank" class="text-decoration-none text-dark">
							<img :src="item.urlToImage" class="card-img-top rounded" :alt="item.title">
						</a>
						<div class="card-body px-0 py-0">
						    <h5 class="card-title my-1">
						    	<a :href="item.url" target="_blank" class="text-decoration-none text-dark">{{ item.title }}</a>
						    </h5>
						    <p class="card-text">{{ item.content }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useNewsStore } from '../store/news';
import Skeleton from 'primevue/skeleton';


const isLoading = ref(true);

const news   = ref([]);
const searchStore = useNewsStore();
const search = searchStore.searchValue;

const toggleLoading = () => {
  isLoading.value = !isLoading.value;
};

watch(() => searchStore.searchValue, (newValue, oldValue) => {
	fetchData(newValue);
});

const fetchData = async (search) => {
  isLoading.value = true;
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=85566eec300147198b64c308c349cac1`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    news.value = data.articles;

    isLoading.value = false;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData(search);
});
</script>