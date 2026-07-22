<template>
  <section id="final" class="section" style="background: var(--color-caramel)">
    <div class="container">
      <div class="final-thanks">
        <svg class="final-thanks__sun svg-draw reveal-image" viewBox="0 0 120 120" aria-hidden="true">
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

        <div class="final-thanks__title reveal-text">Obrigada!</div>

        <div class="final-thanks__footer">
          <svg class="final-thanks__arrow reveal-image" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M10 18 L24 32 L38 18" />
          </svg>
          <div class="final-thanks__name reveal-text">Ketlin Alencar</div>
        </div>

        <div class="final-thanks__copyright">
          © {{ new Date().getFullYear() }} Ketlin Alencar
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.final-thanks {
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 22px;
  padding: 24px 0;
}

.final-thanks__sun {
  width: 120px;
  height: 120px;
  fill: none;
  stroke: var(--color-dark);
  stroke-width: 6;
  stroke-linejoin: round;
  stroke-linecap: round;
  opacity: 0.9;
}

.final-thanks__title {
  font-size: clamp(56px, 7vw, 120px);
  font-weight: 900;
  letter-spacing: 0.22em;
  text-transform: none;
  color: var(--color-dark);
  max-width: min(100%, 980px);
}

.final-thanks__footer {
  display: grid;
  place-items: center;
  gap: 12px;
}

.final-thanks__arrow {
  width: 56px;
  height: 56px;
  fill: none;
  stroke: rgba(255, 255, 255, 0.95);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform-origin: center;
  animation: arrow-bounce 1.35s ease-in-out infinite;
}

.final-thanks__name {
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
}

.final-thanks__copyright {
  margin-top: 22px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.78);
}

@keyframes arrow-bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.95;
  }
  50% {
    transform: translateY(10px);
    opacity: 0.75;
  }
}

@media (max-width: 960px) {
  .final-thanks {
    min-height: 420px;
    gap: 18px;
  }

  .final-thanks__sun {
    width: 104px;
    height: 104px;
  }

  .final-thanks__title {
    letter-spacing: 0.14em;
  }
}

@media (max-width: 600px) {
  .final-thanks {
    min-height: 340px;
    gap: 14px;
  }

  .final-thanks__sun {
    width: 92px;
    height: 92px;
    stroke-width: 5;
  }

  .final-thanks__title {
    font-size: clamp(40px, 10vw, 72px);
    letter-spacing: 0.08em;
  }

  .final-thanks__arrow {
    width: 46px;
    height: 46px;
    stroke-width: 5;
  }

  .final-thanks__name {
    font-size: clamp(18px, 4.5vw, 26px);
  }

  .final-thanks__copyright {
    margin-top: 10px;
    font-size: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .final-thanks__arrow {
    animation: none;
  }
}
</style>
