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

export default function Login({ canResetPassword, status }) {
    const form = useForm({ email: '', password: '', remember: false });
    const submit = (e) => {
        e.preventDefault();
        form.transform((data) => ({ ...data, remember: data.remember ? 'on' : '' })).post(routeTo('login'), {
            onFinish: () => form.reset('password'),
        });
    };
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1c120a] px-4 py-12">
            <Head title="Iniciar sesión" />
            <div className="relative z-10 w-full max-w-md space-y-8 rounded-xl border border-yellow-300/20 bg-gradient-to-br from-[#eab308] to-white p-8 text-black shadow-xl sm:p-10">
                <div className="flex justify-center"><AuthenticationCardLogo className="h-24 w-auto" /></div>
                {status && <div className="text-center text-sm font-medium text-green-700">{status}</div>}
                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <InputLabel htmlFor="email" value="Correo electrónico" className="text-black" />
                        <TextInput id="email" value={form.data.email} onChange={(e) => form.setData('email', e.target.value)} type="email" className="mt-1 block w-full bg-white text-black" required autoFocus autoComplete="username" />
                        <InputError className="mt-2 text-red-700" message={form.errors.email} />
                    </div>
                    <div>
                        <InputLabel htmlFor="password" value="Contraseña" className="text-black" />
                        <TextInput id="password" value={form.data.password} onChange={(e) => form.setData('password', e.target.value)} type="password" className="mt-1 block w-full bg-white text-black" required autoComplete="current-password" />
                        <InputError className="mt-2 text-red-700" message={form.errors.password} />
                    </div>
                    <div className="flex items-center justify-between text-sm text-stone-800">
                        <label className="flex items-center gap-2"><Checkbox checked={form.data.remember} onChange={(v) => form.setData('remember', v)} name="remember" />Recordarme</label>
                        {canResetPassword && <Link href={routeTo('password.request')} className="text-black hover:text-yellow-700">¿Olvidaste tu contraseña?</Link>}
                    </div>
                    <PrimaryButton className="w-full justify-center" disabled={form.processing}>Iniciar sesión</PrimaryButton>
                </form>
            </div>
        </div>
    );
}

