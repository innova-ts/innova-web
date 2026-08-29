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
        class="rounded-md sm:rounded-lg border min-h-[250px] bg-white dark:bg-zinc-800/35 border-gray-200/90 dark:border-tol/70 hover:border-main-50 transition-all duration-200 relative group/title overflow-hidden shadow-bod/30 dark:shadow-main-800/40 hover:shadow-[-1px_5px_3px] focus:shadow-[-1px_5px_3px] dark:focus:shadow-[-1px_5px_8px] sm:hover:translate-y-[-6px] sm:focus:translate-y-[-6px]" 
        :class="[$attrs.class]"
        tabindex="0"
    >
        <div 
            class="absolute z-0 inset-0 top-0 left-0 w-full"
            :class="[
                'light:bg-linear-to-b light:from-via-bol/10 light:via-bol/30 light:to-bol',
                'dark:bg-linear-to-b dark:from-transparent dark:via-bod/50 dark:to-bod',
            ]"
        >
            <SmartImg 
                v-if="props.imgUrl"
                :src="props.imgUrl"
                :alt="props.alt ?? ''"
                class="w-full h-full opacity-85 dark:opacity-70 group-hover/title:opacity-90 group-focus/title:opacity-90 dark:group-hover/title:80-40 dark:group-focus/title:opacity-80 object-cover scale-105 transition-all duration-700 ease-out group-hover/title:scale-110"
                aria-hidden="true" 
                loading="lazy" 
                decoding="async" 
            />
        </div>
        <section :class="[
            'sm:translate-y-[calc(100%-50px)] sm:group-hover/title:translate-y-0 sm:group-focus/title:translate-y-0 absolute bottom-0 p-0 transition-all group-hover/title:backdrop-blur-[3px] group-focus/title:backdrop-blur-[3px]! bg-white/80! dark:bg-bod/80! sm:bg-transparent! sm:group-hover/title:bg-white/80! sm:group-focus/title:bg-white/80! sm:dark:group-hover/title:bg-bod/80! sm:dark:group-focus/title:bg-bod/80!',
            
        ]">
            <div class="mx-4 z-10 transition-all">
                <h3 class="text-[25px] font-bold my-2 border-l-4 border-main-50 pl-3 text-main-400 sm:light:group-hover/title:text-main-400 sm:dark:group-hover/title:text-main-100 transition-all duration-200 flex items-center mb-5 bottom-0 sm:light:text-tod sm:light:group-focus/title:text-tol">
                    <ClientIcon :icon="props.icon" class="text-main-100 light:group-hover/title:text-main-400 light:group-focus/title:text-main-400 mr-2" /> {{ props.title }}
                </h3>
                <p 
                    class="dark:text-tod/80 pb-4"
                >{{ props.content }}</p>
            </div>
        </section>
    </article>
</template>