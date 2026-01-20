'use client';

import React, { useState } from 'react';
import {
    ArrowRight, MessageCircle, Database, Bot,
    ClipboardList, Menu, X, Calendar, Loader2, LayoutDashboard
} from 'lucide-react';

export default function VantaLabFinal() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const [iframeLoaded, setIframeLoaded] = useState(false);

    const calendlyLink = "https://calendly.com/contact-irizu/nouvelle-reunion";

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsCalendlyOpen(true);
        setIsMobileMenuOpen(false);
    };

    // --- CLASS DU BOUTON ULTIME (3D + GLOW + CLICK) ---
    const btnClass = `
        bg-[#818CF8] text-white font-bold rounded-xl flex items-center justify-center gap-2 
        border border-white/10
        transition-all duration-200 ease-in-out
        shadow-[4px_4px_0px_#3730a3]
        hover:shadow-[6px_6px_0px_#3730a3,_0_0_20px_rgba(129,140,248,0.6)]
        hover:-translate-y-[2px] hover:-translate-x-[2px]
        active:translate-x-[2px] active:translate-y-[2px]
        active:shadow-none
    `;

    return (
        <div className="relative min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-[#818CF8]/30">

            {/* --- STYLES GLOBAUX --- */}
            <style dangerouslySetInnerHTML={{__html: `
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700;900&display=swap');
                
                .font-space { 
                    font-family: 'Space Grotesk', sans-serif !important; 
                }
                
                /* TITRES 3D OFFSET */
                .text-3d-vanta {
                    color: white;
                    text-shadow: 3px 3px 0px #818CF8;
                }

                html { scroll-behavior: smooth; }
            `}} />

            {/* --- FOND --- */}
            <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#818CF8]/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen animate-pulse"></div>
            <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                 style={{
                     backgroundImage: 'linear-gradient(rgba(129, 140, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(129, 140, 248, 0.1) 1px, transparent 1px)',
                     backgroundSize: '50px 50px'
                 }}>
            </div>

            {/* --- NAV RESPONSIVE --- */}
            <nav className="fixed w-full z-50 top-6 px-6">
                <div className="max-w-7xl mx-auto bg-[#0A0A0E]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">

                    {/* LOGO - TAILLE MOBILE BOOSTÉE À 16 (64px) */}
                    <a href="#" className="flex items-center">
                        <img
                            src="/logo-vanta-3d.svg"
                            alt="Vanta Lab Logo"
                            className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform"
                        />
                    </a>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                        <a href="#demo" className="hover:text-[#818CF8] transition-colors">Démo</a>
                        <a href="#solutions" className="hover:text-[#818CF8] transition-colors">Solutions</a>
                        <a href="#contact" className="hover:text-[#818CF8] transition-colors">Qui je suis</a>
                    </div>

                    <button
                        onClick={openModal}
                        className={`hidden md:flex px-6 py-3 text-xs ${btnClass}`}
                    >
                        Discuter de mon projet
                    </button>

                    <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="absolute top-28 left-4 right-4 bg-[#0A0A0E] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden z-50">
                        <a href="#demo" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-200">Démo</a>
                        <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-200">Solutions</a>
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-200">Qui je suis</a>
                        <div className="h-px bg-white/10 my-2"></div>
                        <button onClick={openModal} className={`w-full py-4 ${btnClass}`}>
                            Réserver un créneau
                        </button>
                    </div>
                )}
            </nav>

            {/* --- HERO SECTION CENTRÉE & GROSSIE --- */}
            {/* J'ai ajouté 'min-h-screen' et 'flex items-center' pour le centrage vertical parfait */}
            <section id="demo" className="relative z-10 min-h-screen flex items-center pt-20 pb-12 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

                    <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col justify-center h-full">

                        {/* TITRE ENCORE PLUS GROS SUR MOBILE (text-6xl) */}
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 md:mb-8 leading-[0.9] font-space">
                            VOS INVITÉS.<br/>
                            <span className="text-3d-vanta tracking-wide">
                                SOUS CONTRÔLE.
                            </span>
                        </h1>

                        {/* DESCRIPTION PLUS LISIBLE (text-lg) */}
                        <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                            Centralisez la gestion de vos invités. Fini les tableaux noirs et blancs, place à l'automatisation intelligente.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#solutions" className={`w-full sm:w-auto px-8 py-4 ${btnClass}`}>
                                Voir le système
                                <ArrowRight className="w-4 h-4" />
                            </a>

                            <a href="#contact" className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white font-bold rounded-xl hover:bg-[#818CF8]/10 transition-colors text-center flex items-center justify-center">
                                Me contacter
                            </a>
                        </div>

                        {/* --- VISUALISATION MOBILE (Déplacée ici pour être centrée sous le texte) --- */}
                        <div className="lg:hidden mt-12 relative w-full max-w-[300px] mx-auto perspective-[1000px]">
                            <div className="bg-[#121217] border border-white/10 p-5 rounded-3xl shadow-2xl transform rotate-x-[10deg] shadow-[0_20px_50px_-12px_rgba(129,140,248,0.2)]">
                                <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-[10px] font-bold text-white tracking-wide">DÉMO LIVE</span>
                                    </div>
                                    <Bot size={16} className="text-[#818CF8]"/>
                                </div>
                                <div className="space-y-3 font-mono text-[10px]">
                                    <div className="bg-[#1F1F25] p-3 rounded-2xl rounded-tl-none border border-white/5 text-slate-300">
                                        "C'est à quelle heure la mairie ?"
                                    </div>
                                    <div className="bg-[#818CF8] p-3 rounded-2xl rounded-tr-none text-white text-right shadow-lg">
                                        "14h30 précise ! 💍"
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* --- VISUALISATION DESKTOP 3D --- */}
                    <div className="relative h-[500px] hidden lg:block perspective-[2000px]">
                        <div className="absolute top-20 right-10 w-72 bg-[#121217] border border-white/10 hover:border-[#818CF8]/50 p-6 rounded-3xl transform rotate-y-[-10deg] rotate-x-[5deg] translate-z-[50px] shadow-2xl hover:scale-105 transition-transform duration-500 z-20">
                            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                                    <span className="text-xs font-bold text-white tracking-wide">RÉPONSE AUTO</span>
                                </div>
                                <Bot size={18} className="text-[#818CF8]"/>
                            </div>
                            <div className="space-y-4 font-mono text-xs">
                                <div className="bg-[#1F1F25] p-3 rounded-2xl rounded-tl-none border border-white/5 text-slate-300">
                                    "C'est à quelle heure la mairie ?"
                                </div>
                                <div className="bg-[#818CF8] p-3 rounded-2xl rounded-tr-none text-white text-right shadow-lg">
                                    "14h30 précise ! 💍"
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-40 left-0 w-80 h-64 bg-[#0E0E12] border border-white/10 p-6 rounded-3xl transform rotate-y-[10deg] rotate-x-[-5deg] translate-z-[-50px] shadow-2xl opacity-90 z-10 backdrop-blur-md">
                            <div className="flex items-center gap-3 mb-6">
                                <Database size={20} className="text-[#818CF8]"/>
                                <span className="text-xs font-bold text-slate-500 tracking-[0.2em]">SUIVI_INVITÉS</span>
                            </div>
                            <div className="space-y-3">
                                <div className="h-8 w-full bg-[#818CF8]/10 rounded border border-[#818CF8]/20 flex items-center px-3 gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#818CF8]"></div>
                                    <div className="h-2 w-20 bg-white/10 rounded"></div>
                                </div>
                                <div className="h-8 w-full bg-white/5 rounded border border-white/5 flex items-center px-3 gap-3">
                                    <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                                    <div className="h-2 w-24 bg-white/10 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SOLUTIONS --- */}
            <section id="solutions" className="py-24 px-6 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight font-space leading-tight">
                        SIMPLIFIER<br/>
                        <span className="text-3d-vanta tracking-wide">L'ORGANISATION.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Carte 1 : Collecte */}
                    <div className="bg-[#0E0E12] border border-white/10 rounded-3xl p-8 hover:border-[#818CF8] transition-all duration-300 group relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#818CF8]/10 blur-3xl rounded-full group-hover:bg-[#818CF8]/20 transition-all"></div>
                        <ClipboardList className="w-10 h-10 text-[#818CF8] mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">1. Formulaires</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Fini la saisie manuelle. Vos mariés remplissent un formulaire propre sur téléphone. Les infos arrivent directement dans votre tableau.
                        </p>
                    </div>

                    {/* Carte 2 : Pilotage (ROSE/FUCHSIA) */}
                    <div className="md:col-span-2 bg-[#0E0E12] border border-white/10 rounded-3xl p-8 hover:border-fuchsia-500 transition-all duration-300 group relative overflow-hidden flex flex-col md:flex-row gap-8 items-center shadow-lg">
                        <div className="absolute top-[-50%] left-[20%] w-64 h-64 bg-fuchsia-500/10 blur-3xl rounded-full group-hover:bg-fuchsia-500/20 transition-all"></div>
                        <div className="flex-1 relative z-10">
                            {/* ICÔNE AJOUTÉE ICI : LayoutDashboard en Fuchsia */}
                            <LayoutDashboard className="w-10 h-10 text-fuchsia-400 mb-6" />

                            <h3 className="text-2xl font-bold text-white mb-4">
                                2. Pilotage <span className="text-fuchsia-400">Global</span>
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Gardez le contrôle. En un coup d'œil, vous savez qui a validé sa venue, le nombre exact de repas végétariens et les tâches restantes.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 bg-[#121217] rounded-xl border border-white/5 p-4 shadow-2xl relative z-10">
                            <div className="flex justify-between items-center bg-[#1A1A20] p-3 rounded-lg border border-white/5 mb-2">
                                <span className="text-xs text-white">Alice M.</span>
                                <span className="text-[10px] bg-fuchsia-500/20 text-fuchsia-300 px-2 py-0.5 rounded font-bold border border-fuchsia-500/20">Menu Validé</span>
                            </div>
                            <div className="flex justify-between items-center bg-[#1A1A20] p-3 rounded-lg border border-white/5">
                                <span className="text-xs text-white">Lucas P.</span>
                                <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded">En attente</span>
                            </div>
                        </div>
                    </div>

                    {/* Carte 3 : Communication */}
                    <div className="bg-[#0E0E12] border border-white/10 rounded-3xl p-8 hover:border-emerald-500 transition-all duration-300 group relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full group-hover:bg-emerald-500/20 transition-all"></div>
                        <MessageCircle className="w-10 h-10 text-emerald-400 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">
                            3. WhatsApp <span className="text-emerald-400">Bot</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Automatisez les tâches répétitives. Confirmation de présence, envoi du plan d'accès ou rappel des horaires par WhatsApp.
                        </p>
                    </div>

                    {/* CTA - BOX */}
                    <div className="md:col-span-2 bg-gradient-to-r from-[#818CF8] to-[#6366f1] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-2 font-space tracking-wide">
                                PRÊT À GAGNER DU TEMPS ?
                            </h3>
                            <p className="text-indigo-100 text-sm opacity-90">Concentrez-vous sur l'événement, pas sur le fichier Excel.</p>
                        </div>
                        <button onClick={openModal} className={`mt-6 md:mt-0 px-8 py-3 bg-white text-[#4f46e5] font-bold rounded-xl shadow-[4px_4px_0px_#312e81] hover:shadow-[6px_6px_0px_#312e81,_0_0_20px_rgba(255,255,255,0.6)] hover:-translate-y-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200 relative z-10`}>
                            Démarrer l'audit
                        </button>
                    </div>
                </div>
            </section>

            {/* --- SECTION ILYES --- */}
            <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
                <div className="bg-[#0A0A0E] border border-white/10 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full border-4 border-[#0A0A0E] ring-2 ring-[#818CF8]/50 mb-8 overflow-hidden shadow-[0_0_20px_rgba(129,140,248,0.3)]">
                            <img src="/ma-tete.jpeg" alt="Ilyes" className="w-full h-full object-cover"/>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-space">
                            "Parlons de votre façon de travailler."
                        </h2>

                        <div className="text-slate-400 leading-relaxed mb-10 text-sm md:text-base max-w-lg mx-auto space-y-4">
                            <p>
                                Je suis <strong>Ilyes</strong>.
                            </p>
                            <p>
                                Vous connaissez votre métier mieux que personne. Mon rôle n'est pas de changer votre organisation, mais de lui donner les outils techniques pour qu'elle tourne toute seule.
                            </p>
                            <p className="text-[#818CF8] font-medium">
                                On regarde ce qui vous prend du temps aujourd'hui, et on l'automatise pour demain.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={openModal}
                                className={`px-8 py-3 ${btnClass}`}
                            >
                                <Calendar size={18} />
                                Réserver un appel
                            </button>
                            <a href="mailto:contact@irizu.dev" className="text-slate-400 hover:text-white font-medium py-3 px-6 text-sm transition-colors border border-white/10 rounded-xl hover:bg-white/5">
                                Me contacter par email
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-10 text-center border-t border-white/5 bg-[#050508]">
                <div className="flex justify-center items-center gap-2 mb-4 opacity-80">
                    <img
                        src="/logo-vanta-3d.svg"
                        alt="Vanta Lab Logo"
                        className="h-10 md:h-12 w-auto object-contain grayscale transition-all"
                    />
                </div>
                <p className="text-slate-600 text-[10px] font-mono tracking-widest uppercase">
                    Designed in Paris © 2026
                </p>
            </footer>

            {/* MODAL */}
            {isCalendlyOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" onClick={() => setIsCalendlyOpen(false)}></div>
                    <div className="relative bg-[#0A0A0E] w-full max-w-4xl h-[700px] max-h-[90vh] rounded-3xl border border-white/10 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
                        <button onClick={() => setIsCalendlyOpen(false)} className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-[#818CF8] text-white p-2 rounded-full transition-all border border-white/10">
                            <X size={20} />
                        </button>
                        <div className="w-full h-full relative z-10 bg-white">
                            {!iframeLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0E] text-[#818CF8] z-0">
                                    <Loader2 className="w-8 h-8 animate-spin" />
                                </div>
                            )}
                            <iframe src={calendlyLink} width="100%" height="100%" frameBorder="0" onLoad={() => setIframeLoaded(true)} className={`relative z-10 transition-opacity duration-500 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}