import type { Metadata } from "next";
import localFont from "next/font/local";
import "./css/globals.css";
import "./css/styles.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Bouygues Telecom | téléphone, forfait mobile, offre internet | Bouygues Telecom",
  description:
    "Intéressé par un nouveau smartphone ou abonnement internet ? Découvrez dès maintenant tous nos forfaits, téléphones, offres Internet Fibre et ADSL",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-styles@4.9.2/default/trilogy.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
