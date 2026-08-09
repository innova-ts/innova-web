<script lang="ts" setup>
import { navigateTo } from '#app';
import SmoothLiquid from '~/components/shared/ui/SmoothLiquid.vue';
import HomeServicesGrid from '~/components/ui/home/HomeServicesGrid.vue';
import WCUItem from '~/components/ui/home/WCUItem.vue';
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
                <HomeServicesGrid />
            </div>
        </section>

        <!-- Why choose us -->
        <section class="why-choose-us">
            <div class="container-site py-10 text-center ">
                <div class="mb-7">
                    <h2 class="text-2xl font-bold">{{ $t('home.wcu.title') }}</h2>
                    <h3 class="text-md dark:text-tod/70">{{ $t('home.wcu.description') }}</h3>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 relative">
                    <div>
                        <WCUItem 
                            title-key="home.wcu.items.innovation.title"
                            description-key="home.wcu.items.innovation.description"
                        ></WCUItem>
                    </div>
                    <div>
                        <WCUItem 
                            title-key="home.wcu.items.scalability.title"
                            description-key="home.wcu.items.scalability.description"
                        ></WCUItem>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <WCUItem 
                            title-key="home.wcu.items.techSupport.title"
                            description-key="home.wcu.items.techSupport.description"
                        ></WCUItem>
                    </div>
                    <!-- <div class="absolute flex w-full h-[60px] z-[0]">
                        <hr class="m-auto relative border-0 bg-blue-400 h-[2px] w-[70%] bottom-0 z-[1]">
                    </div> -->
                </div>
            </div>
        </section>

        <!-- Clients -->
        <section class="clients">
            Clientes
        </section>
    </div>
</template>
