<script lang="ts" setup>
import { computed } from 'vue';


type ButtonVariants  = 'default' | 'none' | 'primary' | 'secondary' | 'outlined' | 'text' | 'link';
type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' ;

const props = withDefaults(defineProps<{
    variant?: ButtonVariants
    size: ButtonSizes
}>(), {
    variant: 'default',
    size: 'md'
})

const buttonClass = computed<string>((): string => {
    const primaryVariant = 'bg-main-100 light:border-main-200 dark:border-main-300 hover:bg-main-200 active:bg-main-300'
    const variants: Record<ButtonVariants, string> = {
        default: primaryVariant,
        none: '',
        primary: primaryVariant,
        secondary: '',
        outlined: 'bg-transparent border-2 border-main-100 text-main-200',
        text: 'bg-transparent border-0 border-main-200 text-tol dark:text-tod',
        link: 'bg-transparent border-0 border-main-200 text-tol dark:text-tod hover:underline',
    }

    return variants[props.variant]
})

const sizeClass = computed<string>((): string => {
    const variants: Record<ButtonSizes, string> = {
        xs: 'text-xs py-0 px-1',
        sm: 'text-sm py-1 px-2',
        md: 'text-md py-2 px-3',
        lg: 'text-lg py-3 px-4',
        xl: 'text-xl py-4 px-5'
    }

    return variants[props.size]
})

</script>
<template>
    <button :class="['border-1.5 cursor-pointer rounded-md transition-all', buttonClass, sizeClass]">
        <slot />
    </button>
</template>