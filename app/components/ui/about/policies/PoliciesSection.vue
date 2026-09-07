<script lang="ts" setup>
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';
import { usePolicies } from '~/composables/features/useAbout';

const isFirst = (index: number) => {
    return index === 0;
}

const { getResourceCollection } = usePolicies()
const { data:policies } = await getResourceCollection();

</script>
<template>
    <div class="container-site">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div class="flex flex-col gap-4 sticky top-28">
                <SimpleSectionHeader
                    :label="$t('about.policies.header.label')"
                    :title="$t('about.policies.header.title')"
                />
                <p>{{ $t('about.policies.content.description') }}</p>
            </div>
            <div class="w-full col-span-2">
                <template v-for="(policy, index) in policies">
                    <NuxtLinkLocale 
                        :to="`/${policy.dir}`"
                        :class="[
                            'flex w-full items-center justify-between p-3 outline-0!',
                            'border border-b-0 border-bod/8 dark:border-bol/10 border-l-3',
                            isFirst(index) && 'border-t-0!',
                            'hover:bg-linear-to-r hover:from-main-50/5 hover:to-transparent',
                            'active:bg-linear-to-r active:from-main-50/5 active:to-transparent',
                            'focus:bg-linear-to-r focus:from-main-50/5 active:to-transparent',
                            'relative before before:content-[\'\'] before:absolute before:-left-0.5 before:top-[50%] before:w-0.5 before:bg-main-50 before:h-0',
                            'hover:before:h-full hover:before:top-0 before:transition-all',
                        ]"
                    >
                        <span class="text-tol/90 dark:text-tod/70">
                            {{ policy.title }}
                        </span>
                        <ClientIcon icon="dashicons:arrow-right-alt2" class="text-tol/40 dark:text-tod/50" />
                    </NuxtLinkLocale>
                </template>
            </div>
        </div>
    </div>
</template>