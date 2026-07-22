<template>
  <section id="sobre" class="section" style="background: var(--color-caramel)">
    <div class="soft-wave"></div>

    <div class="container" style="position: relative; z-index: 2">
      <div class="grid-2 sobre-grid">
        <div class="sobre-text reveal-text">
          <AnimatedText
            text="Sobre mim ✨"
            tag="h2"
            :stagger="30"
            color="var(--color-blush)"
          >
            <template #default>
              <h2 class="h2" style="color: var(--color-blush)">
                Sobre mim <span style="color: var(--color-gold)">✨</span>
              </h2>
            </template>
          </AnimatedText>
          <p class="p" style="color: var(--color-blush); opacity: 0.9">
            Sou a Ketlin Alencar, alguém que sempre sonhou em viver da criatividade. Desde cedo, imaginei transformar
            sentimentos em imagens e dar vida às ideias que nasciam em mim. Atuar como Social Media é a realização desse sonho:
            usar minha visão para conectar marcas e pessoas com verdade, beleza e propósito.
          </p>
        </div>

        <div class="d-flex justify-center justify-md-end sobre-image reveal-image" style="position: relative">
          <div class="arch">
            <img src="/assets/sobre.jpg" alt="Ketlin" />
          </div>
          <div class="posicione-teste">︵︵</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedText from '../AnimatedText.vue'
</script>

<style scoped>
.sobre-grid {
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
}

.sobre-image {
  justify-content: flex-end;
  position: relative;
  z-index: 1;
}

.sobre-text {
  position: relative;
  z-index: 4;
}

.sobre-image .arch {
  position: relative;
  z-index: 1;
}

@media (max-width: 960px) {
  .sobre-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: center;
  }

  .sobre-text {
    order: 1;
    text-align: center;
    max-width: 640px;
    padding-bottom: 40px;
  }

  .sobre-image {
    order: 2;
    width: 100%;
    justify-content: center !important;
  }
}
</style>
