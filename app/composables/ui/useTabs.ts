import { computed, ref, toValue, type MaybeRefOrGetter } from "vue";

export type TabContract = {
    icon?: string,
    label: string,
    component: any,
    props?: Record<string, any>
    count?: number
}

export const useTabs = (tabItems: MaybeRefOrGetter<TabContract[]>, defaultTabIndex: number = 0) => {

    const currentActiveTabIndex = ref<number>(defaultTabIndex);

    const tabs = computed<TabContract[]>(() => toValue(tabItems));

    const activeTab = computed<TabContract | undefined>(() => tabs.value[currentActiveTabIndex.value]);

    const activateTab = (index: number): void => {
        currentActiveTabIndex.value = index;
    };

    const isActiveTab = (index: number): boolean => index === currentActiveTabIndex.value

    return {
        tabs,
        activateTab,
        isActiveTab,
        activeTab
    }
}
