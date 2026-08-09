<script lang="ts" setup>
import { navigateTo } from '#app';
import SmoothLiquid from '~/components/shared/ui/SmoothLiquid.vue';
import HomeServicesGrid from '~/components/ui/home/HomeServicesGrid.vue';
import Testimonial from '~/components/ui/home/Testimonial.vue';
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
                        <h1 class="text-4xl sm:text-5xl text-center font-bold">
                            {{ $t('home.presentation.title') }}
                        </h1>
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
        <section class="min-h-[300px] bg-main-900/3 dark:bg-main-900/4">
            <div class="container-site py-10">
                <HomeServicesGrid />
            </div>
        </section>

        <!-- Why choose us -->
        <section>
            <div class="container-site py-10 text-center relative">
                <div class="mb-7">
                    <h2 class="text-2xl font-bold">{{ $t('home.wcu.title') }}</h2>
                    <h3 class="text-md dark:text-tod/70">{{ $t('home.wcu.description') }}</h3>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 relative">
                    <div class="hidden sm:flex items-center justify-center absolute w-full top-6 ">
                        <div 
                            :class="[
                                'h-[2px] z-[0] pointer-events-none w-[60%] m-auto', 
                                'dark:bg-[linear-gradient(90deg,transparent_0%,color-mix(in_oklab,var(--color-main-100)_50%,transparent)_15%,transparent_40%,transparent_60%,color-mix(in_oklab,var(--color-main-100)_50%,transparent)_85%,transparent_100%)]',
                                'light:bg-[linear-gradient(90deg,transparent_0%,var(--color-main-50)_15%,transparent_40%,transparent_60%,var(--color-main-50)_85%,transparent_100%)]'
                            ]"
                        ></div>

                        
                    </div>
                    <div class="relative z-10">
                        <WCUItem 
                            title-key="home.wcu.items.innovation.title"
                            description-key="home.wcu.items.innovation.description"
                            icon="iconoir:light-bulb"
                        />
                    </div>
                    <div class="relative z-10">
                        <WCUItem 
                            title-key="home.wcu.items.scalability.title"
                            description-key="home.wcu.items.scalability.description"
                            icon="material-symbols:layers"
                        />
                    </div>
                    <div class="col-span-2 sm:col-span-1 relative z-10">
                        <WCUItem 
                            title-key="home.wcu.items.techSupport.title"
                            description-key="home.wcu.items.techSupport.description"
                            icon="material-symbols:support-agent-rounded"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Clients -->
        <section class="min-h-[300px] bg-zinc-50/90 dark:bg-bod-soft/30">
            <div class="container-site py-10">
                <div class="mb-7">
                    <h2 class="text-2xl font-bold">{{ $t('home.clients.title') }}</h2>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Testimonial 
                        name="Susana Horia"
                        position="CTO. Fintech Solutions."
                        :statement="$t('home.clients.statements.susana')"
                    />
                    <Testimonial 
                        name="Luigi Mada"
                        position="VP Engineering, Datacorp."
                        :statement="$t('home.clients.statements.luigi')"                    
                    />
                </div>
            </div>
        </section>
    </div>
</template>
