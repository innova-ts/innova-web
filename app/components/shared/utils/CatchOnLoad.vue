<script lang="ts" setup>

import { computed, type Ref } from 'vue';
import type { RequestStatusWhiteList } from '~/composables/utils/useHttp';

const props = defineProps<{
    status: Ref<RequestStatusWhiteList>;
}>();

const isPending = computed((): boolean => ['idle', 'pending'].includes(props.status.value))
const isError = computed((): boolean => (props.status?.value as string) === 'error');

</script>
<template>
    <template v-if="isPending">
        <slot name="pending"></slot>
    </template>
    <template v-else-if="isError">
        <slot name="error"></slot>
    </template>
    <template v-else>
        <slot name="success"></slot>
    </template>
</template>
