import { reactive } from "vue"

export const useNavigationLinks = () => {
    const routes = reactive([
        {
            name: 'home',
            path: '/',
            label: 'navigation.home'
        },
        {
            name: 'about',
            path: '/about',
            label: 'navigation.about'
        },
        {
            name: 'our-team',
            path: '/our-team',
            label: 'navigation.ourTeam'
        },
        {
            name: 'contact',
            path: '/contact',
            label: 'navigation.contact'
        }
    ])

    return { routes };
}
