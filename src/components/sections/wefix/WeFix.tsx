import {
  BackgroundProps,
  Column,
  Columns,
  GapSize,
  Image,
  Link,
  Row,
  Rows,
  Text,
  Title,
} from "@trilogy-ds/react";
import { SectionContainer } from "@/components/shared";

interface WeFixSectionProps {
  id: string;
}

const backgroundColor: BackgroundProps["backgroundColor"] = "NEUTRAL_FADE";

export function WeFixSection({ id }: WeFixSectionProps) {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <Columns multiline align="ALIGNED_CENTER" gap={GapSize.TEN}>
        <Column size={12}>
          <Title level={2} className="has-text-centered">
            Le choix d&apos;un partenaire expert pour votre téléphone
          </Title>
        </Column>
        <Column size={12}>
          <Columns verticalAlign="ALIGNED_CENTER" gap={GapSize.TEN}>
            <Column size={6}>
              <Image src="/assets/wefix.webp" alt="Hero image" width="100%" />
            </Column>

            <Column size={5}>
              <Rows>
                <Row>
                  <Title level={5}>
                    WeFix, filiale de Fnac Darty, est le leader français de la
                    réparation de smartphones
                  </Title>
                </Row>
                <Row>
                  <Text>
                    Quelle que soit la réparation, WeFix a la solution : écran,
                    batterie, WiFi, haut-parleur, écouteurs, appareil photo,
                    connecteur de charge, avec des pièces compatibles.
                  </Text>
                </Row>
                <Row>
                  <Link className="has-text-info" href="#">
                    Visiter WeFix
                  </Link>
                </Row>
              </Rows>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
