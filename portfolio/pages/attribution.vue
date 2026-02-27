<script setup lang="ts">
import ACard from '~/components/general/ACard.vue';
import { backgrounds, text } from '~/components/general/styles';
</script>

<template>
    <main class="p-5" :class="backgrounds.page">
        <h1 class="border-b-3 border-gold-300/75 mb-2" :class="text.h1" >Attribution</h1>
        <p :class="text.default" >The following tools and resources helped make this website possible:</p>
        <div class="flex flex-col g-2 p-3">
            <ACard title="Majesticons" subtitle="Gerrit Halfman, Nicolas Hoizey" content="The majority of icons used throughout the website." 
                link="https://github.com/halfmage/majesticons" link-context="GitHub Repository">
                <Icon name='simple-icons:github' />
            </ACard>
            <ACard title="Simple Icons" content="Brand Icons used throughout the website." 
                link="https://github.com/simple-icons/simple-icons" link-context="GitHub Repository">
                <Icon name='simple-icons:github' />
            </ACard>
        </div>
    </main>
</template>