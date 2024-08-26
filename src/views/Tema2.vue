<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Clasificación de las emociones 
    
    p(data-aos="zoom-in") Las emociones pueden ser clasificadas según diferentes criterios, lo que nos permite entender mejor su diversidad y su impacto en el comportamiento humano. Una de las clasificaciones más comunes es la que distingue entre emociones positivas, negativas y neutras, dependiendo de su valencia y su efecto en el individuo. 
    p.mb-5(data-aos="zoom-in") Según Ekman (1992) y Fredrickson (2001), existen varias clases de emociones:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-12
        .row.justify-content-center.align-items-center
          .col-12.px-0
            AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-out-up")
              .row(titulo="Emociones positivas")
                .col-md-12.mb-4.mb-md-0
                  p Son aquellas que generan sensaciones agradables y promueven el bienestar. Estas emociones suelen estar asociadas con la aproximación hacia estímulos o situaciones deseables.
                  p <strong>Ejemplos:</strong> alegría, amor, gratitud, esperanza, orgullo, entre otras.
                  p.mb-5 <strong>Funcionalidad:</strong> promueven la salud mental y emocional, fomentan la resiliencia y fortalecen las relaciones interpersonales. 

              .row(titulo="Emociones negativas")
                .col-md-12.mb-4.mb-md-0
                  p Son aquellas que provocan sensaciones de malestar o incomodidad. Aunque suelen percibirse como indeseables, estas emociones cumplen funciones adaptativas importantes, como la protección y la supervivencia.
                  p <strong>Ejemplos:</strong> miedo, ira, tristeza, asco, culpa, entre otras.
                  p.mb-5 <strong>Funcionalidad:</strong> actúan como señales de alerta frente a amenazas o problemas, motivando conductas de evitación o defensa.

              .row(titulo="Emociones neutras")
                .col-md-12.mb-4.mb-md-0
                  p Son aquellas que no generan una respuesta emocional fuerte, ni positiva ni negativa. Estas emociones suelen ser más sutiles y pueden preparar al individuo para una evaluación más objetiva de la situación.
                  p <strong>Ejemplos:</strong> asombro, sorpresa, entre otras.
                  p <strong>Funcionalidad:</strong> permiten la evaluación y adaptación a situaciones nuevas o inesperadas, facilitando la toma de decisiones sin una carga emocional excesiva.

      .col-lg-4.col-12.mb-5(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/img-01.svg', alt='Rutinas de limpieza')
    
      p(data-aos="zoom-in") Esta clasificación resalta cómo las emociones, independientemente de su valencia, desempeñan un papel crucial en la regulación del comportamiento y en la adaptación a los desafíos del entorno. Las emociones positivas nos impulsan hacia metas y experiencias gratificantes, las emociones negativas nos protegen de peligros y amenazas, y las emociones neutras nos permiten evaluar las circunstancias con mayor claridad y objetividad. 


</template>

<script>
export default {
  name: 'Tema2',
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
