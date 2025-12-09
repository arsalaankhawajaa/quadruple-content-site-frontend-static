"use client";

import React from "react";
import { BlogPostCardSmall } from "@/ui/components/BlogPostCardSmall";
import { ModernNavbar } from "@/ui/components/ModernNavbar";
import { ModernNavbarMobile } from "@/ui/components/ModernNavbarMobile";

function ArticleLargePage() {
  return (
    <div className="flex w-full flex-col items-center bg-default-background">
      <div className="flex w-full flex-col items-center justify-center gap-2 px-12 py-6 mobile:px-4 mobile:py-4">
        <ModernNavbar className="mobile:hidden" />
        <ModernNavbarMobile className="hidden mobile:flex" />
      </div>
      <div className="flex w-full max-w-screen-2xl flex-col items-center gap-12 py-32 mobile:px-6 mobile:py-32">
        <div className="flex w-full flex-col items-center gap-4">
          <span className="w-full max-w-[768px] text-heading-1 font-heading-1 text-default-font text-center mobile:text-heading-2 mobile:font-heading-2">
            LLMs are unstructured information engines, not software systems
          </span>
          <span className="text-caption-bold font-caption-bold text-subtext-color">
            Published on 8th October, 2025
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
            Most teams still talk about large language models as if they are a new kind of application. They are not. In production, the value of an LLM is simple. It can read messy inputs and produce useful structure. It can compress, classify, extract, compare, and rewrite information that does not fit neatly into a database. The best systems treat the model as an information processing layer inside a restricted surface area. That is how you get reliability.
          </span>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              LLMs are best at turning messy inputs into clean outputs
            </span>
            <span className="w-full text-body font-body text-default-font">
              Enterprises do not lack information. They lack usable information. Most business knowledge is trapped in PDFs, tickets, meeting notes, slide decks, emails, and SharePoint folders. LLMs are excellent at converting that into structured outputs that software can actually work with. Summaries with citations. Tables of requirements. Lists of risks. Extracted entities. Standardized updates. Drafts that follow a template. This is the core use case. Unstructured in, structured out.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              The restricted surface area is the product
            </span>
            <span className="w-full text-body font-body text-default-font">
              Most LLM failures happen when the model is allowed to roam. If you ask it to do everything in one open ended prompt, you get confidence without control. Production systems do the opposite. They reduce the surface area and make the model operate inside boundaries. The model can only produce specific formats, answer within a scope, and use approved tools. When the model needs to act, it calls a function with parameters instead of writing a plan in prose. When it needs knowledge, it retrieves from known sources instead of guessing. This is where real engineering lives. You are not building prompts. You are building constraints.
            </span>
          </div>
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

export default ArticleLargePage;