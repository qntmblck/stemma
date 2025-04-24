<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';

defineProps({ title: String });

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
  <div>
    <Head :title="title" />
    <Banner />

    <div class="min-h-screen bg-gray-100">
      <!-- NAVIGATION BAR -->
      <nav class="bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <Link :href="route('dashboard')" class="shrink-0 flex items-center">
                <ApplicationMark class="block h-9 w-auto" />
              </Link>

              <div class="hidden sm:flex sm:ms-10 space-x-8">
                <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                  Dashboard
                </NavLink>
              </div>
            </div>

            <div class="hidden sm:flex sm:items-center sm:ms-6">
              <!-- Teams Dropdown -->
              <Dropdown v-if="$page.props.jetstream.hasTeamFeatures" align="right" width="60">
                <template #trigger>
                  <span class="inline-flex rounded-md">
                    <button type="button" class="inline-flex items-center px-3 py-2 border text-sm font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 transition">
                      {{ $page.props.auth.user.current_team.name }}
                      <svg class="ms-2 -me-0.5 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                      </svg>
                    </button>
                  </span>
                </template>
                <template #content>
                  <div class="w-60">
                    <div class="block px-4 py-2 text-xs text-gray-400">Manage Team</div>
                    <DropdownLink :href="route('teams.show', $page.props.auth.user.current_team)">Team Settings</DropdownLink>
                    <DropdownLink v-if="$page.props.jetstream.canCreateTeams" :href="route('teams.create')">Create New Team</DropdownLink>
                    <template v-if="$page.props.auth.user.all_teams.length > 1">
                      <div class="border-t border-gray-200 mt-2" />
                      <div class="block px-4 py-2 text-xs text-gray-400">Switch Teams</div>
                      <template v-for="team in $page.props.auth.user.all_teams" :key="team.id">
                        <form @submit.prevent="switchToTeam(team)">
                          <DropdownLink as="button">
                            <div class="flex items-center">
                              <svg v-if="team.id === $page.props.auth.user.current_team_id" class="me-2 size-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <div>{{ team.name }}</div>
                            </div>
                          </DropdownLink>
                        </form>
                      </template>
                    </template>
                  </div>
                </template>
              </Dropdown>

              <!-- User Dropdown -->
              <Dropdown align="right" width="48">
                <template #trigger>
                  <span class="inline-flex rounded-md">
                    <button type="button" class="inline-flex items-center px-3 py-2 border text-sm font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 transition">
                      {{ $page.props.auth.user.name }}
                      <svg class="ms-2 -me-0.5 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                  </span>
                </template>
                <template #content>
                  <div class="block px-4 py-2 text-xs text-gray-400">Manage Account</div>
                  <DropdownLink :href="route('profile.show')">Profile</DropdownLink>
                  <DropdownLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')">API Tokens</DropdownLink>
                  <div class="border-t border-gray-200 my-2" />
                  <form @submit.prevent="logout">
                    <DropdownLink as="button">Log Out</DropdownLink>
                  </form>
                </template>
              </Dropdown>
            </div>

            <!-- Mobile Hamburger -->
            <div class="-me-2 flex items-center sm:hidden">
              <button @click="showingNavigationDropdown = !showingNavigationDropdown" class="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition">
                <svg class="size-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path :class="{ 'hidden': showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  <path :class="{ 'hidden': !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Responsive Menu -->
        <div :class="{ 'block': showingNavigationDropdown, 'hidden': !showingNavigationDropdown }" class="sm:hidden">
          <div class="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">Dashboard</ResponsiveNavLink>
          </div>
          <div class="pt-4 pb-1 border-t border-gray-200">
            <div class="px-4">
              <div class="font-medium text-base text-gray-800">{{ $page.props.auth.user.name }}</div>
              <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
            </div>
            <div class="mt-3 space-y-1">
              <ResponsiveNavLink :href="route('profile.show')">Profile</ResponsiveNavLink>
              <ResponsiveNavLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')">API Tokens</ResponsiveNavLink>
              <form method="POST" @submit.prevent="logout">
                <ResponsiveNavLink as="button">Log Out</ResponsiveNavLink>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <!-- Mejorado: Slot Header con estilo elegante -->
      <header v-if="$slots.header" class="bg-gradient-to-br from-yellow-100 to-white shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-center">
          <slot name="header" />
        </div>
      </header>

      <!-- Contenido principal -->
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
