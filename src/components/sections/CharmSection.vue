<template>
  <section class="section" style="background: var(--color-blush)">
    <TrianglePattern />

    <div class="container" style="position: relative; z-index: 2">
      <div class="grid-2 encante-grid">
        <div class="d-flex justify-center justify-md-start encante-image reveal-image">
          <div class="arch">
            <img src="/assets/encante.jpg" alt="Equipe" />
          </div>
        </div>

        <div class="encante-text reveal-text">
          <AnimatedText
            text="Encante"
            tag="h2"
            :stagger="40"
          >
            <template #default>
              <h2 class="h2" style="color: var(--color-dark)">
                Encante<br />sua audiência!
              </h2>
            </template>
          </AnimatedText>
          <div
            class="subtitle"
            style="letter-spacing: 0; text-transform: none; color: var(--color-dark); opacity: 0.9; font-size: clamp(18px, 3.5vw, 30px)"
          >
            Crie uma conexão vitalícia.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TrianglePattern from '../TrianglePattern.vue'
import AnimatedText from '../AnimatedText.vue'
</script>

<style scoped>
.encante-grid {
  grid-template-columns: 0.95fr 1.05fr;
  gap: 48px;
}

@media (max-width: 960px) {
  .encante-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: center;
  }

  .encante-text {
    order: 1;
    text-align: center;
    max-width: 640px;
  }

  .encante-image {
    order: 2;
    width: 100%;
    justify-content: center !important;
  }

  .encante-image .arch {
    width: min(360px, 90vw) !important;
    height: auto !important;
    aspect-ratio: 1 / 1 !important;
    border-radius: 999px !important;
  }
}
</style>
