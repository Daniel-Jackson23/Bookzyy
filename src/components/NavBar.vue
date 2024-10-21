<template>
  <div id="app">
    <div class="">
      <div class="bg-gray-800">
        <nav class="flex container mx-auto px-5 py-5">
          <ul class="flex flex-grow space-x-4">
            <li>
              <a href="/" class="flex items-center space-x-3 text-gray-700 md:mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8 p-0 m-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <span class="text-gray-200 hover:text-gray-300 text-2xl font-semibold py-1"
                  >Bookzyy
                </span>
              </a>
            </li>
          </ul>
          <ul class="flex items-center space-x-5">
            <li class="hidden sm:flex">
              <router-link
                to="/"
                class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
                >Home</router-link
              >
            </li>
            <li class="hidden sm:flex">
              <router-link
                v-if="user"
                to="/calender"
                class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
                >Calender</router-link
              >
            </li>
            <li class="hidden sm:flex">
              <router-link
                v-if="user"
                to="/teams"
                class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
                >Teams</router-link
              >
            </li>
            <li class="hidden sm:flex">
              <router-link
                v-if="user"
                to="/myholiday"
                class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
                >My Holiday</router-link
              >
            </li>
            <li class="hidden sm:flex">
              <router-link
                v-if="!user"
                to="/login"
                class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
                >Login</router-link
              >
            </li>
            <li class="hidden sm:flex" @click="logout">
              <router-link
                v-if="user"
                to=""
                class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
                >logout</router-link
              >
            </li>
          </ul>
          <ul class="flex sm:hidden" @click="showMenu = !showMenu">
            <li>
              <a href="#" class="flex-none absolute right-0 px-5 z-30">
                <p
                  class="text-gray-200 font-semibold tracking-wide hover:bg-gray-900 hover:bg-opacity-30 rounded px-2 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </p>
              </a>
              <div
                class="absolute top-0 right-0 z-10 h-screen w-full bg-black transition"
                :class="{
                  'invisible opacity-0': !showMenu,
                  'visible opacity-40': showMenu
                }"
              ></div>
              <div
                class="absolute right-0 z-20 w-full px-5 mt-16 transition"
                :class="{
                  'invisible opacity-0': !showMenu,
                  'visible opacity-100': showMenu
                }"
              >
                <ul class="flex flex-col bg-gray-100 w-full rounded shadow-md overflow-hidden">
                  <li class="flex">
                    <h3 class="flex flex-1 text-gray-600 font-semibold px-5 py-4">Menu</h3>
                  </li>
                  <li class="flex border-t">
                    <router-link
                      to="/"
                      class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                      >Home</router-link
                    >
                  </li>
                  <li class="flex">
                    <router-link
                      v-if="user"
                      to="/calender"
                      class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                      >Calender</router-link
                    >
                  </li>
                  <li class="flex">
                    <router-link
                      v-if="user"
                      to="/teams"
                      class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                      >Teams</router-link
                    >
                  </li>
                  <li class="flex">
                    <router-link
                      v-if="user"
                      to="/myholiday"
                      class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                      >My holiday</router-link
                    >
                  </li>
                  <li class="flex">
                    <router-link
                      v-if="!user"
                      to="/login"
                      class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                      >Login</router-link
                    >
                  </li>
                  <li class="flex" @click="logout">
                    <router-link
                      v-if="user"
                      to="/"
                      class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                      >logout</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import stores from '@/stores'

export default {
  setup() {
    const showMenu = ref(false)
    const router = useRouter()
    const user = computed(() => stores.state.user)
    const toggleMenu = () => {
      showMenu.value = !showMenu.value
    }

    const logout = async () => {
      await supabase.auth.signOut()
      router.push({ name: 'home' })
    }

    return {
      showMenu,
      toggleMenu,
      logout,
      user
    }
  }
}
</script>
