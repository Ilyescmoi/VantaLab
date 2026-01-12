import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Vanta Lab | Agence d'Automatisation IA & Workflows pour Entreprises",
    description: "Vanta Lab conçoit des architectures d'automatisation sur-mesure (n8n, Make, AI) pour aider les agences à scaler sans recruter. Audit gratuit.",
    keywords: ["Automatisation", "Agence IA", "n8n expert", "Optimisation Processus", "Vanta Lab", "Make.com consultant"],
    openGraph: {
        title: "Vanta Lab | L'Infrastructure Invisible des Agences qui Scalent",
        description: "Arrêtez de perdre du temps. Automatisez 100% de vos opérations.",
        url: 'https://vantalab.com',
        siteName: 'Vanta Lab',
        locale: 'fr_FR',
        type: 'website',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="dark">
        <body className={inter.className}>{children}</body>
        </html>
    );
}