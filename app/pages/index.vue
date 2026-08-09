<script lang="ts" setup>
import { navigateTo } from '#app';
import SmoothLiquid from '~/components/shared/ui/SmoothLiquid.vue';
import Button from '~/components/web/forms/Button.vue';

const goTo = (destiny: string) => {
    return navigateTo(destiny);
}
</script>
<template>
    <div>
        <!-- Presentation -->
        <section class="relative overflow-hidden min-h-[550px] flex">
            <SmoothLiquid>
                <div class="flex h-full">
                    <div class="m-auto container-site">
                        <h1 class="text-4xl sm:text-5xl text-center font-bold">{{ $t('home.presentation.title') }}</h1>
                        <h2 class="text-4xl sm:text-5xl text-center text-main-200 dark:text-main-50 font-bold">{{ $t('home.presentation.subtitle') }}</h2>
                        <p class="m-auto text-md sm:text-xl text-center py-8 w-[80%] sm:w-[60%]">{{ $t('home.presentation.description') }}</p>
                        <div class="full-width flex">
                            <div class="m-auto flex gap-2">
                                <Button size="md" @click="goTo('/contact')">{{ $t('home.presentation.startProject') }}</Button>
                                <Button variant="outlined" size="md" class="dark:text-white" @click="goTo('/about#portfolio')">{{ $t('home.presentation.portfolio') }}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </SmoothLiquid>
        </section>

        <!-- Services -->
        <section class="min-h-[300px] bg-main-900/4">
            <div class="container-site py-10">
                <div class="mb-7">
                    <h2 class="text-2xl font-bold">{{ $t('home.services.title') }}</h2>
                    <h3 class="text-md dark:text-tod/70">{{ $t('home.services.description') }}</h3>
                </div>
                <div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <article class="border-1 min-h-[250px] bg-white dark:bg-zinc-800/35 border-gray-200/90 dark:border-tol/70 hover:border-main-50 transition-all duration-200 p-4 sm:col-span-2 relative group/title">
                            <div class="absolute bottom-4 mr-4">
                                <h3 class="text-lg font-bold my-2 border-l-4 border-main-50 pl-3 group-hover/title:text-main-100 transition-all duration-200">{{ $t('home.services.mainServices.custom.title') }}</h3>
                                <p class="text-tol/70 dark:text-tod/80">{{ $t('home.services.mainServices.custom.content') }}</p>
                            
                            </div>
                        </article>
                        <article class="border-1 min-h-[250px] bg-white dark:bg-zinc-800/35 border-gray-200/90 dark:border-tol/70 hover:border-main-50 transition-all duration-200 p-4 relative group/title">
                            <div class="absolute bottom-4 mr-4">
                                <h3 class="text-lg font-bold my-2 border-l-4 border-main-50 pl-3 group-hover/title:text-main-100 transition-all duration-200">{{ $t('home.services.mainServices.web.title') }}</h3>
                                <p class="text-tol/70 dark:text-tod/80">{{ $t('home.services.mainServices.web.content') }}</p>
                            </div>
                        </article>
                        <article class="border-1 min-h-[250px] bg-white dark:bg-zinc-800/35 border-gray-200/90 dark:border-tol/70 hover:border-main-50 transition-all duration-200 p-4 relative group/title">
                            <div class="absolute bottom-4 mr-4">
                                <h3 class="text-lg font-bold my-2 border-l-4 border-main-50 pl-3 group-hover/title:text-main-100 transition-all duration-200">{{ $t('home.services.mainServices.mobile.title') }}</h3>
                                <p class="text-tol/70 dark:text-tod/80">{{ $t('home.services.mainServices.mobile.content') }}</p>
                            </div>
                        </article>
                        <article class="border-1 min-h-[250px] bg-white dark:bg-zinc-800/35 border-gray-200/90 dark:border-tol/70 hover:border-main-50 transition-all duration-200 p-4 sm:col-span-2 relative group/title">
                            <div class="absolute bottom-4 mr-4">
                                <h3 class="text-lg font-bold my-2 border-l-4 border-main-50 pl-3 group-hover/title:text-main-100 transition-all duration-200">{{ $t('home.services.mainServices.infrastructure.title') }}</h3>
                                <p class="text-tol/70 dark:text-tod/80">{{ $t('home.services.mainServices.infrastructure.content') }}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why choose us -->
        <section class="why-choose-us">
            <div class="container-site">
                Por que elegirnos
            </div>
        </section>

        <!-- Clients -->
        <section class="clients">
            Clientes
        </section>
    </div>
</template>
