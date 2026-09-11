<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const props = defineProps<{
    icon: string,
}>()
</script>

<template>
    <ClientOnly>
        <Icon :icon="props.icon" :class="$attrs.class" />
        <template #fallback>
            <span
                :class="['inline-block opacity-50 bg-bod/15 dark:bg-bol/50 w-6 rounded-sm aspect-square', $attrs.class]"
                aria-hidden="true"
            ></span>
        </template>
    </ClientOnly>
</template>