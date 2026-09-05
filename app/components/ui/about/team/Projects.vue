<script setup lang="ts">
import TeamMember from '../TeamMember.vue';
import { useProjectMembers } from '~/composables/features/useAbout.ts';

const { members } = useProjectMembers();
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <TeamMember
            v-for="(member, index) in members"
            :key="index" 
            :member-info="member" 
        />
    </div>
</template>