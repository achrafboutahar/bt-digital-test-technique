import {
  BackgroundProps,
  Column,
  Columns,
  Row,
  Rows,
  Title,
} from "@trilogy-ds/react";
import {
  SectionContainer,
  CustomAccordion,
  RichText,
} from "@/components/shared";

const backgroundColor: BackgroundProps["backgroundColor"] = "WHITE";

interface QuestionsProps {
  id?: string;
}

const LOREM_TEXT =
  "Sollicitudin massa maecenas tellus orci sodales. Ac diam aliquam at vitae accumsan, vestibulum. Risus purus sit commodo, vel in non sed est felis. Sed amet, integer sodales et pulvinar massa. Sagittis posuere sit ultrices ac, viverra.";

export function QuestionsSection({ id }: QuestionsProps) {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <Columns gap={2}>
        <Column size={6}>
          <Title level={2} className="has-text-centered-mobile">
            Toutes vos questions sur la réparation de téléphone
          </Title>
        </Column>
        <Column>
          <Rows gap={3}>
            <Row>
              <CustomAccordion
                id="ZERO"
                title="Comment faire réparer son téléphone chez Bouygues Telecom ?"
              >
                <RichText level={2} text={LOREM_TEXT} />
              </CustomAccordion>
            </Row>
            <Row>
              <CustomAccordion
                id="ONE"
                title="Quels types de réparations propose le service ?"
              >
                <RichText level={2} text={LOREM_TEXT} />
              </CustomAccordion>
            </Row>
            <Row>
              <CustomAccordion
                id="TWO"
                title="Combien de temps prendra la réparation de mon téléphone ?"
              >
                <RichText level={2} text={LOREM_TEXT} />
              </CustomAccordion>
            </Row>
            <Row>
              <CustomAccordion
                id="THREE"
                title="La réparation est-elle garantie ?"
              >
                <RichText level={2} text={LOREM_TEXT} />
              </CustomAccordion>
            </Row>
            <Row>
              <CustomAccordion
                id="FOUR"
                title="Quels sont mes avantages si je fais réparer mon téléphone chez Bouygues Telecom ?"
              >
                <RichText level={2} text={LOREM_TEXT} />
              </CustomAccordion>
            </Row>
            <Row>
              <CustomAccordion
                id="FIVE"
                title="Quelles marques de téléphones sont réparables ?"
              >
                <RichText level={2} text={LOREM_TEXT} />
              </CustomAccordion>
            </Row>
            <Row>
              <CustomAccordion
                id="SIX"
                title="Comment faire réparer mon téléphone tout en préservant la garantie ?"
              >
                <RichText level={2} text={LOREM_TEXT} />
              </CustomAccordion>
            </Row>
          </Rows>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
