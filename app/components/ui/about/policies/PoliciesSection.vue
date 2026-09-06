<script lang="ts" setup>
import { reactive } from 'vue';
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import { useI18n } from 'vue-i18n';
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';

const { t } = useI18n();

type PolicyStructure = {
    name: string,
    link: string
}

const policies = reactive<PolicyStructure[]>([
    { name: t('about.policies.list.privacyPolicy'), link: 'http://localhost:3000/about' },
    { name: t('about.policies.list.dataTraining'), link: 'http://localhost:3000/about' },
    { name: t('about.policies.list.dataSecurity'), link: 'http://localhost:3000/about' },
    { name: t('about.policies.list.qualityPolicy'), link: 'http://localhost:3000/about' },
    { name: t('about.policies.list.websiteUsageTerms'), link: 'http://localhost:3000/about' },
    { name: t('about.policies.list.termsConditions'), link: 'http://localhost:3000/about' },
])

const isFirst = (index: number) => {
    return index === 0;
}

const isLast = (index: number) => {
    return index === (policies.length - 1);
}

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
                        :to="policy.link"
                        :class="[
                            'flex w-full items-center justify-between p-3 outline-0!',
                            'border border-b-0 border-bod/8 dark:border-bol/10 border-l-3',
                            isFirst(index) && 'border-t-0!',
                            'hover:bg-linear-to-r hover:from-main-50/5 hover:to-transparent',
                            'active:bg-linear-to-r active:from-main-50/5 active:to-transparent',
                            'focus:bg-linear-to-r focus:from-main-50/5 active:to-transparent',

                            /* 'hover:border-l-main-50 focus:border-l-main-50 active:border-l-main-50', */,
                            'relative before before:content-[\'\'] before:absolute before:-left-0.5 before:top-[50%] before:w-0.5 before:bg-main-50 before:h-0',
                            'hover:before:h-full hover:before:top-0 before:transition-all',
                        ]"
                    >
                        <span class="text-tol/90 dark:text-tod/70">
                            {{ policy.name }}
                        </span>
                        <ClientIcon icon="dashicons:arrow-right-alt2" class="text-tol/40 dark:text-tod/50" />
                    </NuxtLinkLocale>
                </template>
            </div>
        </div>
    </div>
</template>