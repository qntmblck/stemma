import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import ActionMessage from '@/Components/ActionMessage.jsx';
import ActionSection from '@/Components/ActionSection.jsx';
import DialogModal from '@/Components/DialogModal.jsx';
import InputError from '@/Components/InputError.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import SecondaryButton from '@/Components/SecondaryButton.jsx';
import TextInput from '@/Components/TextInput.jsx';
import { routeTo } from '@/Components/Common.jsx';

export default function LogoutOtherBrowserSessionsForm({ sessions = [] }) {
    const [confirming, setConfirming] = useState(false);
    const form = useForm({ password: '' });
    const logoutOtherBrowserSessions = () => form.delete(routeTo('other-browser-sessions.destroy'), { preserveScroll: true, onSuccess: () => setConfirming(false), onFinish: () => form.reset() });
    return (
        <ActionSection title="Sesiones del navegador" description="Administra y cierra sesiones activas en otros dispositivos.">
            <div className="space-y-3">{sessions.map((session, idx) => <div key={idx} className="text-sm text-stone-600">{session.agent?.platform || 'Dispositivo'} - {session.ip_address}</div>)}</div>
            <div className="mt-5 flex items-center gap-3"><PrimaryButton onClick={() => setConfirming(true)}>Cerrar otras sesiones</PrimaryButton><ActionMessage on={form.recentlySuccessful}>Listo.</ActionMessage></div>
            <DialogModal show={confirming} onClose={() => setConfirming(false)} title="Cerrar otras sesiones" content={<><p>Ingresa tu contraseña para confirmar.</p><TextInput type="password" className="mt-4 w-full" value={form.data.password} onChange={(e) => form.setData('password', e.target.value)} /><InputError className="mt-2" message={form.errors.password} /></>} footer={<><SecondaryButton onClick={() => setConfirming(false)}>Cancelar</SecondaryButton><PrimaryButton onClick={logoutOtherBrowserSessions} disabled={form.processing}>Cerrar sesiones</PrimaryButton></>} />
        </ActionSection>
    );
}

