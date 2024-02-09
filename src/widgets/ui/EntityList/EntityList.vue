<template>
    <div>
        <entity-component
            v-for="entity in entities"
            :key="entity.id"
            :entity="entity"
        />
    </div>
</template>

<script setup lang="ts">
import { Entity as EntityComponent } from '@/entities/'
import { computed } from 'vue'
import { useEntityStore } from '@/app/stores/entityStore.ts'

const entities = computed(() => useEntityStore().entities)
</script>

<style scoped></style>
