<template>
  <section class="section hero" style="background: var(--color-blush)">
    <div class="blob-top-right"></div>
    <Squiggle />

    <div class="container" style="position: relative; z-index: 2">
      <div class="grid-2">
        <div class="d-flex justify-center justify-md-start reveal-image">
          <div class="arch">
            <img src="/assets/hero.jpg" alt="Ketlin Alencar" />
          </div>
        </div>

        <div class="reveal-text">
          <AnimatedText
            text="KETLIN ALENCAR"
            tag="h1"
            :stagger="35"
            class-name="h1 hero-title"
            :immediate="true"
          >
            <template #default>
              <h1 class="h1 hero-title">
                <span style="color: var(--color-caramel)">K</span><span
                  v-for="(char, i) in 'ETLIN ALENCAR'.split('')"
                  :key="i"
                  class="animated-text__char"
                  :style="{ transitionDelay: `${(i + 1) * 35}ms` }"
                >{{ char }}</span>
              </h1>
            </template>
          </AnimatedText>

          <div class="subtitle hero-subtitle">social media</div>

          <div class="contact reveal-text">
            <div class="iconbox">
              <i class="mdi mdi-email-outline contact-icon"></i>
            </div>
            <a :href="mailtoUrl">{{ email }}</a>
          </div>

          <div class="contact reveal-text">
            <div class="iconbox">
              <i class="mdi mdi-phone-outline contact-icon"></i>
            </div>
            <a :href="whatsUrl" target="_blank" rel="noopener">{{ whatsappLabel }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import Squiggle from '../Squiggle.vue'
import AnimatedText from '../AnimatedText.vue'
import { contact } from '../../data/config.js'

const { email, whatsapp, whatsappLabel } = contact

const whatsUrl = computed(() => {
  const text = encodeURIComponent('Oi, Ketlin! Quero conversar sobre um projeto de Social Media.')
  return `https://wa.me/${whatsapp}?text=${text}`
})

const mailtoUrl = computed(() => {
  const subject = encodeURIComponent('Parceria / Projeto - Social Media')
  const body = encodeURIComponent('Oi, Ketlin! Tudo bem?\n\nQuero conversar sobre um projeto.')
  return `mailto:${email}?subject=${subject}&body=${body}`
})
</script>

<style scoped>
.hero-title {
  white-space: nowrap;
}

.hero-subtitle {
  letter-spacing: 0.18em;
  text-transform: lowercase;
}

@media (max-width: 600px) {
  .hero-title {
    white-space: normal;
  }
}
</style>
