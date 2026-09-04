import AppLayout from '@/Layouts/AppLayout.jsx';
import ServiciosCategoria1 from '@/Components/ServiciosCategoria1.jsx';
import ServiciosCategoria2 from '@/Components/ServiciosCategoria2.jsx';
import ServiciosCategoria3 from '@/Components/ServiciosCategoria3.jsx';

export default function Dashboard() {
    return (
        <AppLayout title="Panel de Usuario">
            <div className="min-h-screen bg-[#1c120a] py-6">
                <div className="mx-auto max-w-7xl space-y-12 sm:px-6 lg:px-8">
                    <div className="px-4 text-center text-white">
                        <h1 className="text-3xl font-black">Panel de Usuario</h1>
                        <p className="mt-2 text-yellow-400">Servicios y administración de Santa Emma</p>
                    </div>
                    <ServiciosCategoria1 />
                    <ServiciosCategoria2 />
                    <ServiciosCategoria3 />
                </div>
            </div>
        </AppLayout>
    );
}

