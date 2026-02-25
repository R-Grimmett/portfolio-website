<script setup lang="ts">
import MNavList from './MNavList.vue';
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
                <li><NuxtLink to="https://www.linkedin.com/in/rachael-grimmett-168146198" target="_blank" ><Icon name="simple-icons:linkedin" /> LinkedIn</NuxtLink></li>
                <li><NuxtLink to="https://github.com/R-Grimmett" target="_blank"><Icon name="simple-icons:github" /> GitHub</NuxtLink></li>
                <li><NuxtLink to="https://www.behance.net/rachaelgrimmett" target="_blank"><Icon name="simple-icons:behance" /> BeHance</NuxtLink></li>
            </ul>
        </div>
        <div class="flex flex-col">
            <h4 :class="text.footerHeader" >Site Navigation</h4>
            <MNavList variant="footer" />
        </div>
        <div :class="disclaimer">© 2026 Rachael Grimmett. <br> All Rights Reserved.</div>
    </footer>
</template>