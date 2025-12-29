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

const backgroundColor: BackgroundProps["backgroundColor"] = "NEUTRAL_FADE";

interface TogetherProps {
  id?: string;
}
export function TogetherSection({ id }: TogetherProps) {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <Columns multiline align="ALIGNED_CENTER" gap={GapSize.NINE}>
        <Column size={12}>
          <Title level={2} className="has-text-centered">
            Ensemble, faisons durer nos smartphones plus longtemps
          </Title>
        </Column>
        <Column size={12}>
          <CustomCard hasTextCentered={false}>
            <Columns verticalAlign="ALIGNED_CENTER">
              <Column size={5}>
                <Image
                  src="/svg/solutions-smart-durable.svg"
                  alt="Solution Smart Durable"
                  align="ALIGNED_CENTER"
                  width="263px"
                />
              </Column>
              <Column size={6}>
                <Title level={4}>
                  {
                    "Nos téléphones ont une place particulière dans notre quotidien, en nous accompagnant partout et tout le temps"
                  }
                </Title>
                <RichText
                  level={1}
                  text="Alors pour s'en séparer le plus tard possible, on lance les <b>Solutions Smartphone Durable</b> : 4 façons de prolonger la vie de nos mobiles tout en faisant un geste pour la planète."
                />

                <Link className="has-text-info" href="#">
                  <Text level={2} markup="span">
                    Découvrir nos solutions
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
