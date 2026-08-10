<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    name: string,
    position: string,
    statement: string
}>()

const initials = computed(() => {
    const names: string[] = props.name.split(' ').filter(Boolean);
    if(names.length === 0) return '-';
    if (names.length === 1) {
        return (names[0] as string).charAt(0).toUpperCase();
    }

    const firstInitials = (names[0] as string).charAt(0).toUpperCase();
    const lastInitials = (names[names.length - 1] as string).charAt(0).toUpperCase();
    return `${firstInitials}${lastInitials}`;
})

</script>
<template>
    <figure class="bg-white dark:bg-zinc-800 border-l-6 border-1 border-gray-200/90 dark:border-tol/70 p-4 rounded-md flex flex-col justify-between group/testimonial hover:border-l-main-100 transition-all duration-200">
        <blockquote class="text-tol/70 dark:text-tod/80">"{{ props.statement }}"</blockquote>
        <div>
            <div class="flex">
                <div class="p-2 pt-4">
                    <span class="rounded-lg h-[45px] w-[45px] border-1 flex items-center justify-center border-gray-200/90 dark:border-tol/70 group-hover/testimonial:border-main-100 transition-all duration-200">{{ initials }}</span>
                </div>
                <div class="flex-1 flex flex-col justify-center">
                    <figcaption>
                        <span class="block">{{ props.name }}</span>
                        <small class="block text-tol/70 dark:text-tod/80">{{ props.position }}</small>
                    </figcaption>
                </div>
            </div>
        </div>
    </figure>
</template>