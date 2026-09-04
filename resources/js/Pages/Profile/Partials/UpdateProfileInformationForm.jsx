import { Link, useForm } from '@inertiajs/react';
import ActionMessage from '@/Components/ActionMessage.jsx';
import FormSection from '@/Components/FormSection.jsx';
import InputError from '@/Components/InputError.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import TextInput from '@/Components/TextInput.jsx';
import { routeTo } from '@/Components/Common.jsx';

export default function UpdateProfileInformationForm({ user = {} }) {
    const form = useForm({ _method: 'PUT', name: user.name || '', email: user.email || '', photo: null });
    const submit = (e) => {
        e.preventDefault();
        form.post(routeTo('user-profile-information.update'), { preserveScroll: true });
    };
    return (
        <FormSection title="Información de perfil" description="Actualiza tu nombre y correo." onSubmit={submit} actions={<><ActionMessage on={form.recentlySuccessful}>Guardado.</ActionMessage><PrimaryButton disabled={form.processing}>Guardar</PrimaryButton></>}>
            <div>
                <InputLabel htmlFor="name" value="Nombre" />
                <TextInput id="name" value={form.data.name} onChange={(e) => form.setData('name', e.target.value)} className="mt-1 block w-full" required />
                <InputError className="mt-2" message={form.errors.name} />
            </div>
            <div>
                <InputLabel htmlFor="email" value="Correo" />
                <TextInput id="email" value={form.data.email} onChange={(e) => form.setData('email', e.target.value)} type="email" className="mt-1 block w-full" required />
                <InputError className="mt-2" message={form.errors.email} />
                {user.email_verified_at === null && <p className="mt-2 text-sm text-stone-600">Tu correo no está verificado. <Link href={routeTo('verification.send')} method="post" as="button" className="underline">Reenviar verificación</Link></p>}
            </div>
        </FormSection>
    );
}

