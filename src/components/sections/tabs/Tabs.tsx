"use client";

import { useState, useEffect } from "react";
import { Tabs, TabList, Tab, BackgroundProps } from "@trilogy-ds/react";
import { SECTION_IDS } from "@/constants/sections";
import { SectionContainer } from "@/components/shared";

import styles from "./Tabs.module.css";

interface TabConfig {
  label: string;
  sectionId?: string;
}

const backgroundColor: BackgroundProps["backgroundColor"] = "WHITE";

const tabsConfig: TabConfig[] = [
  { label: "WeFix", sectionId: SECTION_IDS.WEFIX },
  {
    label: "Réparation express en boutique",
    sectionId: SECTION_IDS.REPAIR_EXPRESS,
  },
  { label: "Avantages client", sectionId: SECTION_IDS.ADVANTAGES },
  { label: "Forfaits", sectionId: SECTION_IDS.PACKS },
  { label: "L'assurance", sectionId: SECTION_IDS.INSURANCE },
  { label: "Une question ?", sectionId: SECTION_IDS.QUESTIONS },
];

export function TabsSection() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) setActiveTab(hash);
  }, []);

  const handleTabClick = (sectionId: string) => {
    setActiveTab(sectionId);
    history.pushState(null, "", `#${sectionId}`);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <SectionContainer
      backgroundColor={backgroundColor}
      className={`desktop-only ${styles.tabsPadding}`}
    >
      <Tabs>
        <TabList>
          {tabsConfig.map((tab, index) => (
            <Tab
              key={`${tab.label}-${index}`}
              label={tab.label}
              className="has-text-info"
              onClick={() => handleTabClick(tab.sectionId!)}
              active={activeTab === tab.sectionId}
            />
          ))}
        </TabList>
      </Tabs>
    </SectionContainer>
  );
}
