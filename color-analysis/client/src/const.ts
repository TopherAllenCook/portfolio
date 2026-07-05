// This static build has no OAuth flow — every visitor is a local user (see
// `_core/hooks/useAuth`), so the "sign in" affordances never render. This stub
// stays only so the handful of modules that still import it keep resolving.
export const getLoginUrl = () => "/";
