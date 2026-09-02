<script lang="ts" setup>

defineOptions({
    inheritAttrs: false
})

const props = withDefaults(defineProps<{
    src: string,
    alt: string,
    fallback?: 'jpg' | 'jpeg' | 'png' | 'gif'
}>(), {
    fallback: 'jpg'
})

</script>
<template>
    <picture>
        <source :srcset="`${props.src}.webp`" type="image/webp" />
        <img 
            :src="`${props.src}.${props.fallback}`"
            :alt="props.alt"
            v-bind="$attrs"
        />
    </picture>
</template>