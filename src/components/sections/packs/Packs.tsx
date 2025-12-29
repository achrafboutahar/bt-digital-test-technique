import {
  BackgroundProps,
  Column,
  Columns,
  GapSize,
  IconName,
  Title,
} from "@trilogy-ds/react";
import { SectionContainer, CustomCard } from "@/components/shared";

import content from "@/content/data.json";

const backgroundColor: BackgroundProps["backgroundColor"] = "MAIN_FADE";

interface PacksProps {
  id: string;
}

export function PacksSection({ id }: PacksProps) {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <Columns multiline align="ALIGNED_CENTER" gap={GapSize.TEN}>
        <Column size={8}>
          <Title level={2} className="has-text-centered">
            {content.sections.packs.title}
          </Title>
        </Column>
        <Column size={12}>
          <Columns align="ALIGNED_CENTER">
            {content.sections.packs.items.map((item, index) => (
              <Column key={`packs-${index}`} size={5}>
                <CustomCard
                  iconName={item.iconName as IconName}
                  title={item.title}
                  description={item.description}
                  hasTextCentered
                  hasButton
                />
              </Column>
            ))}
          </Columns>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
