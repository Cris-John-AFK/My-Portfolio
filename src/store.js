import { reactive } from 'vue'

export const contactStore = reactive({
  subject: '',
  message: '',
  setInquiry(projectName) {
    this.subject = `Inquiry about ${projectName}`
    this.message = `I am interested in your project "${projectName}" and would like to discuss how you can build something similar for me.`
    
    // Smooth scroll to contact section
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
