<template>
    <div class="mb-7">
        <h2 class="text-2xl font-bold">{{ $t('home.services.title') }}</h2>
        <h3 class="text-md dark:text-tod/70">{{ $t('home.services.description') }}</h3>
    </div>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <article class="border-1 min-h-[250px] bg-white dark:bg-zinc-800/35 border-gray-200/90 dark:border-tol/70 hover:border-main-50 transition-all duration-200 p-4 sm:col-span-2 relative group/title overflow-hidden">
                <div class="absolute z-0 inset-0 top-0 left-0 w-full">
                    <img src="/images/pages/home/presentation/custom-software.webp" class="w-full h-full opacity-20 object-cover scale-105 transition-transform duration-700 ease-out group-hover/title:scale-110"/>
                </div>
                <div class="absolute inset-0 z-[1] bg-gradient-to-b from-via-bol/10 via-bol/30 to-bol dark:from-transparent dark:via-bod/40 dark:to-bod/95" ></div>
                <div class="absolute bottom-4 mr-4 z-10">
                    <h3 class="text-lg font-bold my-2 border-l-4 border-main-50 pl-3 group-hover/title:text-main-100 transition-all duration-200">{{ $t('home.services.mainServices.custom.title') }}</h3>
                    <p class="text-tol/70 dark:text-tod/80">{{ $t('home.services.mainServices.custom.content') }}</p>
                </div>
            </article>
            <article class="border-1 min-h-[250px] bg-white dark:bg-zinc-800/35 border-gray-200/90 dark:border-tol/70 hover:border-main-50 transition-all duration-200 p-4 relative group/title">
                <div class="absolute bottom-4 mr-4 z-10">
                    <h3 class="text-lg font-bold my-2 border-l-4 border-main-50 pl-3 group-hover/title:text-main-100 transition-all duration-200">{{ $t('home.services.mainServices.web.title') }}</h3>
                    <p class="text-tol/70 dark:text-tod/80">{{ $t('home.services.mainServices.web.content') }}</p>
                </div>
            </article>
            <article class="border-1 min-h-[250px] bg-white dark:bg-zinc-800/35 border-gray-200/90 dark:border-tol/70 hover:border-main-50 transition-all duration-200 p-4 relative group/title overflow-hidden">
                <div class="absolute z-0 inset-0 top-0 left-0 w-full">
                    <img src="/images/pages/home/presentation/mobile-apps.webp" class="w-full h-full opacity-20 object-cover scale-105 transition-transform duration-700 ease-out group-hover/title:scale-110"/>
                </div>
                <div class="absolute inset-0 z-[1] bg-gradient-to-b from-via-bol/10 via-bol/30 to-bol dark:from-transparent dark:via-bod/40 dark:to-bod/95" ></div>
                <div class="absolute bottom-4 mr-4 z-10">
                    <h3 class="text-lg font-bold my-2 border-l-4 border-main-50 pl-3 group-hover/title:text-main-100 transition-all duration-200">{{ $t('home.services.mainServices.mobile.title') }}</h3>
                    <p class="text-tol/70 dark:text-tod/80">{{ $t('home.services.mainServices.mobile.content') }}</p>
                </div>
            </article>
            <article class="border-1 min-h-[250px] bg-white dark:bg-zinc-800/35 border-gray-200/90 dark:border-tol/70 hover:border-main-50 transition-all duration-200 p-4 sm:col-span-2 relative group/title overflow-hidden">
                <div class="absolute z-0 inset-0 top-0 left-0 w-full">
                    <img src="/images/pages/home/presentation/infra.webp" class="w-full h-full opacity-20 object-cover scale-105 transition-transform duration-700 ease-out group-hover/title:scale-110"/>
                </div>
                <div class="absolute inset-0 z-[1] bg-gradient-to-b from-via-bol/10 via-bol/30 to-bol dark:from-transparent dark:via-bod/40 dark:to-bod/95" ></div>
                <div class="absolute bottom-4 mr-4 z-10">
                    <h3 class="text-lg font-bold my-2 border-l-4 border-main-50 pl-3 group-hover/title:text-main-100 transition-all duration-200">{{ $t('home.services.mainServices.infrastructure.title') }}</h3>
                    <p class="text-tol/70 dark:text-tod/80">{{ $t('home.services.mainServices.infrastructure.content') }}</p>
                </div>
            </article>
        </div>
    </div>
</template>