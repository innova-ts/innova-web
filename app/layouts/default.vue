<script lang="ts" setup>
import WebFooter from '~/components/web/default-layout/WebFooter.vue';
import WebHeader from '~/components/web/default-layout/WebHeader.vue';
</script>
<template>
    <div class="layout-container">
        <WebHeader />
        <div class="pt-web-ss min-h-dvh w-full light:bg-bol dark:bg-bod text-tol dark:text-tod">
            <slot />
        </div>
        <WebFooter />
    </div>
</template>