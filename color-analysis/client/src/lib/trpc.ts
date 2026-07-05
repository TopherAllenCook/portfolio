/**
 * Local, backend-free stand-in for the tRPC React client.
 *
 * The app was generated against a tRPC + MySQL + S3 backend. To run as a static
 * site on Vercel we drop the server entirely and back the exact call sites the
 * pages use (`trpc.analysis.*` and `trpc.useUtils()`) with TanStack Query over
 * the local `analysisStore`. Because tRPC's React hooks are themselves thin
 * wrappers over TanStack Query, the option shapes (`onSuccess`, `onMutate`,
 * `onSettled`, optimistic `getData`/`setData`, `mutateAsync`, `isPending`) all
 * carry over unchanged — so the pages did not need to be rewritten.
 */
import {
  useMutation,
  useQuery,
  useQueryClient,
  type QueryClient,
} from "@tanstack/react-query";
import * as store from "./analysisStore";
import type { Analysis } from "./analysisStore";

const LIST_KEY = ["analysis", "list"] as const;

type ListData = Analysis[] | undefined;

function listUtils(qc: QueryClient) {
  return {
    invalidate: () => qc.invalidateQueries({ queryKey: LIST_KEY }),
    cancel: () => qc.cancelQueries({ queryKey: LIST_KEY }),
    getData: () => qc.getQueryData<Analysis[]>(LIST_KEY),
    setData: (_input: undefined, updater: ListData | ((old: ListData) => ListData)) =>
      qc.setQueryData<Analysis[]>(LIST_KEY, updater as never),
  };
}

/** Mirrors `trpc.useUtils()` for the one query the app invalidates. */
export function useUtils() {
  const qc = useQueryClient();
  return { analysis: { list: listUtils(qc) } };
}

export const trpc = {
  useUtils,
  analysis: {
    list: {
      useQuery: (_input?: undefined, opts?: { enabled?: boolean }) =>
        useQuery({
          queryKey: LIST_KEY,
          queryFn: () => store.list(),
          enabled: opts?.enabled ?? true,
        }),
    },
    create: {
      useMutation: (
        opts?: Parameters<typeof useMutation<{ id: number }, Error, { title: string }>>[0],
      ) => useMutation({ mutationFn: store.create, ...opts }),
    },
    update: {
      useMutation: (
        opts?: Parameters<
          typeof useMutation<{ success: true }, Error, store.AnalysisUpdate, { prev: ListData }>
        >[0],
      ) => useMutation({ mutationFn: store.update, ...opts }),
    },
    delete: {
      useMutation: (
        opts?: Parameters<typeof useMutation<{ success: true }, Error, { id: number }>>[0],
      ) => useMutation({ mutationFn: store.remove, ...opts }),
    },
    uploadPhoto: {
      useMutation: (
        opts?: Parameters<
          typeof useMutation<
            { url: string; key: string },
            Error,
            { id: number; base64: string; mimeType: store.PhotoMimeType }
          >
        >[0],
      ) => useMutation({ mutationFn: store.uploadPhoto, ...opts }),
    },
  },
};
