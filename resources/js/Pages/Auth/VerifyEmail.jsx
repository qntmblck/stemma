import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useRef, useState } from 'react';
import AuthenticationCard from '@/Components/AuthenticationCard.jsx';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.jsx';
import Checkbox from '@/Components/Checkbox.jsx';
import InputError from '@/Components/InputError.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import TextInput from '@/Components/TextInput.jsx';
import { routeTo } from '@/Components/Common.jsx';

export default function VerifyEmail({ status }) {
    const form = useForm({});
    const submit = (e) => { e.preventDefault(); form.post(routeTo('verification.send')); };
    return (
        <AuthenticationCard logo={<AuthenticationCardLogo />}>
            <Head title="Email Verification" />
            <p className="mb-4 text-sm text-stone-600">Verifica tu correo electrónico usando el enlace que enviamos.</p>
            {status === 'verification-link-sent' && <div className="mb-4 text-sm font-medium text-green-600">Se envió un nuevo enlace de verificación.</div>}
            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={form.processing}>Resend Verification Email</PrimaryButton>
                    <div>
                        <Link href={routeTo('profile.show')} className="text-sm text-stone-600 underline">Edit Profile</Link>
                        <Link href={routeTo('logout')} method="post" as="button" className="ms-2 text-sm text-stone-600 underline">Log Out</Link>
                    </div>
                </div>
            </form>
        </AuthenticationCard>
    );
}

