import { useSeoMeta } from "#app";

export function useSeo(meta: { 
    title?: string, 
    description: string,
    ogTitle?: string
    ogDescription?: string,
    ogType?: 'website' | 'article' | 'book' | 'profile',
    ogImage?: string
}) {
    useSeoMeta({
        title: meta.title,
        ogTitle: meta.ogTitle ?? meta.title,
        description: meta.description,
        ogDescription: meta.ogDescription ?? meta.description,
        ogType: meta.ogType ?? 'website',
        ogImage: meta.ogImage,
    });
}