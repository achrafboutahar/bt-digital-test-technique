import {
  BackgroundProps,
  Column,
  Columns,
  Row,
  Rows,
  Title,
} from "@trilogy-ds/react";

import {
  SectionContainer,
  CustomAccordion,
  RichText,
} from "@/components/shared";

import content from "@/content/data.json";

const backgroundColor: BackgroundProps["backgroundColor"] = "WHITE";

interface QuestionsProps {
  id: string;
}

export function QuestionsSection({ id }: QuestionsProps) {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <Columns gap={2}>
        <Column size={6}>
          <Title level={2} className="has-text-centered-mobile">
            {content.sections.questions.title}
          </Title>
        </Column>
        <Column>
          <Rows gap={3}>
            {content.sections.questions.items.map((item) => (
              <Row key={`question-${item.id}`}>
                <CustomAccordion id={item.id} title={item.title}>
                  <RichText level={2} text={item.content} />
                </CustomAccordion>
              </Row>
            ))}
          </Rows>
        </Column>
      </Columns>
    </SectionContainer>
  );
}
