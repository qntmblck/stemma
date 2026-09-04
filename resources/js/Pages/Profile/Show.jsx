import AppLayout from '@/Layouts/AppLayout.jsx';
import SectionBorder from '@/Components/SectionBorder.jsx';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.jsx';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.jsx';
import TwoFactorAuthenticationForm from './Partials/TwoFactorAuthenticationForm.jsx';
import LogoutOtherBrowserSessionsForm from './Partials/LogoutOtherBrowserSessionsForm.jsx';
import DeleteUserForm from './Partials/DeleteUserForm.jsx';
import { usePage } from '@inertiajs/react';

export default function Show({ sessions }) {
    const { props } = usePage();
    return (
        <AppLayout title="Perfil" header={<h2 className="text-xl font-semibold leading-tight text-stone-800">Perfil</h2>}>
            <div className="py-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <UpdateProfileInformationForm user={props.auth?.user} />
                    <SectionBorder />
                    <UpdatePasswordForm />
                    {props.jetstream?.canManageTwoFactorAuthentication && (
                        <>
                            <SectionBorder />
                            <TwoFactorAuthenticationForm requiresConfirmation={props.confirmsTwoFactorAuthentication} />
                        </>
                    )}
                    <SectionBorder />
                    <LogoutOtherBrowserSessionsForm sessions={sessions} />
                    {props.jetstream?.hasAccountDeletionFeatures && (
                        <>
                            <SectionBorder />
                            <DeleteUserForm />
                        </>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

