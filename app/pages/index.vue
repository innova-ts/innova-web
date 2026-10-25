<script lang="ts" setup>

import { navigateTo, useRuntimeConfig } from '#app';
import SmoothLiquid from '~/components/shared/ui/SmoothLiquid.vue';
import HomeServicesGrid from '~/components/ui/home/HomeServicesGrid.vue';
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import Button from '~/components/web/forms/Button.vue';
import { useSeo } from '~/composables/seo/useSeo';
import { useI18n } from "vue-i18n";
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';
import WCU from '~/components/ui/home/WCU.vue';
import TestimonialsList from '~/components/ui/home/TestimonialsList.vue';

const { t } = useI18n();

const config = useRuntimeConfig();

useSeo({
    title: t('home.seo.title'),
    description: t('home.seo.description')
});

</script>
<template>
    <div class="light:bg-bod/3">
        <!-- Presentation -->
        <section class="relative overflow-hidden min-h-[600px] flex">
            <SmoothLiquid>
                <div class="flex h-full">
                    <div class="m-auto w-full container-site py-16 md:py-24">
                        <div class="max-w-3xl">
                            <SimpleSectionHeader :label="$t('home.presentation.label')" />
                            <h1 class="mt-5 text-5xl md:text-6xl font-bold text-bod dark:text-tod">
                                {{ config.public.appName }}
                            </h1>
                            <h2 class="mt-3 text-2xl md:text-3xl font-bold text-tol dark:text-tod/90">
                                {{ $t('home.presentation.title') }}
                                <span class="text-main-100">{{ $t('home.presentation.subtitle') }}</span>
                            </h2>
                            <p class="py-8 text-md sm:text-lg max-w-xl text-tol dark:text-tod/70">
                                {{ $t('home.presentation.description') }}
                            </p>
                            <div class="flex flex-wrap gap-3">
                                <Button size="md" class="light:text-white font-[625]" @click="navigateTo('/contact')">
                                    <span class="flex gap-1 items-center">
                                        {{ $t('home.presentation.startProject') }}
                                        <ClientIcon icon="maki:arrow" />
                                    </span>
                                </Button>
                                <Button variant="outlined" size="md" class="dark:text-white font-[500]" @click="navigateTo('/about#portfolio')">{{ $t('home.presentation.portfolio') }}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </SmoothLiquid>
        </section>

        <!-- Services -->
        <section class="relative overflow-hidden bg-white/60 dark:bg-transparent backdrop-blur-3xl">
            <!-- Radial gradient layers -->
            <div
                class="pointer-events-none absolute inset-0"
                :class="[
                    'dark:bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--color-main-50)_8%,transparent)_0%,transparent_50%)]',
                ]"
                aria-hidden="true"
            />
            <div
                class="pointer-events-none absolute inset-0"
                :class="[
                    'bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--color-main-400)_8%,transparent)_0%,transparent_60%)]',
                    'dark:bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--color-main-100)_5%,transparent)_0%,transparent_50%)]',
                ]"
                aria-hidden="true"
            />
            <!-- Top gradient border -->
            <div
                class="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-main-100/30 to-transparent dark:via-main-50/10"
                aria-hidden="true"
            />
            <div class="relative container-site py-16 lg:py-20">
                <HomeServicesGrid />
            </div>
        </section>

        <!-- Why choose us -->
        <section class="relative bg-bol-1 lg:py-20 dark:bg-bod-1 z-10">
            <div
                class="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(-45deg,#a1a1aa0f,#a1a1aa0f_2px,transparent_2px,transparent_16px)] dark:bg-[repeating-linear-gradient(-45deg,#ffffff05,#ffffff05_2px,transparent_2px,transparent_16px)]"
            />
            <div class="container-site relative z-10 py-12 lg:py-16">
                <WCU />
            </div>
        </section>

        <!-- Clients -->
        <section class="relative overflow-hidden bg-white/70 dark:bg-transparent">
            <!-- Top gradient border -->
            <div
                class="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-main-100/30 to-transparent dark:via-main-50/10"
                aria-hidden="true"
            />
            <div class="container-site max-w-6xl relative overflow-x-clip py-16 lg:py-20">
                <TestimonialsList />
            </div>
        </section>
    </div>
</template>