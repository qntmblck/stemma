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

export default function ForgotPassword({ status }) {
    const form = useForm({ email: '' });
    const submit = (e) => { e.preventDefault(); form.post(routeTo('password.email')); };
    return (
        <AuthenticationCard logo={<AuthenticationCardLogo />}>
            <Head title="Restablecer contraseña" />
            <p className="mb-6 text-sm text-stone-600">Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>
            {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
            <form onSubmit={submit}>
                <InputLabel htmlFor="email" value="Correo electrónico" />
                <TextInput id="email" value={form.data.email} onChange={(e) => form.setData('email', e.target.value)} type="email" className="mt-1 block w-full" required autoFocus autoComplete="username" />
                <InputError className="mt-2" message={form.errors.email} />
                <div className="mt-4 flex justify-end"><PrimaryButton disabled={form.processing}>Enviar enlace</PrimaryButton></div>
            </form>
        </AuthenticationCard>
    );
}

