<script lang="ts" setup>
const props = defineProps<{
    length: 2 | 3
}>()
</script>
<template>
    <div :class="['grid grid-cols-2 relative', length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2']">
        <div class="hidden sm:flex items-center justify-center absolute w-full top-11.25">
            <div 
                v-if="length === 3"
                :class="[
                    'h-[2px] z-[0] pointer-events-none w-[60%] m-auto', 
                    'dark:bg-[linear-gradient(90deg,transparent_0%,color-mix(in_oklab,var(--color-main-100)_50%,transparent)_15%,transparent_40%,transparent_60%,color-mix(in_oklab,var(--color-main-100)_50%,transparent)_85%,transparent_100%)]',
                    'light:bg-[linear-gradient(90deg,transparent_0%,var(--color-main-50)_15%,transparent_40%,transparent_60%,var(--color-main-50)_85%,transparent_100%)]'
                ]"
            ></div>
            <div
                v-if="length === 2" 
                :class="[
                    'h-[2px] z-[0] pointer-events-none w-[35%] m-auto', 
                    'dark:bg-[linear-gradient(90deg,transparent_0%,color-mix(in_oklab,var(--color-main-100)_50%,transparent)_50%,transparent_100%)]',
                    'light:bg-[linear-gradient(90deg,transparent_0%,var(--color-main-50)_50%,transparent_100%)]'
                ]"
            ></div>
        </div>
        <slot name="items" />
    </div>
</template>