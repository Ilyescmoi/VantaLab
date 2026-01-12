import { Clock, Ban, MoveHorizontal } from "lucide-react";

export default function Problem() {
    return (
        // ZÉRO BORDURE, ZÉRO LIGNE, JUSTE TRANSPARENT
        <section className="py-24 bg-transparent relative">

            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Vous avez créé une agence pour être libre.<br />
                        {/* MODIFICATION ICI : Dégradé White -> Blue Vanta */}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#00439C]">
                            Pas pour devenir esclave de vos e-mails.
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Aujourd'hui, 80% de votre journée ne sert pas à faire grandir votre boîte, mais juste à la faire "tourner".
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* CARTE 1 */}
                    <div className="p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5 flex flex-col items-center text-center hover:border-white/10 transition-colors">
                        <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white">
                            <Clock className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">La "Do-List" Infinie</h3>
                        <p className="text-gray-400">
                            Envoyer les factures, relancer les prospects, copier-coller des infos... Vous perdez 4h par jour sur des tâches répétitives.
                        </p>
                    </div>

                    {/* CARTE 2 */}
                    <div className="p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5 flex flex-col items-center text-center hover:border-white/10 transition-colors">
                        <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white">
                            <Ban className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Impossible de Déléguer</h3>
                        <p className="text-gray-400">
                            "C'est trop compliqué à expliquer", "Ils vont faire des erreurs". Résultat : tout passe par vous.
                        </p>
                    </div>

                    {/* CARTE 3 */}
                    <div className="p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5 flex flex-col items-center text-center hover:border-white/10 transition-colors">
                        <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white">
                            <MoveHorizontal className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Le Plafond de Verre</h3>
                        <p className="text-gray-400">
                            Vous ne pouvez pas prendre plus de clients car vous êtes déjà sous l'eau. Le CA stagne.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}