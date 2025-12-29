import { Icon, IconName, Title } from "@trilogy-ds/react";

import { RichText } from "@/components/shared";
import styles from "./RepairService.module.css";

interface RepairCardProps {
  iconName: IconName;
  title: string;
  text: string;
}

export function RepairCard({ iconName, title, text }: RepairCardProps) {
  return (
    <>
      <Icon name={iconName} size="large" className={styles.hasTextSuccess} />
      <Title inverted level={4}>
        {title}
      </Title>
      <RichText inverted text={text} />
    </>
  );
}
