import Link from "next/link";
import { Button } from "@/components/ui/button";
// 1. On importe la police Space Grotesk
import { Space_Grotesk } from "next/font/google";

// 2. On la configure
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md transition-all">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* LOGO AVEC LA TYPO SPACE GROTESK */}
                <Link
                    href="/"
                    className={`text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity ${spaceGrotesk.className}`}
                >
                    VANTA LAB<span className="text-[#00439C]">.</span>
                </Link>

                {/* NAVIGATION DROITE */}
                <div className="flex items-center gap-6">

                    {/* LIEN SIMPLE */}
                    <Link
                        href="/contact"
                        className="text-sm font-medium text-gray-400 hover:text-white transition-colors hidden sm:block"
                    >
                        Contact
                    </Link>

                    {/* BOUTON CTA */}
                    <Link href="/contact">
                        <Button
                            className="bg-[#00439C] hover:bg-blue-800 text-white font-medium border-0 shadow-[0_0_15px_-3px_rgba(0,67,156,0.4)]"
                        >
                            Audit Gratuit
                        </Button>
                    </Link>

                </div>
            </div>
        </nav>
    );
}