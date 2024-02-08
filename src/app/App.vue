<template>
    <div>
      <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";
import {useAuthStore} from "@/app/stores/authStore.ts";

const {onGetUserToken, token} = useAuthStore()

onMounted(() => {
    onGetUserToken()
})

console.log(token)
</script>

<style scoped>

</style>