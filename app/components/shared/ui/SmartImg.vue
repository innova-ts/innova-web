<script lang="ts" setup>

defineOptions({
    inheritAttrs: false
})

const props = withDefaults(defineProps<{
    src: string,
    alt: string,
    fallback?: 'jpg' | 'jpeg' | 'png' | 'gif',
    localSource?: boolean
}>(), {
    fallback: 'jpg',
    localSource: true
})

</script>
<template>
    <template v-if="localSource">
        <picture>
            <source :srcset="`${props.src}.webp`" type="image/webp" />
            <img 
                :src="`${props.src}.${props.fallback}`"
                :alt="props.alt"
                v-bind="$attrs"
            />
        </picture>
    </template>
    <template v-else>
        <img 
            :src="props.src"
            :alt="props.alt"
            v-bind="$attrs"
        />
    </template>
</template>