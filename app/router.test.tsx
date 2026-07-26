import { render, screen, within } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { siteContent } from "../content/site";
import { verifiedSiteContentVi } from "../content/verified";
import { createAppRouter } from "./router";

const pageCases = [
  ["/", "Trung tâm Nghiên cứu và Ứng dụng Trí tuệ Nhân tạo"],
  ["/nghien-cuu", "Nghiên cứu khoa học"],
  ["/hop-tac", "Mở Rộng Giới Hạn Cùng AI"],
  ["/sinh-vien", "Ươm mầm tài năng AI"],
] as const;

describe("application routes", () => {
  it.each(pageCases)("renders one page heading at %s", async (path, heading) => {
    render(<RouterProvider router={createAppRouter([path])} />);

    expect(await screen.findByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders a not-found page", () => {
    render(<RouterProvider router={createAppRouter(["/khong-ton-tai"])} />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Không tìm thấy trang" }),
    ).toBeInTheDocument();
  });
});

describe("home page", () => {
  it("uses the centralized hero actions with functional destination links", () => {
    render(<RouterProvider router={createAppRouter(["/"])} />);

    expect(screen.getByRole("link", { name: siteContent.hero.primaryCta })).toHaveAttribute(
      "href",
      "/nghien-cuu",
    );
    expect(screen.getByRole("link", { name: siteContent.hero.secondaryCta })).toHaveAttribute(
      "href",
      "/sinh-vien",
    );
  });

  it("follows the approved home hierarchy without generic page previews", () => {
    const { container } = render(<RouterProvider router={createAppRouter(["/"])} />);
    const sections = Array.from(container.querySelectorAll("section[data-testid]")).map((section) =>
      section.getAttribute("data-testid"),
    );

    expect(sections).toEqual([
      "home-hero",
      "home-news",
      "home-about",
      "home-video",
      "home-organization",
      "home-contact",
    ]);
    expect(screen.queryByRole("heading", { name: "Nghiên cứu" })).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Không gian dành cho sinh viên" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Hợp tác" })).not.toBeInTheDocument();
  });

  it("shows exactly three Stitch directors and three verified contact cards", () => {
    render(<RouterProvider router={createAppRouter(["/"])} />);
    const organization = screen.getByTestId("home-organization");
    const contact = screen.getByTestId("home-contact");
    const directors = siteContent.people.filter((person) => person.group === "director");

    expect(directors).toHaveLength(3);
    expect(within(organization).getAllByRole("heading", { level: 3 })).toHaveLength(3);
    for (const director of directors) {
      expect(
        within(organization).getByRole("heading", { name: director.name }),
      ).toBeInTheDocument();
    }

    expect(verifiedSiteContentVi.contact.items).toHaveLength(3);
    expect(
      within(contact).getByRole("heading", { level: 2, name: siteContent.pages.contact.title }),
    ).toBeInTheDocument();
    expect(within(contact).getAllByRole("heading", { level: 3 })).toHaveLength(3);
    for (const item of verifiedSiteContentVi.contact.items) {
      expect(within(contact).getByText(item.label)).toBeInTheDocument();
    }
  });

  it("reserves a separate frame for the introduction video with or without configured media", () => {
    render(<RouterProvider router={createAppRouter(["/"])} />);
    const videoSection = screen.getByTestId("home-video");
    const video =
      videoSection.querySelector("video") ??
      videoSection.querySelector('[data-testid="media-slot-about.intro-video"]');

    expect(video).not.toBeNull();
    expect(videoSection).toContainElement(video);
    expect(screen.getByTestId("home-about")).not.toContainElement(video);
    expect(video).not.toHaveTextContent(/placeholder|đang cập nhật/i);
  });

  it("keeps the vision and mission cards stacked below the medium breakpoint", () => {
    render(<RouterProvider router={createAppRouter(["/"])} />);
    const about = screen.getByTestId("home-about");
    const vision = within(about).getByText(siteContent.about.vision ?? "");
    const principlesGrid = vision.closest("article")?.parentElement;

    expect(principlesGrid).toHaveClass("md:grid-cols-2");
    expect(principlesGrid).not.toHaveClass("sm:grid-cols-2");
  });

  it("reserves desktop copy space for the overlapping vision and mission cards", () => {
    render(<RouterProvider router={createAppRouter(["/"])} />);
    const about = screen.getByTestId("home-about");
    const intro = within(about).getByText(siteContent.about.intro ?? "");
    const copyPanel = intro.parentElement;
    const vision = within(about).getByText(siteContent.about.vision ?? "");
    const principlesGrid = vision.closest("article")?.parentElement;

    expect(copyPanel).toHaveClass("lg:pb-28");
    expect(principlesGrid).toHaveClass("lg:-mt-16");
  });

  it("keeps the official AIC brand without the discarded prototype name", () => {
    render(<RouterProvider router={createAppRouter(["/"])} />);

    expect(screen.getByRole("img", { name: "Logo AIC" })).toBeInTheDocument();
    expect(screen.queryByText("AIC Center")).not.toBeInTheDocument();
  });
});

describe("home landing sections", () => {
  it("exposes anchor targets for about, organization, and contact", () => {
    render(<RouterProvider router={createAppRouter(["/"])} />);

    expect(document.getElementById("ve-chung-toi")).toBeInTheDocument();
    expect(document.getElementById("to-chuc")).toBeInTheDocument();
    expect(document.getElementById("lien-he")).toBeInTheDocument();
  });

  it.each([
    ["/ve-chung-toi", verifiedSiteContentVi.about.intro ?? ""],
    ["/to-chuc", siteContent.pages.organization.title ?? ""],
    ["/lien-he", verifiedSiteContentVi.contact.items[0]?.label ?? ""],
  ])("redirects legacy route %s to the home landing page", async (path, marker) => {
    render(<RouterProvider router={createAppRouter([path])} />);

    expect(await screen.findByText(marker)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: siteContent.hero.title }),
    ).toBeInTheDocument();
  });

  it("keeps contact cards on the home landing section", () => {
    render(<RouterProvider router={createAppRouter(["/"])} />);
    const contact = screen.getByTestId("home-contact");

    for (const item of verifiedSiteContentVi.contact.items) {
      expect(within(contact).getByText(item.label)).toBeInTheDocument();
    }
  });
});
