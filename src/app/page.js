import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <main className="overflow-x-clip w-full max-w-full bg-gradient-to-b from-white to-green-50 min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    );
}
