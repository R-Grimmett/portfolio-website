<script setup lang="ts">
import { backgrounds } from './styles';

const navbarStyles = computed(() => { return ["flex flex-row justify-center-safe p-5", backgrounds.navigation] })

</script>

<template>
    <nav :class="navbarStyles">
        <ul class="flex flex-row gap-5 font-sedgwick text-3xl">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/">Projects</NuxtLink></li>
        </ul>
    </nav>

</template>