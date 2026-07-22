<template>
  <section id="posicione" class="section posicione-section" style="background: var(--color-caramel)">
    <div class="container" style="position: relative; z-index: 2">
      <div class="grid-2 posicione-grid">
        <div class="posicione-text reveal-text">
          <AnimatedText
            text="Posicione"
            tag="h2"
            :stagger="40"
          >
            <template #default>
              <h2 class="h2" style="color: var(--color-dark)">
                Posicione<br />a sua marca!
              </h2>
            </template>
          </AnimatedText>
          <div
            class="subtitle"
            style="letter-spacing: 0; text-transform: none; color: var(--color-dark); opacity: 0.9; font-size: 30px"
          >
            Seja presente, único e autêntico.
          </div>
        </div>

        <div class="d-flex justify-center justify-md-end posicione-image reveal-image">
          <div class="arch">
            <img src="/assets/posicione.jpg" alt="Trabalho" />
          </div>
        </div>
      </div>
    </div>

    <svg class="posicione-sun svg-draw" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="18" />
      <path d="M60 8 l8 18 -16 0 z" />
      <path d="M60 112 l8-18 -16 0 z" />
      <path d="M8 60 l18-8 0 16 z" />
      <path d="M112 60 l-18-8 0 16 z" />
      <path d="M22 22 l18 8 -11 11 z" />
      <path d="M98 98 l-18-8 11-11 z" />
      <path d="M98 22 l-18 8 11 11 z" />
      <path d="M22 98 l18-8 -11-11 z" />
    </svg>
  </section>
</template>

<script setup>
import AnimatedText from '../AnimatedText.vue'
</script>

<style scoped>
.posicione-section {
  position: relative;
}

.posicione-grid {
  grid-template-columns: 1.05fr 0.95fr;
  gap: 48px;
}

.posicione-sun {
  position: absolute;
  top: -90px;
  left: -90px;
  width: 320px;
  height: 320px;
  fill: none;
  stroke: rgba(240, 222, 213, 0.55);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 1;
  pointer-events: none;
}

@media (max-width: 960px) {
  .posicione-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: center;
  }

  .posicione-text {
    order: 1;
    text-align: center;
    max-width: 640px;
  }

  .posicione-image {
    order: 2;
    width: 100%;
    justify-content: center !important;
  }

  .posicione-image .arch {
    width: min(360px, 90vw) !important;
    height: auto !important;
  }

  .posicione-sun {
    width: 220px;
    height: 220px;
    top: -100px;
    left: -100px;
  }
}
</style>
