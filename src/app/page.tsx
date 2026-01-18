'use client';

import React, { useState, useEffect } from 'react';
import {
    ArrowRight, MessageCircle, Database, Sparkles, Bot,
    ClipboardList, Menu, X, Check, CheckCheck, ChevronDown, Calendar
} from 'lucide-react';

export default function VantaLabUltimate() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const calendlyLink = "https://calendly.com/contact-irizu/nouvelle-reunion";

    useEffect(() => {
        const head = document.head;

        if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
            const script = document.createElement('script');
            script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
            head.appendChild(script);
        }

        if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
            const style = document.createElement('link');
            style.setAttribute('rel', 'stylesheet');
            style.setAttribute('href', 'https://assets.calendly.com/assets/external/widget.css');
            head.appendChild(style);
        }
    }, []);

    // Fonction pour ouvrir la popin
    const openCalendly = (e: React.MouseEvent) => {
        e.preventDefault();
        // On dit à TypeScript de traiter window comme "n'importe quoi" (any) pour accéder à Calendly
        if ((window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({ url: calendlyLink });
        }
    };

    return (
        <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden selection:bg-indigo-500/30">

            {/* --- BACKGROUND AURORA --- */}
            <div className="fixed top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-900/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse pointer-events-none z-0"></div>
            <div className="fixed bottom-[20%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-fuchsia-900/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none z-0"></div>

            {/* --- NAV RESPONSIVE --- */}
            <nav className="fixed w-full z-50 top-4 px-4">
                <div className="max-w-6xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">

                    <a href="#" className="font-bold text-white tracking-tight text-lg hover:opacity-80 transition-opacity">
                        Vanta<span className="text-indigo-400">Lab.</span>
                    </a>

                    {/* Desktop Menu (Ordre inversé + Renommé) */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                        <a href="#demo" className="hover:text-white transition-colors">Démo</a>
                        <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
                        <a href="#contact" className="hover:text-white transition-colors">Qui je suis</a>
                    </div>

                    {/* CTA Desktop -> Ouvre la Popin */}
                    <button
                        onClick={openCalendly}
                        className="hidden md:block bg-white text-slate-950 text-xs font-bold px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors"
                    >
                        Discuter de mon projet
                    </button>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-20 left-4 right-4 bg-slate-900 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden z-50">
                        <a href="#demo" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-200">Démo</a>
                        <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-200">Solutions</a>
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-200">Qui je suis</a>
                        <div className="h-px bg-white/10 my-2"></div>
                        <button
                            onClick={(e) => { setIsMobileMenuOpen(false); openCalendly(e); }}
                            className="bg-indigo-600 text-white text-center py-3 rounded-xl font-bold w-full"
                        >
                            Réserver un créneau
                        </button>
                    </div>
                )}
            </nav>

            {/* --- HERO SECTION (ID DEMO) --- */}
            <section id="demo" className="relative z-10 pt-32 pb-16 md:pt-48 md:pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
                        <Sparkles className="w-3 h-3" />
                        Pour Wedding Planners & Pros
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        Vos invités. <br/>
                        Votre logistique. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-fuchsia-200">
              Sous contrôle.
            </span>
                    </h1>

                    <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed">
                        Centralisez la gestion de vos invités, les choix de menus et les imprévus.
                        Nous construisons le système qui organise tout automatiquement pour vous.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#solutions" className="group px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)]">
                            Voir le système
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Visualisation Hero */}
                <div className="relative h-[450px] hidden lg:block perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full blur-3xl"></div>
                    {/* CARTE 1 : Le Bot */}
                    <div className="absolute top-10 right-10 w-64 bg-slate-900/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl transform rotate-6 z-10 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Bot WhatsApp</span>
                            <MessageCircle size={14} className="text-indigo-400"/>
                        </div>
                        <div className="space-y-3 text-xs">
                            <div className="bg-slate-800/50 p-3 rounded-xl rounded-tl-none border border-white/5 text-slate-300">
                                "C'est à quelle heure la mairie ?"
                            </div>
                            <div className="bg-indigo-600 p-3 rounded-xl rounded-tr-none text-white text-right shadow-lg">
                                "14h30 précise ! 💍"
                            </div>
                            <div className="text-[10px] text-slate-500 text-right">Réponse automatique validée</div>
                        </div>
                    </div>
                    {/* FLÈCHE */}
                    <div className="absolute top-[180px] left-[180px] z-0 opacity-50">
                        <ArrowRight className="text-white w-10 h-10 -rotate-45" />
                    </div>
                    {/* CARTE 2 : La Base */}
                    <div className="absolute top-56 left-10 w-80 bg-white text-slate-900 p-5 rounded-2xl shadow-2xl z-20 transform -rotate-2 border border-slate-200">
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                            <Database size={16} className="text-indigo-600"/>
                            <span className="text-xs font-bold tracking-wide">LISTE INVITÉS</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center p-2 bg-indigo-50 rounded border border-indigo-100 shadow-sm">
                                <span className="text-xs font-bold text-indigo-700">Sophie M.</span>
                                <span className="text-xs text-slate-500">Table 4</span>
                                <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">PRÉSENTE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SOLUTIONS --- */}
            <section id="solutions" className="py-20 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Simplifiez l'organisation.</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Un système clair. Des invités informés. Une Wedding Planner tranquille.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 : Collecte + REAL UI */}
                    <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 hover:bg-slate-900/60 transition-colors flex flex-col group">
                        <div className="mb-6">
                            <div className="bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <ClipboardList className="w-6 h-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">1. Collecte Infos</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                On crée le formulaire sur-mesure (Allergies, Enfants, Navettes...).
                                Les invités remplissent sur leur téléphone.
                            </p>
                        </div>

                        {/* Mini UI : Vrai Formulaire */}
                        <div className="mt-auto bg-slate-950 border border-white/10 rounded-xl p-4 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[10px] text-slate-400 uppercase font-bold">Formulaire Invité</span>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <div className="text-[9px] text-slate-500 mb-1">Régime Alimentaire</div>
                                    <div className="bg-slate-800 text-xs text-white px-2 py-1.5 rounded border border-white/5 flex justify-between items-center">
                                        Sans Gluten <ChevronDown size={10} className="text-slate-500"/>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-indigo-500 rounded flex items-center justify-center"><Check size={8} className="text-white"/></div>
                                    <span className="text-[10px] text-slate-300">Besoin Navette (2 pers)</span>
                                </div>
                                <div className="bg-white h-7 rounded w-full mt-2 flex items-center justify-center text-[10px] font-bold text-slate-900 uppercase tracking-wide">
                                    Confirmer ma venue
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 : Organisation + REAL UI */}
                    <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 hover:bg-slate-900/60 transition-colors flex flex-col group">
                        <div className="mb-6">
                            <div className="bg-fuchsia-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Database className="w-6 h-6 text-fuchsia-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">2. Organisation</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Votre tableau de bord est toujours à jour.
                                Sachez exactement combien de repas Végé commander.
                            </p>
                        </div>

                        {/* Mini UI : Vraie Database */}
                        <div className="mt-auto bg-white rounded-xl p-3 shadow-sm border border-slate-200">
                            <div className="grid grid-cols-3 gap-1 mb-2 border-b border-slate-100 pb-1">
                                <span className="text-[9px] text-slate-400 font-bold uppercase">Nom</span>
                                <span className="text-[9px] text-slate-400 font-bold uppercase">Menu</span>
                                <span className="text-[9px] text-slate-400 font-bold uppercase text-right">Statut</span>
                            </div>
                            <div className="space-y-2">
                                <div className="grid grid-cols-3 gap-1 items-center">
                                    <span className="text-[10px] text-slate-700 font-bold truncate">Thomas D.</span>
                                    <span className="text-[9px] text-slate-500 bg-slate-100 px-1 rounded w-fit">Boeuf</span>
                                    <span className="text-[9px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full font-bold text-right w-fit ml-auto">Validé</span>
                                </div>
                                <div className="grid grid-cols-3 gap-1 items-center">
                                    <span className="text-[10px] text-slate-700 font-bold truncate">Sarah L.</span>
                                    <span className="text-[9px] text-indigo-500 bg-indigo-50 px-1 rounded w-fit font-medium">Végé</span>
                                    <span className="text-[9px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full font-bold text-right w-fit ml-auto">Attente</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 : Bot + REAL UI */}
                    <div className="bg-slate-900/40 border border-indigo-500/20 rounded-3xl p-6 hover:bg-slate-900/60 transition-colors flex flex-col group">
                        <div className="mb-6">
                            <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Bot className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">3. Bot WhatsApp</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Il répond aux questions simples (Adresses, Horaires) en utilisant uniquement les infos validées.
                            </p>
                        </div>

                        {/* Mini UI : Vrai Chat */}
                        <div className="mt-auto bg-slate-950/50 border border-white/5 rounded-xl p-4">
                            <div className="space-y-3">
                                <div className="bg-slate-800 p-2 rounded-lg rounded-tl-none text-[10px] text-slate-300 w-fit max-w-[85%]">
                                    C'est où le cocktail déjà ? 🍸
                                </div>
                                <div className="ml-auto w-fit max-w-[85%] flex flex-col items-end">
                                    <div className="bg-emerald-700 p-2 rounded-lg rounded-tr-none text-[10px] text-white shadow-lg">
                                        Au Domaine de Verchant ! <br/>
                                        Voici le lien GPS : <span className="underline text-emerald-200">http://googleusercontent.com/maps...</span>
                                    </div>
                                    <div className="flex items-center gap-1 mt-1 opacity-70">
                                        <span className="text-[8px] text-slate-500">14:02</span>
                                        <CheckCheck size={10} className="text-emerald-500"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- SECTION ILYES + CTA --- */}
            <section id="contact" className="py-24 px-6 relative">
                <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">

                    <div className="grid md:grid-cols-3 gap-8 items-center">

                        {/* Photo Avatar */}
                        <div className="md:col-span-1 flex justify-center">
                            <div className="w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-xl overflow-hidden relative group">
                                <img
                                    src="/ma-tete.jpeg"
                                    alt="Ilyes Vanta Lab"
                                    className="w-full h-full object-cover transform scale-150 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Texte Contact */}
                        <div className="md:col-span-2 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                "Parlons de votre organisation."
                            </h2>
                            <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                                Je suis <strong>Ilyes</strong>. Chaque agence est unique. <br/>
                                Plutôt que de vous vendre un outil standard, je vous propose d'échanger pour définir <strong>comment adapter</strong> mon système d'organisation à vos événements.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    onClick={openCalendly}
                                    className="bg-white text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-slate-200 transition-colors shadow-lg flex items-center justify-center gap-2"
                                >
                                    <Calendar size={16} />
                                    Réserver un appel
                                </button>
                                <a href="mailto:contact@irizu.dev" className="text-slate-400 hover:text-white font-medium py-3 px-6 text-sm transition-colors border border-white/10 rounded-xl hover:bg-white/5 flex items-center justify-center">
                                    Me contacter par email
                                </a>
                            </div>

                            <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-[10px] text-slate-500">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Dispo cette semaine pour de nouveaux projets
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-10 text-center border-t border-white/5 bg-slate-950">
                <p className="text-slate-600 text-xs font-medium tracking-widest uppercase">Vanta Lab © 2026</p>
            </footer>

        </div>
    );
}