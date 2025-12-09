"use client";
/*
 * Documentation:
 * Button — https://app.subframe.com/1647c068fd35/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Modern navbar — https://app.subframe.com/1647c068fd35/library?component=Modern+navbar_cba8555a-1e5a-4a57-8c3d-6ad67c2ef976
 */

import React from "react";
import { Link } from "react-router-dom";
import * as SubframeUtils from "../utils";
import { Button } from "./Button";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const NavItem = React.forwardRef<HTMLDivElement, NavItemProps>(function NavItem(
  { children, className, ...otherProps }: NavItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/4f025ecf flex h-full cursor-pointer flex-col items-center justify-center gap-4",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children ? (
        <span className="text-body-bold font-body-bold text-subtext-color group-hover/4f025ecf:text-default-font">
          {children}
        </span>
      ) : null}
    </div>
  );
});

interface ModernNavbarRootProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ModernNavbarRoot = React.forwardRef<
  HTMLDivElement,
  ModernNavbarRootProps
>(function ModernNavbarRoot(
  { className, ...otherProps }: ModernNavbarRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex w-full max-w-screen-2xl flex-wrap items-center bg-default-background shadow-md",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <Link to="/" className="flex flex-col items-start justify-center gap-2 self-stretch">
        <img
          className="h-8 flex-none object-cover"
          src="https://res.cloudinary.com/subframe/image/upload/v1765096497/uploads/16132/k2fqiinopr4thzfyblly.png"
        />
      </Link>
      <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-wrap items-center justify-end gap-6">
        <Link to="/#articles" className="flex h-full cursor-pointer flex-col items-center justify-center gap-4">
          <span className="text-body-bold font-body-bold text-subtext-color hover:text-default-font">
            Articles
          </span>
        </Link>
        <Link to="/#services" className="flex h-full cursor-pointer flex-col items-center justify-center gap-4">
          <span className="text-body-bold font-body-bold text-subtext-color hover:text-default-font">
            Services
          </span>
        </Link>
        <Link to="/#enterprise" className="flex h-full cursor-pointer flex-col items-center justify-center gap-4">
          <span className="text-body-bold font-body-bold text-subtext-color hover:text-default-font">
            Enterprise
          </span>
        </Link>
        <Link to="/#learn" className="flex h-full cursor-pointer flex-col items-center justify-center gap-4">
          <span className="text-body-bold font-body-bold text-subtext-color hover:text-default-font">
            Learn
          </span>
        </Link>
        <Link to="/#contact" className="flex flex-col items-center justify-center gap-4 self-stretch">
          <span className="text-body-bold font-body-bold text-default-font">
            Contact
          </span>
        </Link>
      </div>
      <div className="hidden items-center gap-2 px-2">
        <Button variant="brand-secondary">Log in</Button>
        <Button>Contact</Button>
      </div>
    </div>
  );
});

export const ModernNavbar = Object.assign(ModernNavbarRoot, {
  NavItem,
});
