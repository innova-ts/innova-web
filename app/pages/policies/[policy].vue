<script lang="ts" setup>
import { useRoute } from 'vue-router';
import SimpleSectionHeader from '~/components/shared/ui/SimpleSectionHeader.vue';
import DynamicMarkDownContent from '~/components/ui/md/DynamicMarkDownContent.vue';
import { useFirstResource } from '~/composables/features/functionals/useDynamicContent';
import { usePolicies } from '~/composables/features/useAbout';
import { useSeo } from '~/composables/seo/useSeo';

const route = useRoute();

const { getResourceCollection } = usePolicies()
const { data:policies } = await getResourceCollection();

const { getResource } = useFirstResource(`policy-resource-${route.params.policy}`, 'policies');
const { data:policyResource } = await getResource(route.params.policy as string);

useSeo({
    title: policyResource.value.seo.title,
    description: policyResource.value.seo.description
});

</script>
<template>
    <div class="container-site py-8">
        <div class="flex flex-col-reverse md:flex-row w-full gap-6">
            <div class="w-full md:w-4/5">
                <SimpleSectionHeader
                    :label="$t('about.policies.header.label')"
                    :title="policyResource.title"
                    :span="$t('about.policies.content.updatedAt', { date: policyResource.meta.lastUpdated })"
                    :use-h1="true"
                />
                <DynamicMarkDownContent>
                    <ContentRenderer v-if="policyResource" :value="policyResource" />
                </DynamicMarkDownContent>
            </div>
            <div class="w-full md:w-1/5 md:sticky md:top-15 md:self-start">
                <ul class="block border-l border-l-bod/10 dark:border-l-bol/10">
                    <template v-for="policy in policies" :key="policy.id">
                        <li>
                            <NuxtLinkLocale 
                                :to="`/${policy.dir}`"
                                class="flex text-sm items-center gap-2 p-1.5 pl-5 group/policy-link outline-0!"
                            >
                                <span class="text-branding-100 dark:text-main-50/30 font-semibold text-lg text-center">•</span>
                                <span 
                                    :class="[
                                        'transition-all text-tol/90 dark:text-tod/70 group-hover/policy-link:underline group-focus/policy-link:underline group-active/policy-link:underline',
                                        'decoration-1 decoration-main-50',
                                        policy.id.endsWith(`/${route.params.policy}.md`) && 'underline'
                                    ]"
                                >{{ policy.title }}</span>
                            </NuxtLinkLocale>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>
