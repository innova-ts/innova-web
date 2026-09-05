<script setup lang="ts">
import TeamMember from '../TeamMember.vue';
import { useAdministrationMembers } from '~/composables/features/useAbout.ts';

const { members } = useAdministrationMembers();
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <TeamMember
            v-for="(member, index) in members"
            :key="index" 
            :member-info="member" 
            variant="img-first"
        />
    </div>
</template>