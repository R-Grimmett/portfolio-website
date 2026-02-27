<script setup lang="ts">
import { backgrounds, borders, text } from './styles';


type CardProps = {
    title?: string | null,
    subtitle?: string | null,
    content: string,
    link?: string | null,
    linkContext?: string,
}

const props = withDefaults(defineProps<CardProps>(), {
    title: null,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo nulla, eleifend et sodales eu, pulvinar in arcu.",
    link: null,
    linkContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
});

</script>

<template>
    <div class="flex flex-col g-2 p-5 m-1" :class="backgrounds.card, borders.shadedFern" >
        <h3 v-if="props.title != null" :class="text.h3" >{{ props.title }}</h3>
        <h4 v-if="props.subtitle != null" :class="text.italic" >{{ props.subtitle }}</h4>
        <p :class="text.default" > {{ props.content }}</p>
        <NuxtLink v-if="props.link != null" :to="props.link" target="_blank" class="mt-3" ><slot /> {{ linkContext }}</NuxtLink>
    </div>
</template>