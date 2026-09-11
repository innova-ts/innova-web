<template>
    <article class="markdown-body my-4">
        <slot />
    </article>
</template>
<style scoped>

@reference "~/assets/css/main.css";

.markdown-body {
    @apply text-base leading-7;
}

/* Paragraphs */
.markdown-body :deep(p) {
    @apply mb-5 text-tol/80 dark:text-tod/70;
}

/* Headings */
.markdown-body :deep(h1) {
    @apply mt-8 mb-5 text-3xl font-bold tracking-tight text-tod dark:text-tol;
}

.markdown-body :deep(h2) {
    @apply mt-8 mb-4 text-2xl font-bold tracking-tight text-tod dark:text-tol;
}

.markdown-body :deep(h3) {
    @apply mt-7 mb-3 text-xl font-semibold text-tod dark:text-tol;
}

.markdown-body :deep(h4) {
    @apply mt-6 mb-3 text-lg font-semibold text-tod dark:text-tol;
}

.markdown-body :deep(h5) {
    @apply mt-5 mb-2 text-base font-semibold text-tod dark:text-tol;
}

.markdown-body :deep(h6) {
    @apply mt-5 mb-2 text-sm font-semibold uppercase tracking-wide text-tol dark:text-tod;
}

/* Links */
.markdown-body :deep(a) {
    @apply font-medium text-main-50 underline decoration-main-50/30 underline-offset-4 transition-colors;
}

.markdown-body :deep(a:hover) {
    @apply text-main-100 decoration-main-100/60 dark:text-main-50;
}

/* Strong / emphasis */
.markdown-body :deep(strong) {
    @apply font-semibold text-tol dark:text-tod;
}

.markdown-body :deep(em) {
    @apply italic;
}

/* Lists */
.markdown-body :deep(ul) {
    @apply mb-5 list-disc space-y-2 pl-6 text-tol/80 dark:text-tod/70;
}

.markdown-body :deep(ol) {
    @apply mb-5 list-decimal space-y-2 pl-6 text-tol/80 dark:text-tod/70;
}

.markdown-body :deep(li) {
    @apply pl-1;
}

.markdown-body :deep(li > ul),
.markdown-body :deep(li > ol) {
    @apply mt-2 mb-0;
}

/* Blockquotes */
.markdown-body :deep(blockquote) {
    @apply my-6 border-l-4 border-main-50/40 bg-main-50/5 px-5 py-3 italic text-tol/80 dark:border-main-50/30 dark:bg-main-50/5 dark:text-tod/70;
}

.markdown-body :deep(blockquote p) {
    @apply mb-0;
}

/* Inline code */
.markdown-body :deep(code) {
    @apply rounded-md bg-bod/5 px-1.5 py-0.5 font-mono text-sm text-main-100 dark:bg-bol/10 dark:text-main-50;
}

/* Code blocks */
.markdown-body :deep(pre) {
    @apply my-6 overflow-x-auto rounded-xl border border-bod/10 bg-bod/5 p-4 dark:border-bol/10 dark:bg-bol/5;
}

.markdown-body :deep(pre code) {
    @apply bg-transparent p-0 text-sm leading-6 text-tol dark:text-tod;
}

/* Images */
.markdown-body :deep(img) {
    @apply my-6 h-auto max-w-full rounded-lg border border-bod/10 dark:border-bol/10;
}

/* Image captions / figures */
.markdown-body :deep(figure) {
    @apply my-6;
}

.markdown-body :deep(figcaption) {
    @apply mt-2 text-center text-sm text-tol/60 dark:text-tod/50;
}

/* Tables */
.markdown-body :deep(table) {
    @apply my-6 w-full border-collapse overflow-hidden rounded-lg border border-bod/10 dark:border-bol/10;
}

.markdown-body :deep(table tr) {
    @apply border-b border-bod/10 last:border-b-0 dark:border-bol/10;
}

.markdown-body :deep(table tr th) {
    @apply bg-bod/5 p-3 text-left text-sm font-semibold text-tol dark:bg-bol/5 dark:text-tod;
}

.markdown-body :deep(table tr td) {
    @apply p-3 text-sm text-tol/80 dark:text-tod/70;
}

.markdown-body :deep(table tr:nth-child(even) td) {
    @apply bg-bod/[0.025] dark:bg-bol/[0.025];
}

/* Horizontal rule */
.markdown-body :deep(hr) {
    @apply my-8 border-0 border-t border-bod/10 dark:border-bol/10;
}

/* Keyboard input */
.markdown-body :deep(kbd) {
    @apply rounded border border-bod/15 bg-bod/5 px-1.5 py-0.5 font-mono text-xs text-tol dark:border-bol/15 dark:bg-bol/5 dark:text-tod;
}

/* First / last element spacing */
.markdown-body :deep(> :first-child) {
    @apply mt-0;
}

.markdown-body :deep(> :last-child) {
    @apply mb-0;
}
</style>
