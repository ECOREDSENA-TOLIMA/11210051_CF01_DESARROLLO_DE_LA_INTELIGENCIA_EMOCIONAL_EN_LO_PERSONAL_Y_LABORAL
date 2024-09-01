<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Emociones y sentimientos 

    p.mb-5(data-aos="zoom-in") Las emociones y los sentimientos son fundamentales para la vida afectiva humana. Las emociones son respuestas inmediatas y automáticas ante estímulos, mientras que los sentimientos representan la interpretación consciente y subjetiva de esas emociones. La distinción entre ambos es clave para entender cómo las personas experimentan y gestionan su vida emocional. 
    
    .tarjeta--container.row.mb-5(data-aos="fade-up")
      .col-md.tarjeta.color-primario2.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema4/img-08.svg', alt='Imagen decorativa')
        h2.text-center Emociones
        p Son reacciones rápidas y automáticas que involucran tanto procesos fisiológicos como psicológicos. Estas respuestas que se desencadenan antes estímulos específicos , pueden ser breves y están asociadas con cambios fisiológicos y comportamientos observables.
        
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema4/img-09.svg', alt='Imagen decorativa')
        h2.text-center Sentimientos
        p Son la experiencia personal y subjetiva de las emociones. A diferencia de las emociones los sentimientos son mas duraderos y están influidos por el contexto cultural, las creencias y los recuerdos. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Fenómenos de la vida afectiva  
    
    p.mb-5(data-aos="zoom-in") La vida afectiva engloba una serie de experiencias y fenómenos que reflejan cómo las personas experimentan, interpretan y expresan sus emociones y sentimientos. Estos fenómenos no solo tienen un impacto en el bienestar individual, sino que también influyen en la interacción social y la cohesión cultural. Algunos de los fenómenos o experiencias afectivas más relevantes incluyen:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-up")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-01.svg' alt='AvatarTop')
        h2.text-center Amor
        p Un sentimiento profundo de apego y conexión hacia otra persona, objeto o idea, que puede manifestarse en formas románticas, familiares o platónicas. El amor influye en las decisiones, comportamientos y perspectivas de vida.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-02.svg' alt='AvatarTop')
        h2.text-center Ansiedad
        p Una emoción caracterizada por sentimientos de tensión, preocupación y temor. Es una respuesta a una amenaza percibida y puede influir en el comportamiento y en las decisiones cotidianas, a menudo llevándolo a evitar ciertas situaciones. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-03.svg' alt='AvatarTop')
        h2.text-center Empatía
        p La capacidad de entender y compartir los sentimientos de otro. La empatía es crucial para las relaciones interpersonales, ya que fomenta la comprensión mutua y el apoyo emocional.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-04.svg' alt='AvatarTop')
        h2.text-center Nostalgia
        p Un sentimiento agridulce que surge al recordar momentos pasados, a menudo idealizados. La nostalgia puede provocar una sensación de pérdida, pero también puede fortalecer el sentido de identidad y pertenencia. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-05.svg' alt='AvatarTop')
        h2.text-center Resentimiento
        p Un sentimiento negativo que se desarrolla como resultado de una ofensa percibida, injusticia o traición. El resentimiento puede durar mucho tiempo y afectar profundamente las relaciones interpersonales. 
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-06.svg' alt='AvatarTop')
        h2.text-center Culpa
        p Una emoción que surge cuando una persona siente que ha violado sus propios estándares morales o éticos. La culpa puede llevar a la reparación y al cambio de comportamiento, pero también puede ser debilitante si no se maneja adecuadamente.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-07.svg' alt='AvatarTop')
        h2.text-center Agradecimiento
        p Una emoción positiva que se experimenta al reconocer la bondad recibida de otros. El agradecimiento promueve el bienestar emocional y fortalece las relaciones sociales. 

    p.mb-5(data-aos="zoom-in") Estos fenómenos son solo algunos ejemplos de la complejidad de la vida afectiva humana. Cada uno de ellos juega un papel crucial en cómo las personas navegan sus relaciones, toman decisiones y encuentran significado en sus vidas. 






</template>

<script>
export default {
  name: 'Tema4',
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
