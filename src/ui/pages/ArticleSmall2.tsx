"use client";

import React from "react";
import { BlogPostCardSmall } from "@/ui/components/BlogPostCardSmall";
import { ModernNavbar } from "@/ui/components/ModernNavbar";
import { ModernNavbarMobile } from "@/ui/components/ModernNavbarMobile";

function ArticleSmallPage2() {
  return (
    <div className="flex w-full flex-col items-center bg-default-background">
      <div className="flex w-full flex-col items-center justify-center gap-2 px-12 py-6 mobile:px-4 mobile:py-4">
        <ModernNavbar className="mobile:hidden" />
        <ModernNavbarMobile className="hidden mobile:flex" />
      </div>
      <div className="flex w-full max-w-screen-2xl flex-col items-center gap-12 py-32 mobile:px-6 mobile:py-32">
        <div className="flex w-full flex-col items-center gap-4">
          <span className="w-full max-w-[768px] text-heading-1 font-heading-1 text-default-font text-center mobile:text-heading-2 mobile:font-heading-2">
            Local experimentation, with read first guardrails
          </span>
          <span className="text-caption-bold font-caption-bold text-subtext-color">
            Published on 10th October, 2025
          </span>
        </div>
        <div className="flex w-full flex-col items-center gap-12 py-6 mobile:w-full mobile:grow mobile:shrink-0 mobile:basis-0">
          <img
            className="h-144 w-full flex-none rounded-lg object-cover mobile:h-auto mobile:w-auto mobile:flex-none mobile:object-fill"
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop"
          />
        </div>
        <div className="flex w-full max-w-[768px] flex-col items-start gap-12">
          <span className="w-full text-body font-body text-default-font">
            AI adoption rarely succeeds as a single top down rollout. It spreads through small experiments inside teams that have real work to do. The goal is not to stop that. The goal is to make it safe and useful. The best early pattern is local experimentation, paired with read first guardrails.
          </span>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-2 font-heading-2 text-default-font">
              Skimmable facts
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Adoption is already happening
            </span>
            <span className="w-full text-body font-body text-default-font">
              If teams are not allowed to try AI in their day to day work, they will still try it. You just lose visibility and control.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Read first is the lowest risk, highest learning loop
            </span>
            <span className="w-full text-body font-body text-default-font">
              Start by letting AI search, summarize, compare, extract, and answer questions from approved sources. You get value without letting AI change systems of record.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Local pilots produce the best use cases
            </span>
            <span className="w-full text-body font-body text-default-font">
              Departments know their bottlenecks. Let them test AI on real workflows, then share the wins across the org.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Guardrails should enable, not block
            </span>
            <span className="w-full text-body font-body text-default-font">
              Approved tools, clear do and do not rules, training, and simple escalation paths work better than blanket bans. Make the safe path the easy path.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Keep early outputs lightweight
            </span>
            <span className="w-full text-body font-body text-default-font">
              Drafts, summaries, and recommendations are ideal. They are easy to review and easy to discard. They also generate the data you need to improve prompts and context.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Earn write access over time
            </span>
            <span className="w-full text-body font-body text-default-font">
              When you move from reading to writing, do it intentionally. Add approvals, logging, and rollback. Limit scope to specific actions with clear ownership.
            </span>
          </div>
          <span className="w-full text-body font-body text-default-font">
            The point is to turn experimentation into a controlled learning system. Read first guardrails keep risk low, while local pilots keep momentum high. Over time, you build confidence, standards, and a clear path from personal productivity to real automation.
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border pt-12">
          <span className="text-heading-3 font-heading-3 text-default-font">
            Recommended Reading
          </span>
          <div className="flex w-full items-start justify-center gap-12 mobile:flex-col mobile:flex-nowrap mobile:gap-12">
            <BlogPostCardSmall
              image="https://res.cloudinary.com/subframe/image/upload/v1711417510/shared/esj02idt9sf1mhn7xuw8.png"
              tag="FEATURED"
              date="Apr 3, 2024"
              title="Why we are launching Subframe."
              subtitle={
                "Testing this subtitle out by writing random  stuff.\nTesting this subtitle out by writing random  stuff.\n"
              }
            />
            <BlogPostCardSmall
              image="https://res.cloudinary.com/subframe/image/upload/v1711417510/shared/esj02idt9sf1mhn7xuw8.png"
              tag="FEATURED"
              date="Apr 3, 2024"
              title="Why we are launching Subframe."
              subtitle={
                "Testing this subtitle out by writing random  stuff.\nTesting this subtitle out by writing random  stuff.\n"
              }
            />
            <BlogPostCardSmall
              className="mobile:hidden"
              image="https://res.cloudinary.com/subframe/image/upload/v1711417510/shared/esj02idt9sf1mhn7xuw8.png"
              tag="FEATURED"
              date="Apr 3, 2024"
              title="Why we are launching Subframe."
              subtitle={
                "Testing this subtitle out by writing random  stuff.\nTesting this subtitle out by writing random  stuff.\n"
              }
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 border-t border-solid border-neutral-100 px-6 py-12">
        <div className="flex w-full max-w-[1024px] flex-wrap items-start gap-6">
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch">
            <div className="flex w-full min-w-[320px] grow shrink-0 basis-0 items-start gap-4">
              <div className="flex grow shrink-0 basis-0 items-start justify-end gap-4">
                <img
                  className="h-6 flex-none object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1765236384/uploads/16132/vdcnyqqsqkdxtp9ll8ff.png"
                />
              </div>
              <div className="flex w-0.5 flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
              <span className="grow shrink-0 basis-0 text-body font-body text-default-font -tracking-[0.035em]">
                All Rights Reserved
              </span>
            </div>
          </div>
          <div className="hidden grow shrink-0 basis-0 flex-wrap items-start justify-end gap-4 self-stretch">
            <div className="hidden min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Product
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Features
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Integrations
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Pricing
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Docs
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Download
              </span>
            </div>
            <div className="flex min-w-[144px] flex-col items-start gap-4">
              <span className="w-full text-caption-bold font-caption-bold text-default-font -tracking-[0.01em]">
                Company
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                About us
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Blog
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Careers
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Customers
              </span>
            </div>
            <div className="hidden min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Resources
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Community
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Contact
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Privacy Policy
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Terms of Service
              </span>
            </div>
            <div className="hidden min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Developers
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                API
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Status
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Github
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleSmallPage2;