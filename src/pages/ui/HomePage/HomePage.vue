<template>
    <div>
        <dropdown-component @onOptionChange="onOptionChange" v-model="currentType" :options="types"></dropdown-component>
        <entity-list></entity-list>
        <button-component @click="onCreateEntity">Создать</button-component>
    </div>
</template>

<script setup lang="ts">

import {EntityList} from "@/widgets";
import {useEntityStore} from "@/app/stores/entityStore.ts";
import {storeToRefs} from "pinia";

const { currentType } = storeToRefs(useEntityStore())
const {types, onCreateEntity} = useEntityStore()
console.log(currentType)
console.log(types)

const onOptionChange = (value) => {
    currentType.value = value
}
</script>

<style scoped>

</style>