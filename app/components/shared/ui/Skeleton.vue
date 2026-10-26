<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>
<template>
    <div :class="[
        'bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse',
        $attrs.class
    ]"></div>
</template>
