"use client";
/*
 * Documentation:
 * BlogPostCardSmall — https://app.subframe.com/1647c068fd35/library?component=BlogPostCardSmall_cceb503e-d72a-4134-8479-920c2b74fc3a
 */

import React from "react";
import * as SubframeUtils from "../utils";

interface BlogPostCardSmallRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  image?: string;
  tag?: React.ReactNode;
  date?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

const BlogPostCardSmallRoot = React.forwardRef<
  HTMLDivElement,
  BlogPostCardSmallRootProps
>(function BlogPostCardSmallRoot(
  {
    image,
    tag,
    date,
    title,
    subtitle,
    className,
    ...otherProps
  }: BlogPostCardSmallRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/cceb503e flex cursor-pointer flex-col items-start gap-6 overflow-hidden",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {image ? (
        <div className="flex w-full flex-col items-center gap-24 overflow-hidden">
          <img
            className="w-full grow shrink-0 basis-0 object-contain group-hover/cceb503e:scale-105 group-hover/cceb503e:transition group-hover/cceb503e:duration-300 group-hover/cceb503e:ease-in-out"
            src={image}
          />
        </div>
      ) : null}
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-center gap-4">
        <div className="flex w-full grow shrink-0 basis-0 items-end justify-between">
          {tag ? (
            <span className="text-monospace-body font-monospace-body text-brand-700">
              {tag}
            </span>
          ) : null}
          {date ? (
            <span className="hidden text-body font-body text-subtext-color">
              {date}
            </span>
          ) : null}
        </div>
        <div className="flex w-full flex-col items-start justify-end gap-2">
          {title ? (
            <span className="w-full text-heading-4 font-heading-4 text-default-font -tracking-[0.035em]">
              {title}
            </span>
          ) : null}
          {subtitle ? (
            <span className="w-full whitespace-pre-wrap text-caption font-caption text-subtext-color -tracking-[0.01em]">
              {subtitle}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
});

export const BlogPostCardSmall = BlogPostCardSmallRoot;
