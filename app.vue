<template>
  <div>
    <h2>メンバー一覧</h2>
    <ul>
      <li v-for="m in members.data" :key="m.id">
        ID: {{ m.id }}, 名前: {{ m.name }}, 年齢: {{ m.age }}
      </li>
    </ul>

    <h2>特定のメンバー</h2>
    <div v-if="member.data">
      ID: {{ member.data.id }}<br>
      名前: {{ member.data.name }}<br>
      年齢: {{ member.data.age }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Configuration, MemberApi } from './src/api-client';

const config = new Configuration({
  basePath: 'http://localhost:8080'
});

const memberApi = new MemberApi(config);

// 全メンバー取得
const members = await memberApi.getMembers();

// 特定のメンバー取得
const member = await memberApi.getMemberById('1');
</script>