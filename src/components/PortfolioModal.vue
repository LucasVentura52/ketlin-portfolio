<template>
  <v-dialog v-model="model" max-width="920">
    <v-card class="pa-4 pa-sm-6">
      <div class="d-flex align-start justify-space-between ga-4">
        <div>
          <div class="text-overline">{{ item?.type }}</div>
          <div class="text-h5 text-sm-h4 font-weight-bold">{{ item?.title }}</div>
        </div>
        <v-btn icon="mdi-close" variant="text" @click="model = false" />
      </div>

      <v-img v-if="item?.cover" :src="item.cover" class="rounded-xl mt-5" height="420" cover />

      <div class="mt-4" style="line-height:1.8; opacity:.9">
        {{ item?.description }}
      </div>

      <div class="mt-4 d-flex flex-wrap ga-3">
        <v-btn v-if="item?.link" :href="item.link" target="_blank" rel="noopener" variant="tonal" prepend-icon="mdi-open-in-new">
          Abrir link
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'PortfolioModal',
  props: { modelValue: Boolean, item: Object },
  emits: ['update:modelValue'],
  computed: {
    model: {
      get() { return this.modelValue },
      set(v) { this.$emit('update:modelValue', v) }
    }
  }
}
</script>
