<script setup lang="ts">
import { computed } from 'vue';
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';

const props = defineProps<{
    type: 'mission' | 'vision',
    text: string
}>()

const icon = computed(() => {
    if (props.type === 'mission') return 'material-symbols:flag-outline'
    return 'akar-icons:eye'
})
</script>

<template>
    <section class="flex flex-col gap-2 transition-all duration-700 ease-out hover:-translate-y-1">
        <strong class="w-full flex gap-2">
            <ClientIcon :icon="icon" class="text-2xl text-main-100" />
            <span class="text-tod/90">
                {{ props.type === 'mission' ? $t('about.hero.mission') : $t('about.hero.vision') }}
            </span>
        </strong>
        <p class="text-[13px] text-tod/78">{{ text }}</p>
    </section>
</template>