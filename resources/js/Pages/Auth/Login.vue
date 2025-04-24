<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Iniciar sesión" />

    <div class="relative min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 overflow-hidden bg-[#1c120a]">
        <!-- Fondo decorativo con patrón dorado -->
        <div
            class="absolute inset-0 z-0 pointer-events-none animate-move-pattern"
            style="
                background-image: radial-gradient(circle at 25% 25%, #eab308 1px, transparent 1px);
                background-size: 60px 60px;
                opacity: 0.2;
            "
        ></div>

        <!-- Panel del login -->
        <div class="relative z-10 w-full max-w-md space-y-8 bg-gradient-to-br from-[#eab308] to-white text-black shadow-xl rounded-xl p-8 sm:p-10 border border-yellow-300/20">
            <div class="flex justify-center">
                <AuthenticationCardLogo class="w-28 h-auto" />
            </div>

            <div v-if="status" class="text-center text-sm text-green-600 font-medium">
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

                <div>
                    <InputLabel for="password" value="Contraseña" class="text-black" />
                    <TextInput
                        id="password"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-full rounded-md bg-white text-black border-gray-300 placeholder-gray-400 focus:ring-[#eab308] focus:border-[#eab308]"
                        placeholder="••••••••"
                        required
                        autocomplete="current-password"
                    />
                    <InputError class="mt-2 text-red-600" :message="form.errors.password" />
                </div>

                <div class="flex items-center justify-between text-sm text-gray-800">
                    <label class="flex items-center">
                        <Checkbox v-model:checked="form.remember" name="remember" class="mr-2" />
                        Recordarme
                    </label>

                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="hover:text-[#eab308] text-black transition"
                    >
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>

                <div>
                    <PrimaryButton
                        class="w-full justify-center bg-[#eab308] hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md transition"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Iniciar sesión
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </div>
</template>
