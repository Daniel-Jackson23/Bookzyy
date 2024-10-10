<script setup>
import state from './stores/index'
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'
import { supabase } from './lib/supabaseClient'

const appReady = ref(null)

//check to if user is already logged in
const user = supabase.auth.getUser()

//if user does not exisit
if (!user) {
  appReady.value = true
}

supabase.auth.onAuthStateChange((_, session) => {
  console.log('hello')
  state.methods.setUser(session)
  appReady.value = true
})
</script>

<template>
  <header>
    <div v-if="appReady" class="wrapper">
      <nav>
        <NavBar />
      </nav>
    </div>
  </header>

  <RouterView />
</template>
