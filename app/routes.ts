export type RouteKey =
  | "home"
  | "about"
  | "organization"
  | "research"
  | "cooperation"
  | "students"
  | "contact";

export type SiteRoute = {
  key: RouteKey;
  path: string;
  label: string;
  nav: boolean;
  homeSection?: string;
};

export const routes: SiteRoute[] = [
  { key: "home", path: "/", label: "Trang chủ", nav: false },
  { key: "about", path: "/ve-chung-toi", label: "Về chúng tôi", nav: true, homeSection: "ve-chung-toi" },
  { key: "organization", path: "/to-chuc", label: "Tổ chức", nav: true, homeSection: "to-chuc" },
  { key: "research", path: "/nghien-cuu", label: "Nghiên cứu", nav: true, homeSection: "nghien-cuu" },
  { key: "cooperation", path: "/hop-tac", label: "Hợp tác", nav: true, homeSection: "hop-tac" },
  { key: "students", path: "/sinh-vien", label: "Dành cho sinh viên", nav: true, homeSection: "sinh-vien" },
  { key: "contact", path: "/lien-he", label: "Liên hệ", nav: true, homeSection: "lien-he" },
];

export const navigationRoutes = routes.filter((route) => route.nav);
export const routePath = Object.fromEntries(
  routes.map((route) => [route.key, route.path]),
) as Record<RouteKey, string>;
