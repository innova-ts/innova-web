<script lang="ts" setup>
import { useTabs, type TabContract } from '~/composables/ui/useTabs.ts';
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';

const props = withDefaults(defineProps<{
    items: TabContract[],
    defaultIndex?: number,
    useTransitions?: boolean
}>(), {
    defaultIndex: 0,
    useTransitions: false
})

const { tabs, activateTab, isActiveTab, activeTab } = useTabs(props.items, props.defaultIndex);

</script>
<template>
    <div class="my-4">
        <ul class="flex gap-2 border-b border-b-bod/10 dark:border-b-bol/10 overflow-x-auto">
            <li v-for="tab in tabs" :key="tab.label">
                <a 
                    href="#" 
                    @click.prevent="activateTab(tab)" 
                    :class="[
                        'transition-all outline-0! flex items-center gap-2 py-3 px-5 border-t-5 border-t-bod/10 dark:border-t-bol/10 rounded-t-sm',
                        'group/tab-link hover:bg-zinc-400/5 dark:hover:bg-zinc-300/5',
                        isActiveTab(tab) && 'bg-zinc-400/10! dark:bg-zinc-300/10! border-t-main-50 dark:border-t-main-50'
                    ]"
                >
                    <ClientIcon 
                        v-if="tab?.icon"
                        :icon="tab.icon"
                        :class="[
                            'font-semibold',
                            isActiveTab(tab) && 'text-main-200!'
                        ]"
                    />
                    <span 
                        :class="[
                            'text-xs font-semibold uppercase',
                            isActiveTab(tab) && 'text-main-200!'
                        ]"
                    >{{ tab.label }}</span> 
                    <span v-if="tab?.count" class="min-w-6 min-h-6 text-center bg-zinc-400/10 rounded-md">{{ tab.count }}</span>
                </a>
            </li>
        </ul>
    </div>
    <Transition v-if="useTransitions" name="tab-content" mode="out-in" appear>
        <component 
            v-if="activeTab" 
            :is="activeTab?.component" 
            :key="activeTab?.label"
        />
    </Transition>
    <template v-else>
        <component 
            v-if="activeTab" 
            :is="activeTab?.component" 
            :key="activeTab?.label"
        />
    </template>
</template>

<style scoped>
.tab-content-enter-active,
.tab-content-leave-active {
    transition:
        opacity 0.35s ease,
        transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.tab-content-enter-from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
}

.tab-content-enter-to {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.tab-content-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.tab-content-leave-to {
    opacity: 0;
    transform: translateY(-12px) scale(0.985);
}
</style>