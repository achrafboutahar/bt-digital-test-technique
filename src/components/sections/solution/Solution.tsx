import {
  BackgroundProps,
  Column,
  Columns,
  GapSize,
  IconName,
  Link,
  Text,
  Title,
} from "@trilogy-ds/react";

import { SectionContainer, CustomCard } from "@/components/shared";

const backgroundColor: BackgroundProps["backgroundColor"] = "INFO";

export function SolutionSection() {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <Columns multiline align="ALIGNED_CENTER" gap={GapSize.TEN}>
        <Column size={12}>
          <Title inverted level={2} className="has-text-centered">
            Quel que soit le problème, nous avons la solution
          </Title>
        </Column>
        <Column size={12}>
          <Columns gap={GapSize.FIVE} align="ALIGNED_CENTER">
            <Column size={6}>
              <CustomCard
                iconName={"tri-mobile-broken" as IconName}
                title="Mon téléphone n'est plus sous garantie"
                gap={GapSize.FOUR}
              >
                <Text level={1}>
                  Si le téléphone que nous vous avons vendu n&apos;est plus
                  garanti et n&apos;est pas assuré ou si vous n&apos;avez pas
                  acheté votre téléphone chez nous, vous pouvez bénéficier
                  d&apos;une <b>réparation en boutique</b>, et{" "}
                  <b>à prix réduit</b> si vous détenez un forfait Bouygues
                  Telecom.
                </Text>
                <Link className="has-text-info" href="#">
                  <Text level={2} markup="span">
                    Trouver ma boutique
                  </Text>
                </Link>
              </CustomCard>
            </Column>
            <Column size={6}>
              <CustomCard
                iconName={"tri-hand-mobile" as IconName}
                title="Mon téléphone est sous garantie"
                gap={GapSize.FOUR}
              >
                <Text level={1}>
                  <Link className="has-text-info" href="#">
                    <Text markup="span">Tous nos téléphones </Text>
                  </Link>
                  sont <b>garantis 2 ans</b>. Si vos téléphone tombe en panne
                  pendant ce délais et qu&apos;il s&apos;agit d&apos;un défaut
                  couvert par les garanties légales (par exemple, un défaut de
                  fabrication),{" "}
                  <b>sa réparation est prise en charge gratuitement</b> par
                  Bouygues Telecom.
                </Text>
              </CustomCard>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
