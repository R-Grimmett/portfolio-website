<script setup lang="ts">

type navListProps = {
    variant?: 'header' | 'sm:header' | 'footer',
}

const props = withDefaults(defineProps<navListProps>(), {
    variant: 'header',
})

const ulStyles = computed(() => {
    switch (props.variant) {
        case 'header':
            return 'flex flex-row gap-5 font-sedgwick text-2xl'
        case 'footer':
            return 'flex flex-row gap-5'
        default:
            break;
    }
})

</script>

<template>
    <ul :class="ulStyles">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
    </ul>
</template>