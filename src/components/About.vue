<script setup>
import { BookOpen, ExternalLink, Award } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="py-20 lg:py-32 bg-white dark:bg-gray-950">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-4xl mx-auto" v-motion-slide-visible-bottom="{ duration: 800 }">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 border-b-2 border-blue-500 pb-2 inline-block">
          About Me
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am a passionate and detail-oriented Web Developer dedicated to crafting visually pleasing and highly functional digital experiences. My goal is to bridge the gap between complex engineering and simple, intuitive user interfaces.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether working on an interactive frontend or a scalable backend architecture, I prioritize problem-solving, clean code, and performance optimization. When I'm not coding, I'm exploring modern web design trends and fine-tuning aesthetics.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Why Work With Me?</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 font-bold">1</span>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-gray-200">Problem-Solving Focused</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">I tackle complex technical challenges with elegant, scalable solutions.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 font-bold">2</span>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-gray-200">Clean UI/UX</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Aesthetics meet accessibility. I ensure platforms are usable and beautiful.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 font-bold">3</span>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-gray-200">Performance First</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Fast load times, SEO optimization, and smooth interactive experiences.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Published Research Highlight Banner -->
        <div class="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-[2px] shadow-xl shadow-blue-500/20 transform hover:scale-[1.01] transition-transform duration-300" v-motion-fade-visible-once="{ delay: 200 }">
          <div class="bg-white dark:bg-gray-900 rounded-[14px] p-8 md:p-10 relative overflow-hidden h-full">
            <div class="absolute top-0 right-0 -mt-8 -mr-8 text-blue-50 dark:text-blue-900/20">
              <Award class="w-48 h-48 opacity-60" />
            </div>
            
            <div class="relative z-10">
              <div class="flex items-center space-x-3 mb-5">
                <span class="inline-flex items-center justify-center p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                  <BookOpen class="w-5 h-5" />
                </span>
                <span class="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">Featured Publication</span>
              </div>
              
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 pr-12 leading-tight">
                LAMMS: A Learner's Attendance Monitoring and Management System for Naawan Central School
              </h3>
              
              <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
                A published research utilizing modern tech-stack approaches to track and manage student attendance within Misamis Oriental, Philippines. It bridges the gap between educational administration and system architecture.
              </p>
              
              <a 
                href="https://www.researchgate.net/publication/401703874_LAMMS_A_Learner's_Attendance_Monitoring_and_Management_System_for_Naawan_Central_School_Misamis_Oriental_Philippines" 
                target="_blank"
                class="inline-flex items-center px-6 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium rounded-lg shrink-0 transition-all duration-200 shadow-md shadow-blue-500/25"
              >
                Read on ResearchGate
                <ExternalLink class="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
