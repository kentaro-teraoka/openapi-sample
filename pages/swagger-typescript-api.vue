<template>
  <div>
    <h1>Announcements</h1>
    <ul>
      <li v-for="announce in announcements" :key="announce.announceId">
        {{ announce.title }} - {{ announce.announcedAt }}
      </li>
    </ul>
    <button @click="sendVerificationEmail">Send Verification Email</button>
    <button @click="registerMember">Register Member</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Api } from '~/src/swagger-typescript-api/Api';
import type { AnnounceHeaderQuery, EmailForm, MemberRegistrationForm } from '~/src/swagger-typescript-api/Api';

const announcements = ref<Array<AnnounceHeaderQuery>>([]);

const fetchAnnouncements = async () => {
  try {
    const response = await new Api({ baseUrl: 'http://localhost:3001' }).api.getUsingGet();
    announcements.value = response.data;
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }
};

const sendVerificationEmail = async () => {
  const emailForm: EmailForm = { email: 'example@example.com' };

  try {
    await new Api({ baseUrl: 'http://localhost:3001' }).api.sendVerifyEmailUsingPost(emailForm);
    alert('Verification email sent successfully!');
  } catch (error) {
    console.error('Error sending verification email:', error);
  }
};

const registerMember = async () => {
  const memberForm: MemberRegistrationForm = {
    email: 'example@example.com',
    firstNameKana: 'テスト',
    firstNameKanji: 'テスト',
    lastNameKana: 'タロウ',
    lastNameKanji: '太郎',
    gender: 'MALE',
    occupationCode: 'TEST',
    monthlyAverageSales: 10,
    surveyResult: 'テスト',
    emailVerificationMethodType: 'EMAIL'
  };

  try {
    await new Api({ baseUrl: 'http://localhost:3001' }).api.registerUsingPost2(memberForm);
    alert('Member registered successfully!');
  } catch (error) {
    console.error('Error registering member:', error);
  }
};

onMounted(() => {
  fetchAnnouncements();
});
</script>
