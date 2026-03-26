"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Images/BI Structure Images/BI Structure.png"
                alt="BI Structure"
                width={36}
                height={36}
                className="dark:hidden"
              />
              <Image
                src="/Images/BI Structure Images/BI Structure white.png"
                alt="BI Structure"
                width={36}
                height={36}
                className="hidden dark:block"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  BI Structure
                </p>
                <p className="text-sm font-medium text-foreground">
                  Editorial blog platform
                </p>
              </div>
            </div>
            <p className="max-w-md">
              A restrained publishing system for thoughtful stories on product,
              design, and the tooling that shapes modern teams.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-foreground">
              Browse
            </h4>
            <ul className="space-y-3">
              <li>
                <Link className="text-muted-foreground transition hover:text-foreground" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground transition hover:text-foreground" href="/blogs">
                  Stories
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground transition hover:text-foreground" href="/comments">
                  Comments
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground transition hover:text-foreground" href="/contactus">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-foreground">
              Topics
            </h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Web development</li>
              <li className="text-muted-foreground">Design systems</li>
              <li className="text-muted-foreground">Product thinking</li>
              <li className="text-muted-foreground">Workflow notes</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-foreground">
              Follow
            </h4>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:-translate-y-px hover:border-foreground/20"
                aria-label="Twitter"
              >
                <TwitterLogo className="h-4 w-4" weight="duotone" />
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:-translate-y-px hover:border-foreground/20"
                aria-label="GitHub"
              >
                <GithubLogo className="h-4 w-4" weight="duotone" />
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:-translate-y-px hover:border-foreground/20"
                aria-label="LinkedIn"
              >
                <LinkedinLogo className="h-4 w-4" weight="duotone" />
              </Link>
            </div>

            <Link
              href="/blogs"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:translate-x-0.5 hover:text-custom"
            >
              Explore the archive
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BI Structure. Crafted with restraint.</p>
          <p>Fast reading, clear hierarchy, no decorative noise.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
