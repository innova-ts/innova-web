import { computed, reactive } from 'vue';
import { useI18n } from 'vue-i18n';



export type TeamMemberContract = {
    name: string
    position:string
    skills: string[]
    summary: string

    githubCode: number
    githubUserHash?: string
    linkedinUserHash?:string
}

export const useManagerMembers = () => {
    const { t } = useI18n();

    const members: TeamMemberContract[] = reactive<TeamMemberContract[]>([
        { 
            name: t('about.team.management.items[0].name'),
            position: t('about.team.management.items[0].position'),
            skills: t('about.team.management.items[0].skills').split(','),
            summary: t('about.team.management.items[0].summary'),
            githubCode: 55868033, 
            githubUserHash: 'joseloyola200', 
            linkedinUserHash: 'joseloyola200'
        },
        { 
            name: t('about.team.management.items[1].name'),
            position: t('about.team.management.items[1].position'),
            skills: t('about.team.management.items[1].skills').split(','),
            summary: t('about.team.management.items[1].summary'),
            githubCode: 183737378, 
            githubUserHash: 'victorvelas', 
            linkedinUserHash: 'victor-h-velasquez-008340201'
        }
    ]);

    return { members };
}

export const useProjectMembers = () => {
    const { t } = useI18n();

    const members: TeamMemberContract[] = reactive<TeamMemberContract[]>([
        { 
            name: 'Judit Pacsai',
            position: t('about.team.management.items[1].position'),
            skills: t('about.team.management.items[1].skills').split(','),
            summary: t('about.team.management.items[1].summary'),
            githubCode: 34191321, 
            githubUserHash: 'jpacsai', 
        }
    ]);
    
    return { members };
}

export const useAdministrationMembers = () => {
    const { t } = useI18n();
    
    const members: TeamMemberContract[] = reactive<TeamMemberContract[]>([
        {
            name: 'Evan You',
            position: t('about.team.management.items[1].position'),
            skills: t('about.team.management.items[1].skills').split(','),
            summary: t('about.team.management.items[1].summary'),
            githubCode: 499550, 
            githubUserHash: 'yyx990803', 
        },
        {
            name: 'Taylor Otwell',
            position: t('about.team.management.items[1].position'),
            skills: t('about.team.management.items[1].skills').split(','),
            summary: t('about.team.management.items[1].summary'),
            githubCode: 463230, 
            githubUserHash: 'taylorotwell', 
        },
        {
            name: 'Linus Torvalds',
            position: t('about.team.management.items[1].position'),
            skills: t('about.team.management.items[1].skills').split(','),
            summary: t('about.team.management.items[1].summary'),
            githubCode: 1024025, 
            githubUserHash: 'torvalds', 
        },
    ]);

    return { members };
}

export const useTeamMember = (member:TeamMemberContract) => {
    const skills = computed(() => {
        return member.skills.join(' · ');
    })

    const profileURL = computed(() => {
        if (member.githubCode) {
            const code:number = member.githubCode;
            return `https://avatars.githubusercontent.com/u/${code}`;
        }
        return 'https://media1.tenor.com/m/KyoPT2q7zfUAAAAd/creeping-window-jump.gif';
    })

    const linkedinLink = computed((): string|null => {
        if (member.linkedinUserHash === '') {
            return null
        }
        return `https://www.linkedin.com/in/${member.linkedinUserHash}`
    })
    const githubLink = computed((): string | null => {
        if (member.githubUserHash === '') {
            return null;
        }
        return `https://github.com/${member.githubUserHash}`
    })

    return {
        skills,
        profileURL,
        linkedinLink,
        githubLink
    }
};