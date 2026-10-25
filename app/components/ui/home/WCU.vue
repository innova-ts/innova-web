<script setup lang="ts">
import WCUItem from './WCUItem.vue';
import WCURow from './WCURow.vue';
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
</script>

<template>
    <SimpleSectionHeader :label="$t('home.wcu.label')" :title="$t('home.wcu.title')" />
    <p class="text-lg text-tol/70 dark:text-tod/70 mt-5 mb-10">{{ $t('home.wcu.description') }}</p>
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