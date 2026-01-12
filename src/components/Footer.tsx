import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/20 backdrop-blur-md relative z-10 mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-12">

                    {/* COLONNE 1 : MARQUE */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-bold text-xl tracking-tighter text-white mb-4 block">
                            VANTA LAB
                        </Link>
                        <p className="text-gray-400 max-w-sm">
                            Nous construisons l'infrastructure invisible des agences qui scalent.
                            Automatisation, IA et Systèmes pour remplacer le chaos par la performance.
                        </p>
                    </div>

                    {/* COLONNE 2 : LIENS */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Exploration</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-[#00439C] transition-colors">Accueil</Link></li>
                            <li><Link href="/#architecture" className="hover:text-[#00439C] transition-colors">Architecture</Link></li>
                            <li><Link href="/contact" className="hover:text-[#00439C] transition-colors">Audit Gratuit</Link></li>
                        </ul>
                    </div>

                    {/* COLONNE 3 : SOCIALS */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Réseaux</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00439C] hover:text-white transition-all">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00439C] hover:text-white transition-all">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00439C] hover:text-white transition-all">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© 2026 Vanta Lab Systems. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-gray-400">Mentions Légales</Link>
                        <Link href="#" className="hover:text-gray-400">CGV</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}