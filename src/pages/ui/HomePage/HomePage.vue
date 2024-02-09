<template>
    <div>
        <entity-list-component />
    </div>
</template>

<script setup lang="ts">
import { EntityList as EntityListComponent } from '@/widgets'
import { useEntityStore } from '@/app/stores/entityStore.ts'
import { storeToRefs } from 'pinia'

const { currentType } = storeToRefs(useEntityStore())
const { types, onCreateEntity } = useEntityStore()

const onCreateEntityButtonClick = () => {
    onCreateEntity()
}

const onOptionChange = value => {
    currentType.value = value
}
</script>

<style scoped></style>
