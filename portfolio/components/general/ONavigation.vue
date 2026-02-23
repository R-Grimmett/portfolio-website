<script setup lang="ts">
import MNavList from './MNavList.vue';
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
        <MNavList variant="header" />
    </nav>

</template>