<script lang="ts" setup>
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';
import SmartImg from '~/components/shared/ui/SmartImg.vue';

const props = defineProps<{
    alt?: string,
    imgUrl?: string,
    icon: string,
    title: string,
    content: string
}>();

</script>
<template>
    <article 
        class="rounded-md sm:rounded-lg border-1 min-h-[250px] bg-white dark:bg-zinc-800/35 border-gray-200/90 dark:border-tol/70 hover:border-main-50 transition-all duration-200 relative group/title overflow-hidden shadow-bod/25 dark:shadow-main-800/40 hover:shadow-[-1px_5px_3px] focus:shadow-[-1px_5px_3px] dark:focus:shadow-[-1px_5px_8px] hover:translate-y-[-6px] focus:translate-y-[-6px]" 
        :class="[$attrs.class]"
        tabindex="0"
    >
        <div 
            class="absolute z-0 inset-0 top-0 left-0 w-full"
            :class="[
                'light:bg-gradient-to-b light:from-via-bol/10 light:via-bol/30 light:to-bol',
                'dark:bg-gradient-to-b dark:from-transparent dark:via-bod/50 dark:to-bod',
            ]"
        >
            <SmartImg 
                v-if="props.imgUrl"
                :src="props.imgUrl"
                :alt="props.alt ?? ''"
                class="w-full h-full opacity-[50%] dark:opacity-20 group-hover/title:opacity-90 group-focus/title:opacity-90 dark:group-hover/title:opacity-40 dark:group-focus/title:opacity-40 object-cover scale-105 transition-all duration-700 ease-out group-hover/title:scale-110"
                aria-hidden="true" 
                loading="lazy" 
                decoding="async" 
            />
        </div>
        <section class="absolute bottom-0 p-0 transition-all group-hover/title:backdrop-blur-[3px] group-focus/title:backdrop-blur-[3px] group-hover/title:bg-white/80 group-focus/title:bg-white/80 dark:group-hover/title:bg-bod/80 dark:group-focus/title:bg-bod/80">
            <div class="mx-4 z-10 translate-y-[calc(100%-40px)] group-hover/title:translate-y-0 group-focus/title:translate-y-0 transition-all">
                <h3 class="text-[22px] font-bold my-2 border-l-4 border-main-50 pl-3 group-hover/title:text-main-100 transition-all duration-200 flex items-center mb-5 bottom-0">
                    <ClientIcon :icon="props.icon" class="text-main-100 mr-2" /> {{ props.title }}
                </h3>
                <p 
                    class="dark:text-tod/80 pb-4"
                >{{ props.content }}</p>
            </div>
        </section>
    </article>
</template>