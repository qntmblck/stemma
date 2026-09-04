import { useForm } from '@inertiajs/react';
import ActionSection from '@/Components/ActionSection.jsx';
import Checkbox from '@/Components/Checkbox.jsx';
import DangerButton from '@/Components/DangerButton.jsx';
import FormSection from '@/Components/FormSection.jsx';
import InputError from '@/Components/InputError.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import TextInput from '@/Components/TextInput.jsx';
import { routeTo } from '@/Components/Common.jsx';

export default function ApiTokenManager({ tokens = [], availablePermissions = [], defaultPermissions = [] }) {
    const form = useForm({ name: '', permissions: defaultPermissions });
    const createApiToken = (e) => {
        e.preventDefault();
        form.post(routeTo('api-tokens.store'), { preserveScroll: true, onSuccess: () => form.reset() });
    };
    const toggle = (permission, checked) => form.setData('permissions', checked ? [...form.data.permissions, permission] : form.data.permissions.filter((p) => p !== permission));
    return (
        <div>
            <FormSection title="Crear token de API" description="Los tokens permiten acceso programático a la aplicación." onSubmit={createApiToken} actions={<PrimaryButton disabled={form.processing}>Crear</PrimaryButton>}>
                <div><InputLabel htmlFor="name" value="Nombre" /><TextInput id="name" value={form.data.name} onChange={(e) => form.setData('name', e.target.value)} className="mt-1 block w-full" /><InputError className="mt-2" message={form.errors.name} /></div>
                {availablePermissions.length > 0 && <div className="grid gap-2">{availablePermissions.map((permission) => <label key={permission} className="flex items-center gap-2 text-sm"><Checkbox checked={form.data.permissions.includes(permission)} onChange={(checked) => toggle(permission, checked)} />{permission}</label>)}</div>}
            </FormSection>
            <div className="mt-10"><ActionSection title="Tokens existentes" description="Administra los tokens creados.">{tokens.length ? <div className="divide-y">{tokens.map((token) => <div key={token.id} className="flex items-center justify-between py-3 text-sm"><span>{token.name}</span><DangerButton onClick={() => form.delete(routeTo('api-tokens.destroy', token))}>Eliminar</DangerButton></div>)}</div> : <p className="text-sm text-stone-600">No hay tokens creados.</p>}</ActionSection></div>
        </div>
    );
}

