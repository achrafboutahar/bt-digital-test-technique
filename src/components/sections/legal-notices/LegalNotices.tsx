import {
  BackgroundProps,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Rows,
} from "@trilogy-ds/react";
import {
  SectionContainer,
  CustomAccordion,
  RichText,
} from "@/components/shared";

import content from "@/content/data.json";

const backgroundColor: BackgroundProps["backgroundColor"] = "WHITE";

export function LegalNoticesSection() {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <Rows>
        <Row>
          <Breadcrumb>
            {content.sections.legalNotices.breadcrumb.items.map(
              (breadcrumbItem) => (
                <BreadcrumbItem
                  key={breadcrumbItem.id}
                  href={breadcrumbItem.href}
                  className={breadcrumbItem.className}
                  active={breadcrumbItem.active}
                >
                  {breadcrumbItem.label}
                </BreadcrumbItem>
              )
            )}
          </Breadcrumb>
        </Row>
        <Row>
          <CustomAccordion
            id={content.sections.legalNotices.accordion.id}
            title={content.sections.legalNotices.accordion.title}
            isJustifiedEnd={
              content.sections.legalNotices.accordion.isJustifiedEnd
            }
          >
            <RichText
              level={4}
              text={content.sections.legalNotices.accordion.text}
            />
          </CustomAccordion>
        </Row>
      </Rows>
    </SectionContainer>
  );
}
