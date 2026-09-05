import { useState } from 'react';
import Header from '@/Components/Header.jsx';
import Hero from '@/Components/Hero.jsx';
import ModalWelcome from '@/Components/ModalWelcome.jsx';
import Servicios from '@/Components/Servicios.jsx';
import Maquinarias from '@/Components/Maquinarias.jsx';
import ProyectosDestacados from '@/Components/ProyectosDestacados.jsx';
import Testimonios from '@/Components/Testimonios.jsx';
import Footer from '@/Components/Footer.jsx';
import Seo from '@/Components/Seo.jsx';

export default function Welcome() {
    const [showModal, setShowModal] = useState(true);

    return (
        <div className="bg-white">
            <Seo pageKey="home" preloadImage />
            {showModal && <ModalWelcome onClose={() => setShowModal(false)} />}
            <Header />
            <Hero title="Construimos confianza, gestionamos tu inversión" subtitle="Desde la zona austral hacia todo Chile, con visión a largo plazo en obras civiles y gestión de activos." image="/img/h1.jpg" />
            <Servicios />
            <section id="catalogo"><Maquinarias /></section>
            <section id="proyectos"><ProyectosDestacados /></section>
            <section id="nosotros"><Testimonios /></section>
            <section id="contacto"><Footer /></section>
        </div>
    );
}
