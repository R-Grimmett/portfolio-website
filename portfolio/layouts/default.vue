<script setup lang="ts">
import OFooter from '../components/general/OFooter.vue';
import ONavigation from '../components/general/ONavigation.vue';

</script>

<template>
  <NuxtRouteAnnouncer />
  <div>
    <ONavigation />
    <slot />
    <OFooter />
  </div>
</template>
