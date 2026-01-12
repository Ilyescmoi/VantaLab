import { Mail, Zap, CheckCircle2, MonitorPlay } from "lucide-react";

export default function Features() {
    return (
        <section id="architecture" className="py-24 bg-transparent">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Votre Agence en Pilote Automatique.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Imaginez une entreprise qui tourne 24h/24, sans erreur, et sans que vous ayez besoin de cliquer nulle part.
                    </p>
                </div>

                {/* GRANDE GRID BENTO */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* FEATURE 1 : VENTE (Le plus important) */}
                    <div className="col-span-1 md:col-span-2 p-10 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Mail className="h-48 w-48 text-white" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 rounded-lg bg-[#00439C] flex items-center justify-center">
                                    <Zap className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Réponse Immédiate aux Prospects</h3>
                            </div>
                            <p className="text-gray-400 text-lg mb-6 max-w-lg">
                                Fini de perdre des clients parce que vous avez répondu 3 heures trop tard.
                                Notre système contacte vos prospects par SMS ou WhatsApp <strong className="text-white">dans les 60 secondes</strong> après leur demande. Jour et nuit.
                            </p>
                            <div className="flex gap-3">
                                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">Taux de réponse x3</span>
                                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">Zéro effort</span>
                            </div>
                        </div>
                    </div>

                    {/* FEATURE 2 : ONBOARDING CLIENT */}
                    <div className="col-span-1 p-8 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 group hover:border-[#00439C]/30 transition-colors flex flex-col justify-between">
                        <div>
                            <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                                <CheckCircle2 className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Onboarding Instantané</h3>
                            <p className="text-gray-400">
                                Dès que le contrat est signé, tout se lance tout seul : facture envoyée, dossier Google Drive créé, accès Slack envoyé.
                            </p>
                        </div>
                        <div className="mt-6 text-sm text-gray-500 italic">
                            "Le client est impressionné par la vitesse, et vous n'avez rien fait."
                        </div>
                    </div>

                    {/* FEATURE 3 : GESTION / DASHBOARD */}
                    <div className="col-span-1 p-8 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 group hover:border-[#00439C]/30 transition-colors">
                        <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                            <MonitorPlay className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Tableau de Bord Clair</h3>
                        <p className="text-gray-400">
                            Arrêtez de naviguer à vue. Nous connectons tous vos outils pour vous donner une vision claire : combien j'ai gagné aujourd'hui ? Combien de leads ? Tout est centralisé.
                        </p>
                    </div>

                    {/* FEATURE 4 : CUSTOM / SCALING */}
                    <div className="col-span-1 md:col-span-2 p-10 rounded-2xl bg-[#00439C] border border-[#00439C] text-white flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-3">Une architecture qui grandit avec vous</h3>
                        <p className="text-blue-100 text-lg mb-6">
                            Que vous ayez 5 ou 500 clients, le système ne fatigue jamais.
                            Pas besoin de recruter une assistante administrative : nos robots font le travail de 3 personnes, pour 10x moins cher.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-blue-200">
                            <span>Compatible avec :</span>
                            <span className="text-white">Vos outils actuels (Gmail, Stripe, etc.)</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}