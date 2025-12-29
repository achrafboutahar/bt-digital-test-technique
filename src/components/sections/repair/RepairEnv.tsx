import { IconName } from "@trilogy-ds/react";
import {
  RepairContainer,
  RepairContainerProps,
} from "./components/RepairContainer";

const repairContainer: RepairContainerProps = {
  sectionLogo: {
    src: "/assets/repair-env.svg",
    alt: "Réparer son téléphone, c'est aussi un geste pour l'environnement",
  },
  title: "Réparer son téléphone, c'est aussi un geste pour l'environnement",
  subTitle:
    "Prolonger la durée de vie d'un an d'un téléphone permettrait de réduire son empreinte carbone de 30% environ*",
  question: "Comment ?",
  smallText: "*Source : Green Alliance",
  columnSize: 5,
  items: [
    {
      iconName: "tri-mobile-up-down" as IconName,
      title: "Environnement",
      text: "En évitant la production d'un nouveau mobile et ses conséquences sur l'environnement.",
    },
    {
      iconName: "tri-recycle" as IconName,
      title: "Recyclage",
      text: "En permettant le <u>recyclage</u> des pièces changées suite à la réparation de votre téléphone.",
    },
  ],
};

export function RepairEnvSection() {
  return <RepairContainer {...repairContainer} />;
}
