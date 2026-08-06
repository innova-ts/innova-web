<script lang="ts" setup>
import { useColorMode } from '#imports';

const colorMode = useColorMode();

const themes = [
    { value: 'system', label: 'common.theme.system', icon: '💻' },
    { value: 'light', label: 'common.theme.light', icon: '☀️' },
    { value: 'dark', label: 'common.theme.dark', icon: '🌙' }
];
</script>
<template>
    <ClientOnly>
        <select v-model="colorMode.preference">
            <template v-for="(item, index) in themes" :key="index">
                <option :value="item.value">{{ item.icon }} {{ $t(item.label) }}</option>
            </template>
        </select>
        <template #fallback>
            <div
                class="w-40 h-[38px] bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg animate-pulse">
            </div>
        </template>
    </ClientOnly>
</template>