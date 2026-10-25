<script lang="ts" setup>
import TabBody from '~/components/shared/controls/TabBody.vue';
import TeamMember from '../TeamMember.vue';
import { type TeamMemberContract } from '~/composables/features/useAbout.ts';
import CatchOnLoad from '~/components/shared/utils/CatchOnLoad.vue';
import Skeleton from '~/components/shared/ui/Skeleton.vue';

const props = defineProps<{
    isError: boolean;
    isPending: boolean;
    members: TeamMemberContract[];
}>();

console.log(props.isPending);
console.log(props.isError);

</script>

<template>
    <TabBody class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CatchOnLoad :is-pending="props.isPending" :is-error="props.isError">
            <template #pending>
                <Skeleton class="w-full h-66.75"></Skeleton>
            </template>
            <template #error>
                Mensaje de error
            </template>
            <template #success>
                <TeamMember 
                    v-for="(managerMember, index) in props.members" 
                    :key="index" 
                    :member-info="managerMember"
                />
            </template>
        </CatchOnLoad>
    </TabBody>
</template>