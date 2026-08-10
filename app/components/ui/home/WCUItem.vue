<script lang="ts" setup>
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';

const props = defineProps<{
    titleKey: string
    descriptionKey: string
    icon: string
}>()

</script>
<template>
    <div class="group/wcu-item">
        <div>
            <div class="w-[70px] h-[70px] border-1 border-bod-soft/10 bg-bod-soft/1 dark:border-bol/10 dark:bg-bol/1 m-auto flex items-center justify-center rounded-lg text-4xl group-active/wcu-item:border-main-100 group-hover/wcu-item:border-main-100 group-active/wcu-item:text-main-100 group-hover/wcu-item:text-main-100 group-active/wcu-item:shadow-md group-hover/wcu-item:shadow-md dark:shadow-main-50/30 transition-all duration-200 ease-in">
                <ClientIcon :icon="props.icon" />
            </div>
        </div>
        <div class="px-3 sm:px-10 py-4">
            <h3 class="text-md sm:text-lg py-2 font-bold">{{ $t(titleKey) }}</h3>
            <p class="text-sm sm:text-md text-tol/70 dark:text-tod/80">{{ $t(descriptionKey) }}</p>
        </div>
    </div>
</template>