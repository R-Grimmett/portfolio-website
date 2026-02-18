<script setup lang="ts">
import {footerStyles} from './styles';



</script>

<template>
    <footer class="flex flex-col sticky top-full">
        <div class="flex flex-col gap-2">
            <h4 :class="footerStyles.header" >Socials:</h4>
            <ul class="flex flex-row">
                <li><a href="#">Example Link</a></li>
            </ul>
        </div>
        <div class="flex flex-col gap-2">
            <h4>Site Navigation</h4>
            <ul class="flex flex-row">
                <li><a href="#">Example Link</a></li>
            </ul>
        </div>
        <div>COPYRIGHT INFO ETC.</div>
    </footer>
</template>