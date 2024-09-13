export default {
  global: {
    componenteFormativo: 'Antropología e inteligencia emocional',
    descripcionCurso:
      'Este componente explora la relación entre emociones y cultura, abordando su naturaleza, clasificación y función desde perspectivas biológicas, cognitivas y antropológicas. Además, se analiza la inteligencia emocional, las competencias emocionales, y la interacción entre inteligencia emocional, intrapersonal y racional en contextos empresariales y socioculturales, destacando la teoría de las inteligencias múltiples.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Las emociones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Naturaleza de las emociones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Las emociones desde la perspectiva biológica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Las emociones desde la perspectiva cognitiva',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Reconocimiento de las emociones',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Enfoques antropológicos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Teorías culturales',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Clasificación de las emociones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Función de la emoción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Emociones y sentimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fenómenos de la vida afectiva',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Las emociones a nivel empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Compromiso institucional',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Inteligencia emocional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Definiciones',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Principios',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Modelos',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Inteligencia intrapersonal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Competencias emocionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Modelos de competencias emocionales',
            hash: 't_8_1',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Inteligencia y coeficiente intelectual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Teoría de las inteligencias múltiples',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Tipos de inteligencias',
            hash: 't_10_1',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Inteligencia racional vs. inteligencia emocional',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_11210051_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '4. Emociones y sentimientos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Autocuidado emocional [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MWrXWestwdQ&t=4s',
    },
    {
      tema: '6. Inteligencia emocional',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2020). Inteligencia emocional, según Daniel Goleman [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wowJ0kEwFn4&t=21s',
    },
  ],
  glosario: [
    {
      termino: 'Antropología de las emociones',
      significado:
        'rama de la antropología que estudia cómo las emociones son interpretadas, expresadas y valoradas en diferentes culturas. Analiza la relación entre emociones y normas sociales, así como su impacto en la vida colectiva.',
    },
    {
      termino: 'Componentes de las emociones',
      significado:
        'las emociones se componen generalmente de tres elementos: el componente fisiológico (respuestas corporales), el componente cognitivo (procesamiento mental) y el componente conductual o expresivo (manifestación externa).',
    },
    {
      termino: 'Competencias emocionales',
      significado:
        'conjunto de habilidades que permiten a las personas manejar de manera efectiva sus emociones y las relaciones interpersonales. Incluyen el control de impulsos, la empatía y la comunicación efectiva.',
    },
    {
      termino: 'Culturalismo-Construccionismo',
      significado:
        'enfoque antropológico que sostiene que las emociones son construcciones sociales y culturales, moldeadas por las normas y valores de la sociedad en la que se vive.',
    },
    {
      termino: 'Expresión emocional',
      significado:
        'manera en que las emociones se manifiestan externamente a través de gestos, tono de voz y expresiones faciales. Puede ser voluntaria o involuntaria, y está influenciada por factores culturales y sociales.',
    },
    {
      termino: 'Función de la emoción',
      significado:
        'las emociones cumplen varias funciones esenciales, como la adaptación a situaciones cambiantes, la comunicación social y la motivación para el comportamiento.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'capacidad de reconocer, comprender y gestionar las propias emociones y las de los demás. Incluye habilidades como la autoconciencia, la regulación emocional, la empatía y la motivación.',
    },
    {
      termino: 'Inteligencia intrapersonal',
      significado:
        'habilidad para entender y gestionar las propias emociones, pensamientos y motivaciones. Es crucial para el autoconocimiento y la autorregulación emocional.',
    },
    {
      termino: 'Naturalismo-Universalismo',
      significado:
        'perspectiva que considera las emociones como fenómenos universales, inherentes a la naturaleza humana, con manifestaciones similares en todas las culturas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bar-On, R. (1997). <em>El cociente emocional: La inteligencia emocional y su influencia en el éxito en la vida.</em> Ediciones Urano.',
    },
    {
      referencia:
        'Bisquerra, R. (2003). <em>Educación emocional y bienestar. Barcelona: Praxis.</em>',
    },
    {
      referencia:
        'Boyatzis, R. E. (2008). <em>Competencies in the 21st century.</em> Journal of Management Development, 27(1), 5-12.',
    },
    {
      referencia:
        'Chávez, A. (2006). <em>Inteligencia emocional en el trabajo.</em> Editorial Granica.',
    },
    {
      referencia:
        'Damasio, A. R. (1994). <em>Descartes error: Emotion, reason, and the human brain.</em> New York: Putnam.',
    },
    {
      referencia:
        'Ekman, P. (1992). <em>An argument for basic emotions.</em> Cognition & Emotion, 6(3), 169-200.',
    },
    {
      referencia:
        'Ekman, P. (1999). <em>Basic emotions. In T. Dalgleish & M. Power</em> (Eds.), Handbook of cognition and emotion. Wiley.',
    },
    {
      referencia:
        'Fredrickson, B. L. (2001). <em>The role of positive emotions in positive psychology: The broaden-and-build theory of positive emotions.</em> American Psychologist, 56(3), 218-226.',
    },
    {
      referencia:
        'García, M., & Giménez, S. (2010). <em>La inteligencia emocional y sus principales modelos: Propuesta de un modelo integrador.</em> Espiral. Cuadernos del profesorado, 3(6), 43-52.',
    },
    {
      referencia:
        'Gardner, H. (1983). <em>Frames of mind: The theory of multiple intelligences.</em> New York: Basic Books.',
    },
    {
      referencia:
        'Gardner, H. (1993). <em>Estructuras de la mente: La teoría de las inteligencias múltiples.</em> Fondo de Cultura Económica.',
    },
    {
      referencia:
        'Goleman, D. (1995). <em>Emotional intelligence: Why it can matter more than IQ.</em> New York: Bantam Books.',
    },
    {
      referencia:
        'Goleman, D. (1996). <em>Inteligencia emocional: Por qué es más importante que el cociente intelectual.</em> Editorial Kairós.',
    },
    {
      referencia:
        'Goleman, D. (1996). <em>La inteligencia emocional.</em> Ediciones B.',
    },
    {
      referencia:
        'Goleman, D. (2000). <em>Leadership that gets results.</em> Harvard Business Review, 78(2), 78-90.',
    },
    {
      referencia:
        'González, M. (2006). <em>Aspectos psicológicos y neurales en el aprendizaje del reconocimiento de emociones.</em> Revista chilena de neuropsicología, 1(1), 21-28.',
      link: 'https://www.redalyc.org/pdf/1793/179317886003.pdf',
    },
    {
      referencia:
        'Harter, J. K., Schmidt, F. L., & Keyes, C. L. M. (2002). <em>Well-being in the workplace and its relationship to business outcomes: A review of the Gallup studies.</em> In C. L. M. Keyes & J. Haidt (Eds.), <em>Flourishing: The positive person and the good life</em> (pp. 205-224). American Psychological Association.',
    },
    {
      referencia:
        'Instituto Nacional de Antropología e Historia. (2016). <em>Antropología de las emociones:</em> Conceptos y tendencias.',
      link: 'https://www.redalyc.org/journal/351/35149890004/html/',
    },
    {
      referencia:
        'Keltner, D., & Haidt, J. (1999). <em>Social functions of emotions at four levels of analysis.</em> Cognition and Emotion, 13(5), 505-521.',
    },
    {
      referencia:
        'Lazarus, R. S. (1991). <em>Emotion and adaptation.</em> Oxford University Press.',
    },
    {
      referencia:
        'Manrique, R. (2015). <em>Antropología de las emociones: Un enfoque multidisciplinario.</em> Editorial Académica.',
    },
    {
      referencia:
        'Manrique, R. (2015). <em>La cuestión de la inteligencia emocional.</em> Revista de la Asociación Española de Neuropsiquiatría, 35(128), 801-814.',
      link: 'http://www.redalyc.org/articulo.oa?id=265045386008',
    },
    {
      referencia:
        'Martínez, E. (2015). <em>La inteligencia emocional en las organizaciones: Un estudio de caso.</em> Revista de Psicología, 23(1), 123-145.',
    },
    {
      referencia:
        'Mayer, J. D., & Cobb, C. D. (2000). <em>Inteligencia emocional: Teoría, hallazgos e implicaciones para la educación.</em> Psychology in the Schools, 37(3), 197-208.',
    },
    {
      referencia:
        'Mauss, M. (1921). <em>Ensayo sobre el don: Forma y función del intercambio en las sociedades arcaicas.</em>',
    },
    {
      referencia:
        'Piqueras, J., Ramos, V., Martínez, A., & Oblitas, L. (2009). <em>Emociones negativas y su impacto en la salud mental y física.</em> Revista Suma psicológica, 16(2), 85-112.',
    },
    {
      referencia:
        'Ramos, V., Piqueras, J., Martínez, A., & Oblitas, L. (2009). <em>Emoción y cognición: Implicaciones para el tratamiento.</em> Revista Terapia psicológica, 27(2), 227-237.*',
      link: 'http://www.scielo.cl/pdf/terpsicol/v27n2/art08.pdf',
    },
    {
      referencia:
        'Rodríguez, T. (2008). <em>El valor de las emociones para el análisis cultural.</em> Revista Papers, 87, 145-159.',
      link: 'http://www.raco.cat/index.php/Papers/article/view/90325/115506',
    },
    {
      referencia:
        'Russell, J. A. (1980). <em>A circumplex model of affect.</em> Journal of Personality and Social Psychology, 39(6), 1161-1178.',
    },
    {
      referencia:
        'Vallés, A. (2005). <em>Inteligencia emocional y aprendizaje escolar.</em> Ediciones Pirámide.',
    },
    {
      referencia:
        'Weisinger, H. (1998). <em>La inteligencia emocional en el trabajo.</em> Editorial Paidos.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Experta temática',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Asesor pedagógico',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
