<template>
    <button :class="`button button_${isActive ? 'active' : 'inactive'}`">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
type ButtonProps = {
    isActive: boolean
}
const props = withDefaults(defineProps<ButtonProps>(), {
    isActive: true
})
</script>

<style scoped>

</style>