<template>
    <div
        v-click-outside="() => changeShowOptions(false)"
        @click.stop
        class="dropdown"
    >
        <span
            class="dropdown__current-option"
            @click="onOptionClick(currentOption)"
        >
            {{ currentOption.title }}
        </span>
        <ul v-if="showOptions" class="dropdown__options">
            <li
                v-for="option in props.options"
                :key="option.value"
                class="dropdown__option"
                @click="onOptionClick(option)"
            >
                {{ option.title }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export type Option = {
    title: string
    value: string
}

export type DropdownProps = {
    modelValue: object
    options: Option[]
}

const props = defineProps<DropdownProps>()
const emit = defineEmits(['onOptionChange'])

const currentOption = ref<Option>(props.options[0])
const showOptions = ref<boolean>(false)
console.log(props.options)
const changeShowOptions = (value: boolean) => {
    showOptions.value = value
}
const changeCurrentOption = (value: Option) => {
    currentOption.value = value
    emit('onOptionChange', currentOption.value)
    console.log(props.modelValue)
    console.log('ds')
}

const onOptionClick = (newOption: Option) => {
    changeCurrentOption(newOption)
    changeShowOptions(!showOptions.value)
}
</script>

<style scoped></style>
