import {
  BackgroundProps,
  Column,
  Columns,
  GapSize,
  IconName,
  Image,
  Row,
  Rows,
  Title,
} from "@trilogy-ds/react";

import { SectionContainer, CustomCard } from "@/components/shared";

import content from "@/content/data.json";

const backgroundColor: BackgroundProps["backgroundColor"] = "NEUTRAL_FADE";

interface InsuranceProps {
  id?: string;
}
export function InsuranceSection({ id }: InsuranceProps) {
  return (
    <SectionContainer
      id={id}
      backgroundColor={backgroundColor}
      className="desktop-only"
    >
      <Columns multiline align="ALIGNED_CENTER" gap={GapSize.TEN}>
        <Column size={12}>
          <Title level={2} className="has-text-centered">
            {content.sections.insurance.title}
          </Title>
        </Column>
        <Column>
          <Columns gap={GapSize.FIVE}>
            <Column size={8}>
              <Image
                src={content.sections.insurance.image.src}
                alt={content.sections.insurance.image.alt}
                width="100%"
                align="ALIGNED_END"
              />
            </Column>
            <Column size={4}>
              <Rows gap={GapSize.FIVE}>
                {content.sections.insurance.items.map((item, index) => (
                  <Row key={`insurance-item-${index}`} className="is-gapless">
                    <CustomCard
                      iconName={item.iconName as IconName}
                      title={item.title}
                      description={item.description}
                      gap={GapSize.ONE}
                    />
                  </Row>
                ))}
              </Rows>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
