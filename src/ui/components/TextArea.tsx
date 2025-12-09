"use client";
/*
 * Documentation:
 * Text Area — https://app.subframe.com/1647c068fd35/library?component=Text+Area_4ec05ee8-8f1c-46b2-b863-5419aa7f5cce
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface InputProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "placeholder"
  > {
  placeholder?: React.ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

const Input = React.forwardRef<HTMLTextAreaElement, InputProps>(function Input(
  { placeholder, className, ...otherProps }: InputProps,
  ref
) {
  return (
    <textarea
      className={SubframeUtils.twClassNames(
        "min-h-[96px] w-full border-none bg-transparent px-2 py-1.5 text-body font-body text-default-font outline-none placeholder:text-neutral-400",
        className
      )}
      placeholder={placeholder as string}
      ref={ref}
      {...otherProps}
    />
  );
});

interface TextAreaRootProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant?: "outline";
  label?: React.ReactNode;
  helpText?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const TextAreaRoot = React.forwardRef<HTMLLabelElement, TextAreaRootProps>(
  function TextAreaRoot(
    {
      variant = "outline",
      label,
      helpText,
      children,
      className,
      ...otherProps
    }: TextAreaRootProps,
    ref
  ) {
    return (
      <label
        className={SubframeUtils.twClassNames(
          "flex flex-col items-start gap-1",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {label ? (
          <span className="text-caption-bold font-caption-bold text-default-font">
            {label}
          </span>
        ) : null}
        {children ? (
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start rounded-md border-b border-solid border-brand-primary">
            {children}
          </div>
        ) : null}
        {helpText ? (
          <span className="text-caption font-caption text-subtext-color">
            {helpText}
          </span>
        ) : null}
      </label>
    );
  }
);

export const TextArea = Object.assign(TextAreaRoot, {
  Input,
});
