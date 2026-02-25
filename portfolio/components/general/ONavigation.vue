<script setup lang="ts">
import MNavList from './MNavList.vue';
import { backgrounds } from './styles';

const navbarStyles = computed(() => { return ["flex flex-row justify-center-safe p-5 min-h-[125px]", backgrounds.navigation] })

const logoStyles = ref("p-5")

const menuOpen = ref(false)

</script>

<template>
    <nav :class="navbarStyles">
        <div :class="logoStyles" >
            <!-- LOGO PLACEHOLDER -->
             wow logo
        </div>
        <button @click="menuOpen = true" class="block lg:hidden"><Icon name="majesticons:menu" size="4em" /></button>
        <MNavList variant="header" class="hidden lg:flex" />
        <div v-if="menuOpen" class="absolute top-0 left-0 h-full w-full flex flex-col justify-end-safe bg-linear-150 from-lagoon-800/75 to-lagoon-950/75 lg:hidden">
            <div class="min-h-[125px] flex justify-end-safe items-end">
                <button @click="menuOpen = false"class="m-5"><Icon name="majesticons:close" size="4em"/></button>
            </div>
            <MNavList variant="sm:header" class="lg:hidden grow" @clicked="menuOpen = false" />
        </div>
        
    </nav>

</template>