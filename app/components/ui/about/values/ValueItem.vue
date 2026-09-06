<script setup lang="ts">
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';
const props = defineProps<{
    icon: string,
    title: string,
    description:string
}>()
</script>

<template>
    <!-- radial-gradient(circle, color-mix(in oklab, var(--color-main-100) 25%, transparent) 0%, transparent 70%), -->
    <div
        :class="[
            'group/value-item relative h-full overflow-hidden rounded-2xl border p-6',
            'border-main-100/20 bg-white/60',
            'transition-all duration-300 ease-out',
            'hover:-translate-y-1 hover:border-main-100/50 hover:shadow-xl hover:shadow-main-100/5',
            'dark:border-main-50/15 dark:bg-bol/5',
            'dark:hover:border-main-50/40 dark:hover:shadow-main-50/10',

            // Light gradient
            'bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-branding-500)_30%,transparent),color-mix(in_oklab,var(--color-zinc-400)_5%,transparent))]',

            // Dark gradient
            'dark:bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-main-50)_10%,transparent),transparent_65%)]',

            // Hover gradients
            'hover:bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-branding-500)_20%,transparent),transparent_65%)]',
            'dark:hover:bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-main-50)_20%,transparent),transparent_65%)]',
        ]"
    >
        <div class="relative flex h-full w-full flex-col items-center text-center">

            <div class="m-auto">
                <!-- Icon -->
                <div class="h-9 w-9 shrink-0 m-auto flex h-20 w-20
                        items-center justify-center
                        rounded-2xl
                        border border-bod-soft/20
                        bg-white/70
                        text-2xl text-tol/70
                        shadow-sm

                        transition-all duration-300 ease-out
                        group-hover/value-item:-translate-y-1
                        group-hover/value-item:border-main-100/50
                        group-hover/value-item:bg-zinc-100/10
                        group-hover/value-item:text-main-100
                        group-hover/value-item:shadow-lg
                        group-hover/value-item:shadow-main-100/10

                        dark:border-bol/10
                        dark:bg-bol/10
                        dark:text-tod/70
                        dark:group-hover/value-item:bg-main-50/10
                        dark:group-hover/value-item:text-main-100">

                        <ClientIcon
                            :icon="props.icon"
                            class="text-5xl"
                        />
                </div>
        
        
    

                <!-- Content -->
                <div class="mt-5">
                    <h4
                        class="
                            text-lg font-semibold tracking-tight
                            text-tol
                            transition-colors duration-300
                            group-hover/value-item:text-main-100
                            dark:text-tod
                            dark:group-hover/value-item:text-main-100
                        "
                    >
                        {{ props.title }}
                    </h4>

                    <p
                        class="
                            mt-2 text-sm leading-relaxed
                            text-tol/60
                            dark:text-tod/60
                        "
                    >
                        {{ props.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>