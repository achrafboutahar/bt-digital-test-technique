import { Box, BoxContent, Title } from "@trilogy-ds/react";
import { SectionContainer } from "@/components/shared";
import styles from "./Reminder.module.css";
import content from "@/content/data.json";

export function ReminderSection() {
  return (
    <SectionContainer className={`mobile-only ${styles.reminderSectionBg}`}>
      <Box className="has-text-centered">
        <BoxContent>
          <Title level={2}>{content.sections.reminder.text}</Title>
        </BoxContent>
      </Box>
    </SectionContainer>
  );
}
