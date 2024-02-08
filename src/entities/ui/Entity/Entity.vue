<template>
    <div>
      <h3>{{entity.id + ' ' + entity.name}}</h3>
    </div>
</template>

<script setup lang="ts">
import {type Entity} from "@/entities";

export type EntityProps = {
    entity: Entity
}

const props = defineProps<EntityProps>()

</script>

<style scoped>

</style>