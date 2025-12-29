"use client";

import {
  HeroSection,
  TabsSection,
  WeFixSection,
  RepairExpressSection,
  AdvantagesSection,
  PacksSection,
  SolutionSection,
  InsuranceSection,
  RepairEnvSection,
  TogetherSection,
  QuestionsSection,
  ReminderSection,
  HacksSection,
  LegalNoticesSection,
} from "@/components/sections";

import content from "@/content/data.json";

const tabs = content.sections.tabs.items;

export default function Page() {
  return (
    <>
      <HeroSection />
      <TabsSection />
      <WeFixSection id={tabs.WEFIX.sectionId} />
      <RepairExpressSection id={tabs.REPAIR_EXPRESS.sectionId} />
      <AdvantagesSection id={tabs.ADVANTAGES.sectionId} />
      <PacksSection id={tabs.PACKS.sectionId} />
      <SolutionSection />
      <InsuranceSection id={tabs.INSURANCE.sectionId} />
      <RepairEnvSection />
      <TogetherSection />
      <QuestionsSection id={tabs.QUESTIONS.sectionId} />
      <ReminderSection />
      <HacksSection />
      <LegalNoticesSection />
    </>
  );
}
