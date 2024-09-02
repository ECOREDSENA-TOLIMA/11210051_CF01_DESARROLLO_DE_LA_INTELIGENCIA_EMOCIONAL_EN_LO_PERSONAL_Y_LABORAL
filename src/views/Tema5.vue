<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Las emociones a nivel empresarial 

    p(data-aos="zoom-in") Las emociones, tradicionalmente consideradas como un aspecto subjetivo y personal, han cobrado una relevancia creciente en el ámbito empresarial. Investigaciones recientes (Goleman, 1995; Boyatzis, 2008) han demostrado que la inteligencia emocional, entendida como la capacidad de reconocer, entender y gestionar las propias emociones y las de los demás, es un factor determinante en el éxito individual y organizacional. 
    p.mb-5(data-aos="zoom-in") En el contexto laboral, las emociones influyen en diversos aspectos, como: 

    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo1")(data-aos="zoom-in-up")

    p.mb-5(data-aos="zoom-in") Para aprovechar al máximo el potencial de las emociones en el ámbito empresarial, las organizaciones pueden implementar diversas estrategias, como: 

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema5/img-05.svg', alt='Texto que describa la imagen')

          h4.text-center Desarrollo de la inteligencia emocional
          p A través de programas de formación y desarrollo, las organizaciones pueden fomentar el desarrollo de habilidades emocionales en sus empleados.

      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema5/img-06.svg', alt='Texto que describa la imagen')

          h4.text-center Creación de un clima laboral positivo
          p Fomentar la comunicación abierta, el reconocimiento, y el respeto mutuo entre los empleados. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema5/img-07.svg', alt='Texto que describa la imagen')

          h4.text-center Liderazgo emocional
          p Capacitar a los líderes para que puedan gestionar sus propias emociones y las de sus equipos de manera efectiva.
    
    p.mb-5(data-aos="zoom-in") Las emociones son un componente fundamental de la experiencia humana y, por lo tanto, también del ámbito empresarial. Al reconocer y gestionar las emociones de manera efectiva, las organizaciones pueden crear un ambiente de trabajo más saludable, productivo y motivador. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 Compromiso institucional  

    p.mb-5(data-aos="zoom-in") El compromiso institucional se refiere al vínculo emocional, cognitivo y conductual que un individuo establece con una organización. Es un sentimiento de pertenencia, lealtad y conexión con los valores, objetivos y misión de la empresa. Este compromiso va más allá de simplemente asistir al trabajo; implica un involucramiento activo y un deseo de contribuir al éxito de la organización. A continuación, algunos elementos clave del compromiso institucional: 

    .row.mb-1
      .col-4.col-ipad.mb-4
        img(src='@/assets/curso/temas/tema5/img-08.svg').mb-4
        h3 Emocional 
        p Se refiere a los sentimientos de conexión, orgullo y lealtad hacia la organización. Los empleados comprometidos se sienten identificados  con los valores y la cultura de la empresa.

      .col-4.col-ipad.mb-4
        img(src='@/assets/curso/temas/tema5/img-017.svg').mb-4
        h3 Cognitivo
        p Implica la aceptación de los objetivos y metas de la organización, así como la creencia en su importancia. los Empleados comprometidos entienden como su trabajo contribuye al éxito de la empresa.

      .col-4.col-ipad.mb-4
        img(src='@/assets/curso/temas/tema5/img-018.svg').mb-4
        h3 Conductal
        p Se manifiesta en acciones concretas,  como el esfuerzo adicional, la disposición a ayudar a los compañeros y la defensa de los intereses de la organización. 

    p.mb-5(data-aos="zoom-in") Actualmente, se pueden estimar los factores que influyen en el compromiso institucional, tales como: 

    ImagenInfografica.color-acento-botones.mb-5.desktop
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema5/img-011-1.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="9%" y="19%" numero="+")(style="background-color:#FFFFFF")
        p(style="color:#000") Un liderazgo auténtico, inspirador y que fomente la participación y el desarrollo de las capacidades es fundamental para fomentar el compromiso.
      
      .tarjeta.color-acento-botones.p-3(x="6.5%" y="62.5%" numero="+")(style="background-color:#FFFFFF")
        p(style="color:#000") Una cultura organizacional positiva, basada en valores compartidos y un clima de confianza, favorece el compromiso institucional.

      .tarjeta.color-acento-botones.p-3(x="34.5%" y="86.5%" numero="+")(style="background-color:#FFFFFF")
        p(style="color:#000") Los empleados deben percibir que son tratados de manera justa y equitativa.
          
      .tarjeta.color-acento-botones.p-3(x="92%" y="57%" numero="+")(style="background-color:#FFFFFF")
        p(style="color:#000") El reconocimiento del trabajo bien hecho y los logros individuales y colectivos refuerza el compromiso.
      
      .tarjeta.color-acento-botones.p-3(x="89.5%" y="13.5%" numero="+")(style="background-color:#FFFFFF")
        p(style="color:#000") La posibilidad de crecer profesionalmente y adquirir nuevas habilidades aumenta el compromiso.

    .row.mt-5.mb-3.justify-content-center
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img-011-2.svg', alt='Texto que describa la imagen')

    p.mb-5(data-aos="zoom-in") El compromiso institucional es una inversión que beneficia tanto a los empleados como a la organización. Los empleados comprometidos son más felices y productivos, mientras que la empresa experimenta un mayor crecimiento y éxito a largo plazo. A continuación, algunos de los beneficios: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-up")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-012.svg' alt='AvatarTop')
        h3.text-center Mayor productividad
        p Los empleados comprometidos suelen ser más productivos y eficientes. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-013.svg' alt='AvatarTop')
        h3.text-center Menor rotación
        p Un alto nivel de compromiso se traduce en una menor tasa de rotación de personal. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-014.svg' alt='AvatarTop')
        h3.text-center Mejor calidad
        p Los empleados comprometidos tienden a prestar mayor atención a los detalles y a ofrecer un mejor servicio al cliente. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-015.svg' alt='AvatarTop')
        h3.text-center Mayor innovación
        p Los empleados comprometidos se sienten más seguros para expresar sus ideas y proponer soluciones innovadoras.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-016.svg' alt='AvatarTop')
        h3.text-center Mayor satisfacción laboral
        p Los empleados comprometidos suelen estar más satisfechos con su trabajo y con la organización en general. 

    .row.mb-1



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    datosSlyderEjemplo1: [
      {
        titulo: 'Toma de decisiones',
        texto:
          'Las emociones pueden sesgar el juicio y afectar la calidad de las decisiones (Damasio, 1994).',
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
