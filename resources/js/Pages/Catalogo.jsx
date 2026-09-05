import Header from '@/Components/Header.jsx';
import Hero from '@/Components/Hero.jsx';
import Footer from '@/Components/Footer.jsx';
import Servicios from '@/Components/Servicios.jsx';
import CarruselMaquinarias from '@/Components/CarruselMaquinarias.jsx';
import GridMaquinarias from '@/Components/GridMaquinarias.jsx';
import FiltroMaquinaria from '@/Components/FiltroMaquinaria.jsx';
import FichaMaquinaria from '@/Components/FichaMaquinaria.jsx';
import Seo from '@/Components/Seo.jsx';

export default function Catalogo() {
    return (
        <div className="bg-white">
            <Seo pageKey="catalogo" preloadImage />
            <Header />
            <Hero title="Catálogo de Servicios y Maquinarias" subtitle="Descubre todo lo que ofrecemos para potenciar tu obra." image="/img/h1.jpg" />
            <Servicios />
            <CarruselMaquinarias />
            <GridMaquinarias />
            <FiltroMaquinaria />
            <FichaMaquinaria />
            <Footer />
        </div>
    );
}
