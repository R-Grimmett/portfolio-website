<script setup lang="ts">

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

const liStyles = computed(() => {
    if (props.variant == 'sm:header') {
        return "bg-cream-100 max-w-[75vw] ms-[25vw] flex flex-row my-2 rounded-l-lg border-4 border-fern-500 border-r-0 z-10 "
    }
    return ""
})

const linkStyles = computed(() => {
    if (props.variant == 'sm:header') {
        return "grow p-5 hover:bg-sulphur-200"
    }
    return ""
})

</script>

<template>
        <ul :class="ulStyles">
            <li :class="liStyles">
                <NuxtLink to="/" @click="$emit('clicked')" :class="linkStyles" >Home</NuxtLink>
            </li>
            <li :class="liStyles">
                <NuxtLink to="/about" @click="$emit('clicked')" :class="linkStyles" >About</NuxtLink>
            </li>
            <li :class="liStyles">
                <NuxtLink to="/projects" @click="$emit('clicked')" :class="linkStyles" >Projects</NuxtLink>
            </li>
        </ul>
</template>