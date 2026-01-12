export default function AmbientBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* BLOB 1 : Bleu Vanta (Coin Haut Gauche) */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00439C] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>

            {/* BLOB 2 : Violet (Coin Haut Droit) */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>

            {/* BLOB 3 : Cyan (Bas) */}
            <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>

            {/* TEXTURE DE BRUIT (Pour lier le tout) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
}