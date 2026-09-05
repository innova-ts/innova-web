<script lang="ts" setup>
import { useSeo } from '~/composables/seo/useSeo';
import { useI18n } from "vue-i18n";
import { useRuntimeConfig } from '#app';

const { t } = useI18n();

const config = useRuntimeConfig();

useSeo({
    title: t('about.seo.title'),
    description: t('about.seo.description')
})
</script>
<template>
    <div>
        <!-- Who are we -->
        <div class="py-10 border-b-1 border-b-gray-400/20">
            <div class="container-site">
                <h1 class="text-4xl font-bold"> {{ $t('about.whoAreWe.title', {
                    name: config.public.appName
                }) }}</h1>

                <p class="text-xl text-tol/85 dark:text-tod/80">{{ $t('about.whoAreWe.description') }} Holaa</p>

                <div class="grid grid-cols-2">
                    <section>Hola</section>
                    <section>Adios</section>
                </div>
            </div>
        </div>

       <!--  Quantitative data -->
        <div></div>

        <!-- Our values -->
         <div></div>

        <!-- Our team -->
        <div></div>

        <!-- Policies -->
        <div></div>
    </div>
</template>