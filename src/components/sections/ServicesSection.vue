<template>
  <section id="servicos" class="section" style="background: var(--color-blush)">
    <div class="container">
      <AnimatedText
        text="Competências"
        tag="h2"
        :stagger="35"
      >
        <template #default>
          <h2 class="h2" style="color: var(--color-dark)">Competências</h2>
        </template>
      </AnimatedText>

      <div class="services-grid reveal-stagger">
        <v-card
          v-for="(s, i) in services"
          :key="i"
          class="pa-5 rounded-lg service-card"
          variant="flat"
          style="border: 1px solid rgba(61, 49, 51, 0.10)"
        >
          <div class="d-flex ga-3 align-start">
            <i :class="['mdi', s.icon, 'service-icon']"></i>
            <div>
              <div style="font-weight: 700; font-size: 18px">{{ s.title }}</div>
              <div style="opacity: 0.85; margin-top: 4px; line-height: 1.6">{{ s.desc }}</div>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedText from '../AnimatedText.vue'
import { services } from '../../data/config.js'
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 26px;
}

.service-icon {
  font-size: 26px;
  color: var(--color-caramel);
  display: inline-flex;
}

.service-card {
  transition: transform 0.3s cubic-bezier(0.25, 0.9, 0.3, 1), box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(61, 49, 51, 0.12);
}

@media (max-width: 960px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
