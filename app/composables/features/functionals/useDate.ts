import { useI18n } from "vue-i18n";

export const useDate = (dateString: string) => {
    const { locale } = useI18n();
    const date = new Date(dateString);
    return date.toLocaleDateString(locale.value, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}