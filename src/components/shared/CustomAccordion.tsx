import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Text,
} from "@trilogy-ds/react";

interface CustomAccordionProps {
  id?: string;
  title?: string;
  isJustifiedEnd?: boolean;
  children?: React.ReactNode;
}

export function CustomAccordion({
  id,
  title,
  isJustifiedEnd,
  children,
}: CustomAccordionProps) {
  return (
    <Accordion>
      <AccordionItem
        id={id}
        className="has-background-gray-light has-border-gray"
      >
        <AccordionHeader
          className={isJustifiedEnd ? "is-justify-content-end" : ""}
        >
          {title && (
            <Text className="has-text-weight-light" level={1}>
              {title}
            </Text>
          )}
        </AccordionHeader>

        {children && <AccordionBody>{children}</AccordionBody>}
      </AccordionItem>
    </Accordion>
  );
}
