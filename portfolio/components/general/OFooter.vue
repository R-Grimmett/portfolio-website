<script setup lang="ts">
import { backgrounds, text } from './styles';

const footerStyles = computed (() => {
    return ["flex flex-col gap-4 p-5", backgrounds.navigation]
})

const disclaimer = computed (() => { return ["text-center mt-5", text.italic]})

</script>

<template>
    <footer :class="footerStyles">
        <div class="flex flex-col">
            <h4 :class="text.footerHeader" >Socials:</h4>
            <ul class="flex flex-row gap-5">
                <li><NuxtLink to="https://www.linkedin.com/in/rachael-grimmett-168146198" target="_blank" >LinkedIn</NuxtLink></li>
                <li><NuxtLink to="https://github.com/R-Grimmett" target="_blank">GitHub</NuxtLink></li>
                <li><NuxtLink to="https://www.behance.net/rachaelgrimmett" target="_blank">BeHance</NuxtLink></li>
            </ul>
        </div>
        <div class="flex flex-col">
            <h4 :class="text.footerHeader" >Site Navigation</h4>
            <ul class="flex flex-row gap-5">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        </ul>
        </div>
        <div :class="disclaimer">© 2026 Rachael Grimmett. <br> All Rights Reserved.</div>
    </footer>
</template>