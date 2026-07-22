import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  let ctx = null

  onMounted(() => {
    ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      gsap.utils.toArray('.reveal-text').forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      gsap.utils.toArray('.reveal-image').forEach((el) => {
        gsap.from(el, {
          scale: 0.94,
          opacity: 0,
          rotation: -1.5,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      gsap.utils.toArray('.reveal-stagger').forEach((container) => {
        const children = Array.from(container.children)
        gsap.from(children, {
          y: 40,
          opacity: 0,
          scale: 0.95,
          duration: 0.7,
          stagger: 0.08,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      gsap.utils.toArray('.svg-draw').forEach((svg) => {
        const paths = svg.querySelectorAll('path, circle')
        paths.forEach((path) => {
          const length = path.getTotalLength ? path.getTotalLength() : 900
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          })
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: svg,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          })
        })
      })
    })
  })

  onUnmounted(() => {
    if (ctx) ctx.revert()
  })
}
