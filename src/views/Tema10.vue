<template lang="pug">
.curso-main-container.pb-3.tema10
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Teoría de las inteligencias múltiples 
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema10/img-01.png', alt='')
     
    p(data-aos="zoom-in") La teoría de las inteligencias múltiples fue propuesta por Howard Gardner (1983), desafiando la visión tradicional de una inteligencia única y medible por pruebas de CI. Gardner identificó al menos ocho tipos distintos de inteligencias que las personas pueden poseer en diferentes grados y combinaciones. 
    p.mb-5(data-aos="zoom-in") A continuación, algunos aspectos clave de las inteligencias múltiples: 

    .tarjeta--container.row.mb-5(data-aos="fade-up")
      .col-md.tarjeta.color-primario2.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema10/img-02.svg', alt='Imagen decorativa')
        h2.text-center Diversidad en la inteligencia
        p Las inteligencias múltiples incluyen no solo habilidades lógico-matemáticas y lingüísticas, sino también capacidades artísticas, espaciales, kinestésicas, interpersonales, intrapersonales, naturalistas, y más. 

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema10/img-03.svg', alt='Imagen decorativa')
        h2.text-center Enfoque educativo
        p Esta teoría ha influido en la educación, sugiriendo que los métodos de enseñanza deben adaptarse a las diversas fortalezas individuales de los estudiantes.

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_10_1 10.1 Tipos de inteligencias 

    p.mb-5(data-aos="zoom-in") Gardner identifica los siguientes tipos de inteligencias en su teoría: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-up")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema10/img-04.svg' alt='AvatarTop')
        h2.text-center Inteligencia lingüística
        p Habilidad para utilizar las palabras de manera efectiva, tanto en forma oral como escrita. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema10/img-05.svg' alt='AvatarTop')
        h2.text-center Inteligencia lógico-matemática
        p Capacidad para el razonamiento lógico, la resolución de problemas matemáticos y la detección de patrones.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema10/img-06.svg' alt='AvatarTop')
        h2.text-center Inteligencia espacial
        p Habilidad para pensar en tres dimensiones y realizar tareas como la navegación o el diseño gráfico. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema10/img-07.svg' alt='AvatarTop')
        h2.text-center Inteligencia corporal-kinestésica
        p Capacidad para utilizar el cuerpo de manera efectiva, como en la danza o los deportes. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema10/img-08.svg' alt='AvatarTop')
        h2.text-center Inteligencia musical
        p Sensibilidad para los sonidos, ritmos, tonos y música. 
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema10/img-09.svg' alt='AvatarTop')
        h2.text-center Inteligencia interpersonal
        p Habilidad para comprender y relacionarse con los demás. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema10/img-010.svg' alt='AvatarTop')
        h2.text-center Inteligencia intrapersonal
        p Capacidad para entenderse a uno mismo y utilizar ese conocimiento para guiar el comportamiento.  
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema10/img-011.svg' alt='AvatarTop')
        h2.text-center Inteligencia naturalista
        p Habilidad para identificar, clasificar y manipular elementos del medio ambiente.
    
    .row.mb-1

</template>

<script>
export default {
  name: 'Tema10',
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
