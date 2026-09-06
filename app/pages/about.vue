<script lang="ts" setup>
import { useSeo } from '~/composables/seo/useSeo';
import { useI18n } from "vue-i18n";
import AboutHero from '~/components/ui/about/AboutHero.vue';
import OurTeam from '~/components/ui/about/OurTeam.vue';
import Counts from '~/components/ui/about/metrics/Counts.vue';
import ValuesGrid from '~/components/ui/about/values/ValuesGrid.vue';

const { t } = useI18n();

useSeo({
    title: t('about.seo.title'),
    description: t('about.seo.description')
})

</script>
<template>
    <div class="light:bg-bod/3">
        <!-- Hero -->
        <AboutHero />

       <!-- Our team -->
        
        <div class="container-site py-13">
            <OurTeam />
        </div>

        <!-- Metrics -->
        <div class="relative bg-bol-1 lg:py-20 dark:bg-bod-1 z-10">
            <div 
                class="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,#a1a1aa0f,#a1a1aa0f_2px,transparent_2px,transparent_16px)] dark:bg-[repeating-linear-gradient(-45deg,#ffffff05,#ffffff05_2px,transparent_2px,transparent_16px)]"
            />
            <div class="container-site">
                <Counts />
            </div>
        </div>

        <!--  Elementary values -->
        <div class="relative overflow-hidden">
            <!-- Noise texture layer -->
            <div 
                class="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(120deg,#a1a1aa06,#a1a1aa06_1px,transparent_1px,transparent_20px)] dark:bg-[repeating-linear-gradient(120deg,#ffffff04,#ffffff04_1px,transparent_1px,transparent_20px)]"
                aria-hidden="true"
            />
            <!-- Radial gradient layers -->
            <div 
                class="pointer-events-none absolute inset-0"
                :class="[
                    'bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--color-branding-100)_30%,transparent)_0%,transparent_50%)]',
                    'dark:bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--color-main-50)_8%,transparent)_0%,transparent_50%)]',
                ]"
                aria-hidden="true"
            />
            <div 
                class="pointer-events-none absolute inset-0"
                :class="[
                    'bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--color-branding-500)_15%,transparent)_0%,transparent_50%)]',
                    'dark:bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--color-main-100)_5%,transparent)_0%,transparent_50%)]',
                ]"
                aria-hidden="true"
            />
            <!-- Top gradient border -->
            <div 
                class="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-main-100/20 to-transparent dark:via-main-50/10"
                aria-hidden="true"
            />
            <div class="relative container-site py-16 lg:py-20">
                <ValuesGrid />
            </div>
        </div>

        <!-- Policies -->
        <div></div>
    </div>
</template>