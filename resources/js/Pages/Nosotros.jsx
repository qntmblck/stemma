import { Head } from '@inertiajs/react';
import Header from '@/Components/Header.jsx';
import Hero from '@/Components/Hero.jsx';
import Footer from '@/Components/Whitefooter.jsx';
import ResumenEmpresa from '@/Components/ResumenEmpresa.jsx';
import Historia from '@/Components/Historia.jsx';
import Equipo from '@/Components/Equipo.jsx';
import Especialidades from '@/Components/Especialidades.jsx';

export default function Nosotros() {
    return (
        <div className="bg-white">
            <Head title="Nosotros | Santa Emma" />
            <Header />
            <Hero title="Construcción con sentido estratégico" subtitle="Obras que generan valor. Inversiones que transforman territorio." image="/img/h1.jpg" />
            <ResumenEmpresa />
            <Historia />
            <Especialidades />
            <Equipo />
            <Footer light />
        </div>
    );
}

