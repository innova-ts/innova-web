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
                :class="[$attrs.class, 'inline-block opacity-0']"
                aria-hidden="true"
            ></span>
        </template>
    </ClientOnly>
</template>