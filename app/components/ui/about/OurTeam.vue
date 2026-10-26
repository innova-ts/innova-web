<script lang="ts" setup>
import type { TabContract } from '~/composables/ui/useTabs.ts';
import Managers from './team/Managers.vue';
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import Tab from '~/components/shared/controls/Tab.vue';
import { useI18n } from 'vue-i18n';
import { computed, markRaw, reactive, ref, type Component } from 'vue';
import { useListMembers, type TeamMemberContract } from '~/composables/features/useAbout.ts';
import type { RequestStatusWhiteList } from '~/composables/utils/useHttp.ts';

const { t } = useI18n();

const { members, status } = useListMembers<TeamMemberContract[]>();

const buildListMetaData = (id: number, list: TeamMemberContract[], status: string) => {
    const filteredMembers = list.filter((m) => m.member_role_id === id);
    return {
        props: {
            status: ref<RequestStatusWhiteList>(status as RequestStatusWhiteList),
            members: filteredMembers
        },
        count: filteredMembers.length
    };
}

const items = reactive<TabContract[]>([
    {
        icon: 'mdi:domain',
        label: t('about.team.content.management'),
        component: markRaw<Component>(Managers),
        ...buildListMetaData(1, members.value || [], status.value)
    },
]);

const tabItems = computed<TabContract[]>(() => {
    const currentStatus = status.value;
    return items.map((_item:TabContract) => {
        return {
            ..._item,
            ...buildListMetaData(1, members.value || [], currentStatus)
        };
    })
});

</script>
<template>
    <SimpleSectionHeader
        :label="$t('about.team.header.label')"
        :title="$t('about.team.header.title')"
        :span="$t('about.team.header.span')"
    />
    <Tab :items="tabItems" :use-transitions="false" />
</template>
