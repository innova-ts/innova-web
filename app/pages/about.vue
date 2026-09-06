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
        <div 
            :class="[
                'dark:bg-bod/80',
                'dark:bg-[radial-gradient(circle_at_top_left,color-mix(in_oklab,var(--color-branding-100)_40%,transparent)_0%,color-mix(in_oklab,var(--color-branding-50)_10%,transparent)_35%)]',
            ]"
        >
            <div class="container-site py-13">
                <ValuesGrid />
            </div>
        </div>

        <!-- Policies -->
        <div></div>
    </div>
</template>