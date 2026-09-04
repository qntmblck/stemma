import { Head } from '@inertiajs/react';
import { useState } from 'react';
import {
    ApplicationMark,
    Banner,
    Dropdown,
    DropdownLink,
    Link,
    NavLink,
    ResponsiveNavLink,
    currentRoute,
    routeTo,
    router,
    usePage,
} from '@/Components/Common.jsx';

export default function AppLayout({ title, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { props } = usePage();
    const user = props?.auth?.user || {};
    const jetstream = props?.jetstream || {};

    const logout = () => router.post(routeTo('logout'));

    return (
        <div>
            <Head title={title} />
            <Banner />
            <div className="min-h-screen bg-stone-100">
                <nav className="border-b border-yellow-200 bg-gradient-to-br from-white to-yellow-50 shadow-sm">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex items-center">
                                <Link href={routeTo('dashboard')} className="flex shrink-0 items-center">
                                    <ApplicationMark className="block h-9 w-auto" />
                                </Link>
                                <div className="hidden space-x-8 sm:ms-10 sm:flex">
                                    <NavLink href={routeTo('home', undefined, '/')} active={currentRoute('home')}>Inicio</NavLink>
                                    <NavLink href={routeTo('dashboard')} active={currentRoute('dashboard')}>Panel de Usuario</NavLink>
                                </div>
                            </div>

                            <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                <Dropdown
                                    trigger={
                                        <button type="button" className="inline-flex items-center rounded-md border bg-white px-3 py-2 text-sm font-medium text-stone-500 transition hover:text-stone-700">
                                            {user.name || 'Usuario'}
                                            <span className="ms-2">⌄</span>
                                        </button>
                                    }
                                >
                                    <div className="block px-4 py-2 text-xs text-stone-400">Gestionar cuenta</div>
                                    <DropdownLink href={routeTo('profile.show')}>Perfil</DropdownLink>
                                    {jetstream.hasApiFeatures && <DropdownLink href={routeTo('api-tokens.index')}>Tokens de API</DropdownLink>}
                                    <div className="my-2 border-t border-stone-200" />
                                    <DropdownLink as="button" onClick={logout}>Cerrar sesión</DropdownLink>
                                </Dropdown>
                            </div>

                            <div className="-me-2 flex items-center sm:hidden">
                                <button onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)} className="rounded-md p-2 text-stone-400 transition hover:bg-stone-100 hover:text-stone-500">
                                    {showingNavigationDropdown ? '×' : '☰'}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                        <div className="space-y-1 pb-3 pt-2">
                            <ResponsiveNavLink href={routeTo('dashboard')} active={currentRoute('dashboard')}>Dashboard</ResponsiveNavLink>
                        </div>
                        <div className="border-t border-stone-200 pb-1 pt-4">
                            <div className="px-4">
                                <div className="text-base font-medium text-stone-800">{user.name}</div>
                                <div className="text-sm font-medium text-stone-500">{user.email}</div>
                            </div>
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={routeTo('profile.show')}>Perfil</ResponsiveNavLink>
                                {jetstream.hasApiFeatures && <ResponsiveNavLink href={routeTo('api-tokens.index')}>Tokens de API</ResponsiveNavLink>}
                                <ResponsiveNavLink as="button" onClick={logout}>Cerrar sesión</ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                {header && (
                    <header className="border-b border-stone-200 bg-gradient-to-br from-yellow-100 to-white shadow-sm">
                        <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </div>
    );
}

