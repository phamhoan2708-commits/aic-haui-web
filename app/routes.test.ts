import { describe, expect, it } from "vitest";

import { routes } from "./routes";

describe("route registry", () => {
  it("contains every required public route exactly once", () => {
    expect(routes.map((route) => route.path)).toEqual([
      "/",
      "/ve-chung-toi",
      "/to-chuc",
      "/nghien-cuu",
      "/hop-tac",
      "/sinh-vien",
      "/lien-he",
    ]);
    expect(new Set(routes.map((route) => route.path)).size).toBe(routes.length);
  });
});
