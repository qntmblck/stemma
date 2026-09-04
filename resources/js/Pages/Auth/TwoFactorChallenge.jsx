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

export default function TwoFactorChallenge() {
    const [recovery, setRecovery] = useState(false);
    const form = useForm({ code: '', recovery_code: '' });
    const submit = (e) => { e.preventDefault(); form.post(routeTo('two-factor.login')); };
    return (
        <AuthenticationCard logo={<AuthenticationCardLogo />}>
            <Head title="Two-factor Confirmation" />
            <p className="mb-4 text-sm text-stone-600">{recovery ? 'Ingresa uno de tus códigos de recuperación.' : 'Ingresa el código de tu aplicación autenticadora.'}</p>
            <form onSubmit={submit}>
                {!recovery ? (
                    <div>
                        <InputLabel htmlFor="code" value="Code" />
                        <TextInput id="code" value={form.data.code} onChange={(e) => form.setData('code', e.target.value)} type="text" inputMode="numeric" className="mt-1 block w-full" autoFocus autoComplete="one-time-code" />
                        <InputError className="mt-2" message={form.errors.code} />
                    </div>
                ) : (
                    <div>
                        <InputLabel htmlFor="recovery_code" value="Recovery Code" />
                        <TextInput id="recovery_code" value={form.data.recovery_code} onChange={(e) => form.setData('recovery_code', e.target.value)} type="text" className="mt-1 block w-full" autoComplete="one-time-code" />
                        <InputError className="mt-2" message={form.errors.recovery_code} />
                    </div>
                )}
                <div className="mt-4 flex items-center justify-end">
                    <button type="button" className="text-sm text-stone-600 underline" onClick={() => setRecovery(!recovery)}>{recovery ? 'Use an authentication code' : 'Use a recovery code'}</button>
                    <PrimaryButton className="ms-4" disabled={form.processing}>Log in</PrimaryButton>
                </div>
            </form>
        </AuthenticationCard>
    );
}

