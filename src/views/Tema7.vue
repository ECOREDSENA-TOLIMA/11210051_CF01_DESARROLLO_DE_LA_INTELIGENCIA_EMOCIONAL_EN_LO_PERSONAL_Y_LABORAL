<template lang="pug">
.curso-main-container.pb-3.tema7
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Inteligencia intrapersonal 

    p.mb-5(data-aos="zoom-in") La inteligencia intrapersonal se refiere a la capacidad de comprender y manejar los propios sentimientos y emociones. Este tipo de inteligencia, que forma parte de la teoría de las inteligencias múltiples propuesta por Howard Gardner (1983), es esencial para el autoconocimiento y el desarrollo personal. A continuación, se detallan los aspectos clave de la inteligencia intrapersonal: 

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        ImagenInfografica.color-acento-botones.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema7/img-01-1.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="86.5%" y="17.5%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") La habilidad para reconocer las propias emociones, pensamientos y motivaciones. Las personas con alta inteligencia intrapersonal son conscientes de sus fortalezas y debilidades, lo que les permite tomar decisiones más informadas y alineadas con sus valores personales.
          
          .tarjeta.color-acento-botones.p-3(x="86.5%" y="34%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Implica la capacidad de controlar y gestionar las propias emociones, manteniendo la calma en situaciones estresantes y evitando reacciones impulsivas. La autorregulación es crucial para mantener un equilibrio emocional y reducir el estrés.

          .tarjeta.color-acento-botones.p-3(x="86.5%" y="50%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Las personas con inteligencia intrapersonal suelen ser reflexivas, dedicando tiempo a analizar sus experiencias y aprender de ellas. Esta reflexión les ayuda a mejorar continuamente y a adaptarse a nuevas situaciones.
              
          .tarjeta.color-acento-botones.p-3(x="86.5%" y="66.5%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Se refiere a la capacidad de establecer metas personales y mantener la motivación para alcanzarlas, incluso en ausencia de recompensas externas. La inteligencia intrapersonal está estrechamente relacionada con la autodisciplina y la perseverancia.
          
          .tarjeta.color-acento-botones.p-3(x="86.5%" y="83%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Las personas con alta inteligencia intrapersonal son capaces de actuar de manera independiente y tomar decisiones basadas en su propio juicio, sin depender excesivamente de la opinión de los demás.

        .row.mt-5.mb-3.justify-content-center
          .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema7/img-01-2.svg', alt='Texto que describa la imagen')

    p.mb-5(data-aos="zoom-in") La inteligencia intrapersonal es fundamental para el desarrollo personal, ya que permite a los individuos comprender mejor quiénes son y qué desean lograr en la vida. En el ámbito profesional, esta inteligencia es vital para el liderazgo, la toma de decisiones y la gestión del estrés. Aquellos con alta inteligencia intrapersonal tienden a ser más resilientes, capaces de aprender de los fracasos y de adaptarse a los cambios con mayor facilidad. 

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .row.justify-content-center.align-items-center.mb-4
          .col-12(data-aos="fade-down-right")
            .cajon.color-primario.p-4(style="background-color:#EDD8F5")
              p Es importante reconocer que la inteligencia intrapersonal es un componente clave de la inteligencia emocional, ya que el autoconocimiento y la autorregulación son fundamentales para manejar las relaciones interpersonales de manera efectiva. Un alto nivel de inteligencia intrapersonal mejora la empatía y la capacidad de comprender y responder a las emociones de los demás. 


</template>

<script>
export default {
  name: 'Tema7',
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
