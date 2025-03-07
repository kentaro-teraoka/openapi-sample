<template>
  <div>
    {{route.params.announceId}}

    {{ announce?.title }}
    {{ announce?.announcedAt }}
    {{ announce?.body }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Configuration, AnnounceControllerApi } from '~/src/api-client';
import { useRoute } from 'vue-router';

const route = useRoute();
const config = new Configuration({
  basePath: 'http://localhost:8080'
});

const announce = ref(null);

const fetchAnnounce = async () => {
  const api = new AnnounceControllerApi(config);
  try {
    const response = await api.getAnnounceContentUsingGET(Number(route.params.announceId));
    announce.value = response.data;
  } catch (error) {
    console.error('Error fetching announce:', error);
  }
};

onMounted(() => {
  fetchAnnounce();
});
</script>