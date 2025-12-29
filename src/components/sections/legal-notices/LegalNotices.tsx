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

const backgroundColor: BackgroundProps["backgroundColor"] = "WHITE";

const LEGAL_NOTICES =
  "Pass donnant accès à une recharge internet valable dans le pays sélectionné et dans les zones couvertes par les réseaux où Bouygues Telecom a signé un accord d'itinérance avec un opérateur étranger.\n\nL'activation de la recharge a lieu automatiquement dès le 1er Mo consommé dans le pays d'utilisation.\n\nLa recharge est à activer dans les 2 mois après achat et est valable 30 jours consécutifs après activation.\n\nUne fois le Pass expiré, les données consommées sont facturées en hors forfait au tarif en vigueur.";

const legalNotices = {
  breadcrumb: {
    items: [
      {
        id: "breadcrumbItem1",
        href: "https://www.bouyguestelecom.fr",
        label: "Acceuil",
        className: "no-underline has-text-info",
      },
      {
        id: "breadcrumbItem2",
        href: "#",
        label: "Choisir Bouygues Telecom",
        className: "no-underline has-text-info",
      },
      {
        id: "breadcrumbItem3",
        active: true,
        label: "Recyclage",
        className: "no-underline ",
      },
    ],
  },
  accordion: {
    id: "legalNotices",
    title: "Mentions légales",
    isJustifiedEnd: true,
    text: LEGAL_NOTICES,
  },
};

export function LegalNoticesSection() {
  const breadcrumbItems = legalNotices.breadcrumb.items;
  const accordionData = legalNotices.accordion;

  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <Rows>
        <Row>
          <Breadcrumb>
            {breadcrumbItems.map((breadcrumbItem) => (
              <BreadcrumbItem
                key={breadcrumbItem.id}
                href={breadcrumbItem.href}
                className={breadcrumbItem.className}
                active={breadcrumbItem.active}
              >
                {breadcrumbItem.label}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </Row>
        <Row>
          <CustomAccordion
            id={accordionData.id}
            title={accordionData.title}
            isJustifiedEnd={accordionData.isJustifiedEnd}
          >
            <RichText level={4} text={accordionData.text} />
          </CustomAccordion>
        </Row>
      </Rows>
    </SectionContainer>
  );
}
