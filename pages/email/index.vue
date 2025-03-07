<template>
  <div>
    <input v-model="email" />
    <button @click="sendEmailVerification">メール認証を送信</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Configuration, MemberApiControllerApi } from '~/src/api-client';

const config = new Configuration({
  basePath: 'http://localhost:8080'
});

const email = ref("sample@sample.com")

const sendEmailVerification = async() => {
  const apiInstance = new MemberApiControllerApi(config);
  try {
    const emailForm = { email: email.value };
    const response = await apiInstance.sendVerifyEmailUsingPOST(emailForm);
    console.log('メール認証が送信されました:', response.data);
  } catch (error) {
    console.error('メール認証の送信に失敗しました:', error);
  }
}
</script>
