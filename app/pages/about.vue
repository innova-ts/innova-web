<script lang="ts" setup>
import { useSeo } from '~/composables/seo/useSeo';
import { useI18n } from "vue-i18n";
import AboutHero from '~/components/ui/about/AboutHero.vue';
import OurTeam from '~/components/ui/about/OurTeam.vue';
import Counts from '~/components/ui/about/metrics/Counts.vue';

const { t } = useI18n();

useSeo({
    title: t('about.seo.title'),
    description: t('about.seo.description')
})

</script>
<template>
    <div>
        <!-- Hero -->
        <AboutHero />

       <!-- Our team -->
        <div class="container-site py-13">
            <OurTeam />
        </div>

        <!-- Metrics -->
        <div class="relative bg-zinc-300/35 lg:py-30 [clip-path:polygon(0_4vw,100%_0,100%_calc(100%-4vw),0_100%)] dark:bg-branding-50/20">
            <div 
                class="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,#a1a1aa0f,#a1a1aa0f_2px,transparent_2px,transparent_16px)] dark:bg-[repeating-linear-gradient(-45deg,#ffffff05,#ffffff05_2px,transparent_2px,transparent_16px)]"
            />
            <div class="container-site">
                <Counts />
            </div>
        </div>

        <!-- <div class="container-site">
                <Counts />
            </div> -->

        <!--  Quantitative data -->
        <div></div>

        <!-- Policies -->
        <div></div>
    </div>
</template>