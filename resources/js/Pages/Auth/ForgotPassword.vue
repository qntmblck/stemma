<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    status: String,
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <Head title="Restablecer contraseña" />

    <div class="relative min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 overflow-hidden bg-[#1c120a]">
        <!-- Fondo decorativo -->
        <div
            class="absolute inset-0 z-0 pointer-events-none animate-move-pattern"
            style="
                background-image: radial-gradient(circle at 25% 25%, #eab308 1px, transparent 1px);
                background-size: 60px 60px;
                opacity: 0.2;
            "
        ></div>

        <!-- Panel de recuperación -->
        <div class="relative z-10 w-full max-w-md space-y-6 bg-gradient-to-br from-[#eab308] to-white text-black shadow-xl rounded-xl p-8 sm:p-10 border border-yellow-300/20">
            <div class="flex justify-center">
                <AuthenticationCardLogo class="w-28 h-auto" />
            </div>

            <div class="text-sm text-gray-800 leading-relaxed">
                ¿Olvidaste tu contraseña? No hay problema. Solo ingresa tu correo electrónico y te enviaremos un enlace para que puedas restablecerla.
            </div>

            <div v-if="status" class="text-sm font-medium text-green-600 text-center">
                {{ status }}
            </div>

            <form @submit.prevent="submit" class="space-y-6">
                <div>
                    <InputLabel for="email" value="Correo electrónico" class="text-black" />
                    <TextInput
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="mt-1 block w-full rounded-md bg-white text-black border-gray-300 placeholder-gray-400 focus:ring-[#eab308] focus:border-[#eab308]"
                        placeholder="tucorreo@ejemplo.com"
                        required
                        autofocus
                        autocomplete="username"
                    />
                    <InputError class="mt-2 text-red-600" :message="form.errors.email" />
                </div>

                <div class="flex items-center justify-end">
                    <PrimaryButton
                        class="bg-[#eab308] hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md transition"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Enviar enlace de restablecimiento
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </div>
</template>
