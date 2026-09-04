import { useRef } from 'react';
import { useForm } from '@inertiajs/react';
import ActionMessage from '@/Components/ActionMessage.jsx';
import FormSection from '@/Components/FormSection.jsx';
import InputError from '@/Components/InputError.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import TextInput from '@/Components/TextInput.jsx';
import { routeTo } from '@/Components/Common.jsx';

export default function UpdatePasswordForm() {
    const passwordInput = useRef(null);
    const currentPasswordInput = useRef(null);
    const form = useForm({ current_password: '', password: '', password_confirmation: '' });
    const submit = (e) => {
        e.preventDefault();
        form.put(routeTo('user-password.update'), { preserveScroll: true, onSuccess: () => form.reset(), onError: () => (form.errors.password ? passwordInput.current?.focus() : currentPasswordInput.current?.focus()) });
    };
    return (
        <FormSection title="Actualizar contraseña" description="Usa una contraseña larga y segura." onSubmit={submit} actions={<><ActionMessage on={form.recentlySuccessful}>Guardado.</ActionMessage><PrimaryButton disabled={form.processing}>Guardar</PrimaryButton></>}>
            <div><InputLabel htmlFor="current_password" value="Contraseña actual" /><TextInput id="current_password" ref={currentPasswordInput} value={form.data.current_password} onChange={(e) => form.setData('current_password', e.target.value)} type="password" className="mt-1 block w-full" autoComplete="current-password" /><InputError className="mt-2" message={form.errors.current_password} /></div>
            <div><InputLabel htmlFor="password" value="Nueva contraseña" /><TextInput id="password" ref={passwordInput} value={form.data.password} onChange={(e) => form.setData('password', e.target.value)} type="password" className="mt-1 block w-full" autoComplete="new-password" /><InputError className="mt-2" message={form.errors.password} /></div>
            <div><InputLabel htmlFor="password_confirmation" value="Confirmar contraseña" /><TextInput id="password_confirmation" value={form.data.password_confirmation} onChange={(e) => form.setData('password_confirmation', e.target.value)} type="password" className="mt-1 block w-full" autoComplete="new-password" /><InputError className="mt-2" message={form.errors.password_confirmation} /></div>
        </FormSection>
    );
}

