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

const backgroundColor: BackgroundProps["backgroundColor"] = "NEUTRAL_FADE";

interface AdvantagesProps {
  id: string;
}

export function AdvantagesSection({ id }: AdvantagesProps) {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <Columns multiline mobile align="ALIGNED_CENTER" gap={GapSize.NINE}>
        <Column size={8}>
          <Title level={2} className="has-text-centered">
            {content.sections.advantages.title}
          </Title>
        </Column>
        <Column size={12}>
          <Columns gap={GapSize.FIVE} align="ALIGNED_CENTER">
            {content.sections.advantages.items.map((item, index) => (
              <Column size={4} key={`advantage-${index}`}>
                <CustomCard
                  iconName={item.iconName as IconName}
                  title={item.title}
                  description={item.description}
                  info={item.info}
                  hasTextCentered
                />
              </Column>
            ))}
          </Columns>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
