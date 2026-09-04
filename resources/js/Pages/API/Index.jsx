import AppLayout from '@/Layouts/AppLayout.jsx';
import ApiTokenManager from './Partials/ApiTokenManager.jsx';

export default function Index({ tokens, availablePermissions, defaultPermissions }) {
    return (
        <AppLayout title="Tokens de API" header={<h2 className="text-xl font-semibold leading-tight text-stone-800">Tokens de API</h2>}>
            <div className="py-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <ApiTokenManager tokens={tokens} availablePermissions={availablePermissions} defaultPermissions={defaultPermissions} />
                </div>
            </div>
        </AppLayout>
    );
}

