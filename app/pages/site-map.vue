<script lang="ts" setup>
import { useRouter } from '#app';
import type { RouteRecordNormalized } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';
import { useSeo } from '~/composables/seo/useSeo';

const { locale, t } = useI18n();

useSeo({
    title: t('sitemap.seo.title', 'Sitemap'),
    description: t('sitemap.seo.description', 'Explore all pages and sections available on our website.'),
});

const router = useRouter();

const allRoutes: RouteRecordNormalized[] = router.getRoutes().filter((r: RouteRecordNormalized): boolean => {
    return (r.name as string).endsWith(`___${locale.value}`);
});

interface SitemapSection {
    label: string;
    icon: string;
    description: string;
    color: string;
    routes: { name: string; path: string; icon: string; label: string }[];
}

const routeMetaMap: Record<string, { icon: string; label: string; section: string }> = {
    '/': { icon: 'material-symbols:home-rounded', label: 'Home', section: 'main' },
    '/about': { icon: 'material-symbols:info-rounded', label: 'About Us', section: 'company' },
    '/our-team': { icon: 'material-symbols:group-rounded', label: 'Our Team', section: 'company' },
    '/services': { icon: 'icon-park-twotone:compass', label: 'Services', section: 'main' },
    '/contact': { icon: 'material-symbols:mail-rounded', label: 'Contact', section: 'support' },
    '/site-map': { icon: 'material-symbols:map-rounded', label: 'Sitemap', section: 'support' },
};

const sections = computed<SitemapSection[]>(() => {
    const grouped: Record<string, SitemapSection> = {
        main: {
            label: 'Main Pages',
            icon: 'material-symbols:dashboard-rounded',
            description: 'Core pages of our website',
            color: 'main',
            routes: [],
        },
        company: {
            label: 'Company',
            icon: 'material-symbols:apartment-rounded',
            description: 'Learn more about who we are',
            color: 'emerald',
            routes: [],
        },
        support: {
            label: 'Support & Info',
            icon: 'material-symbols:help-center-rounded',
            description: 'Resources and ways to reach us',
            color: 'sky',
            routes: [],
        },
    };

    allRoutes.forEach((route: RouteRecordNormalized) => {
        const meta = routeMetaMap[route.path];
        if (!meta) return;
        const section = grouped[meta.section];
        if (section) {
            section.routes.push({
                name: route.name as string,
                path: route.path,
                icon: meta.icon,
                label: meta.label,
            });
        }
    });

    return Object.values(grouped).filter(s => s.routes.length > 0);
});

const totalPages = computed(() => allRoutes.length);
</script>

<template>
    <div class="sitemap-page">

        <!-- ===== HERO HEADER ===== -->
        <section class="sitemap-hero relative overflow-hidden">
            <!-- Animated gradient orbs -->
            <div class="orb orb-1" aria-hidden="true"></div>
            <div class="orb orb-2" aria-hidden="true"></div>
            <div class="orb orb-3" aria-hidden="true"></div>
            <!-- Noise texture overlay -->
            <div class="hero-overlay" aria-hidden="true"></div>

            <div class="container-site relative z-10 py-20 text-center">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 hero-badge mb-6">
                    <ClientIcon icon="material-symbols:map-rounded" class="text-main-200 text-sm" />
                    <span class="text-xs font-semibold uppercase tracking-widest text-main-200">Navigation</span>
                </div>

                <h1 class="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 hero-title">
                    Site<span class="text-main-200">map</span>
                </h1>
                <p class="text-lg sm:text-xl max-w-xl mx-auto opacity-70 mb-8 leading-relaxed">
                    Every page, every section — all in one place. Navigate our website with ease.
                </p>

                <!-- Stats row -->
                <div class="inline-flex items-center gap-6 hero-stats">
                    <div class="stat-item">
                        <span class="stat-number">{{ totalPages }}</span>
                        <span class="stat-label">Pages</span>
                    </div>
                    <div class="stat-divider" aria-hidden="true"></div>
                    <div class="stat-item">
                        <span class="stat-number">{{ sections.length }}</span>
                        <span class="stat-label">Sections</span>
                    </div>
                </div>
            </div>

            <!-- Bottom wave -->
            <div class="hero-wave" aria-hidden="true">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" class="wave-fill" />
                </svg>
            </div>
        </section>

        <!-- ===== SITEMAP CONTENT ===== -->
        <section class="sitemap-body">
            <div class="container-site py-16 pb-24">

                <!-- Sections grid -->
                <div class="sections-grid">
                    <article
                        v-for="(section, si) in sections"
                        :key="section.label"
                        class="sitemap-section"
                        :style="{ '--delay': `${si * 80}ms` }"
                    >
                        <!-- Section header -->
                        <div class="section-header">
                            <div class="section-icon-wrap">
                                <ClientIcon :icon="section.icon" class="section-icon" />
                            </div>
                            <div>
                                <h2 class="section-title">{{ section.label }}</h2>
                                <p class="section-desc">{{ section.description }}</p>
                            </div>
                        </div>

                        <!-- Divider -->
                        <div class="section-divider" aria-hidden="true"></div>

                        <!-- Route cards -->
                        <ul class="routes-list" role="list">
                            <li
                                v-for="(route, ri) in section.routes"
                                :key="route.path"
                                :style="{ '--route-delay': `${(si * 80) + (ri * 60)}ms` }"
                            >
                                <NuxtLink :to="route.path" class="route-card group" :aria-label="`Go to ${route.label}`">
                                    <div class="route-icon-wrap">
                                        <ClientIcon :icon="route.icon" class="route-icon" />
                                    </div>
                                    <div class="route-info">
                                        <span class="route-label">{{ route.label }}</span>
                                        <span class="route-path">{{ route.path }}</span>
                                    </div>
                                    <div class="route-arrow">
                                        <ClientIcon icon="material-symbols:arrow-forward-rounded" class="arrow-icon" />
                                    </div>
                                </NuxtLink>
                            </li>
                        </ul>
                    </article>
                </div>

                <!-- Bottom CTA -->
                <div class="sitemap-cta">
                    <div class="cta-inner">
                        <div class="cta-glow" aria-hidden="true"></div>
                        <ClientIcon icon="material-symbols:search-rounded" class="cta-icon" />
                        <h2 class="cta-title">Can't find what you're looking for?</h2>
                        <p class="cta-desc">Our team is always ready to help you navigate to the right place.</p>
                        <NuxtLink to="/contact" class="cta-btn">
                            <span>Get in touch</span>
                            <ClientIcon icon="maki:arrow" class="cta-btn-icon" />
                        </NuxtLink>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<style scoped>
/* =============================
   PAGE WRAPPER
   ============================= */
.sitemap-page {
    min-height: 100dvh;
}

/* =============================
   HERO
   ============================= */
.sitemap-hero {
    position: relative;
    min-height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: light-dark(
        linear-gradient(135deg, #f0f9e3 0%, #e8f5cc 40%, #f5f5f0 100%),
        linear-gradient(135deg, #111814 0%, #0d1710 50%, #0a0f0a 100%)
    );
}

/* Animated gradient orbs */
.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    animation: orb-float 8s ease-in-out infinite alternate;
    pointer-events: none;
}

.orb-1 {
    width: 420px;
    height: 420px;
    top: -120px;
    left: -80px;
    background: light-dark(
        radial-gradient(circle, color-mix(in oklab, var(--color-main-100) 25%, transparent) 0%, transparent 70%),
        radial-gradient(circle, color-mix(in oklab, var(--color-main-900) 60%, transparent) 0%, transparent 70%)
    );
    animation-delay: 0s;
}
.orb-2 {
    width: 300px;
    height: 300px;
    top: 20px;
    right: -60px;
    background: light-dark(
        radial-gradient(circle, color-mix(in oklab, var(--color-main-50) 20%, transparent) 0%, transparent 70%),
        radial-gradient(circle, color-mix(in oklab, var(--color-main-400) 30%, transparent) 0%, transparent 70%)
    );
    animation-delay: -3s;
    animation-duration: 10s;
}
.orb-3 {
    width: 200px;
    height: 200px;
    bottom: 10px;
    left: 40%;
    background: light-dark(
        radial-gradient(circle, color-mix(in oklab, var(--color-main-200) 15%, transparent) 0%, transparent 70%),
        radial-gradient(circle, color-mix(in oklab, var(--color-main-300) 20%, transparent) 0%, transparent 70%)
    );
    animation-delay: -1.5s;
    animation-duration: 12s;
}

@keyframes orb-float {
    0%   { transform: translate(0, 0) scale(1); }
    100% { transform: translate(30px, 20px) scale(1.08); }
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    opacity: 0.4;
    pointer-events: none;
}

/* Hero badge */
.hero-badge {
    background: light-dark(
        color-mix(in oklab, var(--color-main-200) 12%, white),
        color-mix(in oklab, var(--color-main-900) 50%, transparent)
    );
    border: 1px solid light-dark(
        color-mix(in oklab, var(--color-main-200) 30%, transparent),
        color-mix(in oklab, var(--color-main-400) 40%, transparent)
    );
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    backdrop-filter: blur(8px);
}

/* Hero title */
.hero-title {
    background: light-dark(
        linear-gradient(135deg, var(--color-zinc-800) 30%, var(--color-main-600) 100%),
        linear-gradient(135deg, #ffffff 30%, var(--color-main-200) 100%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Stats */
.hero-stats {
    background: light-dark(white / 0.7, color-mix(in oklab, white 6%, transparent));
    border: 1px solid light-dark(var(--color-main-100) / 0.4, white / 0.08);
    padding: 0.75rem 2rem;
    border-radius: 999px;
    backdrop-filter: blur(12px);
}
.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
}
.stat-number {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--color-main-200);
    line-height: 1;
}
.stat-label {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.6;
}
.stat-divider {
    width: 1px;
    height: 36px;
    background: light-dark(var(--color-main-100) / 0.4, white / 0.12);
}

/* Wave */
.hero-wave {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 80px;
    overflow: hidden;
}
.hero-wave svg {
    width: 100%;
    height: 100%;
}
.wave-fill {
    fill: light-dark(var(--color-bol), var(--color-bod));
}

/* =============================
   BODY
   ============================= */
.sitemap-body {
    background: light-dark(var(--color-bol), var(--color-bod));
}

/* =============================
   SECTIONS GRID
   ============================= */
.sections-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .sections-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1100px) {
    .sections-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* =============================
   SECTION CARD
   ============================= */
.sitemap-section {
    background: light-dark(white, color-mix(in oklab, white 5%, transparent));
    border: 1px solid light-dark(var(--color-zinc-200), white / 0.07);
    border-radius: 1.25rem;
    padding: 1.75rem;
    box-shadow: light-dark(
        0 4px 24px -4px color-mix(in oklab, var(--color-main-200) 10%, transparent),
        0 4px 32px -8px black / 0.4
    );
    animation: slide-up 0.5s ease both;
    animation-delay: var(--delay, 0ms);
    transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}

.sitemap-section:hover {
    box-shadow: light-dark(
        0 8px 40px -8px color-mix(in oklab, var(--color-main-200) 25%, transparent),
        0 8px 48px -12px black / 0.6
    );
    transform: translateY(-3px);
    border-color: light-dark(
        color-mix(in oklab, var(--color-main-200) 40%, transparent),
        color-mix(in oklab, var(--color-main-400) 30%, transparent)
    );
}

@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Section header */
.section-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
}

.section-icon-wrap {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: light-dark(
        color-mix(in oklab, var(--color-main-100) 15%, white),
        color-mix(in oklab, var(--color-main-900) 60%, transparent)
    );
    border: 1px solid light-dark(
        color-mix(in oklab, var(--color-main-200) 25%, transparent),
        color-mix(in oklab, var(--color-main-400) 20%, transparent)
    );
}
.section-icon {
    font-size: 1.4rem;
    color: var(--color-main-200);
}
.section-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: light-dark(var(--color-zinc-800), white);
    line-height: 1.2;
}
.section-desc {
    font-size: 0.78rem;
    opacity: 0.55;
    margin-top: 0.15rem;
}

.section-divider {
    height: 1px;
    background: light-dark(var(--color-zinc-100), white / 0.06);
    margin-bottom: 1.25rem;
}

/* =============================
   ROUTE LIST
   ============================= */
.routes-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
}

/* =============================
   ROUTE CARD
   ============================= */
.route-card {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    padding: 0.75rem 0.875rem;
    border-radius: 0.875rem;
    border: 1px solid transparent;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    animation: slide-up 0.45s ease both;
    animation-delay: var(--route-delay, 0ms);
    background: transparent;
}

.route-card:hover {
    background: light-dark(
        color-mix(in oklab, var(--color-main-50) 15%, white),
        color-mix(in oklab, var(--color-main-900) 40%, transparent)
    );
    border-color: light-dark(
        color-mix(in oklab, var(--color-main-100) 40%, transparent),
        color-mix(in oklab, var(--color-main-600) 30%, transparent)
    );
    transform: translateX(4px);
}

.route-card:hover .route-label {
    color: var(--color-main-200);
}

.route-card:hover .arrow-icon {
    opacity: 1;
    transform: translateX(2px);
}

.route-card:hover .route-icon {
    color: var(--color-main-200);
}

/* Route icon */
.route-icon-wrap {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: light-dark(
        color-mix(in oklab, var(--color-zinc-100) 80%, transparent),
        white / 0.05
    );
    transition: background 0.25s ease;
}
.route-icon {
    font-size: 1.1rem;
    color: light-dark(var(--color-zinc-500), var(--color-zinc-400));
    transition: color 0.25s ease;
}

/* Route info */
.route-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
}
.route-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: light-dark(var(--color-zinc-800), var(--color-zinc-100));
    transition: color 0.25s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.route-path {
    font-size: 0.72rem;
    font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace;
    color: light-dark(var(--color-zinc-400), var(--color-zinc-500));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Arrow */
.route-arrow {
    flex-shrink: 0;
    display: flex;
    align-items: center;
}
.arrow-icon {
    font-size: 1rem;
    color: var(--color-main-200);
    opacity: 0;
    transition: opacity 0.25s ease, transform 0.25s ease;
}

/* =============================
   CTA BLOCK
   ============================= */
.sitemap-cta {
    margin-top: 3.5rem;
}
.cta-inner {
    position: relative;
    overflow: hidden;
    background: light-dark(
        linear-gradient(135deg, var(--color-main-50) 0%, color-mix(in oklab, var(--color-main-100) 30%, white) 100%),
        linear-gradient(135deg, #111e12 0%, #0d1a0e 100%)
    );
    border: 1px solid light-dark(
        color-mix(in oklab, var(--color-main-200) 40%, transparent),
        color-mix(in oklab, var(--color-main-600) 35%, transparent)
    );
    border-radius: 1.5rem;
    padding: 3rem 2rem;
    text-align: center;
    box-shadow: light-dark(
        0 8px 40px -8px color-mix(in oklab, var(--color-main-200) 30%, transparent),
        0 8px 48px -12px black / 0.5
    );
}
.cta-glow {
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 250px;
    border-radius: 50%;
    background: light-dark(
        radial-gradient(circle, color-mix(in oklab, var(--color-main-100) 35%, transparent) 0%, transparent 70%),
        radial-gradient(circle, color-mix(in oklab, var(--color-main-900) 80%, transparent) 0%, transparent 70%)
    );
    filter: blur(30px);
    pointer-events: none;
}
.cta-icon {
    font-size: 2.5rem;
    color: var(--color-main-200);
    margin-bottom: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.cta-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: light-dark(var(--color-zinc-800), white);
    margin-bottom: 0.5rem;
}
.cta-desc {
    font-size: 1rem;
    opacity: 0.65;
    margin-bottom: 1.75rem;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}
.cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--color-main-200);
    color: var(--color-zinc-900);
    font-weight: 700;
    font-size: 0.925rem;
    padding: 0.75rem 1.75rem;
    border-radius: 999px;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 20px -4px color-mix(in oklab, var(--color-main-200) 60%, transparent);
}
.cta-btn:hover {
    background: var(--color-main-100);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px -4px color-mix(in oklab, var(--color-main-100) 70%, transparent);
}
.cta-btn-icon {
    font-size: 0.9rem;
    transition: transform 0.25s ease;
}
.cta-btn:hover .cta-btn-icon {
    transform: translateX(3px);
}
</style>