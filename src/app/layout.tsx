import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "PDFCraft EditAitor - Herramientas PDF Profesionales",
  description:
    "Herramientas PDF gratuitas, privadas y profesionales: combinar, dividir, comprimir, convertir y editar PDF directamente en tu navegador. 100% privado: los archivos nunca salen de tu dispositivo.",
  keywords: [
    "PDF", "editar PDF", "combinar PDF", "dividir PDF", "comprimir PDF",
    "convertir PDF", "herramientas PDF", "procesar PDF", "gratis", "privado"
  ],

  authors: [
    {
      name: "Aitor Sánchez Gutiérrez",
      url: "https://pdfeditaitor.netlify.app",
    },
  ],

  creator: "Aitor Sánchez Gutiérrez",
  publisher: "PDFCraft EditAitor",

  metadataBase: new URL("https://pdfeditaitor.netlify.app"),

  alternates: {
    canonical: "https://pdfeditaitor.netlify.app",
  },

  // ✅ COPYRIGHT Y LICENCIA
  other: {
    copyright: "© 2026 Aitor Sánchez Gutiérrez",
    license: "2026 PDFCraft. Versión modificada bajo licencia AGPLv3.",
  },

  openGraph: {
    title: "PDFCraft EditAitor - Herramientas PDF Profesionales",
    description:
      "Más de 60 herramientas PDF gratuitas, privadas y potentes. Todo el procesamiento ocurre directamente en tu dispositivo.",
    url: "https://pdfeditaitor.netlify.app",
    siteName: "PDFCraft EditAitor",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "PDFCraft - Herramientas PDF Profesionales",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PDFCraft EditAitor",
    description: "Herramientas PDF profesionales, gratuitas y 100% privadas.",
    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}

        {/* ✅ JSON-LD ESTRUCTURADO GLOBAL */}
        <Script
          id="global-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PDFCraft EditAitor",
              url: "https://pdfeditaitor.netlify.app",
              author: {
                "@type": "Person",
                name: "Aitor Sánchez Gutiérrez",
              },
              license: "AGPLv3",
              description:
                "Herramientas PDF gratuitas y 100% privadas procesadas en tu navegador.",
            }),
          }}
        />
      </body>
    </html>
  );
}
``