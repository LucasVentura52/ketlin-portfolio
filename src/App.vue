<template>
  <v-app>
    <!-- PÁGINA 1 (CAPA / HERO) -->
    <section class="section reveal" style="background:#f0ded5">
      <div class="blob-top-right"></div>
      <Squiggle />

      <div class="container" style="position:relative; z-index:2">
        <div class="grid-2">
          <div class="d-flex justify-center justify-md-start reveal-image">
            <div class="arch">
              <img src="/assets/hero.jpg" alt="Ketlin Alencar" />
            </div>
          </div>

          <div class="reveal-text">
            <h1 class="h1">
              <span style="color:#c58a5c">K</span>ETLIN ALENCAR
            </h1>
            <div class="subtitle">social media</div>

            <div class="contact">
              <div class="iconbox">
                <i class="mdi mdi-email-outline contact-icon"></i>
              </div>
              <a :href="mailtoUrl">{{ email }}</a>
            </div>

            <div class="contact">
              <div class="iconbox">
                <i class="mdi mdi-phone-outline contact-icon"></i>
              </div>
              <a :href="whatsUrl" target="_blank" rel="noopener">{{ whatsappLabel }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PÁGINA 2 (SOBRE MIM) -->
    <section id="sobre" class="section reveal" style="background:#c58a5c">
      <div class="soft-wave"></div>

      <div class="container" style="position:relative; z-index:2">
        <div class="grid-2 sobre-grid">
          <div class="sobre-text reveal-text">
            <h2 class="h2" style="color:#f0ded5">
              Sobre mim <span style="color:#f7d36a">✨</span>
            </h2>
            <p class="p" style="color:#f0ded5; opacity:.9">
              Sou a Ketlin Alencar, alguém que sempre sonhou em viver da criatividade. Desde cedo, imaginei transformar
              sentimentos
              em imagens e dar vida às ideias que nasciam em mim. Atuar como Social Media é a realização desse sonho:
              usar minha visão
              para conectar marcas e pessoas com verdade, beleza e propósito.
            </p>

            <!-- <div class="btnrow">
              <v-btn color="secondary" variant="tonal" size="large" href="#cta" prepend-icon="mdi-rocket-launch-outline">
                Vamos fechar uma parceria?
              </v-btn>
            </div> -->
          </div>

          <div class="d-flex justify-center justify-md-end sobre-image reveal-image" style="position:relative">
            <div class="circle">
              <img src="/assets/sobre.jpg" alt="Ketlin" />
            </div>
            <!-- raios/brilhos simples -->
            <div
              style="position:absolute; top:-10px; right:40px; color:white; font-size:46px; font-weight:800; transform:rotate(12deg); opacity:.95;">
              ︵︵
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PÁGINA 3 (POSICIONE) -->
    <section class="section reveal" style="background:#c58a5c">
      <div class="container" style="position:relative; z-index:2">
        <div class="grid-2 posicione-grid">
          <div class="posicione-text reveal-text">
            <h2 class="h2" style="color:#3d3133">
              Posicione<br />a sua marca!
            </h2>
            <div class="subtitle"
              style="letter-spacing:0; text-transform:none; color:#3d3133; opacity:.9; font-size:30px">
              Seja presente, único e autêntico.
            </div>
          </div>

          <div class="d-flex justify-center justify-md-end posicione-image reveal-image">
            <div class="arch"
              style="border-radius:999px 0 0 999px; aspect-ratio: 1.25/1; height: min(520px, 70vh); width: min(560px, 92vw);">
              <img src="/assets/posicione.jpg" alt="Trabalho" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PÁGINA 4 (ENCANTE) -->
    <section class="section reveal" style="background:#f0ded5">
      <TrianglePattern />

      <div class="container" style="position:relative; z-index:2">
        <div class="grid-2 encante-grid">
          <div class="d-flex justify-center justify-md-start encante-image reveal-image">
            <div class="arch" style="border-radius:999px; aspect-ratio: 1/1; width:min(520px, 92vw)">
              <img src="/assets/encante.jpg" alt="Equipe" />
            </div>
          </div>

          <div class="encante-text reveal-text">
            <h2 class="h2" style="color:#3d3133">
              Encante<br />sua audiência!
            </h2>
            <div class="subtitle"
              style="letter-spacing:0; text-transform:none; color:#3d3133; opacity:.9; font-size:30px">
              Crie uma conexão vitalícia.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PÁGINA (VOCÊ VS VOCÊ) como extra do PDF -->
    <section class="section reveal" style="background:#c58a5c">
      <div class="container">
        <div class="grid-2 voce-grid">
          <div class="d-flex justify-center justify-md-start voce-image reveal-image">
            <div class="arch" style="border-radius:999px; width:min(520px, 92vw)">
              <img src="/assets/vocevsvoce.jpg" alt="Você vs você" />
            </div>
          </div>

          <div class="voce-text reveal-text">
            <h2 class="h2" style="color:#3d3133">
              Seja seu maior sucesso!
            </h2>
            <div class="subtitle"
              style="letter-spacing:0; text-transform:none; color:#3d3133; opacity:.9; font-size:30px">
              Conquiste público e gere conexão.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVIÇOS (baseado no PDF) -->
    <section id="servicos" class="section reveal" style="background:#f0ded5">
      <div class="container">
        <h2 class="h2" style="color:#3d3133">Competências</h2>

        <div class="services-grid">
          <v-card v-for="(s, i) in services" :key="i" class="pa-5 rounded-lg" variant="flat"
            style="border:1px solid rgba(61,49,51,.10)">
            <div class="d-flex ga-3 align-start">
              <i :class="['mdi', s.icon, 'service-icon']"></i>
              <div>
                <div style="font-weight:700; font-size:18px">{{ s.title }}</div>
                <div style="opacity:.85; margin-top:4px; line-height:1.6">{{ s.desc }}</div>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </section>

    <!-- PORTFÓLIO (você substitui pelos trabalhos reais) -->
    <!-- <section id="portfolio" class="section" style="background:#f0ded5">
      <div class="container">
        <h2 class="h2" style="color:#3d3133">Portfólio</h2>
        <p class="p" style="margin-top:10px">Coloque os trabalhos reais em <code>/public/portfolio</code> e ajuste <code>src/data/portfolio.js</code>.</p>

        <div class="btnrow" style="margin-top:14px">
          <v-chip
            v-for="f in filters"
            :key="f"
            :color="activeFilter === f ? 'primary' : undefined"
            :variant="activeFilter === f ? 'tonal' : 'outlined'"
            label
            style="cursor:pointer"
            @click="activeFilter = f"
          >{{ f }}</v-chip>
        </div>

        <div class="portfolio-grid">
          <v-card v-for="(item,i) in filteredPortfolio" :key="i" class="overflow-hidden" style="cursor:pointer" @click="openItem(item)">
            <v-img :src="item.cover" height="220" cover />
            <div class="pa-4">
              <div style="font-weight:800">{{ item.title }}</div>
              <div style="opacity:.8; font-size:14px">{{ item.type }}</div>
            </div>
          </v-card>
        </div>

        <PortfolioModal v-model="modalOpen" :item="selectedItem" />
      </div>
    </section> -->

    <!-- CTA FINAL -->
    <section id="cta" class="section reveal" style="background:#ffffff">
      <div class="container">
        <h2 class="h2" style="color:#3d3133">Vamos fechar uma parceria?</h2>
        <p class="p">Me chama e me conta o que você quer construir com a sua marca.</p>

        <div class="btnrow">
          <v-btn color="primary" variant="tonal" size="large" :href="whatsUrl" target="_blank" rel="noopener"
            prepend-icon="mdi-whatsapp">
            {{ whatsappLabel }}
          </v-btn>
          <v-btn variant="tonal" size="large" :href="mailtoUrl" prepend-icon="mdi-email-outline">
            {{ email }}
          </v-btn>
        </div>

        <div style="margin-top:36px; opacity:.7">
          © {{ new Date().getFullYear() }} Ketlin Alencar — Social Media
        </div>
      </div>
    </section>
  </v-app>
</template>

<script>
import Squiggle from './components/Squiggle.vue'
import TrianglePattern from './components/TrianglePattern.vue'
import PortfolioModal from './components/PortfolioModal.vue'
import { portfolioItems } from './data/portfolio'

export default {
  name: 'App',
  components: { Squiggle, TrianglePattern, PortfolioModal },
  data() {
    return {
      email: 'ketlinalencar24@gmail.com',
      whatsapp: '5544991650516',
      whatsappLabel: '(44) 99165-0516',
      modalOpen: false,
      selectedItem: null,
      activeFilter: 'Todos',
      portfolio: portfolioItems,
      services: [
        { icon: 'mdi-chart-line', title: 'Conteúdo estratégico', desc: 'Criação de conteúdos com foco em conversão e posicionamento.' },
        { icon: 'mdi-brush-outline', title: 'Direção criativa', desc: 'Ideias e conceitos para fortalecer identidade e comunicação.' },
        { icon: 'mdi-video-outline', title: 'Edição de vídeos', desc: 'Edição com estética e ritmo (Reels/Shorts/TikTok).' },
        { icon: 'mdi-text-long', title: 'Legendas', desc: 'Copy pensada para engajar e conduzir a ação.' },
        { icon: 'mdi-message-processing-outline', title: 'Storys', desc: 'Conteúdo para Stories com intenção e relacionamento.' },
        { icon: 'mdi-comment-text-multiple-outline', title: 'Respostas de comentários', desc: 'Cuidado com a comunidade e presença diária.' },
        { icon: 'mdi-camera-outline', title: 'Auxílio em gravações', desc: 'Direcionamento para gravação com naturalidade.' },
        { icon: 'mdi-calendar-check-outline', title: 'Planejamento', desc: 'Organização, planejamento e calendário de conteúdo.' }
      ]
    }
  },
  computed: {
    whatsUrl() {
      const text = encodeURIComponent('Oi, Ketlin! Quero conversar sobre um projeto de Social Media.')
      return `https://wa.me/${this.whatsapp}?text=${text}`
    },
    mailtoUrl() {
      const subject = encodeURIComponent('Parceria / Projeto - Social Media')
      const body = encodeURIComponent('Oi, Ketlin! Tudo bem?\n\nQuero conversar sobre um projeto.')
      return `mailto:${this.email}?subject=${subject}&body=${body}`
    },
    filters() {
      const types = new Set(this.portfolio.map(p => p.type))
      return ['Todos', ...Array.from(types)]
    },
    filteredPortfolio() {
      if (this.activeFilter === 'Todos') return this.portfolio
      return this.portfolio.filter(p => p.type === this.activeFilter)
    }
  },
  methods: {
    openItem(item) {
      this.selectedItem = item
      this.modalOpen = true
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 }
    )

    this.$nextTick(() => {
      const revealables = document.querySelectorAll('.reveal, .reveal-text, .reveal-image');
      revealables.forEach((el, idx) => {
        const baseDelay = Math.min(idx * 70, 280);
        const extra = el.classList.contains('reveal-image') ? 80 : 0;
        el.style.transitionDelay = `${baseDelay + extra}ms`;
        observer.observe(el);
      });
    })
  }
}
</script>
