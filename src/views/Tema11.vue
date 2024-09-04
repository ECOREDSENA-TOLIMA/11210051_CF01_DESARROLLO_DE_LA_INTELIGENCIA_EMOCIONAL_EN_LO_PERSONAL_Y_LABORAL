<template lang="pug">
.curso-main-container.pb-3.tema11
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 11
      h1 Inteligencia racional vs. inteligencia emocional 

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema11/img-01.png', alt='')
     
    p(data-aos="zoom-in") La inteligencia racional se refiere a las habilidades cognitivas tradicionales, como la lógica, el razonamiento y la resolución de problemas que son medibles a través de pruebas de CI. Por otro lado, la inteligencia emocional (IE), popularizada por Daniel Goleman, se centra en la capacidad de las personas para reconocer, entender y gestionar sus propias emociones, así como las de los demás.
    p.mb-5(data-aos="zoom-in") A continuación, se presenta la comparación:

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .row.mb-1
          .col-lg-6.col-ipad.mb-4
            img(src='@/assets/curso/temas/tema11/img-02.svg').mb-4
            h3 Inteligencia racional
            p Evaluada mediante pruebas estandarizadas, predice habilidades cognitivas especificas, como el pensamiento crítico y la capacidad de análisis.

          .col-lg-6.col-ipad.mb-4
            img(src='@/assets/curso/temas/tema11/img-03.svg').mb-4
            h3 Inteligencia emocional 
            p Incluye la autoconciencia, la autorregulación, le empatía  y las habilidades sociales, y se considera crucial para el éxito en las relaciones  interpersonales y el liderazgo.

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .row.justify-content-center.align-items-center.mb-4
          .col-12(data-aos="fade-down-right")
            .cajon.color-secundario.p-4(style="background-color:#FFF4D6")
              p La combinación de ambas inteligencias es esencial para un rendimiento óptimo en la vida personal y profesional. La inteligencia emocional complementa la inteligencia racional al mejorar la toma de decisiones, la gestión del estrés y las relaciones interpersonales. 










</template>

<script>
export default {
  name: 'Tema11',
  data: () => ({
    datosSlyderEjemplo1: [
      {
        titulo: 'Toma de decisiones',
        texto:
          'las emociones pueden sesgar el juicio y afectar la calidad de las decisiones (Damasio, 1994).',
        imagen: require('@/assets/curso/temas/tema5/img-01.png'),
      },
      {
        titulo: 'Comunicación',
        texto:
          'La forma en que nos comunicamos, tanto verbal como no verbal, está fuertemente influenciada por nuestras emociones.',
        imagen: require('@/assets/curso/temas/tema5/img-02.png'),
      },
      {
        titulo: 'Clima laboral',
        texto:
          'Un clima laboral positivo, caracterizado por relaciones interpersonales saludables y un ambiente de confianza, se asocia con niveles más altos de compromiso y productividad (Harter, Schmidt y Keyes, 2002).',
        imagen: require('@/assets/curso/temas/tema5/img-03.png'),
      },
      {
        titulo: 'Liderazgo',
        texto:
          'Los líderes emocionalmente inteligentes son capaces de inspirar, motivar y conectar con sus equipos de manera más efectiva (Goleman, 2000).',
        imagen: require('@/assets/curso/temas/tema5/img-04.png'),
      },
    ],
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
