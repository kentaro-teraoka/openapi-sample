<template></template>

<!-- <template>
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
import axios from 'axios';
import { ref, onMounted } from 'vue';
import {
  Configuration,
  type EmailForm,
  type AnnounceHeaderQuery,
  AnnounceControllerApi,
  MemberApiControllerApi,
  DefaultApi,
} from '~/src/openapi-generator-cli/api-client';

const announcements = ref<Array<AnnounceHeaderQuery>>([]);

const configuration = new Configuration({ basePath: 'http://localhost:3001' });
const apiInstance = new AnnounceControllerApi(configuration, undefined, axios);
const defaultApiInstance = new DefaultApi(configuration, undefined, axios);

// GETリクエスト
const fetchAnnouncements = async () => {
  try {
    const response = await apiInstance.getUsingGET();
    announcements.value = response.data;
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }
};

// 認証メール送信
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

// 会員登録
const registerMember = async () => {
  const memberForm = {
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
  }

  try {
    await defaultApiInstance.registerUsingPOST2(memberForm);
    alert('Member registered successfully!');
  } catch (error) {
    console.error('Error registering member:', error);
  }
};

onMounted(() => {
  fetchAnnouncements();
});
</script> -->