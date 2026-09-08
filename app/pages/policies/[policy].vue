<script lang="ts" setup>
import { useRoute } from 'vue-router';
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import { useFirstResource } from '~/composables/features/functionals/useDynamicContent';
import { usePolicies } from '~/composables/features/useAbout';

const route = useRoute();

const { getResourceCollection } = usePolicies()
const { data:policies } = await getResourceCollection();

const { getResource } = useFirstResource(`policy-resource-${route.params.policy}`, 'policies');
const { data:policyResource } = await getResource(route.params.policy as string);

</script>
<template>
    <div class="container-site py-8">
        <div class="flex flex-col-reverse md:flex-row w-full gap-6">
            <div class="w-full md:w-4/5">
                <SimpleSectionHeader
                    :label="$t('about.policies.header.label')"
                    :title="policyResource.title"
                    :span="$t('about.policies.content.updatedAt', { date: policyResource.meta.date })"
                    :use-h1="true"
                />
                <article class="markdown-body my-4">
                    <ContentRenderer v-if="policyResource" :value="policyResource" />
                </article>
            </div>
            <div class="w-full md:w-1/5">
                <ul class="block border-l border-l-bod/10 dark:border-l-bol/10">
                    <template v-for="policy in policies" :key="policy.id">
                        <li>
                            <NuxtLinkLocale 
                                :to="`/${policy.dir}`"
                                class="flex text-sm items-center gap-2 p-1.5 pl-5 group/policy-link outline-0!"
                            >
                                <span class="text-branding-100 dark:text-branding-200 font-semibold text-lg text-center">•</span>
                                <span class="transition-all text-tol/90 dark:text-tod/70 group-hover/policy-link:text-main-50 group-focus/policy-link:text-main-50 group-active/policy-link:text-main-50">{{ policy.title }}</span>
                            </NuxtLinkLocale>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

@reference "~/assets/css/main.css";

.markdown-body :deep(p) {
    @apply text-tol/80 dark:text-tod/70 mb-4;
}

.markdown-body :deep(img) {
    @apply border border-bod/10 dark:border-bol/10 rounded-lg;
}

.markdown-body :deep(table tr td), .markdown-body :deep(table tr th) {
    @apply p-2 border border-bod/10 dark:border-bol/10;
}
</style>
