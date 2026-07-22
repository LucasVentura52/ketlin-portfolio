<template>
  <div class="custom-cursor" :class="{ 'is-hovering': isHovering, 'is-hidden': isHidden }">
    <div class="custom-cursor__outer" ref="outerRef"></div>
    <div class="custom-cursor__inner" ref="innerRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const outerRef = ref(null)
const innerRef = ref(null)
const isHovering = ref(false)
const isHidden = ref(true)

let mouseX = 0
let mouseY = 0
let rafId = null

function onMouseMove(e) {
  mouseX = e.clientX
  mouseY = e.clientY
  if (isHidden.value) isHidden.value = false
}

function onMouseLeave() {
  isHidden.value = true
}

function onMouseEnter() {
  isHidden.value = false
}

function onInteractiveEnter() {
  isHovering.value = true
}

function onInteractiveLeave() {
  isHovering.value = false
}

function animate() {
  if (outerRef.value) {
    gsap.to(outerRef.value, {
      x: mouseX,
      y: mouseY,
      duration: 0.45,
      ease: 'power2.out',
    })
  }
  if (innerRef.value) {
    gsap.to(innerRef.value, {
      x: mouseX,
      y: mouseY,
      duration: 0.12,
      ease: 'power2.out',
    })
  }
  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  if (window.matchMedia('(pointer: coarse)').matches) return

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseleave', onMouseLeave)
  document.addEventListener('mouseenter', onMouseEnter)

  document.querySelectorAll('a, button, .v-btn, .v-card, [data-cursor-hover]').forEach((el) => {
    el.addEventListener('mouseenter', onInteractiveEnter)
    el.addEventListener('mouseleave', onInteractiveLeave)
  })

  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
  document.removeEventListener('mouseenter', onMouseEnter)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.custom-cursor {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  mix-blend-mode: difference;
}

.custom-cursor__outer {
  position: fixed;
  top: -16px;
  left: -16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--color-blush, #f0ded5);
  transition:
    width 0.3s cubic-bezier(0.25, 0.9, 0.3, 1),
    height 0.3s cubic-bezier(0.25, 0.9, 0.3, 1),
    top 0.3s cubic-bezier(0.25, 0.9, 0.3, 1),
    left 0.3s cubic-bezier(0.25, 0.9, 0.3, 1),
    border-color 0.3s ease,
    border-radius 0.3s ease;
  will-change: transform;
}

.custom-cursor__inner {
  position: fixed;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-blush, #f0ded5);
  will-change: transform;
}

.custom-cursor.is-hovering .custom-cursor__outer {
  width: 56px;
  height: 56px;
  top: -28px;
  left: -28px;
  border-color: var(--color-caramel, #c58a5c);
  border-radius: 12px;
}

.custom-cursor.is-hovering .custom-cursor__inner {
  opacity: 0;
}

.custom-cursor.is-hidden .custom-cursor__outer,
.custom-cursor.is-hidden .custom-cursor__inner {
  opacity: 0;
}

@media (pointer: coarse) {
  .custom-cursor {
    display: none !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .custom-cursor__outer,
  .custom-cursor__inner {
    transition: none !important;
  }
}
</style>
