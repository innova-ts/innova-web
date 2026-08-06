<script lang="ts" setup>
import { computed, ref } from "vue";
import { useI18n } from 'vue-i18n';

const { locale, locales: locs, setLocale } = useI18n();

const readLocales = computed(() => {
    return (locs.value as Array<any>).map((item) => ({
        value: item.code,
        label: item.name,
        language: item.language
    }));
});

const handleChangeLocale = async (ev: Event) => {
    const selectedLocale = ((ev.target as HTMLSelectElement).value);
    const item = readLocales.value.find((item) => item.value === selectedLocale);
    if (!item?.value) return;
    const newLocal: string = item.value;
    setLocale(newLocal as any);
};

</script>

<template>
    <select :value="locale" @change="handleChangeLocale($event)">
        <option v-for="(l, idx) in readLocales" :key="idx" :value="l.value">{{ l.label }}</option>
    </select>
</template>