<script setup lang="ts">
import { borders, text } from './styles';

type navListProps = {
    variant?: 'header' | 'sm:header' | 'footer',
}

const props = withDefaults(defineProps<navListProps>(), {
    variant: 'header',
})

const emits = defineEmits(['clicked'])

const ulStyles = computed(() => {
    switch (props.variant) {
        case 'header':
            return 'flex flex-row gap-5 font-sedgwick text-2xl'
        case 'footer':
            return 'flex flex-row gap-5'
        default:
            return 'flex flex-col gap-5 font-sedgwick text-2xl'
    }
})

const linkStyles = computed(() => {
    switch (props.variant) {
        case 'sm:header':
            return [text.h2, borders.shadedFern,
                "grow p-5 bg-cream-100 hover:bg-sulphur-200 min-w-[80vw] ms-[25vw] rounded-l-lg border-r-0 z-10"]
        case 'footer':
            return [text.default, text.hoverLink, "text-base bg-transparent hover:bg-fern-700/25"]
        default:
            return ""
    }
})

</script>

<template>
        <ul :class="ulStyles">
            <li>
                <UButton to="/" @click="$emit('clicked')" :class="linkStyles" >
                    <Icon v-if="props.variant == 'sm:header'" name="majesticons:home-line" size="1.5em" style="margin-right: 0.5rem;" />Home</UButton>
            </li>
            <li>
                <UButton to="/about" @click="$emit('clicked')" :class="linkStyles" >
                    <Icon v-if="props.variant == 'sm:header'" name="majesticons:user-line" size="1.5em" style="margin-right: 0.5rem;" />About</UButton>
            </li>
            <li>
                <UButton to="/projects" @click="$emit('clicked')" :class="linkStyles" >
                    <Icon v-if="props.variant == 'sm:header'" name="majesticons:paper-fold-line" size="1.5em" style="margin-right: 0.5rem;" />Projects</UButton>
            </li>
            <slot></slot>
        </ul>
</template>