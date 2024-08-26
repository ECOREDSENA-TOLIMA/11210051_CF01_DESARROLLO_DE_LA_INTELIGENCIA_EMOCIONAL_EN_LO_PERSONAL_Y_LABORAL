<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Función de la emoción 

    p.mb-5(data-aos="zoom-in") Las emociones cumplen funciones esenciales en la vida humana, actuando como mecanismos adaptativos que permiten a los individuos responder de manera efectiva a su entorno. Estas funciones se pueden agrupar en tres grandes categorías:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-02.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Función motivacional
            p.text-small.text-center.mb-0 Las emociones sirven como impulsos que dirigen y orientan el comportamiento hacia la satisfacción de necesidades y deseos. Por ejemplo, el miedo puede motivar a una persona a evitar situaciones peligrosas, mientras que la alegría puede impulsar la repetición de conductas que generan bienestar. 

      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-03.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Función social
            p.text-small.text-center.mb-0 Las emociones facilitan la comunicación y la interacción social al expresar estados internos y generar empatía. Las emociones compartidas, como la tristeza en un duelo o la felicidad en una celebración, refuerzan los lazos sociales y la cohesión grupal, siendo fundamentales para la vida en comunidad. 

      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-04.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Función reguladora
            p.text-small.text-center.mb-0 Las emociones ayudan a regular los estados internos del organismo, manteniendo un equilibrio psicológico y fisiológico. Por ejemplo, la tristeza puede permitir la elaboración de experiencias dolorosas, mientras que la rabia puede canalizarse en la defensa de los propios derechos. 

    p.mb-5(data-aos="zoom-in") Estas funciones destacan cómo las emociones no solo afectan el mundo interno del individuo, sino que también desempeñan un papel crucial en la adaptación al entorno y en la interacción con los demás. 


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
