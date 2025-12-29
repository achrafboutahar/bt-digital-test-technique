import { IconName } from "@trilogy-ds/react";
import {
  RepairContainer,
  RepairContainerProps,
} from "./components/RepairContainer";

import content from "@/content/data.json";

interface RepairExpressProps {
  id: string;
}

const repairContainer: RepairContainerProps = {
  sectionLogo: {
    src: content.sections.repairExpress.logo.src,
    alt: content.sections.repairExpress.logo.alt,
  },
  title: content.sections.repairExpress.title,
  buttonLabel: content.sections.repairExpress.buttonLabel,
  question: content.sections.repairExpress.question,
  smallText: content.sections.repairExpress.smallText,
  items: content.sections.repairExpress.items.map((item) => ({
    iconName: item.iconName as IconName,
    title: item.title,
    text: item.text,
  })),
};

export function RepairExpressSection({ id }: RepairExpressProps) {
  return <RepairContainer id={id} {...repairContainer} />;
}
