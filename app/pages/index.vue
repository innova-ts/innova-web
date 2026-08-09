<script lang="ts" setup>
    import SmoothLiquid from '~/components/shared/ui/SmoothLiquid.vue';
</script>
<template>
    <div>
        <!-- Presentation -->
        <section class="relative overflow-hidden min-h-[550px] flex">
            <SmoothLiquid>
                <div class="flex h-full">
                    <div class="m-auto container-site">
                        <h1 class="text-5xl text-center font-bold">{{ $t('home.presentation.title') }}</h1>
                        <h2 class="text-5xl text-center text-main-200 dark:text-main-50 font-bold">{{ $t('home.presentation.subtitle') }}</h2>
                        <p class="m-auto text-xl text-center py-8 w-[80%] sm:w-[60%]">{{ $t('home.presentation.description') }}</p>
                    </div>
                </div>
            </SmoothLiquid>
        </section>

        <!-- Services -->
        <section class="service">
            Servicios
        </section>

        <!-- Why choose us -->
        <section class="why-choose-us">
            <div class="container-site">
                Por que elegirnos
            </div>
        </section>

        <!-- Clients -->
        <section class="clients">
            Clientes
        </section>
    </div>
</template>
