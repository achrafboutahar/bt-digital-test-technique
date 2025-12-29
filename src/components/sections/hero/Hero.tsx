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

const backgroundColor: BackgroundProps["backgroundColor"] = "MAIN";

export function HeroSection() {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <Hero backgroundColor={backgroundColor}>
        <Columns verticalAlign="ALIGNED_CENTER">
          <Column size={5} className="has-text-centered-mobile">
            <Title level={1} inverted>
              Réparation de votre téléphone
            </Title>
            <Text inverted>
              Un smartphone cassé ou en panne, ça arrive à tout le monde.
            </Text>
            <RichText
              inverted
              text="Heureusement, que vous soyez sous garantie ou non, on a des
                <b>solutions de réparation</b> pour vous !"
            />
          </Column>
          <Column size={1} />
          <Column size={6}>
            <Image
              src="/assets/broken-phone.webp"
              alt="Hero image"
              align="ALIGNED_END"
              width="100%"
            />
          </Column>
        </Columns>
      </Hero>
    </SectionContainer>
  );
}
