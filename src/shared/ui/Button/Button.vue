<template>
    <button :class="`button button_${isActive ? 'active' : 'inactive'}`">
        <slot v-if="!loading"></slot>
        <span class="loader" v-else></span>
    </button>
</template>

<script setup lang="ts">

import {computed} from "vue";

type ButtonProps = {
    isActive: boolean
    isLoading: boolean
}
const props = withDefaults(defineProps<ButtonProps>(), {
    isActive: true,
    isLoading: false
})

const loading = computed(() => props.isLoading)
</script>

<style scoped>

</style>