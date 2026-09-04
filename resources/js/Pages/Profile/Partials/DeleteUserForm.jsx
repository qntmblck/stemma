import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import ActionSection from '@/Components/ActionSection.jsx';
import DangerButton from '@/Components/DangerButton.jsx';
import DialogModal from '@/Components/DialogModal.jsx';
import InputError from '@/Components/InputError.jsx';
import SecondaryButton from '@/Components/SecondaryButton.jsx';
import TextInput from '@/Components/TextInput.jsx';
import { routeTo } from '@/Components/Common.jsx';

export default function DeleteUserForm() {
    const [confirming, setConfirming] = useState(false);
    const form = useForm({ password: '' });
    const deleteUser = () => form.delete(routeTo('current-user.destroy'), { preserveScroll: true });
    return (
        <ActionSection title="Eliminar cuenta" description="Elimina permanentemente tu cuenta.">
            <DangerButton onClick={() => setConfirming(true)}>Eliminar cuenta</DangerButton>
            <DialogModal show={confirming} onClose={() => setConfirming(false)} title="Eliminar cuenta" content={<><p>Esta acción no se puede deshacer. Ingresa tu contraseña.</p><TextInput type="password" className="mt-4 w-full" value={form.data.password} onChange={(e) => form.setData('password', e.target.value)} /><InputError className="mt-2" message={form.errors.password} /></>} footer={<><SecondaryButton onClick={() => setConfirming(false)}>Cancelar</SecondaryButton><DangerButton onClick={deleteUser} disabled={form.processing}>Eliminar</DangerButton></>} />
        </ActionSection>
    );
}

