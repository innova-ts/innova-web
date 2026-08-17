<script setup lang="ts">
import { useRuntimeConfig } from '#app';
import Testimonial from './Testimonial.vue';
import SmartImg from '~/components/shared/ui/SmartImg.vue';
const config = useRuntimeConfig();

const testimonialsCorps: string[] = config.public.testimonialsCorps.split(',').map((c: string) => c.trim());

</script>

<template>
    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-13">
        {{ $t('home.clients.title') }}
    </h2>
    <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">    
        <div class="self-start lg:col-span-5 lg:sticky lg:top-24 lg:h-fit">
            <span class="h-[40px] pointer-events-none text-left block w-full text-8xl font-serif text-main-200 transition-colors duration-300 group-hover/testimonial:text-main-100/10 dark:text-zinc-700/30 dark:group-hover/testimonial:text-main-100/50 dark:group-focus/testimonial:text-main-100/20" aria-hidden="true">
                “
            </span>
            <p class="mt-3 text-md text-zinc-600 dark:text-zinc-400">
                {{ $t('home.clients.quote') }}
            </p>
            <p class="mt-3 text-md text-zinc-600 dark:text-zinc-400">
                {{ $t('home.clients.description') }}
            </p>
            <span class="h-[40px] rotate-180 pointer-events-none text-left block w-full text-8xl font-serif text-main-200 transition-colors duration-300 group-hover/testimonial:text-main-100/10 dark:text-zinc-700/30 dark:group-hover/testimonial:text-main-100/50 dark:group-focus/testimonial:text-main-100/20" aria-hidden="true">
                “
            </span>
            <div class="mt-15 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 w-[80%] m-auto sm:w-full">
                <div
                    v-for="(corp, index) in testimonialsCorps"
                    :key="index"
                    class="mb-2 relative flex h-14 items-center justify-end rounded-xl border border-zinc-200/60 bg-white/80 text-xs font-bold tracking-wider text-zinc-400 uppercase shadow-xs dark:border-zinc-700/40 dark:bg-zinc-800/50 dark:text-zinc-500"
                >
                    <div class="absolute left-[-10px] h-[80px] w-[80px] text-main-100 p-2 rounded-full border bg-white border-zinc-200/60 dark:bg-zinc-800 dark:border-zinc-700/40">
                        <SmartImg 
                            src="/images/pages/home/testimonials/burger"
                            alt=""
                        />
                    </div>
                    <span class="mr-4 text-lg sm:text-sm">{{ corp }}</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6 lg:col-span-7">
            <Testimonial 
                name="Susana Horia"
                position="CTO, Fintech Solutions"
                :statement="$t('home.clients.statements.susana')"
            />
            <Testimonial 
                name="Luigi Mada"
                position="VP Engineering, Datacorp"
                :statement="$t('home.clients.statements.luigi')"    
            />
            <Testimonial 
                name="Sal. Ami"
                position="Tech. Lead, ACME"
                :statement="$t('home.clients.statements.salvador')"
            />
            <Testimonial 
                name="Elena"
                position="CTO. Adirondack SA."
                :statement="$t('home.clients.statements.elena')"
            />
        </div>
    </div>
</template>