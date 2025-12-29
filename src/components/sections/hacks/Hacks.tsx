import {
  BackgroundProps,
  Column,
  Columns,
  GapSize,
  Title,
} from "@trilogy-ds/react";
import { SectionContainer } from "@/components/shared";
import { HackCard, HackCardProps } from "./components/HackCard";

import content from "@/content/data.json";

const backgroundColor: BackgroundProps["backgroundColor"] = "NEUTRAL_FADE";

const cardsConfig: HackCardProps[] = content.sections.hacks.items.map(
  (item) => ({
    imgSrc: item.imgSrc,
    title: item.title,
    link: { href: item.link.href, label: item.link.label },
  })
);

export function HacksSection() {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <Columns multiline align="ALIGNED_CENTER" gap={GapSize.NINE}>
        <Column size={12}>
          <Title level={2} className="has-text-centered">
            {content.sections.hacks.title}
          </Title>
        </Column>
        <Column size={12}>
          <Columns verticalAlign="ALIGNED_CENTER">
            {cardsConfig.map((cardItem) => (
              <Column key={cardItem.imgSrc} desktopSize={4}>
                <HackCard {...cardItem} />
              </Column>
            ))}
          </Columns>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
