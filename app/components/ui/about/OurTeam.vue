<script lang="ts" setup>
import type { TabContract } from '~/composables/ui/useTabs.ts';
import Managers from './team/Managers.vue';
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import Tab from '~/components/shared/controls/Tab.vue';
import { useI18n } from 'vue-i18n';
import { shallowRef } from 'vue';
import Projects from './team/Projects.vue';
import Administration from './team/Administration.vue';
import { useListMembers, type TeamMemberContract } from '~/composables/features/useAbout.ts';

const { t } = useI18n();

const { members, error, status } = await useListMembers<TeamMemberContract[]>();

const tabItems:TabContract[] = [
    {
        icon: 'mdi:domain',
        label: t('about.team.content.management'),
        component: shallowRef(Managers),
        props: { error, status, members: members.value.filter((m:TeamMemberContract) => m.member_role_id == 1) }
    },
    {
        icon: 'bi:terminal',
        label: t('about.team.content.projects'),
        component: shallowRef(Projects),
        props: { error, status, members: members.value.filter((m:TeamMemberContract) => m.member_role_id == 2) }
    },
    {
        icon: 'heroicons:identification',
        label: t('about.team.content.administration'),
        component: shallowRef(Administration),
        props: { error, status, members: members.value.filter((m:TeamMemberContract) => m.member_role_id == 3) }
    },
];

const items:TabContract[] = tabItems.filter((t) => t.props?.members.length > 0);

</script>
<template>
    <SimpleSectionHeader
        :label="$t('about.team.header.label')"
        :title="$t('about.team.header.title')"
        :span="$t('about.team.header.span')"
    />
    <Tab :items="items" :use-transitions="true" />
</template>