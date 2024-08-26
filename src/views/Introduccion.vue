<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .mb-5(data-aos="zoom-down") El componente formativo “Antropología e inteligencia emocional”, explora la naturaleza y función de las emociones desde diversas perspectivas, incluyendo la biológica, cognitiva y antropológica. El objetivo es comprender cómo las emociones influyen en las interacciones sociales y culturales, así como desarrollar la inteligencia emocional y competencias emocionales necesarias para gestionar eficazmente las relaciones personales y profesionales. A través de un enfoque interdisciplinario, se analizarán teorías y modelos que permiten entender y aplicar conceptos clave de la inteligencia emocional en distintos contextos, promoviendo un desarrollo integral de las habilidades emocionales y cognitivas. 

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
