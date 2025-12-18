<template>
  <v-app>
    <!-- PÁGINA 1 CAPA -->
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

    <!-- PÁGINA 2 SOBRE MIM -->
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
          </div>

          <div class="d-flex justify-center justify-md-end sobre-image reveal-image" style="position:relative">
            <div class="arch">
              <img src="/assets/sobre.jpg" alt="Ketlin" />
            </div>
            <div class="posicione-teste">
              ︵︵
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PÁGINA 3 POSICIONE -->
    <section id="posicione" class="section reveal posicione-section" style="background:#c58a5c">
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
            <!-- style="border-radius:999px 0 0 999px; aspect-ratio: 1.25/1; height: min(520px, 70vh); width: min(560px, 92vw);" -->
            <div class="arch">
              <img src="/assets/posicione.jpg" alt="Trabalho" />
            </div>
          </div>
        </div>
      </div>
      <svg class="posicione-sun" viewBox="0 0 120 120" aria-hidden="true">
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
    </section>

    <!-- PÁGINA 4 ENCANTE -->
    <section class="section reveal" style="background:#f0ded5">
      <TrianglePattern />

      <div class="container" style="position:relative; z-index:2">
        <div class="grid-2 encante-grid">
          <div class="d-flex justify-center justify-md-start encante-image reveal-image">
            <div class="arch">
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

    <!-- PÁGINA VOCÊ VS VOCÊ -->
    <section class="section reveal" style="background:#c58a5c">
      <svg class="voce-corner" viewBox="0 0 260 260" aria-hidden="true">
        <path d="M58 92 C 38 88, 24 80, 14 70" />
        <path d="M70 78 C 92 62, 112 48, 132 36" />
        <path d="M62 120 C 90 98, 118 76, 148 56" />
        <path d="M55 160 C 98 128, 145 92, 200 58" />
        <path d="M50 206 C 96 170, 146 132, 206 92" />
      </svg>

      <div class="container">
        <div class="grid-2 voce-grid">
          <div class="voce-text reveal-text">
            <h2 class="h2" style="color:#3d3133">Seja seu maior sucesso!</h2>
            <div class="subtitle"
              style="letter-spacing:0; text-transform:none; color:#3d3133; opacity:.9; font-size:30px">
              Conquiste público e gere conexão.
            </div>
          </div>

          <div class="d-flex justify-center justify-md-start voce-image reveal-image">
            <div class="arch">
              <img src="/assets/vocevsvoce.jpg" alt="Você vs você" />
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- COMPETÊNCIAS -->
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

    <!-- BANNER PARCERIA -->
    <section id="parceria" class="section reveal" style="background:#f0ded5">
      <div class="container">
        <div class="parceria-banner">
          <svg class="parceria-banner__rays" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M60 10 L60 34" />
            <path d="M36 16 L48 36" />
            <path d="M20 34 L40 48" />
            <path d="M14 60 L38 60" />
          </svg>

          <div class="parceria-banner__small reveal-text">vamos fechar</div>
          <div class="parceria-banner__big reveal-text">UMA PARCERIA?</div>

          <svg class="parceria-banner__wave" viewBox="0 0 260 90" aria-hidden="true" overflow="visible">
            <path d="M10 70 C 40 15, 70 15, 100 70 S 160 125, 190 70 S 250 15, 250 70" />
          </svg>
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

    <!-- FINAL -->
    <section id="final" class="section reveal" style="background:#c58a5c">
      <div class="container">
        <div class="final-thanks">
          <svg class="final-thanks__sun reveal-image" viewBox="0 0 120 120" aria-hidden="true">
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