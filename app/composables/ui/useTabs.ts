import { reactive, ref } from "vue";

export type TabContract = {
    icon?: string,
    label: string,
    count?: number,
    component: any
}

export const useTabs = (tabItems: TabContract[], defaultTabIndex: number = 0) => {

    const currentActiveTabIndex = ref<number>(defaultTabIndex);

    const tabs = reactive<TabContract[]>(tabItems);

    const getTabIndex = (t: TabContract): number => {
        return tabs.indexOf(t);
    };

    let activeTab = ref<TabContract>(tabs[defaultTabIndex] as TabContract)

    const activateTab = (t: TabContract): void => {
        currentActiveTabIndex.value = getTabIndex(t);
        activeTab.value = t;
    };

    const isActiveTab = (t: TabContract): boolean => {
        return getTabIndex(t) === currentActiveTabIndex.value;
    }

    return {
        tabs,
        activateTab,
        isActiveTab,
        activeTab
    }
}