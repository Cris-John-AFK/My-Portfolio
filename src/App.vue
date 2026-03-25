<script setup>
import { onMounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
    <Navbar :isDark="isDark" @toggle-dark="toggleDark()" />
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
