<script lang="ts" setup>

const props = defineProps<{
    titleKey: string
    descriptionKey: string
    icon?: string
}>()

</script>
<template>
    <div>
        <div class="relative z-[10] w-[70px] h-[70px] border-1 border-bod-soft/10 bg-bod-soft/1 dark:border-bol/10 dark:bg-bol/1 m-auto flex items-center justify-center rounded-lg">
            I
        </div>
    </div>
    <div class="px-10 py-4">
        <h3 class="text-md sm:text-lg py-2 font-bold">{{ $t(titleKey) }}</h3>
        <p class="text-sm sm:text-md text-tol/70 dark:text-tod/80">{{ $t(descriptionKey) }}</p>
    </div>
</template>