import { Box, BoxContent, Title } from "@trilogy-ds/react";
import { SectionContainer } from "@/components/shared";
import styles from "./Reminder.module.css";

const text = "À retenir";

export function ReminderSection() {
  return (
    <SectionContainer className={`mobile-only ${styles.reminderSectionBg}`}>
      <Box className="has-text-centered">
        <BoxContent>
          <Title level={2}>{text}</Title>
        </BoxContent>
      </Box>
    </SectionContainer>
  );
}
