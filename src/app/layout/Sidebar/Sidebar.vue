<template>
    <div class="sidebar">
        <dropdown-component @onOptionChange="onOptionChange" v-model="currentType" :options="types"></dropdown-component>
        <button-component @click="onCreateEntity">Создать</button-component>
    </div>
</template>

<script setup lang="ts">
import {useEntityStore} from "@/app/stores/entityStore.ts";
import {storeToRefs} from "pinia";

const { currentType } = storeToRefs(useEntityStore())
const {types, onCreateEntity} = useEntityStore()
</script>

<style scoped>

</style>