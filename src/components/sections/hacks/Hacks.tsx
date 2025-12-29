import {
  BackgroundProps,
  Column,
  Columns,
  GapSize,
  Link,
  Text,
  Title,
} from "@trilogy-ds/react";
import { CustomCard, SectionContainer } from "@/components/shared";

const backgroundColor: BackgroundProps["backgroundColor"] = "NEUTRAL_FADE";

interface HacksProps {
  id?: string;
}

interface HackCardProps {
  imgSrc: string;
  title: string;
}

function HackCard({ imgSrc, title }: HackCardProps) {
  return (
    <CustomCard imgSrc={imgSrc} imgAlt={title}>
      <Title level={6}>{title}</Title>
      <Link className="has-text-info" href="#">
        <Text level={2} markup="span">
          {"Lire l'article"}
        </Text>
      </Link>
    </CustomCard>
  );
}

const cardsConfig: HackCardProps[] = [
  {
    imgSrc: "/assets/1.jpg",
    title: "Comment prolonger la vie de son smartphone ?",
  },
  {
    imgSrc: "/assets/2.jpg",
    title: "Comment protéger son smartphone de l'oxydation ?",
  },
  {
    imgSrc: "/assets/3.jpg",
    title:
      "Les conseils à suivre avant d'envoyer votre téléphone en réparation",
  },
];

export function HacksSection({ id }: HacksProps) {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <Columns multiline align="ALIGNED_CENTER" gap={GapSize.NINE}>
        <Column size={12}>
          <Title level={2} className="has-text-centered">
            Nos astuces pour prendre soin de votre mobile
          </Title>
        </Column>
        <Column size={12}>
          <Columns verticalAlign="ALIGNED_CENTER">
            {cardsConfig.map((cardItem) => (
              <Column key={cardItem.imgSrc} desktopSize={4}>
                <HackCard imgSrc={cardItem.imgSrc} title={cardItem.title} />
              </Column>
            ))}
          </Columns>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
