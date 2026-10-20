import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import AnniversaryModal from "./AnniversaryModal";
import { WHATSAPP_NUMBER } from "@/config/contact";

describe("AnniversaryModal", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-19T12:00:00-03:00"));
    sessionStorage.clear();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("opens on first access, closes with X, and stays dismissed in the session", () => {
    const { unmount } = render(<AnniversaryModal />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Saiba mais/ })).toHaveAttribute(
      "href", expect.stringContaining(`https://wa.me/${WHATSAPP_NUMBER}?text=`),
    );
    fireEvent.click(screen.getByRole("button", { name: "Fechar promoção" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    unmount();
    render(<AnniversaryModal />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("shows again in a new session", () => {
    const { unmount } = render(<AnniversaryModal />);
    unmount();
    sessionStorage.clear();
    render(<AnniversaryModal />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("includes November 8 in Brasília and stops at midnight on November 9", () => {
    vi.setSystemTime(new Date("2026-11-08T23:59:59-03:00"));
    const { unmount } = render(<AnniversaryModal />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    unmount();
    sessionStorage.clear();
    vi.setSystemTime(new Date("2026-11-09T00:00:00-03:00"));
    render(<AnniversaryModal />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("can still be closed when session storage is blocked", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("blocked"); });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("blocked"); });
    render(<AnniversaryModal />);
    fireEvent.click(screen.getByRole("button", { name: "Fechar promoção" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
