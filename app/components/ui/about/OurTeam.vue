<script lang="ts" setup>
import type { TabContract } from '~/composables/ui/useTabs.ts';
import Managers from './team/Managers.vue';
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import Tab from '~/components/shared/controls/Tab.vue';
import { useI18n } from 'vue-i18n';
import { computed, reactive, shallowRef } from 'vue';
import Projects from './team/Projects.vue';
import Administration from './team/Administration.vue';
import { useListMembers, type TeamMemberContract } from '~/composables/features/useAbout.ts';

const { t } = useI18n();

const { members, isError, isPending } = useListMembers<TeamMemberContract[]>();

const buildListMetaData = (id: number, list: TeamMemberContract[]) => {
    return reactive({
        props: { 
            isError: isError.value, 
            isPending: isPending.value, 
            members: list.filter((m) => m.member_role_id === id) 
        },
        count: list.length
    });
}


const tabItems = computed<TabContract[]>(() => {
    return [
        {
            icon: 'mdi:domain',
            label: t('about.team.content.management'),
            component: shallowRef(Managers),
            ...buildListMetaData(1, members.value || [])
        },
        {
            icon: 'bi:terminal',
            label: t('about.team.content.projects'),
            component: shallowRef(Projects),
            ...buildListMetaData(2, members.value || [])
        },
        {
            icon: 'heroicons:identification',
            label: t('about.team.content.administration'),
            component: shallowRef(Administration),
            ...buildListMetaData(3, members.value || [])
        },
    ] 
});

</script>
<template>
    <SimpleSectionHeader
        :label="$t('about.team.header.label')"
        :title="$t('about.team.header.title')"
        :span="$t('about.team.header.span')"
    />
    <Tab :items="tabItems" :use-transitions="true" />
</template>