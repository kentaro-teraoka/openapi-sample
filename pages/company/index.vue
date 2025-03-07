<template>
  <div>
    {{ company }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Configuration, CompanyApiControllerApi } from '~/src/api-client';

const config = new Configuration({
  basePath: 'http://localhost:8080'
});

const company = ref(null);

const fetchAnnounce = async () => {
  const api = new CompanyApiControllerApi(config);
  try {
    const company = await api.searchCompanyByCompanyNameUsingGET("ラボル");
    company.value = company.data;
  } catch (error) {
    console.error('Error fetching company:', error);
  }
};

onMounted(() => {
  fetchAnnounce();
});
</script>