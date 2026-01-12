"use client"; // Nécessaire pour le bouton "Copier"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Check, Copy } from "lucide-react";

export default function ContactPage() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        // L'email est assemblé ici, invisible pour les bots qui scannent le HTML
        const part1 = "contact";
        const part2 = "vantalab.com";
        navigator.clipboard.writeText(`${part1}@${part2}`);

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#00439C] selection:text-white relative overflow-x-hidden">

            <AmbientBackground />

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <section className="flex-grow pt-32 pb-20">
                    <div className="container mx-auto px-4">

                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* GAUCHE : INFOS RASSURANTES */}
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">Discutons <br /><span className="text-[#00439C]">Simplement.</span></h1>
                                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                    Pas de pression. Que vous soyez prêt à automatiser ou juste curieux de savoir ce qui est possible, on répond à tout le monde.
                                </p>

                                <div className="space-y-6">

                                    {/* BOUTON ANTI-SPAM POUR L'EMAIL */}
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                                            <Mail className="h-5 w-5 text-[#00439C]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-sm uppercase tracking-wide opacity-70 mb-1">Email</h3>
                                            <button
                                                onClick={handleCopyEmail}
                                                className="flex items-center gap-2 text-white hover:text-[#00439C] transition-colors font-medium"
                                            >
                                                {copied ? (
                                                    <span className="text-green-500 flex items-center gap-2"><Check className="h-4 w-4" /> Copié !</span>
                                                ) : (
                                                    <span className="flex items-center gap-2">Copier l'adresse <Copy className="h-4 w-4 opacity-50" /></span>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                                            <MapPin className="h-5 w-5 text-[#00439C]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-sm uppercase tracking-wide opacity-70 mb-1">Localisation</h3>
                                            <p className="text-gray-300">Paris, France</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DROITE : FORMULAIRE SIMPLIFIÉ */}
                            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                                <form className="space-y-5">

                                    {/* NOM SEUL */}
                                    <div className="space-y-2">
                                        <Label htmlFor="fullname" className="text-gray-300">Nom complet</Label>
                                        <Input id="fullname" placeholder="Votre nom" className="bg-white/5 border-white/10 text-white focus:border-[#00439C] h-12" />
                                    </div>

                                    {/* EMAIL */}
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                                        <Input id="email" type="email" placeholder="votre@email.com" className="bg-white/5 border-white/10 text-white focus:border-[#00439C] h-12" />
                                    </div>

                                    {/* SELECTEUR DE TYPE DE DEMANDE (Simple HTML pour éviter les bugs Shadcn Select) */}
                                    <div className="space-y-2">
                                        <Label htmlFor="type" className="text-gray-300">C'est à quel sujet ?</Label>
                                        <div className="relative">
                                            <select
                                                id="type"
                                                className="w-full h-12 bg-white/5 border border-white/10 text-white rounded-md px-3 focus:outline-none focus:border-[#00439C] appearance-none"
                                                defaultValue=""
                                            >
                                                <option value="" disabled className="bg-[#121212] text-gray-500">Choisissez une option...</option>
                                                <option value="audit" className="bg-[#121212]">Je veux booster mon agence (Audit)</option>
                                                <option value="question" className="bg-[#121212]">J'ai juste une question (Curiosité)</option>
                                                <option value="other" className="bg-[#121212]">Autre</option>
                                            </select>
                                            {/* Petite flèche custom CSS */}
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</div>
                                        </div>
                                    </div>

                                    {/* MESSAGE OPTIONNEL */}
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-gray-300">Message (Optionnel)</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Dites-nous en deux mots ce que vous cherchez..."
                                            className="min-h-[100px] bg-white/5 border-white/10 text-white focus:border-[#00439C]"
                                        />
                                    </div>

                                    <Button className="w-full h-12 bg-[#00439C] hover:bg-blue-800 text-white font-bold text-lg mt-2">
                                        Envoyer
                                    </Button>

                                </form>
                            </div>

                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
}