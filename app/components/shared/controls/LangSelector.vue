<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from 'vue-i18n';

const { locale, locales: locs, setLocale } = useI18n();

console.log({locs})

const readLocales = computed(() => {
    return (locs.value as Array<any>).map((item) => ({
        value: item.code,
        label: item.name,
        language: item.language
    }));
});

const handleChangeLocale = async (item) => {
    if (!item?.value) return;
    const newLocal: string = item.value;
    setLocale(newLocal as any);
};

</script>

<template>
    <select :value="locale" @change="handleChangeLocale($event.target.value)">
        <option v-for="(l, idx) in readLocales" :key="idx" :value="l.code">{{ l.name }}</option>
    </select>
</template>