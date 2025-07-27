<template>
  <PageContent>
    <b-container class="pt-5 pb-5">
      <h1 class="text-2xl font-bold mb-4 text-indigo-700">Contactez-moi</h1>
      <p class="mb-4 text-gray-600">Vous pouvez me contacter via ce formulaire.</p>
      <b-form @submit.prevent="submitForm">
        <b-form-group label="Nom">
          <b-form-input v-model="form.name" required class="border-indigo-300 focus:border-indigo-500" />
        </b-form-group>

        <b-form-group label="Email">
          <b-form-input v-model="form.email" type="email" required class="border-indigo-300 focus:border-indigo-500" />
        </b-form-group>

        <b-form-group label="Message">
          <b-form-textarea v-model="form.message" rows="5" required class="border-indigo-300 focus:border-indigo-500" />
        </b-form-group>

        <b-button type="submit" variant="primary" class="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-0">
          Envoyer
        </b-button>
      </b-form>

      <b-alert
        v-if="successMessage"
        show
        variant="success"
        class="mt-3 bg-emerald-50 border border-emerald-200 text-emerald-700"
      >
        {{ successMessage }}
      </b-alert>

      <b-alert
        v-if="errorMessage"
        show
        variant="danger"
        class="mt-3 bg-red-50 border border-red-200 text-red-700"
      >
        {{ errorMessage }}
      </b-alert>
    </b-container>
  </PageContent>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const successMessage = ref('')
const errorMessage = ref('')

// 📨 Mets ton endpoint Formspree ici si tu en utilises un
const endpoint = 'https://formspree.io/f/xwpqolpp'

const submitForm = async () => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    if (response.ok) {
      successMessage.value = 'Message envoyé avec succès !'
      errorMessage.value = ''
      form.value = { name: '', email: '', message: '' }
    } else {
      throw new Error('Erreur')
    }
  } catch (err) {
    errorMessage.value = 'Une erreur est survenue.'
    successMessage.value = ''
  }
}
</script>