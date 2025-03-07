<template>
  <div>
    <h1>Announcements</h1>
    <ul>
      <li v-for="announce in announcements" :key="announce.announceId">
        {{ announce.title }} - {{ announce.announcedAt }}
      </li>
    </ul>
    <button @click="sendVerificationEmail">Send Verification Email</button>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import {
  Configuration,
  type EmailForm,
  type AnnounceHeaderQuery,
  AnnounceControllerApi,
  MemberApiControllerApi,
} from '~/src/api-client';

const announcements = ref<Array<AnnounceHeaderQuery>>([]);

const configuration = new Configuration({ basePath: 'http://localhost:3001' });
const apiInstance = new AnnounceControllerApi(configuration, undefined, axios);

// GETリクエスト
const fetchAnnouncements = async () => {
  try {
    const response = await apiInstance.getUsingGET();
    announcements.value = response.data;
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }
};

// POSTリクエスト
const sendVerificationEmail = async () => {
  const emailApiInstance = new MemberApiControllerApi(configuration, undefined, axios);
  const emailForm: EmailForm = { email: 'example@example.com' };

  try {
    await emailApiInstance.sendVerifyEmailUsingPOST(emailForm);
    alert('Verification email sent successfully!');
  } catch (error) {
    console.error('Error sending verification email:', error);
  }
};

onMounted(() => {
  fetchAnnouncements();
});
</script>