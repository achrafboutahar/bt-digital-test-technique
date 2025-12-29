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
import { SECTION_IDS } from "@/constants/sections";

export default function Page() {
  return (
    <>
      <HeroSection />
      <TabsSection />
      <WeFixSection id={SECTION_IDS.WEFIX} />
      <RepairExpressSection id={SECTION_IDS.REPAIR_EXPRESS} />
      <AdvantagesSection id={SECTION_IDS.ADVANTAGES} />
      <PacksSection id={SECTION_IDS.PACKS} />
      <SolutionSection />
      <InsuranceSection id={SECTION_IDS.INSURANCE} />
      <RepairEnvSection />
      <TogetherSection />
      <QuestionsSection id={SECTION_IDS.QUESTIONS} />
      <ReminderSection />
      <HacksSection />
      <LegalNoticesSection />
    </>
  );
}
