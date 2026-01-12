import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-transparent">

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-5xl">

                {/* KEYWORD BADGE */}
                <div className="mb-8 inline-flex items-center rounded-full border border-[#00439C]/30 bg-[#00439C]/10 px-4 py-1.5 text-sm text-[#00439C] font-medium">
                   <span className="mr-2 flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#00439C] opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00439C]"></span>
                  </span>
                    AGENCE D'AUTOMATISATION IA & WORKFLOWS
                </div>

                {/* H1 OPTIMISÉ SEO */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
                    Transformez votre Agence en <br />
                    {/* MODIFICATION ICI : Dégradé Blanc -> Bleu Vanta lumineux */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#00439C]">
                        Machine Autonome.
                    </span>
                </h1>

                {/* SUBTEXT AVEC MOTS-CLÉS SECONDAIRES */}
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Vanta Lab conçoit l'infrastructure technique (n8n, Make, AI) qui permet aux entreprises de <strong>scaler sans recruter</strong>.
                    Passez de l'opérationnel manuel à la performance automatisée.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">

                    {/* BOUTON PRINCIPAL -> Vers Contact */}
                    <Link href="/contact" className="w-full sm:w-auto">
                        <Button className="h-12 px-8 bg-[#00439C] hover:bg-blue-800 text-white rounded-md w-full text-lg shadow-[0_0_20px_-5px_rgba(0,67,156,0.5)] transition-all hover:scale-105">
                            Démarrer l'Audit Gratuit <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>

                    {/* BOUTON SECONDAIRE -> Vers Ancre Architecture */}
                    <Link href="#architecture" className="w-full sm:w-auto">
                        <Button variant="outline" className="h-12 px-8 border-white/20 text-white hover:bg-white/10 bg-transparent rounded-md w-full">
                            <Terminal className="mr-2 h-4 w-4" /> Voir nos Solutions
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}