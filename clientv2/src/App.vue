<script setup>
import { provide } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import MainNavigation from '@/views/navigation/MainNavigation.vue'
import { useGlobalStore } from '@/store'

const Router = useRouter()
const Route = useRoute()

const globalStore = useGlobalStore()

provide('globalStore', globalStore )



</script>

<template>
  <MainNavigation />
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
