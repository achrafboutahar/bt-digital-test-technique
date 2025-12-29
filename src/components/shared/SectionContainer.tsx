import { BackgroundProps, Column, Columns, Section } from "@trilogy-ds/react";

interface SectionContainerProps {
  id?: string;
  backgroundColor?: BackgroundProps["backgroundColor"];
  className?: string;
  children?: React.ReactNode;
}

export function SectionContainer({
  id,
  backgroundColor,
  className,
  children,
}: SectionContainerProps) {
  return (
    <Section id={id} backgroundColor={backgroundColor} className={className}>
      <Columns align="ALIGNED_CENTER">
        <Column desktopSize={10} mobileSize={12}>
          {children}
        </Column>
      </Columns>
    </Section>
  );
}
