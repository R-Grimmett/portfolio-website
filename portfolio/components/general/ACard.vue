<script setup lang="ts">
import { backgrounds, borders, text } from './styles';


type CardProps = {
    title?: string | null,
    subtitle?: string | null,
    link?: string | null,
    linkIcon?: string
}

const props = withDefaults(defineProps<CardProps>(), {
    title: null,
    link: null,
    linkIcon: "",
});

</script>

<template>
    <div class="flex flex-col g-2 p-5 m-1" :class="backgrounds.card, borders.shadedFern" >
        <h3 v-if="props.title != null" :class="text.h3" >{{ props.title }}</h3>
        <h4 v-if="props.subtitle != null" :class="text.italic" >{{ props.subtitle }}</h4>
        <p :class="text.default" ><slot name="content"></slot></p>
        <UButton v-if="props.link != null" :icon="props.linkIcon" :to="props.link" target="_blank" class="mt-3 text-base bg-fern-600 hover:bg-fern-700" 
            :class="text.defaultDark">
            <slot name="linkContext"></slot>
            <Icon name="majesticons:external-link" size="1.5em" style="color: var(--color-sulphur-200); margin-left: auto;"/>
        </UButton>
    </div>
</template>