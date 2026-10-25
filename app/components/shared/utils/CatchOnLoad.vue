<script lang="ts" setup>
const { isPending, isError} = defineProps<{
    isPending: boolean,
    isError: boolean,
}>();

</script>
<template>
    <template v-if="isPending === true && isError === false">
        <slot name="pending"></slot>
    </template>
    <template v-else-if="isPending === false && isError === true">
        <slot name="error"></slot>
    </template>
    <template v-else>
        <slot name="success"></slot>
    </template>
</template>