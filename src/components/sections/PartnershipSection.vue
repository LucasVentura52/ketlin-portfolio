<template>
  <section id="parceria" class="section" style="background: var(--color-blush)">
    <div class="container">
      <div class="parceria-banner">
        <svg class="parceria-banner__rays svg-draw" viewBox="0 0 120 120" aria-hidden="true">
          <path d="M60 10 L60 34" />
          <path d="M36 16 L48 36" />
          <path d="M20 34 L40 48" />
          <path d="M14 60 L38 60" />
        </svg>

        <div class="parceria-banner__small reveal-text">vamos fechar</div>

        <AnimatedText
          text="UMA PARCERIA?"
          tag="div"
          :stagger="40"
          class-name="parceria-banner__big"
        >
          <template #default>
            <div class="parceria-banner__big">
              <span
                v-for="(char, i) in 'UMA PARCERIA?'.split('')"
                :key="i"
                class="animated-text__char parceria-char"
                :style="{ transitionDelay: `${i * 40}ms` }"
              >{{ char === ' ' ? '\u00A0' : char }}</span>
            </div>
          </template>
        </AnimatedText>

        <svg class="parceria-banner__wave svg-draw" viewBox="0 0 260 90" aria-hidden="true" overflow="visible">
          <path d="M10 70 C 40 15, 70 15, 100 70 S 160 125, 190 70 S 250 15, 250 70" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedText from '../AnimatedText.vue'
</script>

<style scoped>
.parceria-banner {
  position: relative;
  min-height: 360px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 40px 0;
}

.parceria-banner__small {
  font-size: clamp(26px, 4vw, 56px);
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--color-dark);
  opacity: 0.95;
}

.parceria-banner__big {
  font-size: clamp(38px, 6vw, 92px);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--color-dark);
  text-transform: uppercase;
}

.parceria-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px) rotateX(-60deg);
  transform-origin: bottom center;
  transition:
    opacity 0.5s cubic-bezier(0.25, 0.9, 0.3, 1),
    transform 0.5s cubic-bezier(0.25, 0.9, 0.3, 1);
}

.parceria-banner__big.is-visible .parceria-char {
  opacity: 1;
  transform: translateY(0) rotateX(0deg);
}

.parceria-banner__rays,
.parceria-banner__wave {
  position: absolute;
  fill: none;
  stroke: var(--color-caramel);
  stroke-width: 10;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.9;
  pointer-events: none;
}

.parceria-banner__rays {
  width: 140px;
  height: 140px;
  top: 8%;
  left: 10%;
  transform: rotate(-8deg);
}

.parceria-banner__wave {
  width: 320px;
  height: 120px;
  bottom: -5%;
  right: 8%;
  transform: rotate(2deg);
  overflow: visible;
}

@media (max-width: 960px) {
  .parceria-banner {
    min-height: 280px;
    padding: 20px 0;
  }

  .parceria-banner__rays {
    width: 110px;
    height: 110px;
    top: 6%;
    left: 6%;
  }

  .parceria-banner__wave {
    width: 240px;
    height: 90px;
    bottom: 6%;
    right: 4%;
  }
}

@media (max-width: 600px) {
  .parceria-banner__rays {
    top: 2%;
    left: 2%;
  }

  .parceria-banner__wave {
    bottom: -5%;
    right: 2%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .parceria-char {
    transition: none;
    transform: none;
    opacity: 1;
  }
}
</style>
