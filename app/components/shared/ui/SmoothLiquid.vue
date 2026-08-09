<script lang="ts" setup>
import { onMounted } from 'vue';
import { initBlobs } from '~/utils/animations/liquidSmoth';

onMounted(() => {
	initBlobs('.bouncing-blob')
});
</script>
<template>
	<div class="absolute w-full h-full">
		<div class="bouncing-blobs-container absolute z-[1] top-0 left-0 w-full h-full">
			<div class="bouncing-blobs-glass absolute z-[2] top-0 left-0 w-full h-full light:backdrop-blur-[180px] dark:backdrop-blur-[140px] pointer-events-none max-[1200px]:backdrop-blur-[20px] max-[500px]:backdrop-blur-[90px]"></div>
			<div class="bouncing-blobs absolute z-[1] top-0 left-0 w-full h-full">
				<div class="bouncing-blob absolute z-[1] top-0 left-0 w-[32vw] aspect-square rounded-full will-change-transform origin-top-left light:bg-main-200/5 dark:bg-main-900 max-[500px]:w-[60vw]"></div>
				<div class="bouncing-blob absolute z-[1] top-0 left-0 w-[32vw] aspect-square rounded-full will-change-transform origin-top-left light:bg-main-300/2 dark:bg-main-900 max-[500px]:w-[60vw]"></div>
				<div class="bouncing-blob absolute z-[1] top-0 left-0 w-[32vw] aspect-square rounded-full will-change-transform origin-top-left light:bg-main-100/10 dark:bg-main-900 max-[500px]:w-[60vw]"></div>
				<div class="bouncing-blob absolute z-[2] top-0 left-0 w-[15vw] aspect-square rounded-full will-change-transform origin-top-left light:bg-main-400/20 dark:bg-white"></div>
				<div class="bouncing-blob absolute z-[1] top-0 left-0 w-[32vw] aspect-square rounded-full will-change-transform origin-top-left light:bg-main-400/10 dark:bg-main-400/50 max-[500px]:w-[60vw]"></div>
				<div class="bouncing-blob absolute z-[1] top-0 left-0 w-[32vw] aspect-square rounded-full will-change-transform origin-top-left light:bg-main-200/10 dark:bg-main-500/10 max-[500px]:w-[60vw]"></div>
				<div class="bouncing-blob absolute z-[1] top-0 left-0 w-[32vw] aspect-square rounded-full will-change-transform origin-top-left light:bg-main-300/20 dark:bg-main-100/80 max-[500px]:w-[60vw]"></div>
			</div>
		</div>
		<div class="relative z-10 w-full h-full">
			<slot></slot>
		</div>
	</div>
</template>
<style scoped>
.bouncing-blobs-container {
	/* background: url("https://tailwindcss.com/_next/static/media/cover.0g8-x6e87bh6a.png") */
}
</style>