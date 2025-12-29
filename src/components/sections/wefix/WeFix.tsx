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
import content from "@/content/data.json";

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
            {content.sections.wefix.title}
          </Title>
        </Column>
        <Column size={12}>
          <Columns verticalAlign="ALIGNED_CENTER" gap={GapSize.TEN}>
            <Column size={6}>
              <Image
                src={content.sections.wefix.image.src}
                alt={content.sections.wefix.image.alt}
                width="100%"
              />
            </Column>

            <Column size={5}>
              <Rows>
                <Row>
                  <Title level={5}>{content.sections.wefix.subtitle}</Title>
                </Row>
                <Row>
                  <Text>{content.sections.wefix.description}</Text>
                </Row>
                <Row>
                  <Link
                    className="has-text-info"
                    href={content.sections.wefix.link.href}
                  >
                    {content.sections.wefix.link.label}
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
