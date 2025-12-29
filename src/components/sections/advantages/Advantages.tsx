import {
  BackgroundProps,
  Column,
  Columns,
  GapSize,
  IconName,
  Title,
} from "@trilogy-ds/react";
import { SectionContainer, CustomCard } from "@/components/shared";

const backgroundColor: BackgroundProps["backgroundColor"] = "NEUTRAL_FADE";

interface AdvantagesProps {
  id: string;
}

export function AdvantagesSection({ id }: AdvantagesProps) {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <Columns multiline mobile align="ALIGNED_CENTER" gap={GapSize.NINE}>
        <Column size={8}>
          <Title level={2} className="has-text-centered">
            Et encore plus d&apos;avantages si vous êtes client Bouygues Telecom
            !
          </Title>
        </Column>
        <Column size={12}>
          <Columns gap={GapSize.FIVE} align="ALIGNED_CENTER">
            <Column size={4}>
              <CustomCard
                iconName={"tri-sun-euro" as IconName}
                title="-30% de remise* valables sur toutes les réparations"
                description="et -20% de remise sur les autres réparations effectuées lors de la même prise en charge"
                info="*2 fois par an !"
                hasTextCentered
                gap={GapSize.THREE}
              />
            </Column>
            <Column size={4}>
              <CustomCard
                iconName={"tri-mobile" as IconName}
                title="On vous prête un smartphone"
                description="le temps de la réparation (i)"
                hasTextCentered
              />
            </Column>
            <Column size={4}>
              <CustomCard
                iconName={"tri-users" as IconName}
                title="Faites profiter de la remise de 30% à un proche,"
                description="que le téléphone ait été acheté chez Bouygues Telecom ou ailleurs !"
                hasTextCentered
              />
            </Column>
          </Columns>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
