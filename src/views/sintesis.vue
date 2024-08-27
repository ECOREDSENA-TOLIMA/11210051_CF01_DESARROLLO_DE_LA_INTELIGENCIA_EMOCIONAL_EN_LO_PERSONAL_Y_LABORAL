<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe una visión general el componente formativo “Antropología e inteligencia emocional”, el cual ofrece un análisis profundo de las emociones desde múltiples perspectivas, incluyendo la biológica, cognitiva y antropológica. Se explora la naturaleza y clasificación de las emociones, su función y cómo se manifiestan en diferentes contextos sociales y culturales. Además, se abordan temas como la inteligencia emocional, su aplicación en entornos empresariales, y la relación entre inteligencia emocional y racional. A lo largo del curso, se estudian teorías culturales y modelos de competencias emocionales, proporcionando a los estudiantes las herramientas necesarias para entender y gestionar mejor sus emociones y las de los demás, tanto en la vida personal como profesional.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo “Antropología e inteligencia emocional”, se describe un análisis profundo de las emociones desde múltiples perspectivas, incluyendo la biológica, cognitiva y antropológica.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
