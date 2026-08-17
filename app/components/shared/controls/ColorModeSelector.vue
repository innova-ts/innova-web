<script lang="ts" setup>
import { computed } from 'vue';
import { useColorMode } from '#imports';
import ClientIcon from '../ui/ClientIcon.vue';

const colorMode = useColorMode();

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const ariaLabelKey = computed(() => 
    `common.theme.ariaLabel.${colorMode.value}`
);

const checkIcon = computed(() => {
    return colorMode.value === 'dark' ? 'solar:moon-linear' : 'solar:sun-linear';
});

</script>
<template>
    <ClientOnly>
        <button
            type="button"
            role="switch"
            @click="toggleTheme"
            :aria-label="$t(ariaLabelKey)"
            class="relative inline-flex w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-gray-200 dark:bg-zinc-700/50"
        >
            <span
                class="pointer-events-none inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white dark:bg-zinc-900 shadow-md ring-0 transition duration-200 ease-in-out"
                :class="colorMode.preference === 'dark' ? 'translate-x-5' : 'translate-x-0'"
            >
                <ClientIcon :icon="checkIcon" class="text-lg leading-none text-main-500 dark:text-main-100" />
            </span>
        </button>
        <template #fallback>
            <div class="w-10 h-10 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg animate-pulse" />
        </template>
    </ClientOnly>
</template>