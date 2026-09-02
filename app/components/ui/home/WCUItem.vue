<script lang="ts" setup>
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';

defineProps<{
    titleKey: string
    descriptionKey: string
    icon: string
}>()
</script>

<template>
    <div :class="[
        'relative z-10 py-8 sm:py-3 border-[0.5px] border-bod/5 dark:border-bol/5',
        'hover:border-main-50/50 focus:border-main-50/50',
        'sm:border-0! sm:hover:border-transparent! sm:focus:border-transparent!',
        'transition-all group/wcu-item outline-transparent!',
        $attrs.class
    ]" tabindex="0">
        <article class="text-center outline-transparent!">
            <!-- Icon -->
            <div class="relative mx-auto w-fit">
                <!-- subtle glow -->
                <div class="absolute inset-0 rounded-xl bg-main-100/20 blur-xl opacity-0 scale-75 transition-all duration-300 group-hover/wcu-item:opacity-100 group-focus/wcu-item:opacity-100 group-hover/wcu-item:scale-100 group-focus/wcu-item:scale-100 sr-hidden"></div>

                <!-- icon container -->
                <div class="relative flex h-[70px] w-[70px] items-center justify-center rounded-xl border border-bod-soft/20 bg-white/80 text-4xl text-tol/80 shadow-sm transition-all duration-300 ease-out group-hover/wcu-item:-translate-y-1 group-focus/wcu-item:-translate-y-1 group-hover/wcu-item:border-main-100 group-focus/wcu-item:border-main-100 group-hover/wcu-item:text-main-100 group-focus/wcu-item:text-main-100 group-hover/wcu-item:shadow-lg group-focus/wcu-item:shadow-lg dark:border-bol/10 dark:bg-bol/5 dark:text-tod/70 dark:group-hover/wcu-item:text-main-100 dark:group-focus/wcu-item:text-main-100 dark:group-hover/wcu-item:shadow-main-50/10 dark:group-focus/wcu-item:shadow-main-50/10">
                    <ClientIcon :icon="icon" />
                </div>
            </div>

            <!-- Content -->
            <div class="mx-auto mt-5 max-w-sm px-4 sm:px-6">
                <h3 class="text-base font-semibold tracking-tight text-zinc-900 dark:text-white text-[17px]">
                    {{ $t(titleKey) }}
                </h3>
                <p class="mt-2 text-md leading-relaxed text-tol/70 dark:text-tod/70">
                    {{ $t(descriptionKey) }}
                </p>
            </div>
        </article>
    </div>
</template>