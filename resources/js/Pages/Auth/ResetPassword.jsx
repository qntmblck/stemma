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

export default function ResetPassword({ email, token }) {
    const form = useForm({ token, email, password: '', password_confirmation: '' });
    const submit = (e) => {
        e.preventDefault();
        form.post(routeTo('password.update'), { onFinish: () => form.reset('password', 'password_confirmation') });
    };
    return (
        <AuthenticationCard logo={<AuthenticationCardLogo />}>
            <Head title="Reset Password" />
            <form onSubmit={submit}>
                {[
                    ['email', 'Email', 'email'],
                    ['password', 'Password', 'password'],
                    ['password_confirmation', 'Confirm Password', 'password'],
                ].map(([field, label, type]) => (
                    <div key={field} className="mt-4 first:mt-0">
                        <InputLabel htmlFor={field} value={label} />
                        <TextInput id={field} value={form.data[field]} onChange={(e) => form.setData(field, e.target.value)} type={type} className="mt-1 block w-full" required />
                        <InputError className="mt-2" message={form.errors[field]} />
                    </div>
                ))}
                <div className="mt-4 flex justify-end"><PrimaryButton disabled={form.processing}>Reset Password</PrimaryButton></div>
            </form>
        </AuthenticationCard>
    );
}

