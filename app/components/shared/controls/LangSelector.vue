<script lang="ts" setup>
import { computed, ref } from "vue";
import { useI18n } from 'vue-i18n';
import DropDownMenu from "~/components/web/forms/DropDownMenu.vue";
import type { DropDownMenuOption } from "~/utils/types/Dropdown";

const { locale, locales: locs, setLocale } = useI18n();

const readLocales = computed<DropDownMenuOption[]>((): DropDownMenuOption[] => {
    return (locs.value as Array<any>).map((item): DropDownMenuOption => ({
        value: item.code,
        label: item.name,
        language: item.language,
    }));
});

const handleChangeLocale = (item: DropDownMenuOption): void => {
    const newLocal: string = item.value;
    setLocale(newLocal as any);
};

</script>

<template>
    <ClientOnly>
        <DropDownMenu :model-value="locale" :options="readLocales" @on-select="handleChangeLocale" />
        <template #fallback>
            <div class="w-20 h-[38px] bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg animate-pulse"></div>
        </template>
    </ClientOnly>
</template>