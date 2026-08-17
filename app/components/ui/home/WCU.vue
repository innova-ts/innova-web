<script setup lang="ts">
import WCUItem from './WCUItem.vue';
</script>

<template>
    <div class="mb-7">
        <h2 class="text-3xl font-bold">{{ $t('home.wcu.title') }}</h2>
        <p class="text-lg dark:text-tod/70 my-4 mb-6">{{ $t('home.wcu.description') }}</p>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 relative">
        <div class="hidden sm:flex items-center justify-center absolute w-full top-[45px] ">
            <div 
                :class="[
                    'h-[2px] z-[0] pointer-events-none w-[60%] m-auto', 
                    'dark:bg-[linear-gradient(90deg,transparent_0%,color-mix(in_oklab,var(--color-main-100)_50%,transparent)_15%,transparent_40%,transparent_60%,color-mix(in_oklab,var(--color-main-100)_50%,transparent)_85%,transparent_100%)]',
                    'light:bg-[linear-gradient(90deg,transparent_0%,var(--color-main-50)_15%,transparent_40%,transparent_60%,var(--color-main-50)_85%,transparent_100%)]'
                ]"
            ></div>
        </div>
        <WCUItem 
            title-key="home.wcu.items.innovation.title"
            description-key="home.wcu.items.innovation.description"
            icon="iconoir:light-bulb"
        />
        <WCUItem 
            title-key="home.wcu.items.scalability.title"
            description-key="home.wcu.items.scalability.description"
            icon="material-symbols:layers"
        />
        <WCUItem 
            title-key="home.wcu.items.techSupport.title"
            description-key="home.wcu.items.techSupport.description"
            icon="material-symbols:support-agent-rounded"
            class="col-span-2 sm:col-span-1"
        />
    </div>
</template>