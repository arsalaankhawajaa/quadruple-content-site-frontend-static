"use client";
/*
 * Documentation:
 * ServiceCard — https://app.subframe.com/1647c068fd35/library?component=ServiceCard_c79834fd-7271-43f7-ba6d-159eaee9389d
 */

import React from "react";
import { FeatherArrowRight } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface ServiceCardRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  image?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  linkText?: React.ReactNode;
  linkIcon?: React.ReactNode;
  className?: string;
}

const ServiceCardRoot = React.forwardRef<HTMLDivElement, ServiceCardRootProps>(
  function ServiceCardRoot(
    {
      image,
      title,
      description,
      linkText,
      linkIcon = <FeatherArrowRight />,
      className,
      ...otherProps
    }: ServiceCardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/c79834fd flex w-full min-w-[240px] cursor-pointer flex-col items-center gap-6 bg-brand-600 px-6 py-6 bg-gradient-to-b from-neutral-700 to-neutral-900 hover:shadow-lg hover:bg-brand-900",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex h-60 w-60 flex-none flex-col items-center justify-center gap-24 overflow-hidden rounded-[163px] mobile:hidden mobile:h-auto mobile:w-full mobile:flex-none">
          {image ? (
            <img
              className="w-full grow shrink-0 basis-0 object-cover"
              src={image}
            />
          ) : null}
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            {title ? (
              <span className="w-full text-heading-3 font-heading-3 text-brand-50 -tracking-[0.035em]">
                {title}
              </span>
            ) : null}
            {description ? (
              <span className="w-full whitespace-pre-wrap text-body font-body text-black -tracking-[0.01em]">
                {description}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

export const ServiceCard = ServiceCardRoot;
