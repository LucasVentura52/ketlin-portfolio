<template>
  <section class="section hero" style="background: var(--color-blush)">
    <div class="blob-top-right hero-blob"></div>
    <Squiggle class="hero-squiggle" />

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

          <div class="contact hero-contact">
            <div class="iconbox">
              <i class="mdi mdi-email-outline contact-icon"></i>
            </div>
            <a :href="mailtoUrl">{{ email }}</a>
          </div>

          <div class="contact hero-contact">
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
.hero-subtitle {
  letter-spacing: 0.18em;
  text-transform: lowercase;
}

.hero-blob {
  opacity: 0;
  transform: translate(60px, -60px) scale(0.6) rotate(8deg);
  animation: blob-enter 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
}

.hero-squiggle {
  opacity: 0;
  transform: translate(40px, -30px) scale(0.5) rotate(-20deg);
  animation: squiggle-enter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards;
}

@keyframes blob-enter {
  to {
    opacity: 0.95;
    transform: translate(0, 0) scale(1) rotate(8deg);
  }
}

@keyframes squiggle-enter {
  to {
    opacity: 0.95;
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
}

.hero-contact {
  opacity: 0;
  transform: translateY(12px);
  animation: hero-fade-in 0.6s cubic-bezier(0.25, 0.9, 0.3, 1) forwards;
}

.hero-contact:nth-child(1) {
  animation-delay: 0.8s;
}

.hero-contact:nth-child(2) {
  animation-delay: 1s;
}

@keyframes hero-fade-in {
  to {
    opacity: 0.9;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-blob,
  .hero-squiggle,
  .hero-contact {
    animation: none;
    opacity: 0.95;
    transform: none;
  }
}
</style>
