import { queryCollection, useAsyncData } from "#imports";
import type { Collections } from "@nuxt/content";
import { useI18n } from "vue-i18n";

const createCollectionKey = (collectionName:string, locale:string): keyof Collections => {
    const collectionKey = `${collectionName}_${locale}` as keyof Collections;
    
    return collectionKey;
}

const mapResource = (resource:any, locale:string) => {
    return {
        ...resource,
        dir: resource.path.substring(`/${locale}/`.length)
    }
}

export const useFirstResource = (key: string, collectionName: string) => {
    const { locale } = useI18n();
   
    const getResource = async (path:string) => {
        return await useAsyncData(key, async () => {
            const collectionKey = createCollectionKey(collectionName, locale.value);
            const fullPath:string = `/${locale.value}/${collectionName}/${path}`
            const content = await queryCollection(collectionKey).path(fullPath).first();

            return mapResource(content, locale.value);
        }, {
            watch: [locale]
        });
    }
    
    return { getResource };
}

export const useResourcesCollection = (key:string, collectionName:string) => {
    const { locale } = useI18n();

    const getResourceCollection = async ()  => {
        return await useAsyncData(key, async () => {
            const collectionKey = createCollectionKey(collectionName, locale.value);
            const content = await queryCollection(collectionKey).all()

            return content.map(item => mapResource(item, locale.value));
        }, {
            watch: [locale]
        });
    }

    return { getResourceCollection };
}
