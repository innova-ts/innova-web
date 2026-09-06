<script setup lang="ts">
import ClientIcon from '~/components/shared/ui/ClientIcon.vue';

const props = withDefaults(defineProps<{
    icon: string;
    title: string;
    description: string;
    accent?: 'lime' | 'teal' | 'emerald' | 'cyan' | 'sky' | 'green' | 'mint' | 'sage';
    index?: number;
}>(), {
    accent: 'lime',
    index: 0
});

type AccentMapContract = { glow: string; border: string; bg: string; text: string; iconBg: string; ringLight: string; ringDark: string };

const accentMap: Record<string, AccentMapContract> = {
    lime:    { glow: 'rgba(177,224,1,0.15)',  border: 'rgba(177,224,1,0.35)',  bg: 'rgba(177,224,1,0.06)',  text: '#B1E001', iconBg: 'rgba(177,224,1,0.12)', ringLight: 'rgba(177,224,1,0.25)', ringDark: 'rgba(177,224,1,0.15)' },
    teal:    { glow: 'rgba(45,212,191,0.15)', border: 'rgba(45,212,191,0.35)', bg: 'rgba(45,212,191,0.06)', text: '#2dd4bf', iconBg: 'rgba(45,212,191,0.12)', ringLight: 'rgba(45,212,191,0.25)', ringDark: 'rgba(45,212,191,0.15)' },
    emerald: { glow: 'rgba(52,211,153,0.15)', border: 'rgba(52,211,153,0.35)', bg: 'rgba(52,211,153,0.06)', text: '#34d399', iconBg: 'rgba(52,211,153,0.12)', ringLight: 'rgba(52,211,153,0.25)', ringDark: 'rgba(52,211,153,0.15)' },
    cyan:    { glow: 'rgba(34,211,238,0.15)', border: 'rgba(34,211,238,0.35)', bg: 'rgba(34,211,238,0.06)', text: '#22d3ee', iconBg: 'rgba(34,211,238,0.12)', ringLight: 'rgba(34,211,238,0.25)', ringDark: 'rgba(34,211,238,0.15)' },
    sky:     { glow: 'rgba(56,189,248,0.15)', border: 'rgba(56,189,248,0.35)', bg: 'rgba(56,189,248,0.06)', text: '#38bdf8', iconBg: 'rgba(56,189,248,0.12)', ringLight: 'rgba(56,189,248,0.25)', ringDark: 'rgba(56,189,248,0.15)' },
    green:   { glow: 'rgba(74,222,128,0.15)', border: 'rgba(74,222,128,0.35)', bg: 'rgba(74,222,128,0.06)', text: '#4ade80', iconBg: 'rgba(74,222,128,0.12)', ringLight: 'rgba(74,222,128,0.25)', ringDark: 'rgba(74,222,128,0.15)' },
    mint:    { glow: 'rgba(110,231,183,0.15)',border: 'rgba(110,231,183,0.35)',bg: 'rgba(110,231,183,0.06)',text: '#6ee7b7', iconBg: 'rgba(110,231,183,0.12)', ringLight: 'rgba(110,231,183,0.25)', ringDark: 'rgba(110,231,183,0.15)' },
    sage:    { glow: 'rgba(134,239,172,0.15)',border: 'rgba(134,239,172,0.35)',bg: 'rgba(134,239,172,0.06)',text: '#86efac', iconBg: 'rgba(134,239,172,0.12)', ringLight: 'rgba(134,239,172,0.25)', ringDark: 'rgba(134,239,172,0.15)' },
};

const colors = (accentMap[props.accent] || accentMap.lime) as AccentMapContract;
</script>

<template>
    <div
        class="value-card group/value-item relative h-full overflow-hidden rounded-2xl p-5"
        :style="{
            '--accent-glow': colors.glow,
            '--accent-border': colors.border,
            '--accent-bg': colors.bg,
            '--accent-text': colors.text,
            '--accent-icon-bg': colors.iconBg,
            '--accent-ring-light': colors.ringLight,
            '--accent-ring-dark': colors.ringDark,
            '--stagger': `${props.index * 60}ms`,
        }"
    >
        <!-- Animated gradient border overlay -->
        <div
            class="
                pointer-events-none absolute inset-0 rounded-2xl opacity-0
                transition-opacity duration-500
                group-hover/value-item:opacity-100
            "
            :style="{
                background: `linear-gradient(135deg, ${colors.border}, transparent 40%, transparent 60%, ${colors.border})`,
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: '1px',
            }"
            aria-hidden="true"
        />

        <!-- Ambient glow blob -->
        <div
            class="
                pointer-events-none absolute -right-8 -top-8
                size-32 rounded-full
                blur-3xl
                transition-all duration-700 ease-out
                opacity-40
                group-hover/value-item:opacity-80
                group-hover/value-item:scale-150
            "
            :style="{ backgroundColor: colors.glow }"
            aria-hidden="true"
        />

        <!-- Secondary glow (bottom-left) -->
        <div
            class="
                pointer-events-none absolute -bottom-6 -left-6
                size-24 rounded-full
                blur-3xl
                transition-all duration-700 ease-out
                opacity-0
                group-hover/value-item:opacity-50
                group-hover/value-item:scale-125
            "
            :style="{ backgroundColor: colors.glow }"
            aria-hidden="true"
        />

        <!-- Content -->
        <div class="relative flex h-full flex-col items-center text-center z-10">
            <div class="m-auto flex flex-col items-center gap-3">
                <!-- Icon with ring effect -->
                <div class="relative">
                    <!-- Outer ring pulse -->
                    <div
                        class="
                            absolute inset-0 -m-2 rounded-2xl
                            opacity-0 scale-90
                            transition-all duration-500 ease-out
                            group-hover/value-item:opacity-100
                            group-hover/value-item:scale-100
                        "
                        :style="{
                            border: `1px solid ${colors.ringDark}`,
                            boxShadow: `0 0 20px ${colors.glow}`,
                        }"
                        aria-hidden="true"
                    />

                    <div
                        class="
                            relative flex size-14 shrink-0 items-center justify-center
                            rounded-xl border m-auto

                            border-bod-soft/15
                            bg-white/80
                            text-tol/70
                            shadow-sm
                            backdrop-blur-sm

                            transition-all duration-400 ease-out

                            group-hover/value-item:scale-110
                            group-hover/value-item:shadow-lg

                            dark:border-bol/10
                            dark:bg-bol/8
                            dark:text-tod/70
                            dark:backdrop-blur-md
                        "
                        :style="{
                            '--tw-shadow-color': colors.glow,
                        }"
                    >
                        <div
                            class="
                                absolute inset-0 rounded-xl opacity-0
                                transition-opacity duration-400
                                group-hover/value-item:opacity-100
                            "
                            :style="{
                                backgroundColor: colors.iconBg,
                                borderColor: colors.border,
                            }"
                            aria-hidden="true"
                        />
                        <ClientIcon
                            :icon="props.icon"
                            class="relative z-10 text-3xl transition-all duration-400 group-hover/value-item:scale-110"
                            :style="{
                                color: 'inherit',
                                transition: 'color 0.4s ease-out',
                            }"
                        />
                    </div>
                </div>

                <!-- Text content -->
                <div class="mt-1">
                    <h4
                        class="
                            text-lg font-semibold tracking-tight leading-tight
                            text-tol
                            transition-colors duration-400
                            dark:text-tod
                        "
                    >
                        {{ props.title }}
                    </h4>
                    <p class="mx-auto max-w-64 mt-1.5 text-[13px] leading-relaxed text-tol/55 dark:text-tod/55">
                        {{ props.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.value-card {
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    animation: value-card-enter 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: var(--stagger, 0ms);

    /* Light mode */
    border: 1px solid rgba(0,0,0,0.06);
    background:
        radial-gradient(ellipse at top right, var(--accent-bg), transparent 65%),
        linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6));
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

:where(.dark, .dark *) .value-card {
    border-color: rgba(255,255,255,0.06);
    background:
        radial-gradient(ellipse at top right, var(--accent-bg), transparent 65%),
        linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
}

.value-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent-border);
    box-shadow:
        0 8px 32px -8px var(--accent-glow),
        0 2px 8px -2px rgba(0,0,0,0.06);
}

:where(.dark, .dark *) .value-card:hover {
    box-shadow:
        0 8px 32px -8px var(--accent-glow),
        0 0 1px 0 var(--accent-border);
}

.value-card:hover :deep(.iconify) {
    color: var(--accent-text) !important;
}

@keyframes value-card-enter {
    from {
        opacity: 0;
        transform: translateY(16px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
</style>