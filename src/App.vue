<template>
  <v-app>
    <CustomCursor />

    <HeroSection />

    <AboutSection />

    <PositionSection />

    <CharmSection />

    <SuccessSection />

    <ServicesSection />

    <PartnershipSection />

    <FooterSection />
  </v-app>
</template>

<script setup>
import CustomCursor from './components/CustomCursor.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import PositionSection from './components/sections/PositionSection.vue'
import CharmSection from './components/sections/CharmSection.vue'
import SuccessSection from './components/sections/SuccessSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import PartnershipSection from './components/sections/PartnershipSection.vue'
import FooterSection from './components/sections/FooterSection.vue'

import { useSmoothScroll } from './composables/useSmoothScroll.js'
import { useScrollAnimations } from './composables/useScrollAnimations.js'

useSmoothScroll()
useScrollAnimations()
</script>
