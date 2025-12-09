"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { ModernNavbar } from "@/ui/components/ModernNavbar";
import { ModernNavbarMobile } from "@/ui/components/ModernNavbarMobile";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { FeatherActivity } from "@subframe/core";
import { FeatherBarChart } from "@subframe/core";
import { FeatherBell } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherCode2 } from "@subframe/core";
import { FeatherDatabase } from "@subframe/core";
import { FeatherPieChart } from "@subframe/core";
import { FeatherSparkles } from "@subframe/core";
import { FeatherUsers2 } from "@subframe/core";

function SoftwareDevelopmentPage() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background">
      <div className="flex w-full flex-col items-center justify-center gap-2 px-6 py-6 mobile:flex-col mobile:flex-nowrap mobile:gap-0 mobile:px-4 mobile:py-4">
        <ModernNavbar className="mobile:hidden" />
        <ModernNavbarMobile className="hidden mobile:flex" />
      </div>
      <div className="flex w-full max-w-screen-2xl flex-col items-center">
        <div className="flex w-full flex-col items-center justify-center gap-24 py-24 mobile:px-0 mobile:pt-12 mobile:pb-24">
          <img
            className="max-h-[448px] w-full grow shrink-0 basis-0 object-cover"
            src="https://res.cloudinary.com/subframe/image/upload/v1724690133/uploads/302/tswlwr0qfwwhkgbjwplw.png"
          />
          <div className="flex w-full max-w-[768px] flex-col items-center justify-center gap-6 mobile:px-6 mobile:py-0">
            <span className="hidden text-heading-5 font-heading-5 text-brand-700 text-center tracking-[0.15em]">
              AI Development for the Agent Era
            </span>
            <span className="max-w-[576px] text-heading-1 font-heading-1 text-default-font text-center -tracking-[0.03em] mobile:text-heading-2 mobile:font-heading-2">
              Build what is next. Faster.
            </span>
            <span className="w-full text-caption-bold font-caption-bold text-default-font text-center -tracking-[0.01em]">
              AI has changed how development works. Teams are shipping with coding agents, lighter specs, and tighter feedback loops. We help you adapt with a clear path from agent guidance, to prototypes, to full production builds.
            </span>
          </div>
        </div>
        <div className="hidden w-full flex-col items-center justify-center gap-24 px-6 py-24">
          <div className="flex h-px w-full max-w-[768px] flex-none flex-col items-center gap-2 bg-neutral-border" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 py-24 mobile:px-0 mobile:py-12">
          <div className="flex w-full max-w-[768px] flex-col flex-wrap items-start gap-6 mobile:px-6 mobile:py-0">
            <span className="w-full text-heading-2 font-heading-2 text-default-font -tracking-[0.03em]">
              A modern approach to building software
            </span>
            <span className="w-full whitespace-pre-wrap text-body font-body text-default-font -tracking-[0.01em]">
              {
                "Coding agents are now part of the workflow. The bottleneck is no longer just engineering capacity. It is having the right guardrails, the right patterns, and a practical way to move from ideas to production without chaos.\n\nWe offer three services that match how modern teams build. Start with documentation and rules that let your team vibe code safely, prove value with a prototype, then scale into a full build when it is ready."
              }
            </span>
          </div>
          <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-2">
            <div className="flex w-full flex-wrap items-start gap-6 mobile:px-6 mobile:py-0">
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl border border-solid border-neutral-border bg-neutral-50">
                <img
                  className="h-40 w-full flex-none object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1724690099/uploads/302/zxrsheptnqfesqupssbb.png"
                />
                <div className="flex w-full grow shrink-0 basis-0 items-start gap-2 px-6 py-6">
                  <div className="flex h-6 w-6 flex-none items-center justify-center gap-4">
                    <FeatherCode2 className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-default-font" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full font-['Inter'] text-[17px] font-[600] leading-[24px] text-default-font -tracking-[0.02em]">
                      Vibe Coding as a Service
                    </span>
                    <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                      Expert guidance and documentation that helps your team use coding agents to build real internal software safely and consistently.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl border border-solid border-neutral-border bg-neutral-50">
                <img
                  className="h-40 w-full flex-none object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1724705587/uploads/302/pmtf0cxxfdalumkmlstj.png"
                />
                <div className="flex w-full grow shrink-0 basis-0 items-start gap-2 px-6 py-6">
                  <div className="flex h-6 w-6 flex-none items-center justify-center gap-4">
                    <FeatherDatabase className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-default-font" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full font-['Inter'] text-[17px] font-[600] leading-[24px] text-default-font -tracking-[0.02em]">
                      Rapid Prototyping
                    </span>
                    <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                      From initial idea to a deployed proof of concept in under 4 weeks, designed to validate value and define what production should be.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl border border-solid border-neutral-border bg-neutral-50">
                <img
                  className="h-40 w-full flex-none object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1724705524/uploads/302/l5oq75rpdkq2kowa2xkj.png"
                />
                <div className="flex w-full grow shrink-0 basis-0 items-start gap-2 px-6 py-6">
                  <div className="flex h-6 w-6 flex-none items-center justify-center gap-4">
                    <FeatherActivity className="font-['Inter'] text-[20px] font-[300] leading-[20px] text-default-font" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full font-['Inter'] text-[17px] font-[600] leading-[24px] text-default-font -tracking-[0.02em]">
                      Custom Builds
                    </span>
                    <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                      Move from prototype to a complete production system with our full development team, including architecture, integrations, and long term support.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden w-full flex-wrap items-start gap-2">
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl border border-solid border-neutral-border bg-neutral-50">
                <img
                  className="h-40 w-full flex-none object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1724705485/uploads/302/lynkyfusi4ab4z91o69c.png"
                />
                <div className="flex w-full grow shrink-0 basis-0 items-start gap-2 px-6 py-6">
                  <div className="flex h-6 w-6 flex-none items-center justify-center gap-4">
                    <FeatherBarChart className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-default-font" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full font-['Inter'] text-[17px] font-[600] leading-[24px] text-default-font -tracking-[0.02em]">
                      Market Trends
                    </span>
                    <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                      AI analyzes market data to guide product strategy
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl border border-solid border-neutral-border bg-neutral-50">
                <img
                  className="h-40 w-full flex-none object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1724705670/uploads/302/dbicf0kmghfchcp3puss.png"
                />
                <div className="flex w-full grow shrink-0 basis-0 items-start gap-2 px-6 py-6">
                  <div className="flex h-6 w-6 flex-none items-center justify-center gap-4">
                    <FeatherUsers2 className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-default-font" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full font-['Inter'] text-[17px] font-[600] leading-[24px] text-default-font -tracking-[0.02em]">
                      Dynamic Agents
                    </span>
                    <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                      ML models predict optimal team compositions
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl border border-solid border-neutral-border bg-neutral-50">
                <img
                  className="h-40 w-full flex-none object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1724705689/uploads/302/wzbqe2n4hf3kwxr08izq.png"
                />
                <div className="flex w-full grow shrink-0 basis-0 items-start gap-2 px-6 py-6">
                  <div className="flex h-6 w-6 flex-none items-center justify-center gap-4">
                    <FeatherCheckCircle className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-default-font" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full font-['Inter'] text-[17px] font-[600] leading-[24px] text-default-font -tracking-[0.02em]">
                      Priority Engine
                    </span>
                    <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                      AI predicts high-impact tasks for optimal prioritization
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center pt-16 pb-24 mobile:px-0 mobile:py-12">
          <div className="flex w-full max-w-screen-2xl flex-wrap items-center justify-center gap-6 border-b border-solid border-neutral-100 py-16 mobile:px-6 mobile:py-16">
            <div className="flex min-w-[320px] grow shrink-0 basis-0 items-center justify-center gap-6">
              <img
                className="h-112 grow shrink-0 basis-0 object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1723780624/uploads/302/sxocuez05safdpfaztiz.png"
              />
            </div>
            <div className="flex min-w-[320px] grow shrink-0 basis-0 items-center gap-8">
              <div className="flex max-w-[576px] grow shrink-0 basis-0 flex-col items-start gap-6">
                <span className="w-full whitespace-pre-wrap text-heading-3 font-heading-3 text-default-font -tracking-[0.03em]">
                  {"Retrieval Reliability Score"}
                </span>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-600" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-700 -tracking-[0.01em]">
                      {
                        "How well queries in your domain are interpreted by search models, and how well queries are answered"
                      }
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-700" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-700 -tracking-[0.01em]">
                      {"Which information is at risk of being missed by agents"}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-700" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-700 -tracking-[0.01em]">
                      {"AI-generated feature suggestions"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-screen-2xl flex-wrap items-center justify-center gap-6 border-b border-solid border-neutral-100 py-16 mobile:px-6 mobile:py-16">
            <div className="flex min-w-[320px] grow shrink-0 basis-0 items-center justify-center gap-6">
              <img
                className="h-112 grow shrink-0 basis-0 object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1723780859/uploads/302/hh4s5xjmsigiehqkb1uh.png"
              />
            </div>
            <div className="flex min-w-[320px] grow shrink-0 basis-0 items-center gap-8">
              <div className="flex max-w-[576px] grow shrink-0 basis-0 flex-col items-start gap-6">
                <span className="w-full whitespace-pre-wrap text-heading-3 font-heading-3 text-default-font -tracking-[0.03em]">
                  {"Context Readiness for Automation"}
                </span>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-700" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-700 -tracking-[0.01em]">
                      {"Semantic boundaries to connect related themes"}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-600" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-700 -tracking-[0.01em]">
                      {
                        "Self-contained sections that agents can search and ingest at scale"
                      }
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-700" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-700 -tracking-[0.01em]">
                      {"Workflow-ready context for agents  "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-screen-2xl flex-wrap items-center justify-center gap-6 border-b border-solid border-neutral-100 py-16 mobile:px-6 mobile:py-16">
            <div className="flex min-w-[320px] grow shrink-0 basis-0 items-center justify-center gap-6">
              <img
                className="h-112 grow shrink-0 basis-0 object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1723780559/uploads/302/tkyvdicnwbc5ftuyysc0.png"
              />
            </div>
            <div className="flex min-w-[320px] grow shrink-0 basis-0 items-center gap-8">
              <div className="flex max-w-[576px] grow shrink-0 basis-0 flex-col items-start gap-6">
                <span className="w-full whitespace-pre-wrap text-heading-3 font-heading-3 text-default-font -tracking-[0.03em]">
                  {"Knowledge Structure & Governance"}
                </span>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-700" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-700 -tracking-[0.01em]">
                      {
                        "Mathematically tuned templates for department and personal use "
                      }
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-600" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-700 -tracking-[0.01em]">
                      {
                        "Information architecture coherence (sites, libraries, folders)"
                      }
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-700" />
                    <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-brand-700 -tracking-[0.01em]">
                      {
                        "Hands-on training to extend the template and site structure patterns"
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-full max-w-screen-2xl flex-wrap items-center gap-12 py-16">
            <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <FeatherSparkles className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-default-font" />
                <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  AI-driven insights
                </span>
              </div>
              <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Uncover hidden patterns in your development process.
              </span>
            </div>
            <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <FeatherBell className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-default-font" />
                <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Smart notifications
                </span>
              </div>
              <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Receive context-aware alerts and reminders.
              </span>
            </div>
            <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <FeatherCode2 className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-default-font" />
                <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Code optimization
                </span>
              </div>
              <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Automatically refactor and improve code quality.
              </span>
            </div>
            <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <FeatherPieChart className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-default-font" />
                <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Predictive analytics
                </span>
              </div>
              <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Forecast project timelines and resource needs.
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-12 bg-default-background px-4 py-32">
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

export default SoftwareDevelopmentPage;