<script lang="ts" setup>
import { useRuntimeConfig } from '#app';
import { ref } from 'vue';
import ColorModeSelector from '~/components/shared/controls/ColorModeSelector.vue';
import LangSelector from '~/components/shared/controls/LangSelector.vue';
import { useNavigationLinks } from '~/composables/menu/useNavigationLinks';

const { routes } = useNavigationLinks();
const config = useRuntimeConfig();
const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
}

</script>

<template>
    <header class="fixed top-0 left-0 z-50 h-web-ss w-full backdrop-blur-md bg-white/80 dark:bg-bod/80 border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
        <nav class="h-full container-site flex items-center justify-between">
            <div class="flex h-full z-60">
                <ul :class="[
                    'inset-y-0 left-0 z-40 flex flex-col md:flex-row h-screen md:h-full w-4/5 max-w-sm md:w-auto bg-white dark:bg-zinc-900 md:bg-transparent dark:md:bg-transparent p-0 md:p-0 pt-10 md:pt-0 gap-3 md:gap-2 border-r md:border-r-0 border-gray-200 dark:border-zinc-800 shadow-xl md:shadow-none transition-transform duration-300 md:transition-none md:translate-x-0 fixed md:relative', 
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                ]">
                    <li class="h-12 md:h-full">
                        <!-- Logo -->
                        <span class="flex h-12 h-full justify-center items-center dark:text-white">
                            <strong>
                                {{ config.public.appName }}
                            </strong>
                        </span>
                    </li>
                    <li v-for="route, index in routes" :key="index" class="h-12 md:h-full group/item-text">
                        <NuxtLinkLocale 
                            :to="route.path"
                            @click="isOpen = false"
                            class="flex w-auto h-full items-center md:justify-center px-4 md:px-4 border-l-4 md:border-l-0 md:border-b border-transparent dark:hover:bg-main-950/20 transition-all text-base md:text-sm font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap group"
                        >
                            <span class="border-transparent border-b-2 transition-all group-hover/item-text:border-main-100/50 dark:group-hover/item-text:border-main-300">{{ $t(route.label) }}</span>
                        </NuxtLinkLocale>
                    </li>
                    <li class="justify-end items-right gap-2 z-50 flex md:hidden absolute bottom-0 right-0 p-4">

                        <LangSelector :auto-detect="true" />
                        <ColorModeSelector :auto-detect="true" />
                    </li>
                 </ul>
                 <div class="flex-1 flex justify-start items-center md:hidden">
                    <button @click="toggleMenu" type="button"
                        class="flex flex-col justify-center items-center w-8 h-8 rounded-lg p-1 z-50 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                        aria-label="Toggle menu">
                        <span
                            :class="['h-0.5 w-6 bg-main-600 dark:bg-main-400 rounded-full transition-all duration-300', isOpen ? 'rotate-45 translate-y-2' : '']"></span>
                        <span
                            :class="['h-0.5 w-6 bg-main-600 dark:bg-main-400 rounded-full my-1 transition-all duration-300', isOpen ? 'opacity-0' : '']"></span>
                        <span
                            :class="['h-0.5 w-6 bg-main-600 dark:bg-main-400 rounded-full transition-all duration-300', isOpen ? '-rotate-45 -translate-y-1' : '']"></span>
                    </button>
                </div>
            </div>
            <ul class="justify-end items-right gap-2 z-50 hidden md:flex">
                <!-- Additional controls -->
                <LangSelector />
                <ColorModeSelector />
            </ul>
        </nav>
    </header>
</template>
<style scoped>
a.router-link-active {
    color: var(--color-main-100);
}
a.router-link-active span {
    border-color: color-mix(in oklab, var(--color-main-100) 50%, transparent);
}
</style>