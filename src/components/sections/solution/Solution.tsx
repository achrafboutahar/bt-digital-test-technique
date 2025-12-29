import {
  BackgroundProps,
  Column,
  Columns,
  GapSize,
  IconName,
  Link,
  Text,
  Title,
} from "@trilogy-ds/react";

import { SectionContainer, CustomCard, RichText } from "@/components/shared";

import content from "@/content/data.json";

const backgroundColor: BackgroundProps["backgroundColor"] = "INFO";

export function SolutionSection() {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <Columns multiline align="ALIGNED_CENTER" gap={GapSize.TEN}>
        <Column size={12}>
          <Title inverted level={2} className="has-text-centered">
            {content.sections.solution.title}
          </Title>
        </Column>
        <Column size={12}>
          <Columns gap={GapSize.FIVE} align="ALIGNED_CENTER">
            {content.sections.solution.cards.map((card, index) => (
              <Column key={`solution-card-${index}`} size={6}>
                <CustomCard
                  iconName={card.iconName as IconName}
                  title={card.title}
                  gap={GapSize.FOUR}
                >
                  <RichText text={card.description} />
                  <Link className="has-text-info" href={card.link?.href || "#"}>
                    <Text level={2} markup="span">
                      {card.link?.label}
                    </Text>
                  </Link>
                </CustomCard>
              </Column>
            ))}
          </Columns>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
