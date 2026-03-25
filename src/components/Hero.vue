<script setup>
import { ArrowRight, Code, Database, LayoutTemplate } from 'lucide-vue-next'

const floatingProjects = [
  { name: 'LAMMS System', tech: 'Vue & Firebase', icon: Database, delay: '0s', position: 'top-[15%] -left-2 md:-left-20' },
  { name: 'Portfolio Web', tech: 'Vue & Tailwind', icon: LayoutTemplate, delay: '2s', position: 'bottom-[20%] -left-0 md:-left-12' },
  { name: 'Client App', tech: 'Node & APIs', icon: Code, delay: '3.5s', position: 'top-[45%] -right-4 md:-right-16' },
]
</script>

<template>
  <section id="home" class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-screen">
    <!-- Clean Background Elements -->
    <div class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    <div class="absolute inset-0 z-0">
      <div class="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-overlay animate-pulse"></div>
      <div class="absolute top-40 right-10 w-[40rem] h-[40rem] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-overlay animate-pulse" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <!-- Left Side: Refined Typography & Clean Text -->
        <div class="flex flex-col items-start lg:pr-10" v-motion-slide-visible-left="{ delay: 200, duration: 800 }">
          
          <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-8 border border-blue-100 dark:border-blue-800/30">
            <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Available for new opportunities</span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-[5rem] font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-[1.1] drop-shadow-sm">
            Hi, I'm <br class="hidden sm:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Cris John</span>.
          </h1>
          
          <h2 class="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8 border-l-4 border-blue-500 pl-5 py-1 tracking-wide">
            Creative Web Developer
          </h2>
          
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400, mb-10 max-w-lg leading-relaxed">
            I build elegant, scalable, and user-friendly applications. I transform complex ideas into robust digital solutions with modern web technologies.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-5">
            <a href="#projects" class="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1">
              View Projects
              <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-gray-800 dark:text-gray-200 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1">
              Let's Connect
            </a>
          </div>
        </div>

        <!-- Right Side: Ultra Premium Profile Image & Glass Projects -->
        <div class="relative w-full max-w-lg mx-auto mt-6 lg:mt-0" v-motion-fade-visible-once="{ delay: 500, duration: 1200 }">
          
          <!-- Background Aura Behind Profile -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-blue-500/40 to-purple-500/40 blur-[80px] -z-10 absolute-glow"></div>
          
          <!-- Main Hero Image with Fading Mask at Bottom -->
          <div class="relative z-10 hero-image-wrapper">
            <img 
              src="/profile.png" 
              alt="Cris John" 
              class="w-full h-auto max-h-[600px] object-contain mx-auto transition-transform duration-700" 
              style="-webkit-mask-image: linear-gradient(to bottom, black 65%, transparent 100%); mask-image: linear-gradient(to bottom, black 65%, transparent 100%);"
            />
          </div>

          <!-- Glassmorphism Floating Project Cards -->
          <div 
            v-for="(card, i) in floatingProjects" 
            :key="i"
            :class="`absolute ${card.position} z-20 pointer-events-none sm:pointer-events-auto`"
            :style="`animation: floatY 8s ease-in-out infinite; animation-delay: ${card.delay};`"
          >
            <div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl p-3 md:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center space-x-4 transform transition-transform hover:scale-110 hover:!bg-white/60 dark:hover:!bg-gray-900/60 cursor-default">
              <div class="bg-blue-500 dark:bg-blue-600 p-2.5 rounded-xl text-white shadow-md">
                <component :is="card.icon" class="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div class="pr-3 hidden sm:block">
                <p class="text-[14px] md:text-base font-extrabold tracking-tight text-gray-900 dark:text-white leading-none mb-1">{{ card.name }}</p>
                <p class="text-[11px] md:text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{{ card.tech }}</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes floatY {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

.hero-image-wrapper {
  animation: floatY 6s ease-in-out infinite;
}

.absolute-glow {
  animation: pulse-glow 8s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}
</style>
