<script lang="ts" setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import GlobalTransition from '../utils/GlobalTransition.vue';
import type { DropDownMenuOption } from '~/utils/types/Dropdown.ts';

const props = defineProps<{
    modelValue: string
    options: DropDownMenuOption[]
    label?: string 
    autoDetect?: boolean
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void,
    (e: 'on-select', item: DropDownMenuOption): void,
}>();

const isOpen = ref(false);
const openUp = ref(false);
const alignLeft = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const menuRef = ref<HTMLElement | null>(null);

const findItemByValue = (value: string): DropDownMenuOption|null => {
    return props.options.find((option): boolean => option.value === value) || null;
}

const selectedItem = computed<DropDownMenuOption>((): DropDownMenuOption => {
    return (findItemByValue(props.modelValue) || props.options[0]) as DropDownMenuOption;
})

const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

const recomputeDirection = () => {
    if (!props.autoDetect) {
        openUp.value = false;
        alignLeft.value = false;
        return;
    }
    const menu = menuRef.value;
    const anchor = dropdownRef.value;
    if (!menu || !anchor) return;
    const menuRect: DOMRect = menu.getBoundingClientRect();
    const anchorRect: DOMRect = anchor.getBoundingClientRect();
    const spaceBelow: number = window.innerHeight - anchorRect.bottom;
    openUp.value = menuRect.height > spaceBelow;
    alignLeft.value = anchorRect.right - menuRect.width < 0;
};

const menuPositionClass = computed<string>((): string => {
    const vertical: string = openUp.value ? 'bottom-full mb-1.5' : 'mt-1.5';
    const horizontal: string = alignLeft.value ? 'left-0' : 'right-0';
    const origin: string = openUp.value
        ? (alignLeft.value ? 'origin-bottom-left' : 'origin-bottom-right')
        : (alignLeft.value ? 'origin-top-left' : 'origin-top-right');
    return `${vertical} ${horizontal} ${origin}`;
});

const handleWindowEvents = () => {
    if (isOpen.value) recomputeDirection();
};

watch(isOpen, (open) => {
    if (open) {
        nextTick(() => recomputeDirection());
    } else {
        openUp.value = false;
        alignLeft.value = false;
    }
});

const selectItem = (option: DropDownMenuOption) => {
    emit('update:modelValue', option.value);
    emit('on-select', option);
    isOpen.value = false;
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleWindowEvents);
    window.addEventListener('scroll', handleWindowEvents, true);
});
onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    window.removeEventListener('resize', handleWindowEvents);
    window.removeEventListener('scroll', handleWindowEvents, true);
});

</script>

<template>
    <div ref="dropdownRef" class="relative inline-block text-left text-sm">
        <button
            @click.prevent="isOpen = !isOpen"
        >
            <span class="text-gray-700 dark:text-zinc-300"><span v-if="selectedItem?.icon">{{ selectedItem.icon }}</span> {{ selectedItem.label }}</span>
            <span
                class="ml-2 h-4 w-4 border-r-2 border-b-2 border-gray-400 dark:border-zinc-400 transform transition-transform duration-200 inline-block w-[6px] h-[6px]"
                :class="isOpen ? '-rotate-135 translate-y-0.5' : 'rotate-45 -translate-y-0.5'"
            ></span>
        </button>
        <GlobalTransition>
            <template v-if="isOpen">
                <div 
                    ref="menuRef"
                    :class="[
                        'absolute z-50 min-w-full rounded-lg bg-bol dark:bg-bod shadow-lg border border-gray-200 dark:border-zinc-700 focus:outline-none',
                        menuPositionClass
                    ]"
                >
                    <div class="py-1">
                        <button v-for="(option) in options" :key="option.value" @click.prevent="selectItem(option)" :class="[
                            'flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-bod/50 transition-colors',
                            modelValue === option.value
                                ? 'text-main-500 dark:text-main-400 font-medium bg-gray-50 dark:bg-bod/30'
                                : 'text-gray-700 dark:text-zinc-300'
                        ]">
                            <span v-if="option.icon">{{ option.icon }}</span>
                            <span>{{ option.label }}</span>
                        </button>
                    </div>
                </div>
            </template>
        </GlobalTransition>
    </div>
</template>