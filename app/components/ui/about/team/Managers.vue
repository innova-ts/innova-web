<script lang="ts" setup>
import TabBody from '~/components/shared/controls/TabBody.vue';
import TeamMember from '../TeamMember.vue';
import { type TeamMemberContract } from '~/composables/features/useAbout.ts';
import CatchOnLoad from '~/components/shared/utils/CatchOnLoad.vue';
import Skeleton from '~/components/shared/ui/Skeleton.vue';
import type { RequestStatus, RequestStatusWhiteList } from '~/composables/utils/useHttp.ts';
import { computed, type Ref } from 'vue';

const props = defineProps<{
    status: Ref<RequestStatusWhiteList>;
    members: TeamMemberContract[];
}>();

const isPending = computed((): boolean => ['idle', 'pending'].includes(props.status.value))
const isError = computed((): boolean => (props.status?.value as string) === 'error');

</script>

<template>
    <TabBody class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <template v-if="isPending">
            <Skeleton class="w-full h-66.75"></Skeleton>
        </template>
        <template v-else-if="isError">
            Componente de error
        </template>
        <template v-else>
            <ClientOnly>
                <TeamMember 
                    v-for="(managerMember, index) in props.members" 
                    :key="index" 
                    :member-info="managerMember"
                />
                <template #fallback>
                    <Skeleton class="w-full h-66.75" v-for="_x in 2"></Skeleton>
                </template>
            </ClientOnly>
        </template>
    </TabBody>
</template>