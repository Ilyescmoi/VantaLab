import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    // Titre : Clair, cible la niche et la promesse
    title: "Vanta Lab | L'Assistant Logistique des Organisateurs d'événements",

    // Description : Parle du problème (Excel) et de la solution (Centralisation/WhatsApp)
    description: "Fini le chaos des fichiers Excel. Centralisez la gestion de vos invités, des menus et automatisez vos réponses WhatsApp. Un système sur-mesure pour les pros de l'événementiel.",

    // Keywords : Ce que tes clientes tapent dans Google
    keywords: ["Wedding Planner", "Gestion Invités", "Organisation Mariage", "RSVP WhatsApp", "Logistique Événementielle", "Automatisation Mariage", "Vanta Lab"],

    openGraph: {
        // Titre Social (LinkedIn/WhatsApp) : Punchy, reprend ta Hero Section
        title: "Vos mariages. Sans le chaos.",

        // Description Sociale : Donne envie de cliquer pour voir la solution
        description: "Découvrez le système qui gère la logistique et les invités à votre place. Moins d'Excel, plus de sérénité.",
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