<script lang="ts" setup>
import TabBody from '~/components/shared/controls/TabBody.vue';
import TeamMember from '../TeamMember.vue';
import { useManagerMembers } from '~/composables/features/useAbout.ts';

const { members } = useManagerMembers();
</script>
<template>
    <TabBody class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TeamMember 
            v-for="(managerMember, index) in members" 
            :key="index" 
            :member-info="managerMember"
        />
    </TabBody>
</template>