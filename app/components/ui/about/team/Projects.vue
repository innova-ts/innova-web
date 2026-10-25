<script setup lang="ts">
import TabBody from '~/components/shared/controls/TabBody.vue';
import TeamMember from '../TeamMember.vue';
import type { TeamMemberContract } from '~/composables/features/useAbout.ts';

const props = defineProps<{
    isError: boolean;
    isPending: boolean;
    members: TeamMemberContract[];
}>();

</script>

<template>
    <TabBody class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TeamMember
            v-for="(member, index) in members"
            :key="index" 
            :member-info="member" 
        />
    </TabBody>
</template>