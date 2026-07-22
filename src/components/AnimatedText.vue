<template>
  <component :is="tag" ref="el" class="animated-text" :class="{ 'is-visible': isVisible }">
    <span
      v-for="(char, i) in chars"
      :key="i"
      class="animated-text__char"
      :style="{ transitionDelay: `${i * stagger}ms` }"
    >{{ char === ' ' ? '\u00A0' : char }}</span>
  </component>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  text: { type: String, required: true },
  tag: { type: String, default: 'h2' },
  stagger: { type: Number, default: 30 },
  delay: { type: Number, default: 0 },
  immediate: { type: Boolean, default: false },
  color: { type: String, default: '' },
  className: { type: String, default: '' },
})

const el = ref(null)
const isVisible = ref(false)
let trigger = null

const chars = computed(() => props.text.split(''))

onMounted(() => {
  if (!el.value) return

  if (props.immediate) {
    setTimeout(() => {
      isVisible.value = true
    }, props.delay)
    return
  }

  trigger = ScrollTrigger.create({
    trigger: el.value,
    start: 'top 85%',
    onEnter: () => {
      setTimeout(() => {
        isVisible.value = true
      }, props.delay)
    },
  })
})

onUnmounted(() => {
  if (trigger) trigger.kill()
})
</script>

<style scoped>
.animated-text {
  display: inline-block;
}

.animated-text__char {
  display: inline-block;
  opacity: 0;
  transform: translateY(16px) rotateX(-60deg);
  transform-origin: bottom center;
  transition:
    opacity 0.5s cubic-bezier(0.25, 0.9, 0.3, 1),
    transform 0.5s cubic-bezier(0.25, 0.9, 0.3, 1);
  will-change: opacity, transform;
}

.animated-text.is-visible .animated-text__char {
  opacity: 1;
  transform: translateY(0) rotateX(0deg);
}

@media (prefers-reduced-motion: reduce) {
  .animated-text__char {
    transition: none;
    transform: none;
    opacity: 1;
  }
}
</style>
