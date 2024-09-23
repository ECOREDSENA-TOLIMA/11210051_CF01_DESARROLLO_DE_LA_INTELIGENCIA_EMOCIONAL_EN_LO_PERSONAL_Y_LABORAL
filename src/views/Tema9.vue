<template lang="pug">
.curso-main-container.pb-3.tema9
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Inteligencia y coeficiente intelectual

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema8/icono.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c7(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 ¿Qué es la inteligencia? 

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .row
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema9/img-01.svg', style="width: 450px" ,alt='').m-auto
          .col-lg-8
            p La inteligencia es un concepto complejo y multifacético que ha sido definido y medido de diversas maneras a lo largo de la historia. Tradicionalmente, se ha asociado con la capacidad de razonar, resolver problemas, aprender y adaptarse a nuevas situaciones. Sin embargo, en las últimas décadas, la concepción de la inteligencia ha evolucionado, y se han propuesto diferentes modelos que abarcan una gama más amplia de habilidades. 

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema8/icono.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c7(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 El Coeficiente Intelectual (CI) 
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center 
          .col-lg-7.col-12
            p El Coeficiente Intelectual (CI) es una medida estandarizada de la inteligencia humana, que se utiliza para evaluar las habilidades cognitivas en comparación con un grupo normativo. Aunque el CI ha sido ampliamente utilizado en psicología para predecir el rendimiento académico y profesional, no es un reflejo completo de la inteligencia en su totalidad. La inteligencia abarca una amplia gama de habilidades, como la resolución de problemas, la memoria, la lógica, la creatividad y la capacidad para adaptarse a nuevas situaciones. Críticos del CI, como Howard Gardner y Daniel Goleman, argumentan que esta medida es limitada, ya que no considera otras formas de inteligencia, como la emocional o la creativa, que son igualmente importantes para el éxito en la vida. 
          .col-lg-5.col-8
            figure
              img(src='@/assets/curso/temas/tema9/img-02.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="zoom-in") A continuación, algunos aspectos clave del CI: 
    
    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        .crd.py-4(style="background-color: #EDD8F5; border-radius: 25px 25px 0 0")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema9/img-03.svg", alt="alt").img150
            .col.m-1
              h5 Evaluación  del CI
              p Pruebas como el WAIS (Wechsler Adult Intelligence Scale) y el Stanfor-Binet.
        .crd.py-4(style="background-color: #FFF4D6; ")  
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema9/img-04.svg", alt="alt").img150
            .col.m-1
              h5 Limitaciones del CI
              p Ignora aspectos no cognitivos  como la creatividad y la inteligencia emocional.
        .crd.py-4(style="background-color: #EDD8F5; border-radius: 0 0 25px 25px")  
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema9/img-05.svg", alt="alt").img150
            .col.m-2
              h5 Impacto
              p Predice con cierta precisión el rendimiento académico y profesional en ciertos contextos, pero no refleja la totalidad de la capacidad intelectual humana.
      
      img.mx-auto.col-lg-5.col-xl-3.mb-4.my-lg-auto.order-1.order-lg-2.d-lg-flex.d-none(src="@/assets/curso/temas/tema9/img-06.svg" style="max-width: 400px")(data-aos="zoom-in")
    








</template>

<script>
export default {
  name: 'Tema9',
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
