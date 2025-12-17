<template>
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" class="triangles">
    <g fill="#c58a5c">
      <polygon v-for="(t,i) in tris" :key="i" :points="t"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'TrianglePattern',
  computed: {
    tris() {
      const out = []
      const size = 22
      const gap = 14
      for (let r=0;r<5;r++) {
        for (let c=0;c<5;c++) {
          const x = c*(size+gap) + 6
          const y = r*(size+gap) + 10
          out.push(`${x},${y+size} ${x+size/2},${y} ${x+size},${y+size}`)
        }
      }
      return out
    }
  }
}
</script>
