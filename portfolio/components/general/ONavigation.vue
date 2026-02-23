<script setup lang="ts">
import { backgrounds } from './styles';

const navbarStyles = computed(() => { return ["flex flex-row justify-center-safe p-5 min-h-[125px]", backgrounds.navigation] })

const logoStyles = ref("p-5")

</script>

<template>
    <nav :class="navbarStyles">
        <div :class="logoStyles" >
            <!-- LOGO PLACEHOLDER -->
             wow logo
        </div>
        <ul class="flex flex-row gap-5 font-sedgwick text-2xl">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        </ul>
    </nav>

</template>