import { computed, ref, type ComputedRef } from 'vue';
import { useResourcesCollection } from './functionals/useDynamicContent';
import { getStates, useHttp } from '../utils/useHttp';

export type TeamMemberContract = {
    name: string
    last_name?: string
    position:string
    skills: string[] | string
    summary: string

    member_role_id: number
    github_code: number
    github_user_hash?: string
    linkedin_user_hash?:string
}

export const useListMembers = <T>() => {
    const { data: members, error, status, pending } = useHttp<T>('/members');
    const { isError, isPending } = getStates({ error, pending });
    return { members:members as ComputedRef<T>, status, isPending, isError }
}

export const useTeamMember = (member:TeamMemberContract) => {

    const skills = computed(() => {
        if (typeof member.skills === 'string') {
            return member.skills;
        }
        return member.skills.join(' · ');
    })

    const profileURL = computed(() => {
        if (member.github_code) {
            const code:number = member.github_code;
            return `https://avatars.githubusercontent.com/u/${code}`;
        }
        return 'https://media1.tenor.com/m/KyoPT2q7zfUAAAAd/creeping-window-jump.gif';
    })

    const linkedinLink = computed((): string|null => {
        if (member.linkedin_user_hash === undefined) {
            return null
        }
        return `https://www.linkedin.com/in/${member.linkedin_user_hash}`
    })
    const githubLink = computed((): string | null => {
        if (member.github_user_hash === undefined) {
            return null;
        }
        return `https://github.com/${member.github_user_hash}`
    })

    return {
        skills,
        profileURL,
        linkedinLink,
        githubLink
    }
};

export const usePolicies = () => {
    const { getResourceCollection } = useResourcesCollection('policies-list', 'policies');
    return { getResourceCollection };
};
