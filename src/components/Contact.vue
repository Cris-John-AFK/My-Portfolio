<script setup>
import { ref } from 'vue'
import { Mail, Send, CheckCircle, AlertCircle, MessageCircle, Loader2 } from 'lucide-vue-next'
// Real Firebase logic enabled:
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const status = ref('idle') // idle, submitting, success, error
const errorMessage = ref('')

const isSubmitting = ref(false)

const submitForm = async () => {
  status.value = 'submitting'
  isSubmitting.value = true
  
  try {
    // Actually sending the message to Firebase Firestore
    await addDoc(collection(db, 'messages'), {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
      createdAt: serverTimestamp()
    })
    
    status.value = 'success'
    
    // Reset form after delay
    setTimeout(() => {
      form.value = { name: '', email: '', message: '' }
      status.value = 'idle'
      isSubmitting.value = false
    }, 3000)
    
  } catch (err) {
    status.value = 'error'
    errorMessage.value = err.message || 'Something went wrong. Please try again.'
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 border-b-2 border-blue-500 pb-2 inline-block">
            Get In Touch
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Direct Contact</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6 flex items-center">
              <Mail class="w-5 h-5 mr-3 text-blue-500" />
              crisjohn.canales@gmail.com
            </p>
            <div class="space-y-4">
              <a 
                href="mailto:crisjohn.canales@gmail.com" 
                class="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 shadow-sm text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Email Me Now
              </a>
              <a 
                href="https://www.facebook.com/nepris.canales" 
                target="_blank"
                class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-[#0866FF] hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#0866FF]"
              >
                <MessageCircle class="w-5 h-5 mr-3" />
                Message me on Facebook
              </a>
            </div>
          </div>
        </div>

        <div v-motion-slide-visible-right="{ delay: 200, duration: 800 }">
          <form @submit.prevent="submitForm" class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-blue-500/5">
            <div class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  class="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 transition-colors"
                  placeholder="Your Name"
                >
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  class="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 transition-colors"
                  placeholder="your.email@example.com"
                >
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  required
                  class="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 transition-colors resize-none"
                  placeholder="Hello, I'd like to work with you on..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span v-if="status === 'idle'">Send Message</span>
                <span v-else-if="status === 'submitting'" class="flex items-center">
                  <Loader2 class="w-5 h-5 animate-spin mr-2" />
                  Sending...
                </span>
                <span v-else-if="status === 'success'" class="flex items-center text-green-100">
                  <CheckCircle class="w-5 h-5 mr-2" />
                  Sent Successfully!
                </span>
                <span v-else-if="status === 'error'" class="flex items-center">
                  <AlertCircle class="w-5 h-5 mr-2" />
                  Failed. Try Again.
                </span>
              </button>
              
              <p v-if="status === 'error'" class="text-sm text-red-500 mt-2">{{ errorMessage }}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
