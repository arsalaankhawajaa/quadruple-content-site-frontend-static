"use client";
/*
 * Documentation:
 * Icon Button — https://app.subframe.com/1647c068fd35/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Modern navbar mobile — https://app.subframe.com/1647c068fd35/library?component=Modern+navbar+mobile_2aee7939-9e79-4bd2-806c-ccf3dcdc90ce
 */

import React from "react";
import { FeatherMenu } from "@subframe/core";
import * as SubframeUtils from "../utils";
import { IconButton } from "./IconButton";

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
        "group/02bfa066 flex h-12 cursor-pointer flex-col items-center justify-center gap-4 px-4",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children ? (
        <span className="text-body-bold font-body-bold text-subtext-color group-hover/02bfa066:text-default-font">
          {children}
        </span>
      ) : null}
    </div>
  );
});

interface ModernNavbarMobileRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ModernNavbarMobileRoot = React.forwardRef<
  HTMLDivElement,
  ModernNavbarMobileRootProps
>(function ModernNavbarMobileRoot(
  { className, ...otherProps }: ModernNavbarMobileRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex w-full max-w-[1024px] flex-wrap items-center gap-4 rounded-md border border-solid border-neutral-border bg-default-background shadow-md mobile:flex-row mobile:flex-wrap mobile:justify-between mobile:border-none mobile:bg-transparent",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex h-12 flex-col items-start justify-center gap-2 px-4">
        <img
          className="h-4 flex-none object-cover"
          src="https://res.cloudinary.com/subframe/image/upload/v1765096497/uploads/16132/k2fqiinopr4thzfyblly.png"
        />
      </div>
      <div className="flex flex-wrap items-center gap-4 pr-4">
        <IconButton icon={<FeatherMenu />} />
      </div>
    </div>
  );
});

export const ModernNavbarMobile = Object.assign(ModernNavbarMobileRoot, {
  NavItem,
});
