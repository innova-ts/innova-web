<script lang="ts" setup>
defineOptions({
    inheritAttrs: false
})

const props = withDefaults(defineProps<{
    label: string,
    title?: string,
    span?: string,
}>(), {
    title: '',
    span: ''
})

</script>
<template>
    <div class="flex items-center gap-2 w-full">
        <span class="w-8 h-px bg-main-200" aria-hidden="true"></span>
        <span class="text-main-200 uppercase font-bold text-[12px]">{{ label }}</span>
    </div>
    <div 
        v-if="props.title !== '' || props.span !== ''"
        class="block md:flex w-full justify-between pb-5 border-b border-b-bod/10 dark:border-b-bol/10"
    >
        <h2 v-if="props.title !== ''" class="w-full md:w-auto font-bold text-3xl">
            {{ props.title }}
        </h2>
        <span v-if="props.span !== ''" class="flex items-center gap-2 text-right mt-0 sm:mt-3">
            <span class="inline-block w-2 h-2 bg-main-200 rounded-full animate-pulse shadow-lg shadow-main-200/50" aria-hidden="true"></span> 
            <span class="text-main-200 uppercase text-[12px]">{{ props.span }}</span>
        </span>
    </div>
</template>