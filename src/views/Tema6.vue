<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Inteligencia emocional 

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema6/img-01.png', alt='')

    p.mb-5(data-aos="zoom-in") La Inteligencia Emocional (IE) se refiere a la capacidad de una persona para reconocer, comprender y gestionar sus propias emociones, así como para reconocer e influir en las emociones de los demás. Esta habilidad es fundamental tanto en la vida personal como profesional, ya que afecta la toma de decisiones, las relaciones interpersonales y el bienestar general. 

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_6_1 6.1 Definiciones 

    p.mb-5(data-aos="zoom-in") La inteligencia emocional ha sido definida de diferentes maneras por varios expertos en el campo:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12(data-aos="fade-right", alt="")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 2.] <em>Autores y postulados sobre inteligencia emocional</em>
        .tabla-a.color-acento-contenido.mb-5
          table
            caption Nota. Adaptado de García, M. y Giménez, S. (2010). 
            thead
              tr
                th(style="width:70px") Autor
                th(style="width:210px") Postulado
            tbody
              tr
                td.text-center(style="background-color:#F6F6F6") <b>Weisinger, H. (1988)</b> 
                td(style="background-color:#F6F6F6") "Es el uso inteligente de las emociones". 
              tr
                td.text-center <b>Gardner, H. (1993)</b> 
                td "Es el potencial biopsicosocial para procesar información, que puede generarse en el contexto cultural para resolver los problemas". 
              tr
                td.text-center(style="background-color:#F6F6F6") <b>Martineaud, S. y Elgehart, D. (1996)</b> 
                td(style="background-color:#F6F6F6") "Capacidad para leer nuestros sentimientos, controlar nuestros impulsos, razonar, permanecer tranquilos y optimistas cuando nos vemos confrontados a ciertas pruebas y mantenernos a la escucha del otro".
              tr
                td.text-center <b>Bar-On, R. (1997)</b> 
                td "Conjunto de capacidades, competencias y habilidades no cognitivas que influencian la habilidad propia de tener éxito al afrontar aspectos del medio ambiente". 
              tr
                td.text-center(style="background-color:#F6F6F6") <b>Mayer, J. D. y Salovey, P. (1997)</b> 
                td(style="background-color:#F6F6F6") "Capacidad de procesar la información emocional con exactitud y eficacia, incluyendo la percepción, la asimilación, la comprensión y la regulación de las emociones".
              tr
                td.text-center <b>Vallés, A. (2005)</b> 
                td "Capacidad intelectual en la que se utilizan las emociones para resolver problemas". 
              tr
                td.text-center(style="background-color:#F6F6F6") <b>García, M. y Giménez, S. (2010)</b> 
                td(style="background-color:#F6F6F6") "Forma de interactuar con el mundo, que tiene en cuenta los sentimientos, y engloba habilidades tales como el control de los impulsos, la autoconciencia, la motivación, el entusiasmo, la perseverancia y/o la agilidad mental". 
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_6_2 6.2 Principios 

    p.mb-5(data-aos="zoom-in") Existen varios modelos de inteligencia emocional que intentan explicar y medir esta capacidad:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-up")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-02.svg' alt='AvatarTop')
        h2.text-center Autoconciencia
        p La habilidad para reconocer y entender las propias emociones, así como su impacto en el comportamiento y las decisiones. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-03.svg' alt='AvatarTop')
        h2.text-center Autorregulación
        p La capacidad de manejar y controlar las propias emociones, adaptándose a las circunstancias cambiantes y manteniendo la calma bajo presión. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-04.svg' alt='AvatarTop')
        h2.text-center Motivación
        p El impulso interno para alcanzar metas personales y profesionales, orientado por la pasión y la perseverancia más allá de la gratificación inmediata. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-05.svg' alt='AvatarTop')
        h2.text-center Empatía
        p La habilidad de entender y compartir los sentimientos de los demás, lo que facilita la construcción de relaciones interpersonales sólidas y la toma de decisiones colaborativas. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-06.svg' alt='AvatarTop')
        h2.text-center Habilidades sociales
        p La competencia en manejar las relaciones interpersonales de manera efectiva, que incluye la comunicación, la gestión de conflictos y la cooperación. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_6_3 6.3 Modelos
      
    p.mb-5(data-aos="zoom-in") Los principios fundamentales de la Inteligencia Emocional (IE) se pueden dividir en varias áreas clave:

    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Modelo de habilidad de Mayer y Salovey]
              p.mb-0 Considera la IE como una forma pura de inteligencia cognitiva, divirtiéndola en cuatro áreas: percepción emocional, facilitación emocional, comprensión emocional y regulación emocional.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema6/img-07.png', style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Modelo de competencias de Goleman]
              p.mb-0 Define la IE en términos de competencias emocionales que pueden ser desarrolladas, como la autoconciencia, la autorregulación, la motivación, la empatía y las habilidades sociales. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema6/img-08.png', style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Modelo de rasgos de Petrides]
              p.mb-0 Este enfoque considera la IE como una serie  de disposiciones emocionales  y de personalidad  que influyen en como las personas  perciben y  gestionan sus  emociones, tanto propias  como ajenas. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema6/img-09.png', style="width: 450px" ,alt='').m-auto 

    p.mb-5(data-aos="zoom-in") Estos modelos ofrecen diferentes perspectivas sobre la naturaleza de la inteligencia emocional y cómo puede ser medida y desarrollada en distintos contextos. 



</template>

<script>
export default {
  name: 'Tema6',
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
