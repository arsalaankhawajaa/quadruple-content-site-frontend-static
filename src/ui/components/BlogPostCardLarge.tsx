"use client";
/*
 * Documentation:
 * BlogPostCardLarge — https://app.subframe.com/1647c068fd35/library?component=BlogPostCardLarge_266b1de2-15f6-4737-9853-75a3425b8cc4
 */

import React from "react";
import { FeatherArrowRight } from "@subframe/core";
import * as SubframeUtils from "../utils";

interface BlogPostCardLargeRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  image?: string;
  category?: React.ReactNode;
  title?: React.ReactNode;
  date?: React.ReactNode;
  className?: string;
}

const BlogPostCardLargeRoot = React.forwardRef<
  HTMLDivElement,
  BlogPostCardLargeRootProps
>(function BlogPostCardLargeRoot(
  {
    image,
    category,
    title,
    date,
    className,
    ...otherProps
  }: BlogPostCardLargeRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/266b1de2 flex w-full cursor-pointer flex-col items-start gap-2 overflow-hidden",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full flex-col items-center gap-24 overflow-hidden">
        {image ? (
          <img
            className="w-full grow shrink-0 basis-0 object-contain group-hover/266b1de2:scale-105 group-hover/266b1de2:transition group-hover/266b1de2:duration-300 group-hover/266b1de2:ease-in-out"
            src={image}
          />
        ) : null}
      </div>
      <div className="flex w-full flex-col items-start gap-1">
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-center justify-between">
            {category ? (
              <span className="text-monospace-body font-monospace-body text-default-font">
                {category}
              </span>
            ) : null}
            {date ? (
              <span className="text-body font-body text-subtext-color">
                {date}
              </span>
            ) : null}
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            {title ? (
              <span className="w-full text-heading-2 font-heading-2 text-default-font -tracking-[0.035em]">
                {title}
              </span>
            ) : null}
          </div>
          <div className="hidden items-center gap-2 border-b border-solid border-brand-primary py-1">
            <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-default-font -tracking-[0.01em]">
              {"Read article"}
            </span>
            <FeatherArrowRight className="text-body font-body text-default-font" />
          </div>
        </div>
      </div>
    </div>
  );
});

export const BlogPostCardLarge = BlogPostCardLargeRoot;
