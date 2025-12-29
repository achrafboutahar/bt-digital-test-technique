import { Link, Text, Title } from "@trilogy-ds/react";
import { CustomCard } from "@/components/shared";

export interface HackCardProps {
  imgSrc: string;
  title: string;
  link: { href: string; label: string };
}

export function HackCard({ imgSrc, title, link }: HackCardProps) {
  return (
    <CustomCard imgSrc={imgSrc} imgAlt={title}>
      <Title level={6}>{title}</Title>
      <Link className="has-text-info" href={link.href}>
        <Text level={2} markup="span">
          {link.label}
        </Text>
      </Link>
    </CustomCard>
  );
}
