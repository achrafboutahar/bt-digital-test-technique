import {
  BackgroundProps,
  Box,
  BoxContent,
  Button,
  Column,
  Columns,
  ColumnsSize,
  GapSize,
  IconName,
  Image,
  Text,
  Title,
} from "@trilogy-ds/react";

import styles from "./RepairService.module.css";
import { GenericSwiper, SectionContainer } from "@/components/shared";
import { RepairCard } from "./RepairCard";

export interface SectionLogo {
  src: string;
  alt: string;
}

export interface RepairItem {
  iconName: IconName;
  title: string;
  text: string;
}

export interface RepairContainerProps {
  id?: string;
  sectionLogo?: SectionLogo;
  title?: string;
  subTitle?: string;
  buttonLabel?: string;
  question?: string;
  smallText?: string;
  columnSize?: number;
  items?: RepairItem[];
}

const backgroundColor: BackgroundProps["backgroundColor"] = "MAIN";

export function RepairContainer({
  id,
  sectionLogo,
  title,
  subTitle,
  buttonLabel,
  question,
  smallText,
  columnSize,
  items,
}: RepairContainerProps) {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <Columns multiline mobile gap={GapSize.TEN} align="ALIGNED_CENTER">
        <Column size={12}>
          {sectionLogo && (
            <Image
              src={sectionLogo.src}
              alt={sectionLogo.alt}
              align="ALIGNED_CENTER"
            />
          )}
        </Column>
        {title && (
          <Column desktopSize={8} mobileSize={12}>
            <Title inverted level={2} className="has-text-centered">
              {title}
            </Title>
          </Column>
        )}
        {subTitle && (
          <Column desktopSize={8} mobileSize={12}>
            <Title inverted level={4} className="has-text-centered">
              {subTitle}
            </Title>
          </Column>
        )}
        {buttonLabel && (
          <Column size={12} className="has-text-centered">
            <Button className="has-bg-button-info">{buttonLabel}</Button>
          </Column>
        )}
        <Column size={12}>
          <Box className={`${styles.isFlatBox}`}>
            <BoxContent backgroundColor="MAIN">
              {question && (
                <Title
                  level={4}
                  typo="has-text-white has-text-centered"
                  className={styles.boxTitle}
                >
                  {question}
                </Title>
              )}
              <Columns
                align="ALIGNED_CENTER"
                className={`has-text-centered ${styles.hasMobileTopPadding}`}
              >
                {items && (
                  <GenericSwiper
                    items={items}
                    renderItem={(item) => (
                      <Column size={(columnSize as ColumnsSize) || 3}>
                        <RepairCard
                          iconName={item.iconName}
                          title={item.title}
                          text={item.text}
                        />
                      </Column>
                    )}
                    className="mobile-only"
                    transitionDuration={300}
                    swipeThreshold={50}
                    showDots={true}
                    slidePadding="0 16px"
                  />
                )}
                {items?.map((item, i) => (
                  <Column
                    className="desktop-only"
                    size={(columnSize as ColumnsSize) || 3}
                    key={`${item.title}-${i}`}
                  >
                    <RepairCard
                      iconName={item.iconName}
                      title={item.title}
                      text={item.text}
                    />
                  </Column>
                ))}
              </Columns>
            </BoxContent>
          </Box>
        </Column>
        {smallText && (
          <Column size={12} className="has-text-centered">
            <Text level={3} inverted>
              {smallText}
            </Text>
          </Column>
        )}
      </Columns>
    </SectionContainer>
  );
}
