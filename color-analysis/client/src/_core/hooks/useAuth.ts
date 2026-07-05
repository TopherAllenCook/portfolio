/**
 * Local, backend-free replacement for the Manus platform `useAuth` hook.
 *
 * The original hook drove an OAuth session. This static build has no accounts
 * and no server: analyses live in the browser, so every visitor is treated as a
 * signed-in local user and all "signed in" features are always available. Sign
 * in / sign out are no-ops kept only to satisfy the existing call sites.
 */
export interface AuthUser {
  name: string;
}

export interface UseAuthResult {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: unknown;
  login: () => void;
  logout: () => void;
}

export function useAuth(): UseAuthResult {
  return {
    user: { name: "You" },
    isAuthenticated: true,
    loading: false,
    error: null,
    login: () => {},
    logout: () => {},
  };
}
