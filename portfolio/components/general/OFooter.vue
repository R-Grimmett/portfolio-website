<script setup lang="ts">
import MNavList from './MNavList.vue';
import { backgrounds, text } from './styles';

const footerStyles = computed (() => {
    return ["flex flex-col gap-4 p-5", backgrounds.navigation]
})

const disclaimer = computed (() => { return ["text-center my-5", text.italic]})

const socialLinkStyles = ref(["text-base bg-transparent hover:bg-fern-700/25", text.default, text.hoverLink]);

const attrLinkStyles = ref(["text-base bg-transparent hover:bg-fern-700/25", text.italic, text.hoverLink]);

</script>

<template>
    <footer :class="footerStyles">
        <div class="flex flex-col">
            <h4 :class="text.footerHeader" >Socials:</h4>
            <ul class="flex flex-row gap-2">
                <li><UButton to="https://www.linkedin.com/in/rachael-grimmett-168146198" target="_blank" icon="simple-icons:linkedin"
                    :class="socialLinkStyles" >LinkedIn
                    </UButton>
                </li>
                <li><UButton to="https://github.com/R-Grimmett" target="_blank" icon="simple-icons:github"
                    :class="socialLinkStyles" >GitHub
                    </UButton>
                </li>
                <li><UButton to="https://www.behance.net/rachaelgrimmett" target="_blank" icon="simple-icons:behance"
                    :class="socialLinkStyles" >BeHance
                    </UButton>
                </li>
            </ul>
        </div>
        <div class="flex flex-col">
            <h4 :class="text.footerHeader" >Site Navigation</h4>
            <MNavList variant="footer" />
        </div>
        <div :class="disclaimer">© 2026 Rachael Grimmett. 
            <br> <UButton to="/attribution" :class="attrLinkStyles" trailing-icon="majesticons:arrow-right">Site Information and Attribution.</UButton>
            <br> All Rights Reserved.</div>
    </footer>
</template>