import { Head } from '@inertiajs/react';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.jsx';

export default function PrivacyPolicy({ policy }) {
    return (
        <div className="min-h-screen bg-stone-100 px-4 py-10">
            <Head title="Privacy Policy" />
            <div className="mx-auto mb-8 max-w-3xl text-center"><AuthenticationCardLogo /></div>
            <div className="prose mx-auto max-w-3xl rounded-lg bg-white p-8 shadow" dangerouslySetInnerHTML={{ __html: policy || '<h1>Privacy Policy</h1>' }} />
        </div>
    );
}

