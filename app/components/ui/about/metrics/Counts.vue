<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import CountSummaryItem from './CountSummaryItem.vue';

const { t } = useI18n();

const metrics = computed(() => [
    {
        id: 'projects',
        value: '50+',
        name: t('about.metrics.projects.name'),
        description: t('about.metrics.projects.description'),
    },
    {
        id: 'countries',
        value: '10+',
        name: t('about.metrics.countries.name'),
        description: t('about.metrics.countries.description'),
    },
    {
        id: 'uptime',
        value: '99.9%',
        name: t('about.metrics.uptime.name'),
        description: t('about.metrics.uptime.description'),
    },
    {
        id: 'support',
        value: '24/7',
        name: t('about.metrics.support.name'),
        description: t('about.metrics.support.description'),
    },
]);
</script>

<template>
    <div class="container-site py-12">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CountSummaryItem 
                v-for="(item, index) in metrics"
                :key="item.id"
                :value="item.value"
                :name="item.name"
                :description="item.description"
                :is-odd="index % 2 === 0"
            />
        </div>
    </div>
</template>