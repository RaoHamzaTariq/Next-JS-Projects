"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { ModeToggle } from "./ui/modetoggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Stories" },
  { href: "/contactus", label: "Contact" },
  { href: "/comments", label: "Comments" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
            <Image
              src="/Images/BI Structure Images/BI Structure.png"
              alt="BI Structure"
              width={24}
              height={24}
              className="dark:hidden"
            />
            <Image
              src="/Images/BI Structure Images/BI Structure white.png"
              alt="BI Structure"
              width={24}
              height={24}
              className="hidden dark:block"
            />
          </span>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
              BI Structure
            </p>
            <p className="text-sm font-medium text-foreground">Editorial blog</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <Link
            href="/blogs"
            className="hidden rounded-full bg-custom px-4 py-2 text-sm font-medium text-custom-foreground shadow-sm transition hover:-translate-y-px hover:bg-custom/90 sm:inline-flex"
          >
            Read stories
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        className={`border-t border-border/70 bg-background/95 px-4 py-4 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-transparent px-4 py-3 text-sm text-foreground transition hover:border-border hover:bg-secondary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/blogs"
            onClick={() => setOpen(false)}
            className="rounded-2xl bg-custom px-4 py-3 text-sm font-medium text-custom-foreground"
          >
            Read stories
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
