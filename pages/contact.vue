<script setup lang="ts">
// import { load } from 'recaptcha-v3'

const formLoading = ref(false)
const submitSuccess = ref<boolean | null>(null)
const submitError = ref<boolean | null>(null)
const name = ref('')
const email = ref('')
const message = ref('')
const method = ref<'POST' | 'GET'>('POST')

// const appConfig = useAppConfig()

const onSubmitContactForm = async (event: Event) => {
  submitSuccess.value = null
  submitError.value = null
  formLoading.value = true
  try {
    const form = event.target! as HTMLFormElement
    // const recaptcha = await load(appConfig.recaptchaKey, { autoHideBadge: true })
    // const token = await recaptcha.execute('contact')
    const response: object = await $fetch(form.action, {
      method: method.value,
      body: {
        name: name.value,
        _replyto: email.value,
        message: message.value,
        // 'g-recaptcha-response': token,
      },
    })
    if ('ok' in response && response.ok) {
      submitSuccess.value = true
      name.value = ''
      email.value = ''
      message.value = ''
    }
    else {
      submitError.value = true
    }
  }
  catch (ex) {
    console.error(ex)
    submitError.value = true
  }
  formLoading.value = false
}

usePageHead({ title: 'Contact' })
</script>

<template>
  <div>
    <h2>Contact</h2>
    <b-form
      action="https://formspree.io/xwpqolpp"
      :method="method"
      @submit.prevent="onSubmitContactForm"
    >
      <b-form-row>
        <b-col
          md="6"
          sm="12"
          class="mb-3"
        >
          <label for="contact-name">
            <icon name="bi:person-fill" /> Nom
          </label>
          <b-form-input
            id="contact-name"
            v-model="name"
            :disabled="formLoading"
            placeholder="Entrez votre nom"
            aria-describedby="contact-name-help"
            required
          />
        </b-col>
        <b-col
          md="6"
          sm="12"
          class="mb-3"
        >
          <label for="contact-email">
            <icon name="bi:envelope-fill" /> Adresse e-mail
          </label>
          <b-form-input
            id="contact-email"
            v-model="email"
            :disabled="formLoading"
            placeholder="Entrez votre adresse e-mail"
            aria-describedby="contact-email-help"
            required
          />
        </b-col>
        <b-col
          cols="12"
          class="mb-3"
        >
          <label for="contact-message">
            <icon name="bi:pencil-fill" /> Message
          </label>
          <textarea
            id="contact-message"
            v-model="message"
            class="form-control"
            rows="5"
            :disabled="formLoading"
            placeholder="Entrez votre message"
            aria-describedby="contact-message-help"
            required
          />
        </b-col>
        <b-col cols="12">
          <b-button
            id="contact-submit"
            type="submit"
            :disabled="formLoading || submitSuccess != null"
            class="d-block w-100"
          >
            <icon name="bi:send-fill" /> Envoyer
          </b-button>
        </b-col>
        <b-col
          cols="12"
          class="text-end"
        >
          <span
            v-if="submitSuccess"
            class="d-block mb-2 mb-md-0 text-success"
          >
            <icon name="bi:check-lg" /> Votre message a été envoyé avec succès.
          </span>
          <span
            v-if="submitError"
            class="d-block mb-2 mb-md-0 text-danger"
          >
            <icon name="bi:exclamation-triangle-fill" /> Une erreur est survenue durant l'envoi de votre message.
          </span>
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>
