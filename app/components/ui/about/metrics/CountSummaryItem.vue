<script lang="ts" setup>
defineProps<{
    value: string
    name: string
    description: string
    isOdd: boolean
}>()
</script>

<template>
    <section class="flex gap-4 items-start py-2">
        <!-- Barra de acento vertical sutil -->
        <div 
            :class="[
                'w-1 rounded-full self-stretch transition-all duration-300',
                isOdd ? 'bg-main-200' : 'bg-slate-300 dark:bg-slate-700'
            ]" 
        />
        
        <div>
            <span :class="['text-5xl font-extrabold tracking-tight', isOdd && 'text-main-200']">
                {{ value }}
            </span>
            <p class="mt-1 font-semibold text-slate-800 dark:text-slate-100">
                {{ name }}
            </p>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {{ description }}
            </p>
        </div>
    </section>
</template>