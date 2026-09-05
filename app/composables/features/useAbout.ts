import { computed, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

type TeamMemberContract = {
    code: number,
    slug: string,
    linkedin:string
}

export const useAbout = (memberIndex: number) => {

    const { t } = useI18n();

    const skills = computed(() => {
        const skilsList = t(`about.team.management.items[${memberIndex}].skills`).split(',')
        return skilsList.join(' · ');
    })

    const managementMembersIds:TeamMemberContract[] = reactive<TeamMemberContract[]>([
        {code: 55868033, slug: 'joseloyola200', linkedin: ''},
        {code: 183737378, slug: 'victorvelas', linkedin: 'victor-h-velasquez-008340201'}
    ]);

    const getTeamMemberInfo = (): TeamMemberContract => {
        return managementMembersIds[memberIndex] as TeamMemberContract;
    }

    const existingMember = computed(() => {
        return managementMembersIds.map((item:TeamMemberContract):number => item.code).includes(memberIndex);
    })

    const profileURL = computed(() => {
        if (existingMember) {
            const code:number = getTeamMemberInfo().code;
            return `https://avatars.githubusercontent.com/u/${code}`;
        }
        return 'https://media1.tenor.com/m/KyoPT2q7zfUAAAAd/creeping-window-jump.gif';
    })

    const linkedin = computed(() => {
        return getTeamMemberInfo().linkedin
    })
    const github = computed(() => {
        return getTeamMemberInfo().slug
    })

    return {
        skills,
        existingMember,
        profileURL,
        linkedin,
        github
    }
}