<template>
    <div class="sidebar">
        <dropdown-component @onOptionChange="onOptionChange" v-model="type" :options="types"></dropdown-component>
        <button-component :is-loading="loading" @click="onCreateEntity">Создать</button-component>
    </div>
</template>

<script setup lang="ts">
import {useEntityStore} from "@/app/stores/entityStore.ts";
import {storeToRefs} from "pinia";
import {computed} from "vue";

const { currentType, isEntityLoading } = storeToRefs(useEntityStore())
const {types, onCreateEntity} = useEntityStore()

const loading = computed(() => isEntityLoading.value)

const onOptionChange = (value) => {
    currentType.value = value
}
</script>

<style scoped>

</style>