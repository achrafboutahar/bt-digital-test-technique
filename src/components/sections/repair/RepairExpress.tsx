import { IconName } from "@trilogy-ds/react";
import {
  RepairContainer,
  RepairContainerProps,
} from "./components/RepairContainer";

interface RepairExpressProps {
  id: string;
}

const repairContainer: RepairContainerProps = {
  sectionLogo: {
    src: "/assets/repair-express.svg",
    alt: "Bénéficiez du service de réparation express en boutique*",
  },
  title: "Bénéficiez du service de réparation express en boutique*",
  buttonLabel: "Trouver ma boutique",
  question: "Avec Bouygues Telecom, la réparation c'est...",
  smallText:
    "* Retrouvez les conditions et informations détaillées du service de réparation dans la FAQ accessible en bas de page. Kit-mains libre recommandé.",
  items: [
    {
      iconName: "tri-users" as IconName,
      title: "Ouvert à tous",
      text: "Que vous soyez client Bouygues Telecom ou non !",
    },
    {
      iconName: "tri-france" as IconName,
      title: "Partout en France",
      text: "Le service est accessible dans toutes nos boutiques",
    },
    {
      iconName: "tri-calendar" as IconName,
      title: "Express",
      text: "Entre 1 et 5 jours, et pour près d’un client sur 2, la réparation est réalisée en 24h !",
    },
    {
      iconName: "tri-mobile-tools" as IconName,
      title: "Garantie de qualité",
      text: "Réparation réalisée par notre partenaire WiFix et garantie 1 an (i)",
    },
  ],
};

export function RepairExpressSection({ id }: RepairExpressProps) {
  return <RepairContainer id={id} {...repairContainer} />;
}
