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
            L&apos;assurance, la formule tout confort pour votre mobile
          </Title>
        </Column>
        <Column>
          <Columns gap={GapSize.FIVE}>
            <Column size={8}>
              <Image
                src="/assets/insurance.webp"
                alt="Insurance image"
                width="100%"
                align="ALIGNED_END"
              />
            </Column>
            <Column size={4}>
              <Rows gap={GapSize.FIVE}>
                <Row className="is-gapless">
                  <CustomCard
                    iconName={"tri-sun-euro" as IconName}
                    title="Aucune dépense"
                    description="à débourser en cas d'incident"
                    gap={GapSize.ONE}
                  />
                </Row>
                <Row className="is-gapless">
                  <CustomCard
                    iconName={"tri-hand-mobile" as IconName}
                    title="Téléphone assuré"
                    description="en cas de vol, dommages ou oxydation"
                    gap={GapSize.ONE}
                  />
                </Row>
              </Rows>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
