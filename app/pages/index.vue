<script lang="ts" setup>
import { navigateTo, useRuntimeConfig } from '#app';
import SmoothLiquid from '~/components/shared/ui/SmoothLiquid.vue';
import HomeServicesGrid from '~/components/ui/home/HomeServicesGrid.vue';
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
    <div>
        <!-- Presentation -->
        <section class="relative overflow-hidden min-h-[550px] flex">
            <SmoothLiquid>
                <div class="flex h-full">
                    <div class="m-auto container-site">
                        <h1 class="text-5xl sm:text-6xl text-center font-bold text-main-200 dark:text-main-50">{{ config.public.appName }}</h1>
                        <h2 class="text-xl sm:text-3xl text-center font-bold w-full sm:w-[80%] md:w-[60%] lg:w-[40%] m-auto">
                            {{ $t('home.presentation.title') }} {{ $t('home.presentation.subtitle') }}
                        </h2>
                        <p class="m-auto text-md sm:text-xl text-center py-8 w-[80%] sm:w-[60%]">{{ $t('home.presentation.description') }}</p>
                        <div class="flex">
                            <div class="m-auto flex flex-col sm:flex-row gap-2">
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
        <section class="min-h-[300px] bg-white dark:bg-main-900/4">
            <div class="container-site py-10">
                <HomeServicesGrid />
            </div>
        </section>

        <!-- Why choose us -->
        <section class="relative z-10 bg-bod-soft/1 border-t-4 border-b border-main-900/10 dark:border-main-400 shadow-bod/7 dark:shadow-zinc-800 shadow-xl">
            <div class="container-site py-0 sm:py-10 px-0! sm:px-4 text-center relative mt-10 sm:my-15">
                <WCU />
            </div>
        </section>

        <!-- Clients -->
        <section class="relative bg-gradient-to-b from-zinc-50 via-zinc-100/50 to-zinc-50 py-16 dark:from-bod-soft/20 dark:via-bod-soft/40 dark:to-bod-soft/20 sm:py-24">
            <div class="container-site max-w-6xl relative overflow-x-clip">
                <TestimonialsList />
            </div>
        </section>
    </div>
</template>