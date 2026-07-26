import { createBrowserRouter, createMemoryRouter, Navigate, type InitialEntry } from "react-router-dom";
import type { ReactElement } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { routes, type RouteKey } from "./routes";

const pageByKey: Record<RouteKey, ReactElement> = {
  home: <HomePage />,
  about: <Navigate to="/#ve-chung-toi" replace />,
  organization: <Navigate to="/#to-chuc" replace />,
  research: <Navigate to="/#nghien-cuu" replace />,
  cooperation: <Navigate to="/#hop-tac" replace />,
  students: <Navigate to="/#sinh-vien" replace />,
  contact: <Navigate to="/#lien-he" replace />,
};

const children = [
  ...routes.map((route) =>
    route.key === "home"
      ? { index: true as const, element: pageByKey.home }
      : { path: route.path.slice(1), element: pageByKey[route.key] },
  ),
  { path: "*", element: <NotFoundPage /> },
];
const config = [{ path: "/", element: <PageLayout />, children }];

export const router = createBrowserRouter(config);
export function createAppRouter(initialEntries: InitialEntry[]) {
  return createMemoryRouter(config, { initialEntries });
}
