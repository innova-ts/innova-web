<script setup lang="ts">
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import ValueItem from './ValueItem.vue';

</script>

<template>
    <SimpleSectionHeader
        :label="$t('about.values.label')"
        :title="$t('about.values.title')"
        :span="$t('about.values.span')"
    />
    <div class="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ValueItem 
            icon="mdi:lightbulb"
            :title="$t('about.values.items.innovation.title')"
            :description="$t('about.values.items.innovation.description')"
            class="col-span-1 row-span-1 lg:col-span-2 lg:row-span-2"
        />
        <ValueItem 
            icon="f7:checkmark-seal"
            :title="$t('about.values.items.quality.title')"
            :description="$t('about.values.items.quality.description')"
        />
        <ValueItem 
            icon="akar-icons:eye"
            :title="$t('about.values.items.transparency.title')"
            :description="$t('about.values.items.transparency.description')"
        />
        <ValueItem 
            icon="fluent:people-team-28-regular"
            :title="$t('about.values.items.teamWork.title')"
            :description="$t('about.values.items.teamWork.description')"
            class="col-span-1 lg:col-span-2" 
        />
        <ValueItem 
            icon="akar-icons:shield"
            :title="$t('about.values.items.responsibility.title')"
            :description="$t('about.values.items.responsibility.description')"
        />
        <ValueItem 
            icon="boxicons:handshake-filled"
            :title="$t('about.values.items.compromise.title')"
            :description="$t('about.values.items.compromise.description')"
            class="col-span-1 row-span-1 lg:row-span-2" 
        />
        <ValueItem 
            icon="lucide:user-round-search"
            :title="$t('about.values.items.clientsOrientation.title')"
            :description="$t('about.values.items.clientsOrientation.description')"
            class="col-span-1 lg:col-span-2" 
        />
        <ValueItem 
            icon="streamline:graph-arrow-increase"
            :title="$t('about.values.items.continousEnhancement.title')"
            :description="$t('about.values.items.continousEnhancement.description')"
        />
    </div>
</template>