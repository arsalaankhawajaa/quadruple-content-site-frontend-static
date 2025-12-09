"use client";

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BlogPostCardLarge } from "@/ui/components/BlogPostCardLarge";
import { BlogPostCardSmall } from "@/ui/components/BlogPostCardSmall";
import { Button } from "@/ui/components/Button";
import { ModernNavbar } from "@/ui/components/ModernNavbar";
import { ModernNavbarMobile } from "@/ui/components/ModernNavbarMobile";
import { ServiceCard } from "@/ui/components/ServiceCard";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { FeatherArrowRight } from "@subframe/core";
import { FeatherChevronRight } from "@subframe/core";
import ABGFLogo from "@/assets/images/ABGF-logo.png";
import AltiusLogo from "@/assets/images/Altius-logo.png";
import BCRLogo from "@/assets/images/bcr logo.png";
import CureeLogo from "@/assets/images/Curee-logo.png";
import HACLogo from "@/assets/images/HAC_Master-Logo_RGB_REV.png.webp";
import MagicTemplatesLogo from "@/assets/images/magicTemplates-logo.png";
import OmnicheLogo from "@/assets/images/omniche-advisory.png";
import TAGLogo from "@/assets/images/TAG logo.png";
import blogPostLargeImage from "@/assets/images/blogpostlarge.jpg";
import blogPostSmall1Image from "@/assets/images/blogpostsmall1.jpg";
import blogPostSmall2Image from "@/assets/images/blogpostsmall2.jpg";
import blogPostSmall3Image from "@/assets/images/blogpostsmall3.jpg";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          const yOffset = -80; // Offset for navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background">
      <div className="flex w-full flex-col items-center justify-center gap-2 px-12 py-6 mobile:flex-col mobile:flex-nowrap mobile:gap-0 mobile:px-4 mobile:py-4">
        <ModernNavbar className="mobile:hidden" />
        <ModernNavbarMobile className="hidden mobile:flex mobile:h-auto mobile:w-full mobile:flex-none" />
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-center justify-center gap-6 px-12 pt-32 pb-24 mobile:px-6 mobile:py-12">
          <div className="flex w-full flex-col items-center gap-12 mobile:px-0 mobile:py-0">
            <div className="flex w-full max-w-screen-2xl flex-col items-start gap-6 border-b border-solid border-brand-primary pb-6">
              <span className="max-w-[768px] whitespace-pre-wrap text-heading-1 font-heading-1 text-default-font -tracking-[0.04em] mobile:text-heading-2 mobile:font-heading-2">
                {"We help visionary founders\nrewire their business for AI."}
              </span>
              <span className="hidden max-w-[576px] font-['Inter'] text-[21px] font-[500] leading-[28px] text-subtext-color -tracking-[0.03em]">
                Elevate your workflow with intelligent agents. Streamline
                coding, debugging, and project management with AI.
              </span>
            </div>
            <div className="hidden w-full flex-wrap items-center gap-2">
              <Button
                size="large"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Start coding smarter
              </Button>
              <Button
                variant="neutral-tertiary"
                size="large"
                iconRight={<FeatherArrowRight />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Meet your AI assistants
              </Button>
            </div>
          </div>
        </div>
        <div id="articles" className="flex w-full flex-wrap items-center justify-center gap-2 px-12 pt-20 pb-12 bg-gradient-to-b from-transparent to-neutral-50 mobile:px-6 mobile:pt-20 mobile:pb-12">
          <div className="flex max-w-screen-2xl grow shrink-0 basis-0 items-start gap-6 mobile:flex-col mobile:flex-nowrap mobile:gap-4">
            <div className="flex-[4] sticky top-0 mobile:static flex flex-col items-start gap-6">
              <span className="text-heading-5 font-heading-5 text-default-font">
                Featured Publications
              </span>
              <Link to="/llms-unstructured-information-engines" className="w-full">
                <BlogPostCardLarge
                  image={blogPostLargeImage}
                  category="FEATURED"
                  title="LLMs are unstructured information engines, not software systems"
                  date="Oct 8, 2025"
                />
              </Link>
            </div>
            <div className="flex-[2] flex flex-col items-start gap-6">
              <span className="text-heading-5 font-heading-5 text-default-font">
                Latest Posts
              </span>
              <div className="flex flex-col items-start gap-12">
                <Link to="/context-engineering-enterprise-ai-stack" className="w-full">
                  <BlogPostCardSmall
                    image={blogPostSmall1Image}
                    tag="FEATURED"
                    date="Oct 9, 2025"
                    title="Context engineering is the real enterprise AI stack"
                    subtitle="Most teams still treat AI as a model selection problem. It is not. The difference between a demo and a dependable system is whether the model gets the right context at the right time, in a format it can use."
                  />
                </Link>
                <Link to="/local-experimentation-read-first-guardrails" className="w-full">
                  <BlogPostCardSmall
                    image={blogPostSmall2Image}
                    tag="FEATURED"
                    date="Oct 10, 2025"
                    title="Local experimentation, with read first guardrails"
                    subtitle="AI adoption rarely succeeds as a single top down rollout. It spreads through small experiments inside teams that have real work to do. The goal is not to stop that. The goal is to make it safe and useful."
                  />
                </Link>
                <Link to="/how-to-end-work-slop" className="w-full">
                  <BlogPostCardSmall
                    image={blogPostSmall3Image}
                    tag="FEATURED"
                    date="Oct 11, 2025"
                    title="How to end work slop"
                    subtitle="Work slop is what happens when AI turns vague thoughts into polished output. It looks productive, but it does not move decisions forward. The fix is not banning AI. The fix is controlling inputs."
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 bg-neutral-50 px-12 py-24 mobile:px-6 mobile:py-24">
          <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-12">
            <div className="flex w-full flex-col items-center gap-1">
              <span className="text-heading-3 font-heading-3 text-default-font -tracking-[0.03em] mobile:text-heading-4 mobile:font-heading-4">
                We work with the region&#39;s most innovative teams.
              </span>
              <span className="text-heading-3 font-heading-3 text-subtext-color -tracking-[0.03em] mobile:text-heading-4 mobile:font-heading-4">
                From AI-first startups to PE-backed market leaders.
              </span>
            </div>
            <div className="w-full items-center justify-center gap-6 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
              <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                <img
                  className="h-10 flex-none object-cover grayscale contrast-200"
                  src={ABGFLogo}
                  alt="ABGF"
                />
              </div>
              <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                <img
                  className="h-10 flex-none object-cover grayscale contrast-200"
                  src={AltiusLogo}
                  alt="Altius"
                />
              </div>
              <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                <img
                  className="h-10 flex-none object-cover grayscale contrast-200"
                  src={BCRLogo}
                  alt="BCR"
                />
              </div>
              <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                <img
                  className="h-10 flex-none object-cover grayscale contrast-200"
                  src={CureeLogo}
                  alt="Curee"
                />
              </div>
              <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                <img
                  className="h-10 flex-none object-cover grayscale contrast-200"
                  src={HACLogo}
                  alt="HAC"
                />
              </div>
              <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                <img
                  className="h-10 flex-none object-cover grayscale contrast-200"
                  src={MagicTemplatesLogo}
                  alt="Magic Templates"
                />
              </div>
              <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                <img
                  className="h-10 flex-none object-cover grayscale contrast-200"
                  src={OmnicheLogo}
                  alt="Omniche Advisory"
                />
              </div>
              <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                <img
                  className="h-10 flex-none object-cover grayscale contrast-200"
                  src={TAGLogo}
                  alt="TAG"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="services" className="flex w-full flex-col items-center justify-center bg-brand-900 px-12 pt-32 pb-24 bg-gradient-to-b from-neutral-700 to-neutral-900">
          <div className="flex w-full max-w-screen-2xl flex-col items-center gap-16">
            <div className="flex w-full flex-col items-center gap-4">
              <span className="text-heading-2 font-heading-2 text-black mobile:text-center">
                Software Development, Modernized.
              </span>
              <span className="max-w-[768px] whitespace-pre-wrap text-body font-body text-black text-center -tracking-[0.01em]">
                {
                  "Software development is no longer inaccessible for everyone. Quadruple's services\nare evolving to make AI coding a real advantage in your business.  "
                }
              </span>
            </div>
            <div className="w-full max-w-screen-2xl items-start justify-center gap-12 flex flex-col mobile:flex-col mobile:gap-12 md:grid md:grid-cols-3">
              <ServiceCard
                image="https://res.cloudinary.com/subframe/image/upload/v1722404911/uploads/302/uxswoalrzimh7g9ivtiq.webp"
                title="Vibe Coding as a Service"
                description="Expert guidance for your AI agents to vibe code real software in-house."
                linkText="Learn more"
                linkIcon={<FeatherArrowRight />}
              />
              <ServiceCard
                image="https://res.cloudinary.com/subframe/image/upload/v1722404911/uploads/302/uxswoalrzimh7g9ivtiq.webp"
                title="Rapid Prototyping"
                description="Go from initial ideation to deployed prototypes in less than 4 weeks."
                linkText="Learn more"
                linkIcon={<FeatherArrowRight />}
              />
              <ServiceCard
                image="https://res.cloudinary.com/subframe/image/upload/v1722404911/uploads/302/uxswoalrzimh7g9ivtiq.webp"
                title="Custom Builds"
                description="Move from prototypes to complete builds with our full development team."
                linkText="Learn more"
                linkIcon={<FeatherArrowRight />}
              />
            </div>
            <Link to="/softwaredev" className="flex items-center gap-2 border-b border-solid border-brand-100 pb-1">
              <span className="whitespace-pre-wrap text-body-bold font-body-bold text-brand-200 -tracking-[0.01em]">
                {"Learn more"}
              </span>
              <FeatherArrowRight className="text-body font-body text-brand-200" />
            </Link>
          </div>
        </div>
        <div id="enterprise" className="flex w-full flex-col items-center justify-center gap-16 bg-brand-700 px-12 py-24">
          <div className="flex w-full max-w-screen-2xl flex-wrap items-start gap-2">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 mobile:hidden">
              <img
                className="flex-none"
                src="https://res.cloudinary.com/subframe/image/upload/v1724690099/uploads/302/zxrsheptnqfesqupssbb.png"
              />
            </div>
            <div className="flex max-w-screen-2xl grow shrink-0 basis-0 flex-col items-start justify-center gap-16 self-stretch pl-4">
              <span className="text-heading-2 font-heading-2 text-black">
                Enterprise Readiness for AI Adoption
              </span>
              <div className="flex w-full flex-col items-start gap-6">
                <span className="w-full max-w-[448px] whitespace-pre-wrap text-body font-body text-black -tracking-[0.01em]">
                  {
                    "Get the most out of your enterprise AI services. Optimize Copilot (Microsoft) and Gemini (Google) to deliver better results throughout your organization."
                  }
                </span>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-neutral-100" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-200 -tracking-[0.01em]">
                      {"Structured documentation for efficient retrieval"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-neutral-100" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-200 -tracking-[0.01em]">
                      {"Evaluation of AI agent functionality"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-neutral-100" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-200 -tracking-[0.01em]">
                      {"Sharepoint and Google Drive rework"}
                    </span>
                  </div>
                </div>
                <Link to="/enterprise-ai" className="flex items-center gap-2 border-b border-solid border-brand-100">
                  <span className="whitespace-pre-wrap font-['Inter'] text-[16px] font-[500] leading-[24px] text-brand-200 -tracking-[0.01em]">
                    {"Learn more"}
                  </span>
                  <FeatherArrowRight className="text-body font-body text-brand-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="learn" className="flex w-full flex-col items-center bg-brand-accent-100 px-12 pt-32 pb-20 bg-gradient-to-b from-brand-accent-200 to-transparent mobile:px-6 mobile:pt-32 mobile:pb-20">
          <div className="flex w-full max-w-screen-2xl items-start gap-6 pt-16 pb-8 mobile:flex-col mobile:flex-nowrap mobile:gap-6">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-8 self-stretch pl-4 mobile:px-0 mobile:py-0">
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-2 w-4 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                  <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                    Ask Quadruple
                  </span>
                  <FeatherChevronRight className="text-body font-body text-default-font" />
                </div>
                <span className="w-full max-w-[768px] whitespace-pre-wrap text-heading-1 font-heading-1 text-default-font -tracking-[0.04em]">
                  {"Unsure of how to begin\nwith AI?"}
                </span>
              </div>
              <div className="flex w-full max-w-[448px] flex-col items-start gap-2">
                <span className="w-full whitespace-pre-wrap text-body-bold font-body-bold text-default-font -tracking-[0.01em]">
                  {"Connect with a staff engineer."}
                </span>
                <span className="w-full whitespace-pre-wrap text-body font-body text-default-font -tracking-[0.01em]">
                  {"Explain your situation. "}
                </span>
                <span className="w-full whitespace-pre-wrap text-body font-body text-default-font -tracking-[0.01em]">
                  {"Get real responses back from your paired engineer."}
                </span>
                <span className="w-full whitespace-pre-wrap text-body font-body text-default-font -tracking-[0.01em]">
                  {"No strings attached."}
                </span>
                <span className="w-full whitespace-pre-wrap text-body-bold font-body-bold text-default-font -tracking-[0.01em]">
                  {"The AI Anti-Newsletter"}
                </span>
                <span className="w-full whitespace-pre-wrap text-body font-body text-default-font -tracking-[0.01em]">
                  {
                    "No weekly clutter in your inbox. Get a summary of AI's latest news and developments relevant to your business."
                  }
                </span>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 pr-4">
              <div className="flex w-full flex-col items-start justify-center gap-6">
                <span className="w-full text-heading-3 font-heading-3 text-default-font -tracking-[0.035em]">
                  Sign up for the Anti Newsletter
                </span>
                <div className="flex w-full items-center gap-6">
                  <TextField
                    className="h-auto grow shrink-0 basis-0"
                    label="Name"
                    helpText="First Name"
                  >
                    <TextField.Input
                      placeholder="Full Name"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </div>
                <div className="flex w-full items-center gap-6">
                  <TextField
                    className="h-auto grow shrink-0 basis-0"
                    label="Name"
                    helpText="First Name"
                  >
                    <TextField.Input
                      placeholder="Email address"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </div>
                <TextArea
                  className="h-auto w-full flex-none"
                  label="Message"
                  helpText=""
                >
                  <TextArea.Input
                    placeholder="Any details that would help us matching you with an engineer?"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLTextAreaElement>
                    ) => {}}
                  />
                </TextArea>
                <Button
                  className="h-10 w-full flex-none"
                  variant="brand-secondary"
                  size="large"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="flex w-full flex-col items-center px-12 pt-16 pb-24">
          <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-12 bg-default-background px-4 py-32 mobile:px-0 mobile:py-6">
            <div className="flex w-full flex-col items-center justify-center gap-6">
              <span className="w-full text-heading-1 font-heading-1 text-default-font text-center -tracking-[0.035em]">
                Know what you need?
              </span>
              <span className="w-full text-body font-body text-default-font text-center -tracking-[0.035em]">
                Get in touch.
              </span>
            </div>
            <div className="flex w-full max-w-[448px] flex-col items-center justify-center gap-6">
              <div className="flex items-center gap-6">
                <TextField label="Name" helpText="">
                  <TextField.Input
                    placeholder="Full Name"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
                <TextField label="Email" helpText="">
                  <TextField.Input
                    placeholder="Full Name"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
              </div>
              <TextField
                className="h-auto w-full flex-none"
                label="Name"
                helpText=""
              >
                <TextField.Input
                  placeholder="Email"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <TextArea
                className="h-auto w-full flex-none"
                label="Message"
                helpText=""
              >
                <TextArea.Input
                  placeholder=""
                  value=""
                  onChange={(
                    event: React.ChangeEvent<HTMLTextAreaElement>
                  ) => {}}
                />
              </TextArea>
              <Button
                className="h-10 w-full flex-none"
                variant="brand-secondary"
                size="large"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Send
              </Button>
            </div>
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

export default Home;