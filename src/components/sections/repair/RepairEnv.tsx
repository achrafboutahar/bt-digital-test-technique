import { IconName } from "@trilogy-ds/react";
import {
  RepairContainer,
  RepairContainerProps,
} from "./components/RepairContainer";

import content from "@/content/data.json";

const repairContainer: RepairContainerProps = {
  sectionLogo: {
    src: content.sections.repairEnv.logo.src,
    alt: content.sections.repairEnv.logo.alt,
  },
  title: content.sections.repairEnv.title,
  subTitle: content.sections.repairEnv.subtitle,
  question: content.sections.repairEnv.question,
  smallText: content.sections.repairEnv.smallText,
  items: content.sections.repairEnv.items.map((item) => ({
    iconName: item.iconName as IconName,
    title: item.title,
    text: item.text,
  })),
};

export function RepairEnvSection() {
  return <RepairContainer columnSize={5} {...repairContainer} />;
}
