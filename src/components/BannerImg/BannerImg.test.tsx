import React from "react";
import { render, screen } from "@testing-library/react";
import BannerImg from "./index";

describe("initial banner state", () => {
  beforeEach(() => {
    global.window = window;
    window.scroll = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });
  test("The banner displays the correct title", () => {
    render(<BannerImg img="" title="Banner" text="" />);
    const bannerImg = screen.getByTestId("banner-img");
    expect(bannerImg.textContent).toBe("Banner");
  });

  test("The banner displays the correct description", () => {
    render(<BannerImg img="" title="" text="description" />);
    const bannerImg = screen.getByTestId("banner-img");
    expect(bannerImg.textContent).toBe("description");
  });
});
