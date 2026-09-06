<script setup lang="ts">
import SmartImg from '~/components/shared/ui/SmartImg.vue';
import CompanyVM from './CompanyVM.vue';
import { useSeo } from '~/composables/seo/useSeo.ts';
import { useI18n } from "vue-i18n";
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';

const { t } = useI18n();
useSeo({
    title: t('about.seo.title'),
    description: t('about.seo.description')
})
</script>

<template>
    <div class="py-10 md:py-20 border-b border-b-gray-400/20 flex items-center bg-[radial-gradient(circle_at_top_right,var(--color-branding-100)_0%,var(--color-branding-50)_70%)]">
        <div class="container-site">
            <div class="w-full flex flex-col-reverse md:flex-row gap-5">
                <div class="w-full md:w-1/2 flex flex-col gap-5 text-left">
                    <SimpleSectionHeader :label="$t('about.hero.ourIdentity')" />
                    <h1 class="text-5xl md:text-6xl font-bold text-tod"> {{ $t('about.hero.title') }}</h1>
                    <p class="text-tod/80 text-[18px]">{{ $t('about.hero.description') }}</p>
                    <div class="grid grid-cols-2 gap-5 mt-5">
                        <CompanyVM type="mission" :text="$t('about.hero.missionDesc')" />
                        <CompanyVM type="vision" :text="$t('about.hero.visionDesc')" />
                    </div>
                </div>
                <div class="md:w-1/2">
                    <div class="flex w-full h-full">
                        <div class="m-auto w-full">
                            <SmartImg 
                                src="/images/pages/about/hero-img" 
                                :alt="$t('about.hero.title')" 
                                fallback="png" 
                                class="m-auto w-full md:w-[90%] transition-all ease-in-out duration-200 rotate-0 md:rotate-2 rounded-lg shadow-lg shadow-branding-50 md:hover:rotate-0 md:hover:border md:hover:border-main-50 md:hover:shadow-main-50/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>