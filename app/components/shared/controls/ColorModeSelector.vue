    <script lang="ts" setup>
import { computed } from 'vue';
import { useColorMode } from '#imports';
import DropDownMenu from '~/components/web/forms/DropDownMenu.vue';
import type { DropDownMenuOption } from '~/utils/types/Dropdown';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const colorMode = useColorMode();

const themes = computed<DropDownMenuOption[]>((): DropDownMenuOption[] => [
    { value: 'system', label: t('common.theme.system'), icon: '💻' },
    { value: 'light', label: t('common.theme.light'), icon: '☀️' },
    { value: 'dark', label: t('common.theme.dark'), icon: '🌙' }
]);


</script>
<template>
    <ClientOnly>
        <DropDownMenu v-model="colorMode.preference" :options="themes"/>
        <template #fallback>
            <div
                class="w-40 h-[38px] bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg animate-pulse">
            </div>
        </template>
    </ClientOnly>
</template>