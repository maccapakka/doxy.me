import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders initials when no src is provided", () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("does not render initials when src is provided", () => {
    render(<Avatar initials="JD" src="/test.jpg" />);
    expect(screen.queryByText("JD")).not.toBeInTheDocument();
  });

  it("applies the root class by default", () => {
    render(<Avatar initials="AB" />);
    const element = screen.getByText("AB");
    expect(element.className).toContain("root");
  });

  it("applies additional className when provided", () => {
    render(<Avatar className="custom-class" initials="CD" />);
    const element = screen.getByText("CD");
    expect(element.className).toContain("custom-class");
  });

  it("applies default size CSS variable", () => {
    render(<Avatar data-testid="avatar" initials="EF" />);
    const element = screen.getByTestId("avatar");
    expect(element.style.getPropertyValue("--_size")).toBe("6");
  });

  it("applies custom size CSS variable", () => {
    render(<Avatar data-testid="avatar" initials="GH" size={10} />);
    const element = screen.getByTestId("avatar");
    expect(element.style.getPropertyValue("--_size")).toBe("10");
  });

  it("applies background color CSS variable", () => {
    render(<Avatar color="accent" data-testid="avatar" initials="IJ" />);
    const element = screen.getByTestId("avatar");
    expect(element.style.getPropertyValue("--_bg")).toBe(
      "var(--dxy-color-accent)"
    );
  });

  it("applies image URL as CSS variable when src is provided", () => {
    render(<Avatar data-testid="avatar" src="/user.jpg" />);
    const element = screen.getByTestId("avatar");
    expect(element.style.getPropertyValue("--_src")).toBe("url(/user.jpg)");
  });

  it("does not set --_src when no src is provided", () => {
    render(<Avatar data-testid="avatar" initials="KL" />);
    const element = screen.getByTestId("avatar");
    expect(element.style.getPropertyValue("--_src")).toBe("");
  });

  it("merges custom style prop", () => {
    render(
      <Avatar
        data-testid="avatar"
        initials="MN"
        style={{ marginTop: "10px" }}
      />
    );
    const element = screen.getByTestId("avatar");
    expect(element.style.marginTop).toBe("10px");
  });

  it("passes through additional HTML attributes", () => {
    render(<Avatar aria-label="User OP" data-testid="avatar" initials="OP" />);
    const element = screen.getByTestId("avatar");
    expect(element).toHaveAttribute("aria-label", "User OP");
  });

  it("does not render status indicator when status is not provided", () => {
    render(<Avatar data-testid="avatar" initials="QR" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar.querySelector("[data-status]")).toBeNull();
  });

  it("renders status indicator when status is provided", () => {
    render(<Avatar data-testid="avatar" initials="ST" status="online" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar.querySelector("[data-status]")).not.toBeNull();
  });

  it("renders online status indicator with correct data attribute", () => {
    render(<Avatar data-testid="avatar" initials="UV" status="online" />);
    const avatar = screen.getByTestId("avatar");
    const statusDot = avatar.querySelector("[data-status]");
    expect(statusDot).toHaveAttribute("data-status", "online");
  });

  it("renders away status indicator with correct data attribute", () => {
    render(<Avatar data-testid="avatar" initials="WX" status="away" />);
    const avatar = screen.getByTestId("avatar");
    const statusDot = avatar.querySelector("[data-status]");
    expect(statusDot).toHaveAttribute("data-status", "away");
  });

  it("renders offline status indicator with correct data attribute", () => {
    render(<Avatar data-testid="avatar" initials="YZ" status="offline" />);
    const avatar = screen.getByTestId("avatar");
    const statusDot = avatar.querySelector("[data-status]");
    expect(statusDot).toHaveAttribute("data-status", "offline");
  });
});
