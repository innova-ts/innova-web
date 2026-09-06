<script setup lang="ts">
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';

const props = defineProps<{
    icon: string;
    title: string;
    description: string;
}>();
</script>

<template>
    <div
        class="
            group/value-item relative h-full overflow-hidden rounded-2xl border p-3.5
            border-main-100/20
            bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-branding-500)_18%,transparent),var(--color-zinc-100)_65%)]

            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:border-main-100/50
            hover:shadow-xl
            hover:shadow-main-100/5

            dark:border-main-50/15
            dark:bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-main-50)_10%,transparent),transparent_65%)]
            dark:hover:border-main-50/40
            dark:hover:bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-main-50)_18%,transparent),transparent_65%)]
            dark:hover:shadow-main-50/10
        "
    >
        <div
            class="
                pointer-events-none absolute -right-12 -top-12
                size-28 rounded-full
                bg-main-100/5
                blur-3xl
                transition-all duration-500
                group-hover/value-item:scale-150
                group-hover/value-item:bg-main-100/10
            "
            aria-hidden="true"
        />

        <div class="relative flex h-full flex-col items-center text-center">
            <div class="m-auto">
                <div class="
                        flex size-14 shrink-0 items-center justify-center
                        rounded-lg border m-auto

                        border-bod-soft/20
                        bg-white/70
                        text-tol/70
                        shadow-sm

                        transition-all duration-300 ease-out

                        group-hover/value-item:-translate-y-1---
                        group-hover/value-item:scale-105
                        group-hover/value-item:border-main-100/50
                        group-hover/value-item:bg-main-100/5
                        group-hover/value-item:text-main-100
                        group-hover/value-item:shadow-lg
                        group-hover/value-item:shadow-main-100/10

                        dark:border-bol/10
                        dark:bg-bol/10
                        dark:text-tod/70
                        dark:group-hover/value-item:bg-main-50/10
                        dark:group-hover/value-item:text-main-100
                    "
                >
                    <ClientIcon
                        :icon="props.icon"
                        class="text-3xl transition-transform duration-300 group-hover/value-item:scale-110"
                    />
                </div>
                <div class="mt-2">
                    <h4 class="text-lg font-semibold tracking-tight
                            text-tol
                            transition-colors duration-300
                            group-hover/value-item:text-main-100
                            dark:text-tod
                            dark:group-hover/value-item:text-main-100
                        ">
                        {{ props.title }}
                    </h4>
                    <p class="mx-auto max-w-62.5 mt-0.5 text-xs leading-relaxed text-tol/60 dark:text-tod/60">
                        {{ props.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>