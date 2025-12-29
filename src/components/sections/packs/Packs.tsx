import {
  BackgroundProps,
  Column,
  Columns,
  GapSize,
  IconName,
  Title,
} from "@trilogy-ds/react";
import { SectionContainer, CustomCard } from "@/components/shared";

const backgroundColor: BackgroundProps["backgroundColor"] = "MAIN_FADE";

interface PacksProps {
  id?: string;
}

export function PacksSection({ id }: PacksProps) {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <Columns multiline align="ALIGNED_CENTER" gap={GapSize.TEN}>
        <Column size={8}>
          <Title level={2} className="has-text-centered">
            Nos forfaits, pour vous
          </Title>
        </Column>
        <Column size={12}>
          <Columns align="ALIGNED_CENTER">
            <Column size={5}>
              <CustomCard
                iconName={"tri-phone-plus-sim-card" as IconName}
                title="Découvrir nos forfaits Bouygues Telecom"
                description="Bénéficiez d'un réseau mobile de qualité, d'avantages et de services exclusifs et d'un nouveau smartphone."
                gap={GapSize.FIVE}
                hasTextCentered
                hasButton
              />
            </Column>
            <Column size={5}>
              <CustomCard
                iconName={"tri-sim-card" as IconName}
                title="Découvrir nos forfaits B&YOU sans engagement"
                description="Profitez de la qualité de notre réseau avec nos forfaits B&YOU sans engagement."
                gap={GapSize.FIVE}
                hasTextCentered
                hasButton
              />
            </Column>
          </Columns>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
