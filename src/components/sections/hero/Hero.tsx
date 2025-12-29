import {
  Columns,
  Column,
  Text,
  Title,
  Image,
  BackgroundProps,
  Hero,
} from "@trilogy-ds/react";
import { RichText, SectionContainer } from "@/components/shared";
import content from "@/content/data.json";

const backgroundColor: BackgroundProps["backgroundColor"] = "MAIN";

export function HeroSection() {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <Hero backgroundColor={backgroundColor}>
        <Columns verticalAlign="ALIGNED_CENTER">
          <Column size={5} className="has-text-centered-mobile">
            <Title level={1} inverted>
              {content.sections.hero.title}
            </Title>
            <Text inverted>{content.sections.hero.subtitle}</Text>
            <RichText inverted text={content.sections.hero.description} />
          </Column>
          <Column size={1} />
          <Column size={6}>
            <Image
              src={content.sections.hero.image.src}
              alt={content.sections.hero.image.alt}
              align="ALIGNED_END"
              width="100%"
            />
          </Column>
        </Columns>
      </Hero>
    </SectionContainer>
  );
}
