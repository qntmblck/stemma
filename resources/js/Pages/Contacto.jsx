import { Head } from '@inertiajs/react';
import Header from '@/Components/Header.jsx';
import Hero from '@/Components/Hero.jsx';
import FormularioContacto from '@/Components/FormularioContacto.jsx';
import ContactFooter from '@/Components/ContactFooter.jsx';

export default function Contacto() {
    return (
        <div className="bg-white">
            <Head title="Contacto | Santa Emma" />
            <Header />
            <Hero title="Contáctanos" subtitle="Estamos listos para asesorarte y acompañarte en tus proyectos." image="/img/h1.jpg" />
            <FormularioContacto />
            <ContactFooter />
        </div>
    );
}

