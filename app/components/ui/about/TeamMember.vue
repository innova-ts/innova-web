<script lang="ts" setup>
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';
import SmartImg from '~/components/shared/ui/SmartImg.vue';
import { useTeamMember, type TeamMemberContract } from '~/composables/features/useAbout';

const props = withDefaults(defineProps<{
    memberInfo: TeamMemberContract,
    variant?: 'standar' | 'img-first'
}>(), {
    variant: 'standar'
})

const { skills, profileURL, linkedinLink, githubLink } = useTeamMember(props.memberInfo);

</script>
<template>
    <section :class="[
        'border border-gray-400/20 rounded-lg overflow-hidden group/card hover:border-main-50 active:border-main-50 transition-all duration-300',
        variant === 'standar' ? 'flex flex-col md:flex-row' : 'img-first'
    ]">
        <div :class="['w-full', (variant === 'standar') && 'md:w-2/7']">
            <div class="relative overflow-hidden w-full h-full bg-branding-50 brightness-80 group-hover/card:brightness-100">
                <div 
                    class="absolute w-full h-full transition-all duration-300 ease-in-out bg-[linear-gradient(0deg,var(--color-branding-50),color-mix(in_oklab,var(--color-branding-50)_20%,transparent)_20%)] group-hover/card:opacity-0 z-10"
                ></div>
                <SmartImg 
                    :src="profileURL"
                    :alt="props.memberInfo.name"
                    :local-source="false"
                    :class="[
                        'object-cover object-center w-full h-full transition-all duration-300 ease-in-out',
                        'group-hover/card:scale-110',
                        'mix-blend-luminosity group-hover/card:mix-blend-normal group-active/card:mix-blend-normal',
                    ]"
                />
            </div>
        </div>
        <div :class="['w-full grow flex p-5 flex-col justify-between gap-3', (variant === 'standar') && 'md:w-5/7']">
            <div>
                <h3 class="text-2xl">{{ props.memberInfo.name }}</h3>
                <span class="text-xs font-bold uppercase text-main-200">
                    {{ props.memberInfo.position }}
                </span>
                <small class="block text-xs text-branding-100 dark:text-branding-200/75 my-2 ">{{ $t('about.team.content.specialization') }}: </small>
                <code class="text-sm block w-full p-3 rounded-md border dark:text-branding-200 border-branding-200/50 bg-branding-100/8 dark:bg-branding-200/5 mb-3 wrap-break-word">
                    {{ skills }}
                </code>
                <p class="text-sm">{{ props.memberInfo.summary }}</p>
            </div>
            <hr class="border-gray-400/20 my-2">
            <div class="flex gap-2 justify-end">
                <a 
                    v-if="linkedinLink"
                    :href="linkedinLink" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-branding-100/8 hover:bg-bod/8 dark:bg-branding-200/10 dark:hover:bg-branding-50/80 transition-colors group/member-link p-2 rounded-md"
                    :title="$t('about.team.content.linkedin')"
                >
                    <ClientIcon icon="akar-icons:linkedin-box-fill" class="w-5 h-5 transition-colors group-hover/member-link:text-main-200 group-active/member-link:text-main-200 dark:group-hover/member-link:text-main-50 dark:group-active/member-link:text-main-50" />
                </a>
                <a 
                    v-if="githubLink"
                    :href="githubLink" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-branding-100/8 hover:bg-bod/8 dark:bg-branding-200/10 dark:hover:bg-branding-50/80 transition-colors group/member-link p-2 rounded-md"
                    :title="$t('about.team.content.github')"
                >
                    <ClientIcon icon="akar-icons:github-fill" class="w-5 h-5 transition-colors group-hover/member-link:text-main-200 group-active/member-link:text-main-200 dark:group-hover/member-link:text-main-50 dark:group-active/member-link:text-main-50" />
                </a>
            </div>
        </div>
    </section>
</template>