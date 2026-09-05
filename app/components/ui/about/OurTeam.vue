<script lang="ts" setup>
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import TeamMember from './TeamMember.vue';

const leadersIndexes = Array.from({ length: 2 }, (_, index) => index);

</script>
<template>
    <SimpleSectionHeader
        :label="$t('about.team.header.label')"
        :title="$t('about.team.header.title')"
        :span="$t('about.team.header.span')"
    />
    <div class="grid grid-cols-2 gap-4 mt-4">
        <template v-for="(leader, index) in leadersIndexes" :key="index">
            <TeamMember :leader-index="leader" />
        </template>
    </div>
</template>