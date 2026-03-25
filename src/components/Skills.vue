<script setup>
import { computed } from 'vue'

const skillCategoriesRaw = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'React', level: 85 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'JavaScript / ES6+', level: 85 }
    ]
  },
  {
    name: 'Backend & APIs',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Laravel', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'Firebase', level: 80 },
      { name: 'GraphQL', level: 65 }
    ]
  },
  {
    name: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Vite / Webpack', level: 80 },
      { name: 'Vercel / Netlify', level: 85 },
      { name: 'Docker', level: 60 }
    ]
  }
]

const skillCategories = computed(() => {
  return skillCategoriesRaw.map(category => ({
    ...category,
    skills: [...category.skills].sort((a, b) => b.level - a.level)
  }))
})
</script>

<template>
  <section id="skills" class="py-20 lg:py-32 bg-white dark:bg-gray-950">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
      <div class="mb-16 md:text-center" v-motion-fade-visible-once>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2 inline-block">
          Technical Skills
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
          A comprehensive overview of my technical expertise and the tools I use daily.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="category.name"
          v-motion-slide-visible-bottom="{ delay: index * 100, duration: 800 }"
          class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm"
        >
          <div class="flex items-center gap-4 mb-8">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ category.name }}</h3>
          </div>
          
          <div class="space-y-6">
            <div v-for="skill in category.skills" :key="skill.name" class="space-y-2">
              <div class="flex justify-between items-center text-sm font-medium">
                <span class="text-gray-700 dark:text-gray-200">{{ skill.name }}</span>
                <span class="text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
