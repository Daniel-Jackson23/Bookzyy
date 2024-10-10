<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'
import { supabase } from './lib/supabaseClient'
import { store } from './stores/index'

export default {
  components: {
    NavBar
  },
  async setup() {
    const appReady = ref(null)

    //check to if user is already logged in
    const user = supabase.auth.getUser()

    //if user does not exisit
    if (!user) {
      appReady.value = true
    }

    supabase.auth.onAuthStateChange((_, session) => {
      store.methods.setUser(session)
      appReady.value = true
    })

    return { appReady }
  }
}
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
