<script lang="ts" setup>
import { useSeo } from '~/composables/seo/useSeo';
import { useI18n } from "vue-i18n";
import AboutHero from '~/components/ui/about/AboutHero.vue';
import OurTeam from '~/components/ui/about/OurTeam.vue';

const { t } = useI18n();

useSeo({
    title: t('about.seo.title'),
    description: t('about.seo.description')
})

</script>
<template>
    <div>
        <!-- Who are we -->
        <AboutHero />

       <!-- Our team -->
        <div class="container-site py-13">
            <OurTeam />
        </div>

        <!-- Our values -->
         <div></div>

        <!--  Quantitative data -->
        <div></div>

        <!-- Policies -->
        <div></div>
    </div>
</template>