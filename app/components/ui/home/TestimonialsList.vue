<script setup lang="ts">
import { useRuntimeConfig } from '#app';
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';
import Testimonial from './Testimonial.vue';
const config = useRuntimeConfig();

const testimonialsCorps: string[] = config.public.testimonialsCorps.split(',').map((c: string) => c.trim());

</script>

<template>
    <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">    
        <div class="self-start lg:col-span-5 lg:sticky lg:top-24 lg:h-fit">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-center my-8">
                {{ $t('home.clients.title') }}
            </h2>
            <p class="mt-3 text-md text-zinc-600 dark:text-zinc-400">
                {{ $t('home.clients.description') }}
            </p>
            <div class="mt-8 grid grid-cols-2 gap-3">
                <div
                    v-for="(corp, index) in testimonialsCorps"
                    :key="index"
                    class="relative flex h-14 items-center justify-center rounded-xl border border-zinc-200/60 bg-white/80 text-xs font-bold tracking-wider text-zinc-400 uppercase shadow-xs dark:border-zinc-700/40 dark:bg-zinc-800/50 dark:text-zinc-500"
                >
                    <ClientIcon
                        icon="lucide:globe"
                        class="absolute left-4 h-4 w-4 text-main-100"
                    />
                    <span>{{ corp }}</span>
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
        </div>

    </div>
</template>