<script lang="ts" setup>
import { useRuntimeConfig } from '#app';
import { computed, reactive } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
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
const policies = reactive([
    {
        path: `policy/privacy`,
        label: "navigation.footer.privacyPolicy"
    }
])
</script>
<template>
    <footer class="dark:bg-bod/98 text-tol dark:text-tod font-sans border-t border-bod-soft/15 dark:border-bod-soft/80">
        <div class="container-site px-6 py-10 lg:px-8">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-8">
                <div class="space-y-6 pr-0 lg:pr-8 col-span-2 sm:col-span-2">
                    <div class="flex items-center gap-2">
                        <div class="h-6 w-6 rounded bg-slate-100 flex items-center justify-center">
                            <span class="text-tol font-bold text-xs">{{ appNameFirstLetter }}</span>
                        </div>
                        <span class="text-lg font-semibold tracking-tight">
                            <span class="text-main-100 font-normal">{{ config.public.appName }}</span>
                        </span>
                    </div>
                    <p class="text-sm text-tol/70 dark:text-tod/70 leading-relaxed max-w-sm">
                        <span>{{ $t('common.footer.copyRightMessage', {
                            year: currentYear,
                            appName: config.public.appName
                        }) }}</span> - 
                        <span>{{ $t('common.brand.slogan') }}</span>
                    </p>
                </div>
                <div class="space-y-4 col-span-1">
                    <ul class="space-y-2 w-full decoration-violet-700-">
                        <li>
                            <h2 class="text-md font-medium text-main-200">{{ $t('common.footer.titles.services') }}</h2>
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
                            <h2 class="text-md font-medium text-main-200">{{ $t('common.footer.titles.legal') }}</h2>
                        </li>
                        <li v-for="policy, policyIndex in policies" :key="`policy-${policyIndex}`">
                            <NuxtLinkLocale 
                                :to="policy.path" 
                                class="text-sm text-slate-400 hover:text-main-100 transition-colors duration-200 inline-block cursor-pointer"
                            >
                                {{ $t(policy.label) }}
                            </NuxtLinkLocale>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>