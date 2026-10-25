import { computed, createUseFetch, ref, useRuntimeConfig, type Ref } from '#imports';
import type { UseFetchOptions } from '#app';
import { useI18n } from 'vue-i18n';

const buildUseHttpConfig = (callerOptions: UseFetchOptions<string>, lazy: boolean) => {
  const config = useRuntimeConfig();
  const { locale } = useI18n();
 return {
    ...callerOptions,
    baseURL: `${config.public.apiEndpoint as string}/api`,
    lazy: lazy,
    headers: {
      'Content-Type': 'application/json',
      get 'Accept-Language' () {
        return locale.value;
      },
      ...(callerOptions.headers || {}),      
    },
  }
}

export const getStates = ({ error, pending }: { error: Ref<any | undefined>, pending: Ref<boolean> }) => {
  const isPending = computed(() => pending.value && error.value === undefined);
  const isError = computed(() => !isPending.value && error.value !== undefined);
  return { isPending, isError }
}

export const useHttp = createUseFetch((callerOptions) => {
  return buildUseHttpConfig(callerOptions as any, false);
})

export const useLazyHttp = createUseFetch((callerOptions) => {
  return buildUseHttpConfig(callerOptions as any, true);
  
})

