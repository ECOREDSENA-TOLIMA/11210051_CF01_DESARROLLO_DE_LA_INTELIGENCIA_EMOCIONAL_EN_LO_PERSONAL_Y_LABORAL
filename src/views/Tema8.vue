<template lang="pug">
.curso-main-container.pb-3.tema8
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Competencias emocionales

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las competencias emocionales son un conjunto de habilidades que nos permiten reconocer, entender, expresar y regular nuestras emociones de manera efectiva, tanto las propias como las de los demás. Estas habilidades son fundamentales para nuestras relaciones interpersonales, nuestro bienestar emocional y nuestro éxito en diferentes ámbitos de la vida. 
          br
          br
          | En otras palabras, las competencias emocionales nos equipan con las herramientas necesarias para navegar por el complejo mundo de las emociones y tomar decisiones más conscientes y saludables. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_8_1 8.1 Modelos de competencias emocionales 
    
    p.mb-5(data-aos="zoom-in") Existen diversos modelos que intentan explicar y categorizar las competencias emocionales. Algunos de los más destacados son: 


    .row.justify-content-center.mb-5.md-px-5.col-ipad
      .col-xl-3.col-md-6
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema8/img-03.png", alt="alt")
          .crd_hover_txt--body
            ul.lista-ul--color
              li.mb-4
                i.ico-open-task
                h5 Modelo de Goleman
            p.mb-0 Este modelo, popularizado por Daniel Goleman, enfatiza la importancia de las competencias emocionales en el liderazgo y en el éxito personal. Goleman identifica cinco componentes principales: autoconciencia, autorregulación, motivación, empatía y habilidades sociales.

      .col-xl-3.col-md-6
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema8/img-04.png", alt="alt")
          .crd_hover_txt--body
            ul.lista-ul--color
              li.mb-4
                i.ico-open-task
                h5 Modelo de Bar-On
            p El modelo de Reuven Bar-On propone una visión más amplia de la inteligencia emocional, incluyendo componentes como la adaptación al estrés, la relación interpersonal y las habilidades generales de vida. 

      .col-xl-3.col-md-6
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema8/img-05.png", alt="alt")
          .crd_hover_txt--body
            ul.lista-ul--color
              li.mb-4
                i.ico-open-task
                h5 Modelo de Mayer y Salovey
            p Este modelo se centra en la inteligencia emocional como una capacidad mental que implica la habilidad de percibir, usar, entender y regular las emociones
            
      .col-xl-3.col-md-6
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema8/img-06.png", alt="alt")
          .crd_hover_txt--body
            ul.lista-ul--color
              li.mb-4
                i.ico-open-task
                h5 Modelo de Bisquerra
            p Este modelo enfatiza el desarrollo de las competencias emocionales desde una perspectiva educativa, proponiendo un modelo de educación emocional que incluye componentes como la conciencia emocional, la gestión emocional, la comunicación emocional y las relaciones interpersonales. 

    //.row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img-03.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3 Modelo de Goleman
              p Este modelo, popularizado por Daniel Goleman, enfatiza la importancia de las competencias emocionales en el liderazgo y en el éxito personal. Goleman identifica cinco componentes principales: autoconciencia, autorregulación, motivación, empatía y habilidades sociales.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img-04.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3 Modelo de Bar-On
              p El modelo de Reuven Bar-On propone una visión más amplia de la inteligencia emocional, incluyendo componentes como la adaptación al estrés, la relación interpersonal y las habilidades generales de vida. 

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img-05.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3 Modelo de Mayer y Salovey
              p Este modelo se centra en la inteligencia emocional como una capacidad mental que implica la habilidad de percibir, usar, entender y regular las emociones.
            
      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img-06.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3 Modelo de Bisquerra
              p Este modelo enfatiza el desarrollo de las competencias emocionales desde una perspectiva educativa, proponiendo un modelo de educación emocional que incluye componentes como la conciencia emocional, la gestión emocional, la comunicación emocional y las relaciones interpersonales. 
    
    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema8/icono.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c7(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 ¿Por qué son importantes las competencias emocionales? 
    
    .col-xl-10.mx-auto.mb-5
      .d-flex.flex-wrap.align-items-center.mb-5
        .col-xl-7.order-2.order-xl-1.pe-xl-4
          LineaTiempoD.color-primario.linea-tiempo-edit(data-aos="fade-right")
            .d-block(numero="1" titulo="Mejores relaciones interpersonales")
              p.mb-2 Permiten conectar con los demás de manera más profunda y significativa. 
              
            .d-block(numero="2" titulo="Mayor bienestar emocional")
              p.mb-2 Contribuyen a una mayor satisfacción con la vida y una menor incidencia de trastornos psicológicos. 
            
            .d-block(numero="3" titulo="Mayor éxito en el trabajo")
              p.mb-2 Las personas con altas competencias emocionales suelen ser más productivas, creativas y líderes efectivos.
            
            .d-block(numero="4" titulo="Mejor toma de decisiones")
              p.mb-2 Permiten analizar las situaciones de manera más objetiva y elegir las mejores opciones. 
            
            .d-block(numero="5" titulo="Mayor resiliencia")
              p.mb-2 Ayudan a afrontar el estrés y los desafíos de la vida de manera más adaptativa. 
      
        img.col-xl-5.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema8/img-02.svg" data-aos="fade-left" style="max-width: 610px")



</template>

<script>
export default {
  name: 'Tema8',
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
