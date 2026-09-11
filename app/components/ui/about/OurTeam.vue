<script lang="ts" setup>
import type { TabContract } from '~/composables/ui/useTabs.ts';
import Managers from './team/Managers.vue';
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import Tab from '~/components/shared/controls/Tab.vue';
import { useI18n } from 'vue-i18n';
import { computed, shallowRef } from 'vue';
import Projects from './team/Projects.vue';
import Administration from './team/Administration.vue';

const { t } = useI18n();

const tabsItems:TabContract[] = [
    {
        icon: 'mdi:domain',
        label: t('about.team.content.management'),
        count: 2,
        component: shallowRef(Managers),
    },
    {
        icon: 'bi:terminal',
        label: t('about.team.content.projects'),
        count: 0,
        component: shallowRef(Projects),
    },
    {
        icon: 'heroicons:identification',
        label: t('about.team.content.administration'),
        count: 0,
        component: shallowRef(Administration),
    },
];

const items = computed(():TabContract[] => {
    return tabsItems.filter((i:TabContract): boolean => (i.count as number) > 0);
})

</script>
<template>
    <SimpleSectionHeader
        :label="$t('about.team.header.label')"
        :title="$t('about.team.header.title')"
        :span="$t('about.team.header.span')"
    />
    <Tab :items="items" :use-transitions="true" />
</template>