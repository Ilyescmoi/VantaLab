import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer"; // Le nouveau fond

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#00439C] selection:text-white relative overflow-x-hidden">

            {/* LE FOND ANIMÉ (Derrière tout le monde) */}
            <AmbientBackground />

            {/* LE CONTENU (Devant) */}
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Problem />
                <Features />
                <Footer/>
            </div>

        </main>
    );
}