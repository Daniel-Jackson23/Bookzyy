<script setup>
import { RouterView } from 'vue-router'
//import { supabase } from './lib/supabaseClient'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <NavBar />
      </nav>
    </div>
  </header>

  <RouterView />
</template>
