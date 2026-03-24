export type ProjectModalSection = {
  title: string;
  body: string;
};

export type ProjectCard = {
  title: string;
  subtitle: string;
  year: string;
  client: string;
  overview: string;
  imageSrc: string;
  modalSections: ProjectModalSection[];
};

export type PortfolioSection = {
  slug: string;
  label: string;
  description: string;
  projects: ProjectCard[];
};

export type EducationItem = {
  title: string;
  institution: string;
  detail: string;
  meta: string;
  certificateUrl?: string;
};

export const accentColor = "#e07a5f";

export const portfolioSections: PortfolioSection[] = [
  {
    slug: "ux-ui",
    label: "ux ui",
    description:
      "El diseño ux/ui es el proceso de creación de productos que brindan experiencias significativas a los usuarios y soluciones visuales eficientes.",
    projects: [
      {
        title: "latin cine",
        subtitle: "Plataforma editorial de streaming cultural",
        year: "2025",
        client: "Proyecto académico",
        overview:
          "Sistema visual y de experiencia para una plataforma de cine latinoamericano, con foco en navegación simple, descubrimiento de contenido y una interfaz clara para distintos tipos de usuario.",
        imageSrc: "/img/ux-ui/test-img.png",
        modalSections: [
          {
            title: "desafío",
            body:
              "El objetivo fue ordenar una gran cantidad de películas, festivales y notas editoriales dentro de una experiencia que se sintiera contemporánea y fácil de recorrer.",
          },
          {
            title: "proceso",
            body:
              "Se trabajó sobre arquitectura de información, mapa de navegación, wireframes de baja fidelidad y luego una interfaz final con decisiones de tipografía, jerarquía y componentes reutilizables.",
          },
          {
            title: "resultado",
            body:
              "La propuesta final prioriza recorridos rápidos, lectura cómoda y una identidad visual sobria que acompaña el contenido sin competir con él.",
          },
        ],
      },
      {
        title: "re-diseño linkedin",
        subtitle: "Optimización de experiencia para perfiles y networking",
        year: "2026",
        client: "Concept redesign",
        overview:
          "Exploración de mejoras de usabilidad para una plataforma profesional, repensando la lectura del perfil, la jerarquía de acciones y la visualización de vínculos.",
        imageSrc: "/img/ux-ui/test-img.png",
        modalSections: [
          {
            title: "problema detectado",
            body:
              "La experiencia actual concentra demasiada información al mismo tiempo y vuelve menos claras algunas acciones clave como conectar, seguir o revisar experiencia laboral.",
          },
          {
            title: "propuesta",
            body:
              "Se reorganizaron bloques, se simplificaron acciones primarias y se diseñó una interfaz con más aire para favorecer la lectura y la comparación entre perfiles.",
          },
          {
            title: "aprendizaje",
            body:
              "Este proyecto sirvió para profundizar en diseño de sistemas complejos y en cómo pequeñas decisiones de layout afectan la percepción de confianza y claridad.",
          },
          {
            title: "detalle adicional",
            body:
              "También se contemplaron estados de interacción, consistencia de componentes y comportamiento responsive para distintos puntos de entrada del usuario.",
          },
        ],
      },
    ],
  },
  {
    slug: "editorial",
    label: "editorial",
    description:
      "Es una rama del diseño gráfico especializada en la maquetación, composición y estructuración de publicaciones impresas y digitales como libros, revistas, periódicos y catálogos.",
    projects: [
      {
        title: "manual de instrucciones",
        subtitle: "Pieza editorial técnica con lectura guiada",
        year: "2024",
        client: "Proyecto académico",
        overview:
          "Diseño editorial orientado a la claridad, donde la información técnica se ordena con una estructura visual limpia y una secuencia de lectura intuitiva.",
        imageSrc: "/img/editorial/test-img.png",
        modalSections: [
          {
            title: "estructura",
            body:
              "Se definió una retícula flexible que permitiera combinar diagramas, títulos, advertencias y pasos secuenciales sin perder orden ni legibilidad.",
          },
          {
            title: "decisiones visuales",
            body:
              "La tipografía, el uso del espacio en blanco y la modulación de pesos se trabajaron para facilitar el escaneo rápido de la información.",
          },
        ],
      },
      {
        title: "catálogo",
        subtitle: "Sistema editorial para presentación de piezas",
        year: "2025",
        client: "Proyecto cultural",
        overview:
          "Catálogo diseñado para destacar contenido visual y textual con equilibrio, cuidando tanto la narrativa general como el ritmo de cada doble página.",
        imageSrc: "/img/editorial/test-img.png",
        modalSections: [
          {
            title: "concepto",
            body:
              "La propuesta parte de una composición sobria que permite que las imágenes respiren, mientras el texto acompaña con una jerarquía precisa.",
          },
          {
            title: "narrativa",
            body:
              "Se pensó la secuencia completa para construir una lectura progresiva, alternando páginas de impacto con otras más informativas.",
          },
          {
            title: "resultado final",
            body:
              "El proyecto logra una presentación consistente del material y una experiencia de lectura más elegante y fluida.",
          },
        ],
      },
    ],
  },
  {
    slug: "branding",
    label: "branding",
    description:
      'El branding es la estrategia que define el "qué y por qué" de una marca, mientras el diseño gráfico es la ejecución visual que define "cómo se ve", creando una identidad coherente y memorable.',
    projects: [
      {
        title: "moscú olympic games 2023/ visual identity",
        subtitle: "Identidad visual aplicada a evento deportivo",
        year: "2023",
        client: "Proyecto conceptual",
        overview:
          "Sistema de identidad para un evento deportivo de gran escala, desarrollado para adaptarse a soportes editoriales, señalética, piezas promocionales y comunicación digital.",
        imageSrc: "/img/branding/test-img.png",
        modalSections: [
          {
            title: "universo visual",
            body:
              "Se construyó una identidad con recursos gráficos modulares, contraste cromático y un lenguaje visual energético para transmitir movimiento y escala.",
          },
          {
            title: "aplicaciones",
            body:
              "La propuesta contempla afiches, credenciales, piezas institucionales, banners y elementos de entorno, manteniendo coherencia en todos los puntos de contacto.",
          },
          {
            title: "sistema",
            body:
              "El trabajo buscó que la marca pudiera sostenerse tanto en piezas de alto impacto como en formatos funcionales de uso cotidiano.",
          },
          {
            title: "proyección",
            body:
              "Se desarrolló pensando en crecimiento, escalabilidad y consistencia, de forma que el sistema pudiera extenderse fácilmente a nuevas piezas y escenarios.",
          },
        ],
      },
    ],
  },
  {
    slug: "afiches",
    label: "afiches",
    description:
      "Pieza de comunicación visual que combina imágenes y texto para transmitir un mensaje de forma rápida, clara e impactante.",
    projects: [
      {
        title: 'identidad film "Sweeney Todd"',
        subtitle: "Afiche conceptual para universo cinematográfico",
        year: "2024",
        client: "Proyecto académico",
        overview:
          "Pieza gráfica centrada en una atmósfera oscura y narrativa, donde imagen, tipografía y composición construyen tensión visual desde el primer vistazo.",
        imageSrc: "/img/afiches/test-img.png",
        modalSections: [
          {
            title: "búsqueda estética",
            body:
              "Se investigaron referencias visuales del film para trasladar su tono al afiche sin perder personalidad propia dentro de la propuesta gráfica.",
          },
          {
            title: "composición",
            body:
              "La estructura prioriza un punto focal contundente y una lectura escalonada del resto de la información.",
          },
        ],
      },
      {
        title: "afiche evento",
        subtitle: "Comunicación gráfica de alto impacto",
        year: "2025",
        client: "Evento cultural",
        overview:
          "Diseño de afiche orientado a difusión y recordación, combinando una composición directa con recursos de color y jerarquía tipográfica para máxima visibilidad.",
        imageSrc: "/img/afiches/test-img.png",
        modalSections: [
          {
            title: "objetivo",
            body:
              "La pieza debía captar atención a distancia y condensar información esencial sin perder fuerza visual.",
          },
          {
            title: "solución",
            body:
              "Se trabajó con contraste, escalas tipográficas bien marcadas y una distribución de elementos que facilita la lectura inmediata.",
          },
          {
            title: "adaptabilidad",
            body:
              "El sistema visual se pensó para convivir con variantes digitales y recortes para redes sociales.",
          },
        ],
      },
    ],
  },
  {
    slug: "arquigrafia",
    label: "arquigrafía",
    description:
      "Integración de elementos gráficos, tipográficos y de comunicación visual dentro de espacios arquitectónicos para crear una experiencia inmersiva y de marca.",
    projects: [
      {
        title: "visual identity | UNLa - Abremate",
        subtitle: "Sistema espacial de orientación e identidad",
        year: "2025",
        client: "UNLa",
        overview:
          "Proyecto de arquigrafía para un espacio institucional, combinando señalética, identidad y experiencia de recorrido dentro de un entorno físico.",
        imageSrc: "/img/arquigrafia/test-img.png",
        modalSections: [
          {
            title: "enfoque",
            body:
              "La propuesta integra información funcional y lenguaje visual para que el espacio acompañe al usuario desde el ingreso hasta los puntos clave del recorrido.",
          },
          {
            title: "aplicación",
            body:
              "Se diseñaron criterios de ubicación, escalas tipográficas, materiales y recursos de orientación para distintos escenarios de uso.",
          },
          {
            title: "impacto",
            body:
              "El sistema mejora la lectura del espacio y refuerza la identidad de la institución de una manera clara y contemporánea.",
          },
        ],
      },
    ],
  },
];

export const navigationLinks = [
  { href: "/", label: "home" },
  { href: "/sobre-mi", label: "sobre mí" },
  { href: "/contacto", label: "contacto" },
];

export const homeIntro =
  "Hola, me llamo Sofia y transformo conceptos en realidades visuales";

export const aboutParagraphs = [
  "Hola, mi nombre es Sofia, aunque para todos soy Soff.",
  "Mi camino en el mundo visual empezó con una cámara en la mano. Esa pasión por la fotografía y el arte fue la chispa que me llevó a estudiar Diseño y Comunicación Visual en la UNLa (Universidad Nacional de Lanus), donde hoy curso el tramo final de mi carrera.",
  "Me considero una observadora por naturaleza: disfruto tanto de la historia del arte como de analizar la composición de una película o perderme en un buen disco de indie. Esa curiosidad es la que traslado a cada proyecto, buscando que el diseño no solo sea estético, sino que cuente una historia con valor agregado. Mi objetivo es seguir creciendo en ambientes desafiantes donde pueda aportar mi mirada y, sobre todo, seguir aprendiendo.",
  "¿Tenés una idea en mente? ¡Hablemos y démosle forma juntas!",
];

export const educationItems: EducationItem[] = [
  {
    title: "Licenciatura en Diseño y Comunicación visual.",
    institution: "Universidad Nacional de Lanus (UNLa)",
    detail: "2019- en curso",
    meta: "",
  },
  {
    title: "Curso inicial de diseño UX UI",
    institution: "Coderhouse",
    detail: "2025- 2025 (duración de 3 meses)",
    meta: "Certificado",
    certificateUrl: "/certifications/pdf-prueba.pdf",
  },
  {
    title: "Curso avanzado de diseño UX UI",
    institution: "Coderhouse",
    detail: "2025- 2026 (duración de 2 meses y medio)",
    meta: "Certificado",
    certificateUrl: "/certifications/pdf-prueba.pdf",
  },
];
