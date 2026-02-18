<script setup lang="ts">

type ButtonProps = {
    disabled?: boolean;
}

const props = defineProps<ButtonProps>();

const emit = defineEmits(['clicked']);

</script>

<template>
    <button type="button" @click="$emit('clicked')" :disabled="props.disabled">
        <slot />
    </button>
</template>