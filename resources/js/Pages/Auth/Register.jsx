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

export default function Register() {
    const { props } = usePage();
    const form = useForm({ name: '', email: '', password: '', password_confirmation: '', terms: false });
    const submit = (e) => {
        e.preventDefault();
        form.post(routeTo('register'), { onFinish: () => form.reset('password', 'password_confirmation') });
    };
    return (
        <AuthenticationCard logo={<AuthenticationCardLogo />}>
            <Head title="Register" />
            <form onSubmit={submit}>
                {[
                    ['name', 'Name', 'text', 'name'],
                    ['email', 'Email', 'email', 'username'],
                    ['password', 'Password', 'password', 'new-password'],
                    ['password_confirmation', 'Confirm Password', 'password', 'new-password'],
                ].map(([field, label, type, autocomplete]) => (
                    <div key={field} className="mt-4 first:mt-0">
                        <InputLabel htmlFor={field} value={label} />
                        <TextInput id={field} value={form.data[field]} onChange={(e) => form.setData(field, e.target.value)} type={type} className="mt-1 block w-full" required autoComplete={autocomplete} />
                        <InputError className="mt-2" message={form.errors[field]} />
                    </div>
                ))}
                {props?.jetstream?.hasTermsAndPrivacyPolicyFeature && (
                    <label className="mt-4 flex items-center gap-2 text-sm text-stone-600">
                        <Checkbox checked={form.data.terms} onChange={(v) => form.setData('terms', v)} required />
                        Acepto los términos y políticas de privacidad.
                    </label>
                )}
                <div className="mt-4 flex items-center justify-end">
                    <Link href={routeTo('login')} className="text-sm text-stone-600 underline">Already registered?</Link>
                    <PrimaryButton className="ms-4" disabled={form.processing}>Register</PrimaryButton>
                </div>
            </form>
        </AuthenticationCard>
    );
}

