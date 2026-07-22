<template>
  <section class="section" style="background: var(--color-caramel)">
    <svg class="voce-corner svg-draw" viewBox="0 0 260 260" aria-hidden="true">
      <path d="M58 92 C 38 88, 24 80, 14 70" />
      <path d="M70 78 C 92 62, 112 48, 132 36" />
      <path d="M62 120 C 90 98, 118 76, 148 56" />
      <path d="M55 160 C 98 128, 145 92, 200 58" />
      <path d="M50 206 C 96 170, 146 132, 206 92" />
    </svg>

    <div class="container">
      <div class="grid-2 voce-grid">
        <div class="voce-text reveal-text">
          <AnimatedText
            text="Seja seu maior sucesso!"
            tag="h2"
            :stagger="30"
          >
            <template #default>
              <h2 class="h2" style="color: var(--color-dark)">Seja seu maior sucesso!</h2>
            </template>
          </AnimatedText>
          <div
            class="subtitle"
            style="letter-spacing: 0; text-transform: none; color: var(--color-dark); opacity: 0.9; font-size: clamp(18px, 3.5vw, 30px)"
          >
            Conquiste público e gere conexão.
          </div>
        </div>

        <div class="d-flex justify-center justify-md-start voce-image reveal-image">
          <div class="arch">
            <img src="/assets/vocevsvoce.jpg" alt="Você vs você" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedText from '../AnimatedText.vue'
</script>

<style scoped>
.voce-grid {
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
}

.voce-corner {
  position: absolute;
  top: -80px;
  left: -80px;
  width: 300px;
  height: 300px;
  fill: none;
  stroke: rgba(240, 222, 213, 0.95);
  stroke-width: 18;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
  z-index: 0;
  opacity: 0.95;
}

@media (max-width: 960px) {
  .voce-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: center;
  }

  .voce-text {
    order: 1;
    text-align: center;
    max-width: 640px;
  }

  .voce-image {
    order: 2;
    width: 100%;
    justify-content: center !important;
  }

  .voce-image .arch {
    width: min(360px, 90vw) !important;
    height: auto !important;
    aspect-ratio: 1 / 1 !important;
    border-radius: 999px !important;
  }

  .voce-corner {
    top: -66px;
    left: -50px;
    width: 180px;
    height: 180px;
    stroke-width: 16;
  }
}
</style>
