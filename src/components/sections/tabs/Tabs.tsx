"use client";

import { useState, useEffect } from "react";
import { Tabs, TabList, Tab, BackgroundProps } from "@trilogy-ds/react";
import { SectionContainer } from "@/components/shared";

import content from "@/content/data.json";
import styles from "./Tabs.module.css";

interface TabConfig {
  label: string;
  sectionId?: string;
}

const backgroundColor: BackgroundProps["backgroundColor"] = "WHITE";

const tabsConfig: TabConfig[] = [
  {
    label: content.sections.tabs.items.WEFIX.label,
    sectionId: content.sections.tabs.items.WEFIX.sectionId,
  },
  {
    label: content.sections.tabs.items.REPAIR_EXPRESS.label,
    sectionId: content.sections.tabs.items.REPAIR_EXPRESS.sectionId,
  },
  {
    label: content.sections.tabs.items.ADVANTAGES.label,
    sectionId: content.sections.tabs.items.ADVANTAGES.sectionId,
  },
  {
    label: content.sections.tabs.items.PACKS.label,
    sectionId: content.sections.tabs.items.PACKS.sectionId,
  },
  {
    label: content.sections.tabs.items.INSURANCE.label,
    sectionId: content.sections.tabs.items.INSURANCE.sectionId,
  },
  {
    label: content.sections.tabs.items.QUESTIONS.label,
    sectionId: content.sections.tabs.items.QUESTIONS.sectionId,
  },
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
              className={`has-text-info ${styles.noBorder}`}
              onClick={() => handleTabClick(tab.sectionId!)}
              active={activeTab === tab.sectionId}
            />
          ))}
        </TabList>
      </Tabs>
    </SectionContainer>
  );
}
