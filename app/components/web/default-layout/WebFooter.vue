<script lang="ts" setup>
import { useRuntimeConfig } from '#app';
import { computed, onMounted, reactive, ref } from 'vue';
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';
import GlobalTransition from '../utils/GlobalTransition.vue';
import SmartImg from '~/components/shared/ui/SmartImg.vue';

const currentYear = ref<number | null>(null);
onMounted(() => { currentYear.value = new Date().getFullYear(); });
const config = useRuntimeConfig();
const appNameFirstLetter = computed(() => config.public.appName?.trim()?.charAt(0)?.toUpperCase() || "")
const filterKey = 'serviceType';
const routes = reactive([
    {
        path: `${filterKey}=custom-software`,
        label: "navigation.footer.customSoftware"
    },
    {
        path: `${filterKey}=web-applications`,
        label: "navigation.footer.webApps"
    },
    {
        path: `${filterKey}=mobile-applications`,
        label: "navigation.footer.mobileApps"
    },
]);
const InterestLinks = reactive([
    {
        path: `policy/privacy`,
        label: "navigation.footer.privacyPolicy"
    },
    {
        path: `site-map`,
        label: "navigation.footer.sitemap"
    },
])
</script>
<template>
    <footer class="dark:bg-bod/98 text-tol dark:text-tod font-sans border-t border-bod-soft/15 dark:border-bod-soft/80">
        <div class="container-site px-6 py-10 lg:px-8">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-8">
                <div class="space-y-6 pr-0 lg:pr-8 col-span-2 sm:col-span-2">
                    <div class="flex items-center gap-2">
                        <div class="h-6 w-6 rounded bg-slate-100 flex items-center justify-center">
                            <span class="text-tol font-bold text-xs">
                                <SmartImg 
                                    src="/branding/isotipo-sm" 
                                    :alt="$t('common.brand.logoAlt', {appName: config.public.appName})" 
                                    fallback="png" 
                                    width="20px"
                                />
                            </span>
                        </div>
                        <span class="text-lg font-semibold tracking-tight">
                            <span class="text-main-100 font-bold">{{ config.public.appName }}</span>
                        </span>
                    </div>
                    <p class="text-sm text-tol/70 dark:text-tod/70 leading-relaxed max-w-sm">
                        <ClientOnly>
                            <span>{{ $t('common.footer.copyRightMessage', {
                                year: currentYear,
                                appName: config.public.appName
                            }) }}</span> - 
                            <template #fallback>
                                <span>{{ config.public.appName }}</span> -
                            </template>
                        </ClientOnly>
                        <span>{{ $t('common.brand.slogan') }}</span>
                    </p>
                    <div class="block">
                        <span class="text-sm text-tol/70 dark:text-tod/70">
                            {{ $t('common.footer.mailUs') }} 
                            <ClientOnly>
                                <a :href="`mailto:${config.public.businessEmail}`" class="text-main-100" rel="noopener noreferrer" aria-hidden="true">
                                    {{ config.public.businessEmail }}
                                </a>
                            </ClientOnly>
                        </span>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span class="text-sm text-tol/70 dark:text-tod/70">{{ $t('common.footer.socialNetworks') }}</span>
                        <ul class="flex flex-row gap-3">
                            <li>
                                <a :href="config.public.socialNetworks.facebook" target="_blank" rel="noopener noreferrer" aria-hidden="true" class="text-tol/70 dark:text-tol hover:text-main-100 transition-all" >
                                    <ClientIcon icon="prime:facebook" class="text-3xl" />
                                </a>
                            </li>
                            <li>
                                <a :href="config.public.socialNetworks.instagram" target="_blank" rel="noopener noreferrer" aria-hidden="true" class="text-tol/70 dark:text-tol hover:text-main-100 transition-all" >
                                    <ClientIcon icon="prime:instagram" class="text-3xl" />
                                </a>
                            </li>
                            <li>
                                <a :href="config.public.socialNetworks.tiktok" target="_blank" rel="noopener noreferrer" aria-hidden="true" class="text-tol/70 dark:text-tol hover:text-main-100 transition-all" >
                                    <ClientIcon icon="prime:tiktok" class="text-3xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="space-y-4 col-span-1">
                    <ul class="space-y-2 w-full decoration-violet-700-">
                        <li>
                            <h2 class="text-md font-bold text-main-200">{{ $t('common.footer.titles.services') }}</h2>
                        </li>
                        <li v-for="route, routeIndex in routes" :key="`route-${routeIndex}`">
                            <NuxtLinkLocale 
                                :to="`/services?${route.path}`" 
                                class="text-sm text-slate-400 hover:text-main-100 transition-colors duration-200 inline-block cursor-pointer"
                            >
                                {{ $t(route.label) }}
                            </NuxtLinkLocale>
                        </li>
                    </ul>
                </div>
                <div class="space-y-4 col-span-1">
                    <ul class="space-y-2 w-full decoration-violet-700-">
                        <li>
                            <h2 class="text-md font-bold text-main-200">{{ $t('common.footer.titles.legal') }}</h2>
                        </li>
                        <li v-for="il, ilIndex in InterestLinks" :key="`policy-${ilIndex}`">
                            <NuxtLinkLocale 
                                :to="il.path" 
                                class="text-sm text-slate-400 hover:text-main-100 transition-colors duration-200 inline-block cursor-pointer"
                            >
                                {{ $t(il.label) }}
                            </NuxtLinkLocale>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>