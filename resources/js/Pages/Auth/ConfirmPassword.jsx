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

export default function ConfirmPassword() {
    const form = useForm({ password: '' });
    const input = useRef(null);
    const submit = (e) => {
        e.preventDefault();
        form.post(routeTo('password.confirm'), { onFinish: () => { form.reset(); input.current?.focus(); } });
    };
    return (
        <AuthenticationCard logo={<AuthenticationCardLogo />}>
            <Head title="Secure Area" />
            <p className="mb-4 text-sm text-stone-600">Confirma tu contraseña antes de continuar.</p>
            <form onSubmit={submit}>
                <InputLabel htmlFor="password" value="Password" />
                <TextInput id="password" ref={input} value={form.data.password} onChange={(e) => form.setData('password', e.target.value)} type="password" className="mt-1 block w-full" required autoFocus autoComplete="current-password" />
                <InputError className="mt-2" message={form.errors.password} />
                <div className="mt-4 flex justify-end"><PrimaryButton disabled={form.processing}>Confirm</PrimaryButton></div>
            </form>
        </AuthenticationCard>
    );
}

