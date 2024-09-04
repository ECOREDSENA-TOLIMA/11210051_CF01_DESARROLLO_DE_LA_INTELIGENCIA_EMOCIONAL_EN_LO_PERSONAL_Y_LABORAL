<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Las emociones 

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.png', alt='')
    
    p.mb-5(data-aos="zoom-in") La antropología de las emociones es referida por Manrique, R. en 2015 como una especialización multidisciplinaria, lo cual se debe a la naturaleza de su objeto: las emociones son fenómenos psíquicos que involucran la dimensión del cuerpo, son pensamientos corporeizados (Rosaldo, M., 1984). 

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .row.justify-content-center.align-items-center.mb-4
          .col-12(data-aos="fade-down-right")
            .cajon.color-primario.p-4(style="background-color:#EDD8F5")
              p Rosaldo, Michelle Zimbalist, en su obra de 1984, explora cómo las emociones están entrelazadas con las estructuras sociales y culturales, destacando su carácter corpóreo y su papel en la dinámica social. 
    
    p.mb-5(data-aos="zoom-in") De acuerdo con la revisión realizada por Rodríguez, T. (2008), cita que Elster, J. en 1999 identificó los siguientes atributos cognitivos y viscerales en las emociones: 

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4
      .col-lg-4.col-8.mb-lg-0.mb-4
        img(src='@/assets/curso/temas/tema1/img-02.svg', alt='Imagen decorativa')
      .col-lg-6
        ol.lista-ol--cuadro.mb-4
          li 
            .lista-ol--cuadro__vineta
              span(style="font-weight: bold; color: #000") a
            | Tienen antecedentes cognitivos. 
          li 
            .lista-ol--cuadro__vineta
              span(style="font-weight: bold; color: #000") b
            | Están dirigidas hacia un objeto intencional. 
          li 
            .lista-ol--cuadro__vineta
              span(style="font-weight: bold; color: #000") c
            | Inducen cambios fisiológicos (excitación). 
          li 
            .lista-ol--cuadro__vineta
              span(style="font-weight: bold; color: #000") d
            | Tienen expresiones fisiológicas.
          li 
            .lista-ol--cuadro__vineta
              span(style="font-weight: bold; color: #000") e
            | Van acompañadas de placer o dolor. 
          li 
            .lista-ol--cuadro__vineta
              span(style="font-weight: bold; color: #000") f
            | Inducen tendencias a realizar determinadas acciones.
        p(data-aos="zoom-in") Asimismo, las emociones hacen referencia a hechos sociales, debido a que sus manifestaciones están pautadas por el entorno grupal y por sus formas culturales. Con la misma pertinencia, son consideradas hechos semióticos, significativos, comunicativos, dotados de sentido y sentimiento (Mauss, M., 1921).
        
    .row.justify-content-center 
      .col-lg-10
        p.mb-0(data-aos="zoom-in") Marcel Mauss, en su obra de 1921, describe las emociones como hechos sociales, subrayando su carácter colectivo y cultural, y cómo están intrínsecamente ligadas a las expresiones y normas sociales. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Naturaleza de las emociones 

    p.mb-5(data-aos="zoom-in") En la interacción social, el ser humano experimenta una amplia gama de emociones, como la alegría, la tristeza, la decepción, la euforia y la satisfacción, entre otras. Por ello, es fundamental comprender la naturaleza de las emociones y sus componentes. Según González, M. (2006), aunque existen diversas concepciones sobre la naturaleza de las emociones, la mayoría de los teóricos coinciden en que estas se acompañan de tres componentes clave: el componente fisiológico, el componente cognitivo y el componente comportamental, como se presenta a continuación. 

    TabsC.color-acento-botones.mt-5.mb-5.color_img-tab.bg_1(data-aos="fade-left")
      .py-4.py-md-4(titulo="Componente fisiológico")
        .row
          .col-md-5
            figure
              img.img-t.m-auto(src='@/assets/curso/temas/tema1/img-03.png', alt='Texto que describa la imagen')
              
          .col-md-7.mb-4.mb-md-0
            p Se refiere a los cambios y reacciones en el cuerpo que ocurren en respuesta  a una emoción. Estos incluyen: 

            ul.lista-ul.ms-3
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Cambios en la frecuencia cardíaca:] aumento o disminución del ritmo cardíaco.
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Respuestas hormonales:] liberación de hormonas como la adrenalina o el cortisol. 
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Alteraciones en la presión arterial:] puede subir o bajar según la emoción experimentada. 
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Reacciones en el sistema nervioso autónomo:] respuestas como la sudoración, temblores o cambios en la respiración. 

            p Estos cambios son automáticos  y a menudo involuntarios, y preparan al cuerpo para una acción especifica, como luchar o huir. 

      .py-4.py-md-4(titulo="Componente cognitivo")
        .row
          .col-md-5
            figure
              img.img-t.m-auto(src='@/assets/curso/temas/tema1/img-04.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p Se refiere a la interpretación y evaluación mental de una situación que desencadena una emoción. Incluye:

            ul.lista-ul.ms-3
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Percepción:] cómo se percibe una situación o evento.
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Evaluación:] cómo se valora la importancia y el significado de ese evento.
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Interpretación:] la manera en que se da sentido a las circunstancias y se decide si son positivas o negativas. 
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Razonamiento:] el proceso mental que determina la respuesta emocional basándose en creencias, experiencias previas y expectativas.

            p Este componente es crucial para la experiencia emocional, ya que influye en la intensidad y la naturaleza de la emoción sentida.

      .py-4.py-md-4(titulo="Componente comportamental o expresivo")
        .row
          .col-md-5
            figure
              img.img-t.m-auto(src='@/assets/curso/temas/tema1/img-05.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p Se refiere a las manifestaciones externas de una emoción. Incluye:

            ul.lista-ul.ms-3
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Expresiones faciales:] gestos como sonreír, fruncir el ceño o llorar.
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Lenguaje corporal:] posturas, movimientos y gestos que comunican el estado emocional.
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Conducta:] acciones que resultan de la emoción, como gritar, abrazar o evitar a alguien.
              li.mb-1
                i.lista-ul__vineta
                p.mb-0 #[b Voz:] cambios en el tono, volumen y ritmo al hablar.

            p Este componente muestra cómo las emociones se comunican a los demás y cómo afectan la interacción social.

    p.mb-5(data-aos="zoom-in") Cada uno de estos componentes juega un papel crucial en la experiencia emocional y en cómo las personas responden a sus entornos y relaciones. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Las emociones desde la perspectiva biológica  
      
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cada interacción humana sugiere respuestas emocionales desde una perspectiva biológica. Según Ramos, V., Piqueras, J., Martínez, A. y Oblitas, L. (2009), Frijda, N. (1987) establece que las emociones poseen componentes fisiológicos fundamentales para la manifestación adecuada de la conducta emocional. Estas respuestas incluyen la activación de estructuras cerebrales específicas, como la amígdala y el sistema límbico, que son cruciales para la regulación y expresión emocional. 
    
    p.mb-5(data-aos="zoom-in") Un aspecto importante a considerar es la “especialización hemisférica” en los procesos emocionales. Ramos et al. (2009) refieren que autores como Ekman (1985) destacan la diferencia entre la expresión emocional involuntaria o espontánea y la expresión emocional voluntaria o fingida. La especialización hemisférica sugiere que el hemisferio derecho está más involucrado en la expresión emocional espontánea y genuina, mientras que el hemisferio izquierdo puede jugar un papel en la regulación y control consciente de las emociones. Esta diferenciación es clave para entender cómo se manifiestan y regulan las emociones en función de la actividad cerebral, como se presenta a continuación: 

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-up")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Procesos emocionales </i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/img-07-1.svg', alt='En la figura 1 se presentan los procesos emocionales, que incluyen tanto la expresión involuntaria como la voluntaria, y que dan como resultado la activación de diferentes mecanismos.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/img-07-2.svg', alt='En la figura 1 se presentan los procesos emocionales, que incluyen tanto la expresión involuntaria como la voluntaria, y que dan como resultado la activación de diferentes mecanismos.')
          figcaption Nota: <i>tomado de Ramos, V. et al. (2009).</i>  

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Las emociones desde la perspectiva cognitiva 

    p.mb-5(data-aos="zoom-in") Desde la perspectiva cognitiva, las emociones se comprenden como respuestas derivadas de la interpretación y evaluación mental de los eventos. Esta visión sostiene que las emociones resultan de cómo percibimos, interpretamos y evaluamos las situaciones que enfrentamos. Según Lazarus (1991), las emociones emergen a partir de la valoración cognitiva de los eventos, donde la percepción del significado y la relevancia personal de un evento influye en la intensidad y naturaleza de la emoción experimentada. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10.col-12(data-aos="zoom-out")
        .row.justify-content-center
          .col-lg-4.col-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img-08.svg', alt='Imagen decorativa')
          .col-lg-8.col-12.mb-3
            .cajon.color-primario.p-4.mb-4(style="background-color: #EDD8F5")
              p <strong>Aaron Beck (1976)</strong> también contribuye a esta perspectiva al destacar que las creencias y esquemas mentales juegan un papel crucial en la interpretación emocional. Beck sugiere que nuestras emociones están moldeadas por nuestras interpretaciones de los eventos, y que estos juicios afectan nuestras respuestas emocionales y conductuales. Por ejemplo, una situación percibida como amenazante puede inducir miedo, mientras que una oportunidad percibida puede inducir entusiasmo.
              | La perspectiva cognitiva enfatiza que las emociones están íntimamente ligadas a nuestros procesos de pensamiento y valoración, destacando la influencia de nuestras interpretaciones subjetivas en la experiencia emocional. 
      
    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4 Reconocimiento de las emociones 

    p(data-aos="zoom-in") El reconocimiento de las emociones es un proceso esencial para la comprensión y gestión de nuestras propias respuestas emocionales y las de los demás. Implica la capacidad de identificar y etiquetar las emociones experimentadas, lo que facilita la regulación emocional y la interacción efectiva. Este proceso abarca la percepción de señales emocionales tanto verbales como no verbales, como expresiones faciales, tono de voz y lenguaje corporal. 
    p.mb-5(data-aos="zoom-out") Como se muestra en la siguiente figura, el contexto del reconocimiento emocional se puede definir mediante la diferenciación de cuatro aspectos clave: 

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-up")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Componentes del contexto de las emociones</i>
        figure.mb-5
          img.d-lg-flex.d-none(src='@/assets/curso/temas/tema1/img-09-1.svg', alt='En la figura 2 se presentan los componentes de las emociones, donde se involucran el emisor, el receptor, los elicitadores y la situación.')
          img.d-lg-none.d-flex(src='@/assets/curso/temas/tema1/img-09-2.svg', alt='En la figura 2 se presentan los componentes de las emociones, donde se involucran el emisor, el receptor, los elicitadores y la situación.') 

        .bloque-texto-f.pt-4.px-5(style="background-color: #EDD8F5")
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          .bloque-texto-f__autor.mb-3
            h5.mb-0 Según Ekman (1992)
          h5.text-regular.bloque-texto-f__texto El reconocimiento de las emociones se basa en la identificación de expresiones faciales universales, como la alegría, tristeza, ira, sorpresa, miedo y asco. Estas expresiones son reconocidas de manera consistente en diversas culturas, sugiriendo una base biológica común para el reconocimiento emocional. 

    p.mb-5(data-aos="zoom-in") Además, el reconocimiento emocional está estrechamente relacionado con la inteligencia emocional, que incluye habilidades como la empatía y la percepción emocional. Goleman (1995) destaca que una alta competencia en el reconocimiento de las emociones permite una mejor comunicación y relaciones interpersonales, facilitando la comprensión de las necesidades y sentimientos de los demás.   

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_1_5 1.5 Enfoques antropológicos 

    .row.justify-content-center.align-items-center(data-aos="flip-left") 
      .col-lg-8.order-lg-1.order-2
        .cajon.color-secundario.p-4.mb-4(style="background-color: #FFF4D6")
          p Según diversos enfoques antropológicos, las emociones se dividen en dos grandes visiones: naturalista-universalista y culturalista-construccionista. El enfoque naturalista-universalista postula que ciertas emociones son universales y compartidas biológicamente entre los seres humanos. En contraste, el enfoque culturalista-construccionista sostiene que las emociones son construidas social y culturalmente, variando significativamente entre diferentes sociedades. 
        p.mb-3(data-aos="flip-left") Estos enfoques proporcionan un marco para comprender cómo las emociones pueden ser interpretadas como inherentes a la naturaleza humana o como fenómenos moldeados por el contexto cultural. La discusión actual examina la interacción entre estas dos perspectivas, considerando tanto los aspectos biológicos universales como las influencias culturales en la experiencia emocional (Manrique, 2015). A continuación, se describen las características más importantes de los enfoques naturalista-universalista y culturalista-construccionista en la antropología de las emociones: 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src="@/assets/curso/temas/tema1/img-010.svg", alt="")

    .row.justify-content-center.mt-5
      .col-lg-10.col-12(data-aos="fade-up")
        .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            span #[i Características de los enfoques antropológicos]
        .tabla-a.color-acento-contenido.mb-5
          table      
            thead(style="background-color: #F6A8A8")
              tr
                th(style="color: #000") Enfoque Naturalista-universalista 
                th(style="color: #000") Enfoque Culturalista-construccionista 
            tbody
              tr
                td(style="background-color: #F6F6F6") <strong>Universalidad de las emociones:</strong> este enfoque sostiene que ciertas emociones son universales y están biológicamente determinadas. Es decir, todas las personas, independientemente de su cultura, experimentan las mismas emociones básicas como la alegría, la tristeza, el miedo y la ira. 
                td(style="background-color: #F6F6F6") <strong>Variabilidad cultural:</strong> este enfoque sostiene que las emociones son productos culturales que varían significativamente entre diferentes sociedades. Las emociones no son universales, sino que son moldeadas por el contexto cultural y social en el que se encuentran. 
              tr
                td <strong>Base biológica:</strong> se centra en la idea de que las emociones tienen una base biológica común en todos los seres humanos. Estudios en neurociencia y psicología apoyan la idea de que las estructuras cerebrales y los procesos fisiológicos responsables de las emociones son similares en todas las culturas. 
                td <strong>Construcción social de las emociones:</strong> argumenta que las emociones son construidas socialmente y que cada cultura tiene su propio conjunto de emociones y formas de expresión emocional. Esto significa que lo que una cultura define como una emoción puede no existir en otra. 
              tr
                td(style="background-color: #F6F6F6") <strong>Expresión emocional consistente:</strong> propone que las expresiones faciales y las reacciones emocionales tienen patrones consistentes y reconocibles a nivel mundial. Por ejemplo, la expresión facial de la alegría es similar en diferentes culturas. 
                td(style="background-color: #F6F6F6") <strong>Diversidad en la interpretación:</strong> sugiere que la forma en que las personas interpretan y responden a las emociones está profundamente influenciada por normas, valores y creencias culturales. Por ejemplo, la forma en que se expresa y experimenta el duelo puede variar enormemente entre culturas. 
              tr
                td <strong>Teorías representativas:</strong> entre las teorías representativas de este enfoque se encuentran las propuestas por Paul Ekman, quien argumentó que hay un conjunto de emociones básicas que son reconocibles y experimentadas en todas las culturas. 
                td <strong>Teorías representativas:</strong> Clifford Geertz y Catherine Lutz son teóricos destacados que han argumentado a favor de la importancia del contexto cultural en la formación y expresión de las emociones. 

    p.mb-5(data-aos="zoom-in") Estos dos enfoques ofrecen perspectivas complementarias y a veces contrastantes sobre cómo entendemos las emociones en diferentes contextos humanos. Mientras que el enfoque naturalista-universalista pone énfasis en la biología compartida, el enfoque culturalista-construccionista destaca la importancia del entorno cultural y social en la configuración de las experiencias emocionales.

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_1_6 1.6 Teorías culturales 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-011.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El reconocimiento de lo emocional como un campo legítimo de investigación en la antropología se fortaleció en décadas pasadas gracias a la corriente de cultura y personalidad, cuyos etnólogos exploraron el papel de las emociones en la formación de la personalidad y la cultura. Este interés contrasta con la resistencia de otras tendencias antropológicas, que relegaban las emociones a los márgenes de la teoría cultural. Estas corrientes consideraban las emociones como uniformes en la especie humana, poco relevantes o simplemente inaccesibles a los métodos del análisis antropológico (Manrique, 2015). 

    p.mb-5(data-aos="zoom-in") A continuación, se presentan los aportes de diversos autores que han sido fundamentales en el desarrollo de las teorías culturales sobre las emociones, tomada de Manrique, R. (2015): 

    LineaTiempoE.color-acento-contenido
      .row(titulo="Bateson, G. (1936)" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0
          p Explora cómo los patrones de comunicación y la dinámica social influyen en la expresión y comprensión de las emociones en diferentes culturas.
        
      .row(titulo="Mauss, M. (1968)" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0
          p Estudia el papel de las emociones en los rituales y prácticas sociales, destacando su carácter socialmente construido.
      
      .row(titulo="Geertz, C. (1973)" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0
          p Introduce el concepto de "descripción densa", subrayando cómo las emociones son interpretadas y significadas dentro de un contexto cultural específico.
      
      .row(titulo="Rosaldo, M. (1984)" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0
          p Examina las emociones desde una perspectiva cultural, analizando cómo las normas culturales configuran las experiencias emocionales.
      
      .row(titulo="Salomón. (1984)" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0
          p Analiza cómo las emociones contribuyen a la formación de identidad en diferentes sociedades.
      
      .row(titulo="Lutz, C. (1988)" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0
          p Argumenta que las emociones son prácticas culturales que varían ampliamente entre sociedades, reflejando valores y creencias locales.
    
      .row(titulo="Le Breton, D. (1999)" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0
          p Aborda cómo el dolor y otras emociones extremas son entendidas y valoradas en distintas culturas.
      
      .row(titulo="Merleau-Ponty, M. (2000)" subtitulo="")        
        .col-lg-9.mb-4.mb-lg-0
          p Considera las emociones desde la fenomenología, enfatizando cómo la percepción y la corporalidad influyen en la experiencia emocional.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
