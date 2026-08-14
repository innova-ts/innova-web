<script lang="ts" setup>
import ArticleHomeServiceGridItem from './ArticleHomeServiceGridItem.vue';
</script>
<template>
    <div class="mb-7">
        <h2 class="text-3xl font-bold text-center">{{ $t('home.services.title') }}</h2>
        <!-- <h3 class="text-md dark:text-tod/70 text-center">{{ $t('home.services.description') }}</h3> -->
    </div>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ArticleHomeServiceGridItem 
                img-url="/images/pages/home/presentation/custom-software"
                :alt="$t('home.services.mainServices.custom.title')"
                icon="icon-park-twotone:compass"
                :title="$t('home.services.mainServices.custom.title')" 
                :content="$t('home.services.mainServices.custom.content')"
                class="md:col-span-2" 
            />
            <ArticleHomeServiceGridItem 
                img-url="/images/pages/home/presentation/web-development"
                :alt="$t('home.services.mainServices.web.title')"
                fallback="png"
                icon="material-symbols:web"
                :title="$t('home.services.mainServices.web.title')" 
                :content="$t('home.services.mainServices.web.content')"
            />
            <ArticleHomeServiceGridItem 
                img-url="/images/pages/home/presentation/mobile-apps"
                :alt="$t('home.services.mainServices.mobile.title')"
                icon="mdi:cellphone"
                :title="$t('home.services.mainServices.mobile.title')" 
                :content="$t('home.services.mainServices.mobile.content')"
            />
            <ArticleHomeServiceGridItem 
                img-url="/images/pages/home/presentation/infra"
                :alt="$t('home.services.mainServices.infrastructure.title')"
                icon="mdi:server"
                :title="$t('home.services.mainServices.infrastructure.title')" 
                :content="$t('home.services.mainServices.infrastructure.content')"
                class="md:col-span-2" 
            />
        </div>
    </div>
</template>