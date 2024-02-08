<template>
    <div class="container">
        <sidebar-component></sidebar-component>
        <main class="content"></main>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";
import {useAuthStore} from "@/app/stores/authStore.ts";
import {Sidebar as SidebarComponent} from "@/app/layout";

const {onGetUserToken, token} = useAuthStore()

onMounted(() => {
    onGetUserToken()
})

console.log(token)
</script>

<style scoped>

</style>