import ActionSection from '@/Components/ActionSection.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import DangerButton from '@/Components/DangerButton.jsx';
import { router, usePage, routeTo } from '@/Components/Common.jsx';

export default function TwoFactorAuthenticationForm() {
    const { props } = usePage();
    const enabled = Boolean(props.auth?.user?.two_factor_enabled);
    return (
        <ActionSection title="Autenticación de dos factores" description="Agrega seguridad adicional a tu cuenta.">
            <p className="mb-4 text-sm text-stone-600">{enabled ? 'La autenticación de dos factores está activa.' : 'La autenticación de dos factores no está activa.'}</p>
            {enabled ? <DangerButton onClick={() => router.delete(routeTo('two-factor.disable'))}>Desactivar</DangerButton> : <PrimaryButton onClick={() => router.post(routeTo('two-factor.enable'))}>Activar</PrimaryButton>}
        </ActionSection>
    );
}

