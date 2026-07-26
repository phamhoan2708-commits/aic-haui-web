import { lazy, Suspense } from "react";
import type { RouteKey } from "./routes";

const pageByKey = {
  about: lazy(() =>
    import("../pages/AboutPage").then((module) => ({ default: module.AboutPage })),
  ),
  contact: lazy(() =>
    import("../pages/ContactPage").then((module) => ({ default: module.ContactPage })),
  ),
  cooperation: lazy(() =>
    import("../pages/CooperationPage").then((module) => ({ default: module.CooperationPage })),
  ),
  organization: lazy(() =>
    import("../pages/OrganizationPage").then((module) => ({ default: module.OrganizationPage })),
  ),
  research: lazy(() =>
    import("../pages/ResearchPage").then((module) => ({ default: module.ResearchPage })),
  ),
  students: lazy(() =>
    import("../pages/StudentsPage").then((module) => ({ default: module.StudentsPage })),
  ),
} satisfies Record<Exclude<RouteKey, "home">, React.LazyExoticComponent<React.ComponentType>>;

export function DeferredPage({ routeKey }: { routeKey: Exclude<RouteKey, "home"> }) {
  const Page = pageByKey[routeKey];
  return (
    <Suspense
      fallback={<div className="h-1 animate-pulse bg-aic-blue" aria-label="Đang tải trang" />}
    >
      <Page />
    </Suspense>
  );
}
