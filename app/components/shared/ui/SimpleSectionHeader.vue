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
        class="block md:flex w-full justify-between"
    >
        <h2 v-if="props.title !== ''" class="w-full md:w-auto font-bold text-3xl">
            {{ props.title }}
        </h2>
        <span v-if="props.span !== ''" class="flex items-center gap-1 text-right">
            <span class="inline-block w-3 h-3 bg-main-200 rounded-full" aria-hidden="true"></span> 
            <span class="text-main-200 uppercase text-[12px]"> {{ props.span }}</span>
        </span>
    </div>
</template>