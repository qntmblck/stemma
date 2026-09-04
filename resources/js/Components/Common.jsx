import React from 'react';

import { Link, router, usePage } from '@inertiajs/react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useMemo, useRef, useState } from 'react';

export function routeTo(name, params, fallback = '#') {
    if (typeof window !== 'undefined' && typeof window.route === 'function') {
        try {
            return window.route(name, params);
        } catch {
            return fallback;
        }
    }
    return fallback;
}

export function currentRoute(name) {
    if (typeof window !== 'undefined' && typeof window.route === 'function') {
        try {
            return window.route().current(name);
        } catch {
            return false;
        }
    }
    return false;
}

export function cx(...classes) {
    return classes.filter(Boolean).join(' ');
}

export function ApplicationLogo({ className = 'h-10 w-auto' }) {
    return <img src="/stemma.png?=v2" alt="Santa Emma" className={className} />;
}

export function ApplicationMark({ className = 'h-10 w-auto' }) {
    return <ApplicationLogo className={className} />;
}

export function AuthenticationCardLogo({ className = 'h-20 w-auto' }) {
    return (
        <Link href="/" className="inline-flex items-center justify-center">
            <ApplicationLogo className={className} />
        </Link>
    );
}

export function Header() {
    const [open, setOpen] = useState(false);
    const items = [
        ['Inicio', routeTo('home', undefined, '/')],
        ['Nosotros', '#nosotros'],
        ['Proyectos', '#proyectos'],
        ['Catálogo', '#catalogo'],
        ['Contacto', '#contacto'],
    ];

    return (
        <header className="fixed left-0 right-0 top-0 z-30 mt-0.5 w-full rounded-b-md bg-gradient-to-tr from-white via-yellow-50 to-yellow-100 shadow-md transition-all duration-300">
            <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-0 lg:px-8" aria-label="Menú principal">
                <div>
                    <a href={routeTo('home', undefined, '/')} className="flex items-center space-x-2">
                        <ApplicationLogo className="h-16 w-auto drop-shadow-lg transition-all duration-300 lg:h-16" />
                    </a>
                </div>

                <div className="ml-[-2rem] hidden items-center space-x-8 lg:flex">
                    {items.map(([label, href]) => (
                        <a key={label} href={href} className="text-sm font-bold text-gray-800 transition hover:text-yellow-600">
                            {label}
                        </a>
                    ))}
                </div>

                <div className="hidden items-center gap-x-4 lg:flex">
                    <a href={routeTo('login', undefined, '/login')} className="rounded-md bg-yellow-500 px-2 py-2 text-sm font-bold text-white transition hover:bg-yellow-600">
                        Ingresar
                    </a>
                </div>

                <div className="ml-auto lg:hidden">
                    <button type="button" onClick={() => setOpen(!open)} className="text-gray-800 focus:outline-none" aria-label="Abrir navegación">
                        <span className="block text-3xl leading-none">{open ? '×' : '☰'}</span>
                    </button>
                </div>
            </nav>

            {open && (
                <div className="space-y-4 bg-gradient-to-tr from-white via-yellow-50 to-yellow-100 px-4 pb-6 pt-4 text-gray-800 shadow-md lg:hidden">
                    {items.map(([label, href]) => (
                        <a key={label} href={href} className="block text-sm font-bold transition hover:text-yellow-600" onClick={() => setOpen(false)}>
                            {label}
                        </a>
                    ))}
                    <hr className="my-2 border-yellow-200" />
                    <a href={routeTo('login', undefined, '/login')} className="block text-sm font-bold text-yellow-700 transition hover:text-yellow-800">
                        Ingresar
                    </a>
                </div>
            )}
        </header>
    );
}

export function Hero({ title, subtitle, image = '/img/h1.jpg' }) {
    return (
        <section className="relative isolate flex items-end overflow-hidden bg-gray-900 py-24 pt-36 sm:items-center sm:py-32 sm:pt-40">
            <div className="absolute inset-0 -z-20 bg-cover bg-center bg-scroll sm:bg-fixed" style={{ backgroundImage: `url(${image})` }}>
                <div className="h-full w-full bg-black/50 mix-blend-multiply" />
            </div>
            <div className="relative z-10 max-w-4xl px-6 text-left lg:px-20">
                <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-4 max-w-2xl text-lg leading-snug text-white sm:text-xl">
                        {subtitle}
                    </p>
                )}
                <div className="mt-8">
                    <a href="#catalogo" className="inline-block rounded border-2 border-white px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900 hover:shadow-xl">
                        CATÁLOGO
                    </a>
                </div>
            </div>
        </section>
    );
}

export function Footer({ light = false }) {
    return (
        <footer className={cx('relative overflow-hidden font-semibold text-white', light ? 'bg-white text-stone-900' : '')} style={light ? undefined : { backgroundColor: '#1c120a' }}>
            {!light && <div className="absolute inset-0 z-0 pointer-events-none opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #facc15 1px, transparent 1px)', backgroundSize: '60px 60px' }} />}
            <div className="relative z-20">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        <div className="flex flex-col items-center justify-center text-center">
                            <h2 className="text-sm font-semibold uppercase tracking-wide text-yellow-600">Inversiones Santa Emma</h2>
                            <p className={cx('mt-6 max-w-2xl text-sm font-semibold leading-6', light ? 'text-stone-700' : 'text-white')}>
                                Nos es grato dirigirnos a ustedes con el fin de presentar a nuestra empresa dedicada hace más de 10 años al transporte de áridos y arriendo de maquinarias, implementando hace 4 años la elaboración y ejecución de proyectos de ingeniería y construcción.
                            </p>
                            <div className="mt-8 text-sm">
                                <h3 className="font-bold uppercase text-yellow-600">Ubicación</h3>
                                <p className="mt-2">Puerto Montt: Camino Sector Piedra Azul, Carretera Austral Km 15.</p>
                                <p>Frutillar: Cristino Winkler 238, Frutillar Alto</p>
                            </div>
                            <div className="mt-8 flex flex-col text-left text-sm sm:flex-row sm:justify-center sm:space-x-16 sm:text-center">
                                <div>
                                    <h3 className="text-center font-bold uppercase text-yellow-600">Teléfono</h3>
                                    <p className="mt-4 text-center text-sm sm:text-base">+569 7135 4511</p>
                                </div>
                                <div className="mt-8 sm:mt-0">
                                    <h3 className="text-center font-bold uppercase text-yellow-600">Correo</h3>
                                    <p className="mt-4 text-center text-sm sm:text-base">
                                        <a href="mailto:contacto@santaemma.cl" className="font-semibold hover:underline">contacto@santaemma.cl</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 w-full overflow-hidden rounded-xl shadow-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23911.18141340326!2d-72.883711!3d-41.484818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9618314559fe796f%3A0xe2b2dc4adc7dda60!2sParcelacion%20Santa%20Elena!5e0!3m2!1ses-419!2scl!4v1746533114033!5m2!1ses-419!2scl"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa Santa Emma"
                            />
                        </div>
                    </div>
                    <div className="mt-16 flex flex-col items-center justify-between border-t border-yellow-600 pt-6 md:flex-row">
                        <p className={cx('text-sm font-semibold', light ? 'text-stone-700' : 'text-white')}>© 2024 Inversiones Santa Emma SpA. Todos los derechos reservados.</p>
                        <div className="mt-4 flex space-x-6 md:mt-0">
                            {['Facebook', 'Instagram', 'X'].map((name) => (
                                <a key={name} href="#" className="text-current transition-colors hover:text-yellow-400" aria-label={name}>{name}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export function Section({ eyebrow, title, children, className = '' }) {
    return (
        <section className={cx('px-4 py-20 sm:px-6 lg:px-8', className)}>
            <div className="mx-auto max-w-7xl">
                {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-700">{eyebrow}</p>}
                {title && <h2 className="mt-3 max-w-3xl text-3xl font-black text-stone-950 sm:text-4xl">{title}</h2>}
                <div className="mt-10">{children}</div>
            </div>
        </section>
    );
}

export function Servicios() {
    const items = [
        ['TRANSPORTES', 'Traslado seguro de maquinarias, áridos, asfaltos, escombros y más.', '/img/1.jpg?=v1'],
        ['MOVIMIENTO DE TIERRAS', 'Excavación, limpieza y habilitación de terrenos en todo tipo de suelo.', '/img/2.jpg?=v2'],
        ['CONSTRUCCIÓN', 'Infraestructura modular y obras civiles en oficinas, bodegas y viviendas.', '/img/3.jpg?=v2'],
        ['ARRIENDO DE MAQUINARIAS', 'Flota equipada disponible para faenas, obras y transporte especializado.', '/img/4.jpg?=v2'],
    ];
    return (
        <section id="servicios" className="bg-white py-0">
            <div className="grid w-full grid-cols-2 lg:grid-cols-4">
                {items.map(([title, text, image]) => (
                    <article key={title} className="group relative aspect-square overflow-hidden sm:aspect-[4/3]">
                        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/50 transition group-hover:bg-black/65" />
                        <div className="relative flex h-full flex-col justify-end p-4 text-white sm:p-6">
                            <h3 className="text-base font-extrabold sm:text-xl">{title}</h3>
                            <p className="mt-2 text-xs font-semibold leading-5 text-white/90 sm:text-sm">{text}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export function Maquinarias() {
    const items = [
        ['Camioneta Combustible GT TZ 38', '/img/maquinarias/CAMION-COMBUSTIBLE.jpg', 'Mercedes-Benz 1016, estanque homologado y operación de combustible.'],
        ['Camión Tolva LT HV 83', '/img/maquinarias/camiontolva.jpg', 'Capacidad 14 m3, motor Euro 5 y tracción 6x4.'],
        ['Cargador Frontal SEM 656D', '/img/maquinarias/cargadorfrontal.jpg', 'Balde 3 m3, motor Weichai y 17 toneladas de peso operativo.'],
        ['Chancadora Trakpactor', '/img/maquinarias/chancacadora.jpg', 'Planta impactadora móvil para trituración de roca.'],
        ['Excavadora Sunward SWE210', '/img/maquinarias/excavadora.jpg', 'Motor Isuzu, 21 toneladas y orugas de acero.'],
        ['Motoniveladora JD 670G', '/img/maquinarias/MOTONIVELADORA2.jpg', 'Motor John Deere 6.8L, cuchilla 3.66 m y 185 hp.'],
        ['Rodillo Compactador CS-533E', '/img/maquinarias/rollocompactador.png', 'Compactador vibratorio para subbases y asfaltos.'],
        ['Planta Seleccionadora de Áridos', '/img/maquinarias/seleccionadoraridos.jpg', 'Cribas vibratorias, transportadores integrados y granulometría variable.'],
    ];
    return (
        <section id="maquinarias" className="relative w-full overflow-hidden px-2 py-16 text-white sm:px-4 lg:px-6" style={{ backgroundColor: '#1c120a' }}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #facc15 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            <div className="relative z-20">
                <div className="mx-auto mb-14 max-w-7xl text-center">
                    <h2 className="text-lg font-semibold uppercase tracking-wide text-white">
                        Equipos y servicios actualizados para liderar la construcción moderna
                    </h2>
                </div>
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map(([name, image, description]) => (
                        <article key={name} className="overflow-hidden rounded-xl bg-white/10 shadow-xl ring-1 ring-white/10">
                            <img src={image} alt={name} className="h-56 w-full object-cover" />
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-white">{name}</h3>
                                <p className="mt-3 text-sm leading-6 text-white/80">{description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ProyectosDestacados() {
    const images = ['/img/p1.jpg?=v1', '/img/p2.jpg', '/img/p3.jpg?=v2', '/img/p4.jpg'];
    const [currentImage, setCurrentImage] = useState(0);
    const startX = useRef(0);
    const endX = useRef(0);
    const nextImage = () => setCurrentImage((value) => (value + 1) % images.length);
    const prevImage = () => setCurrentImage((value) => (value - 1 + images.length) % images.length);
    const endTouch = () => {
        const diff = startX.current - endX.current;
        if (Math.abs(diff) > 50) {
            diff > 0 ? nextImage() : prevImage();
        }
        startX.current = 0;
        endX.current = 0;
    };

    return (
        <section id="proyectos" className="relative isolate min-h-[80vh] px-10 py-20 text-white sm:px-8 lg:px-12">
            <div className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/img/h2.jpg')" }}>
                <div className="h-full w-full bg-black/60 mix-blend-multiply" />
            </div>
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold sm:text-5xl">Proyecto Destacado</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                        Obras estratégicas ejecutadas con precisión, sostenibilidad e impacto regional.
                    </p>
                </div>
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div className="relative">
                        <div
                            className="overflow-hidden rounded-xl shadow-xl"
                            onTouchStart={(event) => { startX.current = event.touches[0].clientX; }}
                            onTouchMove={(event) => { endX.current = event.touches[0].clientX; }}
                            onTouchEnd={endTouch}
                        >
                            <img src={images[currentImage]} className="h-[460px] w-full object-cover transition-all duration-500" alt="Imagen de proyecto" />
                        </div>
                        <button type="button" onClick={prevImage} className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-yellow-400 px-3 py-2 text-3xl text-yellow-400 transition hover:bg-yellow-500/20 hover:text-yellow-200" aria-label="Anterior">‹</button>
                        <button type="button" onClick={nextImage} className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-yellow-400 px-3 py-2 text-3xl text-yellow-400 transition hover:bg-yellow-500/20 hover:text-yellow-200" aria-label="Siguiente">›</button>
                    </div>
                    <div className="flex h-full flex-col items-center justify-center text-center">
                        <h3 className="text-3xl font-semibold text-white">Parque Eólico Puelche Sur</h3>
                        <p className="mt-4 max-w-xl text-gray-300">
                            Proyecto desarrollado en la Región de Los Lagos con una capacidad instalada de 165 MW, contribuyendo a la matriz energética renovable de Chile. Santa Emma ejecutó fundaciones para torres eólicas y obras anexas.
                        </p>
                        <p className="mt-4 max-w-xl text-gray-300">
                            Se destaca el cumplimiento de plazos, respeto por el entorno natural y colaboración con empresas internacionales del sector energético.
                        </p>
                        <ul className="mt-6 max-w-xl list-inside list-disc text-left text-gray-200">
                            <li>+50 fundaciones ejecutadas</li>
                            <li>Conexión vial de 12 km de caminos estabilizados</li>
                            <li>Impacto directo en comunidades rurales aledañas</li>
                        </ul>
                        <div className="mt-8">
                            <a href="/proyectos" className="inline-block rounded-md bg-yellow-500 px-5 py-3 font-semibold text-white transition hover:bg-yellow-400">
                                Conoce nuestros Proyectos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 h-6 bg-gradient-to-b from-transparent to-[#fffbea]" />
        </section>
    );
}

export function Testimonios() {
    const testimonios = [
        ['Gracias a Santa Emma pudimos levantar en tiempo récord nuestra planta. Su compromiso y profesionalismo fueron claves.', 'Carlos Riquelme', 'AgroSur', '/img/testimonios/agrosur.png'],
        ['Recomiendo su arriendo de maquinaria: equipos en excelente estado y atención personalizada. Volveremos a contratar.', 'Luis Araya', 'Independiente', '/img/testimonios/independiente.png'],
        ['Excelente experiencia en nuestro primer proyecto de inversión. Transparencia, informes detallados y confianza.', 'Ignacio Contreras', 'Inversionista', '/img/testimonios/inversionista.png'],
        ['Empresa responsable en los tiempos de ejecución de los proyectos. Nos encontramos muy satisfechos.', 'SINEP', 'SINEP ENERGÍA Y CONSTRUCCIÓN', '/img/testimonios/sinep.png'],
        ['Santa Emma ha sido un socio estratégico en nuestras obras civiles, aportando soluciones innovadoras y eficientes.', 'María López', 'Constructora Andes', '/img/testimonios/closandes.png'],
        ['La colaboración con Santa Emma en proyectos de urbanización ha sido ejemplar, destacando por su compromiso y calidad.', 'Pedro González', 'Urbanizaciones del Sur', '/img/testimonios/csur.png'],
    ];

    const TestimonialAuthor = ({ name, handle, image }) => (
        <figcaption className="mt-7 flex items-center gap-x-4">
            <img className="size-12 rounded-full border-2 border-yellow-400 bg-white object-cover p-0.5" src={image} alt={name} />
            <div>
                <div className="font-semibold text-gray-950">{name}</div>
                <div className="text-gray-500">@{handle}</div>
            </div>
        </figcaption>
    );

    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-yellow-50 to-yellow-100 py-20 sm:py-24">
            <div
                className="absolute inset-0 -z-10 pointer-events-none opacity-30 mix-blend-multiply"
                style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #facc15 1.1px, transparent 1px)', backgroundSize: '54px 54px' }}
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-700">Clientes que confían en Santa Emma</h2>
                    <p className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                        Relaciones construidas con cumplimiento, precisión y confianza
                    </p>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    <figure className="rounded-2xl border border-yellow-300 bg-white p-8 shadow-xl shadow-yellow-900/10 ring-1 ring-yellow-200 lg:col-span-3">
                        <blockquote className="mx-auto max-w-4xl text-center text-2xl font-semibold leading-10 tracking-tight text-gray-950">
                            <p>“Santa Emma fue fundamental en el éxito del Parque Eólico Puelche Sur. Su capacidad técnica y cumplimiento de plazos marcaron la diferencia.”</p>
                        </blockquote>
                        <figcaption className="mt-8 flex items-center justify-center gap-x-4 border-t border-gray-100 pt-7">
                            <img className="size-14 rounded-full border-2 border-yellow-400 bg-white object-cover p-0.5" src="/img/testimonios/ener.png" alt="Valentina Espinoza" />
                            <div>
                                <div className="font-semibold text-gray-950">Valentina Espinoza</div>
                                <div className="text-gray-500">@EnerChile</div>
                            </div>
                        </figcaption>
                    </figure>

                    {testimonios.map(([body, name, handle, image]) => (
                        <figure key={name} className="flex min-h-72 flex-col justify-between rounded-2xl border border-yellow-100 bg-white p-7 shadow-lg shadow-yellow-900/10 ring-1 ring-gray-900/5">
                            <blockquote className="text-base leading-8 text-gray-800">
                                <p>“{body}”</p>
                            </blockquote>
                            <TestimonialAuthor name={name} handle={handle} image={image} />
                        </figure>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 h-8 bg-gradient-to-b from-transparent to-[#1c120a]" />
        </section>
    );
}

export function ResumenEmpresa() {
    return (
        <Section eyebrow="Nosotros" title="Construcción e inversiones con raíz territorial">
            <p className="max-w-4xl text-lg leading-8 text-stone-700">Santa Emma integra experiencia técnica, administración de recursos y mirada estratégica para transformar proyectos en activos sostenibles.</p>
        </Section>
    );
}

export function Historia() {
    return (
        <Section eyebrow="Historia" title="Crecimiento ordenado desde la operación" className="bg-stone-50">
            <p className="max-w-4xl text-lg leading-8 text-stone-700">La empresa nace desde el trabajo en terreno y evoluciona hacia una plataforma de servicios, maquinaria e inversión.</p>
        </Section>
    );
}

export function Especialidades() {
    return <Servicios />;
}

export function Equipo() {
    return (
        <Section eyebrow="Equipo" title="Dirección técnica y gestión cercana">
            <div className="grid gap-5 md:grid-cols-3">
                {['Operaciones', 'Administración', 'Proyectos'].map((name) => (
                    <div key={name} className="rounded-lg border border-stone-200 bg-white p-6">
                        <h3 className="font-bold text-stone-950">{name}</h3>
                        <p className="mt-2 text-sm text-stone-600">Responsables conectados con terreno y clientes.</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export function FormularioContacto() {
    return (
        <Section eyebrow="Contacto" title="Cuéntanos qué necesitas">
            <form className="grid max-w-3xl gap-4 rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
                <input className="rounded-md border-stone-300" placeholder="Nombre" />
                <input className="rounded-md border-stone-300" placeholder="Correo" type="email" />
                <textarea className="min-h-36 rounded-md border-stone-300" placeholder="Mensaje" />
                <button type="button" className="rounded-md bg-yellow-500 px-5 py-3 font-bold text-stone-950 hover:bg-yellow-400">Enviar mensaje</button>
            </form>
        </Section>
    );
}

export function ContactFooter() {
    return <Footer light />;
}

export function ModalWelcome({ onClose }) {
    const [canClose, setCanClose] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => setCanClose(true), 700);
        return () => window.clearTimeout(timer);
    }, []);

    const handleClick = () => {
        if (canClose) {
            onClose?.();
        }
    };

    return (
        <div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 px-2 sm:px-4"
            onClick={handleClick}
        >
            <div
                className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl bg-yellow-400 p-6 text-center text-gray-900 shadow-2xl sm:p-10"
                onClick={handleClick}
            >
                <h2 className="mb-4 text-2xl font-extrabold sm:text-3xl">NUESTRO COMPROMISO</h2>

                <img src="/stemma.png" alt="Logo Santa Emma" className="mx-auto mb-6 h-28 sm:h-32" />

                <h3 className="mt-2 text-lg font-semibold sm:text-xl">MARCELO OYARZUN ARANGUIZ</h3>

                <p className="mt-4 text-sm text-gray-800 sm:text-base">
                    Le doy la bienvenida a Constructora Santa Emma. Somos una empresa comprometida en cada uno de nuestros proyectos en ejecución.
                </p>
            </div>
        </div>
    );
}

export function PrimaryButton({ className = '', disabled = false, children, ...props }) {
    return <button {...props} disabled={disabled} className={cx('inline-flex items-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-stone-950 transition hover:bg-yellow-400 disabled:opacity-25', className)}>{children}</button>;
}

export function SecondaryButton({ className = '', children, ...props }) {
    return <button {...props} className={cx('inline-flex items-center rounded-md border border-stone-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-stone-700 shadow-sm transition hover:bg-stone-50', className)}>{children}</button>;
}

export function DangerButton({ className = '', children, ...props }) {
    return <button {...props} className={cx('inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-red-500', className)}>{children}</button>;
}

export function InputLabel({ value, children, className = '', ...props }) {
    return <label {...props} className={cx('block text-sm font-medium text-stone-700', className)}>{value || children}</label>;
}

export function InputError({ message, className = '' }) {
    return message ? <p className={cx('text-sm text-red-600', className)}>{message}</p> : null;
}

export const TextInput = React.forwardRef(function TextInput({ className = '', value, onChange, ...props }, ref) {
    return <input {...props} ref={ref} value={value ?? ''} onChange={onChange} className={cx('rounded-md border-stone-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500', className)} />;
});

export function Checkbox({ checked = false, onChange, className = '', ...props }) {
    return <input {...props} type="checkbox" checked={checked} onChange={(event) => onChange?.(event.target.checked)} className={cx('rounded border-stone-300 text-yellow-600 shadow-sm focus:ring-yellow-500', className)} />;
}

export function AuthenticationCard({ children, logo }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-stone-950 px-4 py-12">
            <div className="mb-6">{logo || <AuthenticationCardLogo />}</div>
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">{children}</div>
        </div>
    );
}

export function SectionBorder() {
    return <div className="hidden sm:block"><div className="py-8"><div className="border-t border-stone-200" /></div></div>;
}

export function ActionMessage({ on, children, className = '' }) {
    return <span className={cx('text-sm text-stone-600 transition', on ? 'opacity-100' : 'opacity-0', className)}>{children}</span>;
}

export function FormSection({ title, description, children, actions, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <h3 className="text-lg font-medium text-stone-900">{title}</h3>
                {description && <p className="mt-1 text-sm text-stone-600">{description}</p>}
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="rounded-lg bg-white p-6 shadow sm:overflow-hidden">
                    <div className="grid gap-6">{children}</div>
                    {actions && <div className="mt-6 flex items-center justify-end gap-3 bg-stone-50 px-4 py-3 text-right">{actions}</div>}
                </div>
            </div>
        </form>
    );
}

export function ActionSection({ title, description, children }) {
    return (
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <h3 className="text-lg font-medium text-stone-900">{title}</h3>
                {description && <p className="mt-1 text-sm text-stone-600">{description}</p>}
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="rounded-lg bg-white p-6 shadow">{children}</div>
            </div>
        </div>
    );
}

export function Modal({ show = false, onClose = () => {}, maxWidth = '2xl', children }) {
    if (!show) return null;
    const widths = { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg', xl: 'max-w-xl', '2xl': 'max-w-2xl' };
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0">
            <div className="fixed inset-0 bg-stone-950/60" onClick={onClose} />
            <div className={cx('relative mx-auto mt-16 rounded-lg bg-white shadow-xl', widths[maxWidth] || widths['2xl'])}>{children}</div>
        </div>
    );
}

export function DialogModal({ show, onClose, title, content, footer, children }) {
    return (
        <Modal show={show} onClose={onClose}>
            <div className="px-6 py-4">
                {title && <h3 className="text-lg font-medium text-stone-900">{title}</h3>}
                <div className="mt-4 text-sm text-stone-600">{content || children}</div>
            </div>
            {footer && <div className="flex justify-end gap-3 bg-stone-100 px-6 py-4">{footer}</div>}
        </Modal>
    );
}

export function ConfirmationModal(props) {
    return <DialogModal {...props} />;
}

export function Dropdown({ trigger, children }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button as={Fragment}>{trigger}</Menu.Button>
            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">{children}</Menu.Items>
            </Transition>
        </Menu>
    );
}

export function DropdownLink({ href, as = 'link', children, ...props }) {
    const cls = 'block w-full px-4 py-2 text-left text-sm leading-5 text-stone-700 hover:bg-stone-100 focus:bg-stone-100 focus:outline-none';
    if (as === 'button') return <button type="button" className={cls} {...props}>{children}</button>;
    return <Link href={href || '#'} className={cls} {...props}>{children}</Link>;
}

export function NavLink({ href, active, children }) {
    return <Link href={href} className={cx('inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium', active ? 'border-yellow-500 text-stone-900' : 'border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-700')}>{children}</Link>;
}

export function ResponsiveNavLink({ href, active, as = 'link', children, ...props }) {
    const cls = cx('block w-full border-l-4 py-2 pe-4 ps-3 text-start text-base font-medium', active ? 'border-yellow-500 bg-yellow-50 text-yellow-800' : 'border-transparent text-stone-600 hover:border-stone-300 hover:bg-stone-50 hover:text-stone-800');
    if (as === 'button') return <button type="button" className={cls} {...props}>{children}</button>;
    return <Link href={href || '#'} className={cls}>{children}</Link>;
}

export function Banner() {
    const { props } = usePage();
    const flash = props?.jetstream?.flash || {};
    const message = flash.banner || flash.message;
    if (!message) return null;
    return <div className="bg-yellow-500 px-4 py-3 text-center text-sm font-semibold text-stone-950">{message}</div>;
}

export function SimplePanel({ title, children }) {
    return (
        <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-stone-950">{title}</h2>
            <div className="mt-4 text-sm leading-6 text-stone-600">{children}</div>
        </div>
    );
}

export { Fragment, Link, Menu, Transition, router, useEffect, useMemo, usePage, useRef, useState };
