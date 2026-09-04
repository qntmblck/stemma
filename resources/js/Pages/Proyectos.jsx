import { Head } from '@inertiajs/react';
import Header from '@/Components/Header.jsx';
import Hero from '@/Components/Hero.jsx';
import Footer from '@/Components/Footer.jsx';
import IntroProyectos from '@/Components/IntroProyectos.jsx';
import ProyectosGrid from '@/Components/ProyectosGrid.jsx';
import Certificaciones from '@/Components/Certificaciones.jsx';

export default function Proyectos() {
    return (
        <div className="bg-white">
            <Head title="Proyectos | Santa Emma" />
            <Header />
            <Hero title="Proyectos realizados" subtitle="Conectando experiencia, diseño y ejecución en cada obra." image="/img/h1.jpg" />
            <IntroProyectos />
            <ProyectosGrid />
            <div className="px-4 pb-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><Certificaciones /></div></div>
            <Footer />
        </div>
    );
}

