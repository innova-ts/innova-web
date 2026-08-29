<script setup lang="ts">
import WCUItem from './WCUItem.vue';
import WCURow from './WCURow.vue';
</script>

<template>
    <div class="mb-7">
        <h2 class="text-3xl font-bold">{{ $t('home.wcu.title') }}</h2>
        <p class="text-lg dark:text-tod/70 my-4 mb-6">{{ $t('home.wcu.description') }}</p>
    </div>
    <WCURow :length="3">
        <template #items>
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
        </template>
    </WCURow>
</template>