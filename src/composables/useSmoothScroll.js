import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function useSmoothScroll() {
  let lenis = null

  onMounted(() => {
    lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
      duration: 1.2,
      smooth: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  })

  onUnmounted(() => {
    if (lenis) {
      lenis.destroy()
      lenis = null
    }
  })

  return {
    scrollTo: (target, options) => lenis?.scrollTo(target, options),
  }
}
