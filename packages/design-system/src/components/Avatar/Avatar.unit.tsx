import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders initials when no src is provided", () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("does not render initials when src is provided", () => {
    render(<Avatar src="/test.jpg" initials="JD" />);
    expect(screen.queryByText("JD")).not.toBeInTheDocument();
  });

  it("applies the root class by default", () => {
    render(<Avatar initials="AB" />);
    const element = screen.getByText("AB");
    expect(element.className).toContain("root");
  });

  it("applies additional className when provided", () => {
    render(<Avatar initials="CD" className="custom-class" />);
    const element = screen.getByText("CD");
    expect(element.className).toContain("custom-class");
  });

  it("applies default size CSS variable", () => {
    render(<Avatar initials="EF" data-testid="avatar" />);
    const element = screen.getByTestId("avatar");
    expect(element.style.getPropertyValue("--_size")).toBe("6");
  });

  it("applies custom size CSS variable", () => {
    render(<Avatar initials="GH" size={10} data-testid="avatar" />);
    const element = screen.getByTestId("avatar");
    expect(element.style.getPropertyValue("--_size")).toBe("10");
  });

  it("applies background color CSS variable", () => {
    render(<Avatar initials="IJ" color="accent" data-testid="avatar" />);
    const element = screen.getByTestId("avatar");
    expect(element.style.getPropertyValue("--_bg")).toBe(
      "var(--dxy-color-accent)"
    );
  });

  it("applies image URL as CSS variable when src is provided", () => {
    render(<Avatar src="/user.jpg" data-testid="avatar" />);
    const element = screen.getByTestId("avatar");
    expect(element.style.getPropertyValue("--_src")).toBe("url(/user.jpg)");
  });

  it("does not set --_src when no src is provided", () => {
    render(<Avatar initials="KL" data-testid="avatar" />);
    const element = screen.getByTestId("avatar");
    expect(element.style.getPropertyValue("--_src")).toBe("");
  });

  it("merges custom style prop", () => {
    render(
      <Avatar
        initials="MN"
        style={{ marginTop: "10px" }}
        data-testid="avatar"
      />
    );
    const element = screen.getByTestId("avatar");
    expect(element.style.marginTop).toBe("10px");
  });

  it("passes through additional HTML attributes", () => {
    render(<Avatar initials="OP" data-testid="avatar" aria-label="User OP" />);
    const element = screen.getByTestId("avatar");
    expect(element).toHaveAttribute("aria-label", "User OP");
  });

  it("does not render status indicator when status is not provided", () => {
    render(<Avatar initials="QR" data-testid="avatar" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar.querySelector("[data-status]")).toBeNull();
  });

  it("renders status indicator when status is provided", () => {
    render(<Avatar initials="ST" status="online" data-testid="avatar" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar.querySelector("[data-status]")).not.toBeNull();
  });

  it("renders online status indicator with correct data attribute", () => {
    render(<Avatar initials="UV" status="online" data-testid="avatar" />);
    const avatar = screen.getByTestId("avatar");
    const statusDot = avatar.querySelector("[data-status]");
    expect(statusDot).toHaveAttribute("data-status", "online");
  });

  it("renders away status indicator with correct data attribute", () => {
    render(<Avatar initials="WX" status="away" data-testid="avatar" />);
    const avatar = screen.getByTestId("avatar");
    const statusDot = avatar.querySelector("[data-status]");
    expect(statusDot).toHaveAttribute("data-status", "away");
  });

  it("renders offline status indicator with correct data attribute", () => {
    render(<Avatar initials="YZ" status="offline" data-testid="avatar" />);
    const avatar = screen.getByTestId("avatar");
    const statusDot = avatar.querySelector("[data-status]");
    expect(statusDot).toHaveAttribute("data-status", "offline");
  });
});
