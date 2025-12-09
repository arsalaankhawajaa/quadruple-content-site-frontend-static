"use client";

import React from "react";
import { Link } from "react-router-dom";
import { BlogPostCardSmall } from "@/ui/components/BlogPostCardSmall";
import { ModernNavbar } from "@/ui/components/ModernNavbar";
import { ModernNavbarMobile } from "@/ui/components/ModernNavbarMobile";
import blogPostSmall3Image from "@/assets/images/blogpostsmall3.jpg";
import blogPostLargeImage from "@/assets/images/blogpostlarge.jpg";
import blogPostSmall1Image from "@/assets/images/blogpostsmall1.jpg";
import blogPostSmall2Image from "@/assets/images/blogpostsmall2.jpg";

function ArticleSmallPage3() {
  return (
    <div className="flex w-full flex-col items-center bg-default-background">
      <div className="flex w-full flex-col items-center justify-center gap-2 px-12 py-6 mobile:px-4 mobile:py-4">
        <ModernNavbar className="mobile:hidden" />
        <ModernNavbarMobile className="hidden mobile:flex" />
      </div>
      <div className="flex w-full max-w-screen-2xl flex-col items-center gap-12 py-32 mobile:px-6 mobile:py-32">
        <div className="flex w-full flex-col items-center gap-4">
          <span className="w-full max-w-[768px] text-heading-1 font-heading-1 text-default-font text-center mobile:text-heading-2 mobile:font-heading-2">
            How to end work slop
          </span>
          <span className="text-caption-bold font-caption-bold text-subtext-color">
            Published on 11th October, 2025
          </span>
        </div>
        <div className="flex w-full flex-col items-center gap-12 py-6 mobile:w-full mobile:grow mobile:shrink-0 mobile:basis-0">
          <img
            className="h-144 w-full flex-none rounded-lg object-cover mobile:h-auto mobile:w-auto mobile:flex-none mobile:object-fill"
            src={blogPostSmall3Image}
          />
        </div>
        <div className="flex w-full max-w-[768px] flex-col items-start gap-12">
          <span className="w-full text-body font-body text-default-font">
            Work slop is what happens when AI turns vague thoughts into polished output. It looks productive, but it does not move decisions forward. The fix is not banning AI. The fix is controlling inputs. Use AI to automate reading, triage, extraction, and synthesis from high quality sources, then let humans make the call.
          </span>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-2 font-heading-2 text-default-font">
              Skimmable facts
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Slop is an input problem, not a writing problem
            </span>
            <span className="w-full text-body font-body text-default-font">
              If the input is unclear, unverified, or low quality, the output will be the same, just formatted nicely.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Treat sources as first class objects
            </span>
            <span className="w-full text-body font-body text-default-font">
              Make it normal to attach sources to work. Links, documents, excerpts, and data should travel with the output.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Define what "high quality" means in your business
            </span>
            <span className="w-full text-body font-body text-default-font">
              Approved domains, trusted analysts, internal systems of record, and primary sources. Make the list explicit and easy to follow.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Build an input pipeline
            </span>
            <span className="w-full text-body font-body text-default-font">
              Capture inputs, tag them, deduplicate them, and store them where they can be found again. This is the foundation for retrieval and repeatable work.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Use AI to process inputs, not invent them
            </span>
            <span className="w-full text-body font-body text-default-font">
              Automate summarization with citations, compare sources, extract key claims, list risks, pull out numbers, and highlight disagreements. The model becomes a fast analyst, not a creative writer.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Make citations mandatory for anything that leaves the team
            </span>
            <span className="w-full text-body font-body text-default-font">
              If it gets forwarded, presented, or used to decide, it should carry sources. This single rule eliminates most slop.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              Measure output quality by decisions, not volume
            </span>
            <span className="w-full text-body font-body text-default-font">
              Fewer documents that lead to clear actions beats more documents that look impressive.
            </span>
          </div>
          <span className="w-full text-body font-body text-default-font">
            A practical standard is evidence first work. Start from high quality inputs, let AI compress and structure them, then write decisions from the structured view. When the inputs are controlled, productivity goes up and noise goes down.
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border pt-12">
          <span className="text-heading-3 font-heading-3 text-default-font">
            Recommended Reading
          </span>
          <div className="flex w-full items-start justify-center gap-12 mobile:flex-col mobile:flex-nowrap mobile:gap-12">
            <Link to="/llms-unstructured-information-engines" className="w-full">
              <BlogPostCardSmall
                image={blogPostLargeImage}
                tag="FEATURED"
                date="Oct 8, 2025"
                title="LLMs are unstructured information engines, not software systems"
                subtitle="Most teams still talk about large language models as if they are a new kind of application. They are not. In production, the value of an LLM is simple. It can read messy inputs and produce useful structure."
              />
            </Link>
            <Link to="/context-engineering-enterprise-ai-stack" className="w-full">
              <BlogPostCardSmall
                image={blogPostSmall1Image}
                tag="FEATURED"
                date="Oct 9, 2025"
                title="Context engineering is the real enterprise AI stack"
                subtitle="Most teams still treat AI as a model selection problem. It is not. The difference between a demo and a dependable system is whether the model gets the right context at the right time, in a format it can use."
              />
            </Link>
            <Link to="/local-experimentation-read-first-guardrails" className="w-full mobile:hidden">
              <BlogPostCardSmall
                className="mobile:hidden"
                image={blogPostSmall2Image}
                tag="FEATURED"
                date="Oct 10, 2025"
                title="Local experimentation, with read first guardrails"
                subtitle="AI adoption rarely succeeds as a single top down rollout. It spreads through small experiments inside teams that have real work to do. The goal is not to stop that. The goal is to make it safe and useful."
              />
            </Link>
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

export default ArticleSmallPage3;