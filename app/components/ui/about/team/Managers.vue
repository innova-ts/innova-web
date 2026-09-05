<script lang="ts" setup>
import TeamMember from '../TeamMember.vue';
import { useManagerMembers } from '~/composables/features/useAbout.ts';

const { members } = useManagerMembers();
</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <TeamMember 
            v-for="(managerMember, index) in members" 
            :key="index" 
            :member-info="managerMember"
        />
    </div>
</template>