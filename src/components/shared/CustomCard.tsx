import {
  Button,
  Card,
  CardContent,
  CardImage,
  Column,
  Columns,
  GapSize,
  Icon,
  IconName,
  Text,
  Title,
} from "@trilogy-ds/react";

interface CustomCardProps {
  imgSrc?: string;
  imgAlt?: string;
  iconName?: IconName;
  title?: string;
  description?: string;
  info?: string;
  hasButton?: boolean;
  gap?: GapSize;
  hasTextCentered?: boolean;
  children?: React.ReactNode;
}

export function CustomCard({
  imgSrc,
  imgAlt,
  iconName,
  title,
  description,
  info,
  hasButton,
  gap,
  hasTextCentered,
  children,
}: CustomCardProps) {
  return (
    <Card fullheight className="bg-custom-card-gray">
      {imgSrc && <CardImage src={imgSrc} alt={imgAlt} />}
      <CardContent
        className={`has-text-centered-mobile ${
          hasTextCentered ? "has-text-centered" : ""
        }`}
      >
        <Columns multiline align="ALIGNED_CENTER" gap={gap ?? GapSize.FOUR}>
          <Column>
            <Columns
              multiline
              mobile
              align="ALIGNED_CENTER"
              gap={gap ?? GapSize.FOUR}
            >
              {iconName && (
                <Column size={12}>
                  <Icon name={iconName} size="large" />
                </Column>
              )}
              {title && (
                <Column size={12}>
                  <Title level={4}>{title}</Title>
                </Column>
              )}
              {description && (
                <Column size={12}>
                  <Text level={1}>{description}</Text>
                </Column>
              )}
              {info && (
                <Column size={12}>
                  <Text level={3}>{info}</Text>
                </Column>
              )}
              {children && <Column size={12}>{children}</Column>}
            </Columns>
          </Column>

          {hasButton && (
            <Column size={12} verticalAlign="ALIGNED_END">
              <Button variant="CONVERSION">En profiter</Button>
            </Column>
          )}
        </Columns>
      </CardContent>
    </Card>
  );
}
