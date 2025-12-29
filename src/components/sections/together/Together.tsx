import {
  BackgroundProps,
  Column,
  Columns,
  GapSize,
  Image,
  Link,
  Text,
  Title,
} from "@trilogy-ds/react";
import { CustomCard, RichText, SectionContainer } from "@/components/shared";
import content from "@/content/data.json";

const backgroundColor: BackgroundProps["backgroundColor"] = "NEUTRAL_FADE";

export function TogetherSection() {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <Columns multiline align="ALIGNED_CENTER" gap={GapSize.NINE}>
        <Column size={12}>
          <Title level={2} className="has-text-centered">
            {content.sections.together.title}
          </Title>
        </Column>
        <Column size={12}>
          <CustomCard hasTextCentered={false}>
            <Columns verticalAlign="ALIGNED_CENTER">
              <Column size={5}>
                <Image
                  src={content.sections.together.card.image.src}
                  alt={content.sections.together.card.image.alt}
                  align="ALIGNED_CENTER"
                  width="263px"
                />
              </Column>
              <Column size={6}>
                <Title level={4}>{content.sections.together.card.title}</Title>
                <RichText
                  level={1}
                  text={content.sections.together.card.description}
                />

                <Link
                  className="has-text-info"
                  href={content.sections.together.card.link.href}
                >
                  <Text level={2} markup="span">
                    {content.sections.together.card.link.label}
                  </Text>
                </Link>
              </Column>
            </Columns>
          </CustomCard>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
