<script setup lang="ts">
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import ValueItem from './ValueItem.vue';

</script>

<template>    
    <!-- Radial gradient layers -->
    <div 
        class="pointer-events-none absolute inset-0"
        :class="[
            'dark:bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--color-main-50)_8%,transparent)_0%,transparent_50%)]',
        ]"
        aria-hidden="true"
    />
    <div 
        class="pointer-events-none absolute inset-0"
        :class="[
            'bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--color-main-400)_8%,transparent)_0%,transparent_60%)]',
            'dark:bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--color-main-100)_5%,transparent)_0%,transparent_50%)]',
        ]"
        aria-hidden="true"
    />
    <div 
        class="pointer-events-none absolute inset-0"
        :class="[
            'bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-branding-500)_10%,transparent)_0%,transparent_50%)]',
            'dark:hidden'
        ]"
        aria-hidden="true"
    />
    <!-- Top gradient border -->
    <div 
        class="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-main-100/30 to-transparent dark:via-main-50/10"
        aria-hidden="true"
    />
    <div class="relative container-site py-16 lg:py-20">
        <SimpleSectionHeader
            :label="$t('about.values.label')"
            :title="$t('about.values.title')"
            :span="$t('about.values.span')"
        />
        <div class="values-bento py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ValueItem 
                icon="mdi:lightbulb"
                :title="$t('about.values.items.innovation.title')"
                :description="$t('about.values.items.innovation.description')"
                accent="lime"
                :index="0"
                class="col-span-1 row-span-1 lg:col-span-2 lg:row-span-2"
            />
            <ValueItem 
                icon="f7:checkmark-seal"
                :title="$t('about.values.items.quality.title')"
                :description="$t('about.values.items.quality.description')"
                accent="teal"
                :index="1"
            />
            <ValueItem 
                icon="akar-icons:eye"
                :title="$t('about.values.items.transparency.title')"
                :description="$t('about.values.items.transparency.description')"
                accent="cyan"
                :index="2"
            />
            <ValueItem 
                icon="fluent:people-team-28-regular"
                :title="$t('about.values.items.teamWork.title')"
                :description="$t('about.values.items.teamWork.description')"
                accent="emerald"
                :index="3"
                class="col-span-1 lg:col-span-2" 
            />
            <ValueItem 
                icon="akar-icons:shield"
                :title="$t('about.values.items.responsibility.title')"
                :description="$t('about.values.items.responsibility.description')"
                accent="sky"
                :index="4"
            />
            <ValueItem 
                icon="boxicons:handshake-filled"
                :title="$t('about.values.items.compromise.title')"
                :description="$t('about.values.items.compromise.description')"
                accent="green"
                :index="5"
                class="col-span-1 row-span-1 lg:row-span-2" 
            />
            <ValueItem 
                icon="lucide:user-round-search"
                :title="$t('about.values.items.clientsOrientation.title')"
                :description="$t('about.values.items.clientsOrientation.description')"
                accent="mint"
                :index="6"
                class="col-span-1 lg:col-span-2" 
            />
            <ValueItem 
                icon="streamline:graph-arrow-increase"
                :title="$t('about.values.items.continousEnhancement.title')"
                :description="$t('about.values.items.continousEnhancement.description')"
                accent="sage"
                :index="7"
            />
        </div>
    </div>
</template>