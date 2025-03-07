<template>
  <div>
    <ul>
      <li v-for="announce in announces" :key="announce.announceId">
        {{ announce.announceId }}: <nuxt-link :to="`/news/${announce.announceId}`">{{ announce.title }} - {{ announce.announcedAt }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Configuration, AnnounceControllerApi } from '~/src/api-client';

const config = new Configuration({
  basePath: 'http://localhost:8080'
});

const announces = ref([]);

const fetchAnnounces = async () => {
  const api = new AnnounceControllerApi(config);
  try {
    const response = await api.getUsingGET();
    announces.value = response.data;
  } catch (error) {
    console.error('Error fetching announces:', error);
  }
};

onMounted(() => {
  fetchAnnounces();
});
</script>