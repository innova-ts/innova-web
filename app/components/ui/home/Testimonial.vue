<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    name: string,
    position: string,
    statement: string
}>()

const initials = computed(() => {
    const names: string[] = props.name.split(' ').filter(Boolean);
    if (names.length === 0) return '-';
    if (names.length === 1) {
        return (names[0] as string).charAt(0).toUpperCase();
    }

    const firstInitials = (names[0] as string).charAt(0).toUpperCase();
    const lastInitials = (names[names.length - 1] as string).charAt(0).toUpperCase();
    return `${firstInitials}${lastInitials}`;
})
</script>

<template>
    <figure class="group/testimonial relative flex flex-col justify-between overflow-hidden rounded-xl border border-t-[5px] border-t-main-100 border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-main-100 hover:shadow-md dark:border-zinc-700/60 dark:border-t-main-100 dark:bg-zinc-800/80 dark:hover:border-main-100/80" tabindex="0">
        <span class="pointer-events-none absolute right-2 top-2 select-none text-7xl font-serif text-zinc-100 transition-colors duration-300 group-hover/testimonial:text-main-100/10 dark:text-zinc-700/30 dark:group-hover/testimonial:text-main-100/50 dark:group-focus/testimonial:text-main-100/20" aria-hidden="true">
            “
        </span>
        <blockquote class="relative z-10 mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
            "{{ props.statement }}"
        </blockquote>

        <figcaption class="relative z-10 border-t border-zinc-100 pt-4 dark:border-zinc-700/50">
            <div class="flex items-center gap-3.5">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-700 shadow-inner transition-colors duration-300 group-hover/testimonial:bg-main-100/10 group-hover/testimonial:text-main-100 dark:bg-zinc-700 dark:text-zinc-200 dark:group-hover/testimonial:bg-main-100/20 dark:group-hover/testimonial:text-main-100">
                    {{ initials }}
                </div>
                <div class="min-w-0 flex-1">
                    <span class="block truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {{ props.name }}
                    </span>
                    <small class="block truncate text-xs text-zinc-500 dark:text-zinc-400">
                        {{ props.position }}
                    </small>
                </div>
            </div>
        </figcaption>
    </figure>
</template>