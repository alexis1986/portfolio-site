import { Localized } from './types';

export const SITE_URL = 'https://alexdevvv.com';
export const EMAIL = 'alexis.castellano@gmail.com';
export const DEMO_URL = 'https://alarma-system-poc.alexdevvv.com';
export const LINKEDIN_URL = 'https://linkedin.com/in/alexis1986';
export const GITHUB_URL = 'https://github.com/alexis1986';
export const BOOKING_URL: string = 'https://calendar.app.google/8h9ZuaFF76sovEiz8';

type L = Localized<string>;

export interface Stat {
  value: L;
  label: L;
}

export interface PainPoint {
  signal: L;
  title: L;
  body: L;
}

export interface Step {
  badge: L;
  title: L;
  body: L;
  ai: L;
}

export interface Result {
  title: L;
  body: L;
}

export interface LabItem {
  name: string;
  pattern: L;
  githubUrl: string | null; // null = sin link (homelab-infra)
}

export interface SiteCopy {
  nav: { ariaLabel: L; problems: L; case: L; howIWork: L; about: L; book: L };
  hero: {
    tag: L;
    titleLine1: L;
    titleLine2: L;
    flow: L[];
    subtitle: L;
    primaryCta: L;
    secondaryCta: L;
    stats: Stat[];
  };
  problems: { eyebrow: L; heading: L; items: PainPoint[] };
  featuredCase: {
    eyebrow: L;
    heading: L;
    context: L;
    labels: { before: L; decision: L; after: L };
    before: L;
    decision: L;
    after: L;
    demoLink: L;
    liveLabel: L;
  };
  howIWork: { eyebrow: L; heading: L; steps: Step[]; confidentiality: L };
  results: { eyebrow: L; heading: L; items: Result[] };
  lab: { eyebrow: L; heading: L; items: LabItem[]; viewCode: L };
  about: { eyebrow: L; name: string; bio: L; photoAlt: L };
  finalCta: { heading: L; body: L; primary: L; emailAlt: L };
  footer: { text: L; socialAriaLabel: L };
  languageToggleLabel: L;
  languageToggleAriaLabel: L;
}

const bookCall: L = { es: 'Agendá una llamada', en: 'Book a call' };

const footerText: L = {
  es: `© ${new Date().getFullYear()} Alexis Castellano. Todos los derechos reservados.`,
  en: `© ${new Date().getFullYear()} Alexis Castellano. All rights reserved.`,
};

const languageToggleLabel: L = { es: 'EN', en: 'ES' };
const languageToggleAriaLabel: L = { es: 'EN: cambiar idioma', en: 'ES: toggle language' };

export const siteCopy: SiteCopy = {
  nav: {
    ariaLabel: { es: 'Principal', en: 'Main' },
    problems: { es: 'Problemas', en: 'Problems' },
    case: { es: 'Caso', en: 'Case study' },
    howIWork: { es: 'Cómo trabajo', en: 'How I work' },
    about: { es: 'Sobre mí', en: 'About' },
    book: bookCall,
  },
  hero: {
    tag: { es: 'Arquitecto de Soluciones · IA-first', en: 'Solutions Architect · AI-first' },
    titleLine1: { es: 'Tu negocio creció.', en: 'Your business grew.' },
    titleLine2: { es: 'Tu plataforma no.', en: "Your platform didn't." },
    flow: [
      { es: 'Diagnóstico', en: 'Assessment' },
      { es: 'ADRs', en: 'ADRs' },
      { es: 'Implementación', en: 'Implementation' },
      { es: 'Producción', en: 'Production' },
    ],
    subtitle: {
      es: '20 años en software, 12 diseñando arquitecturas para banca, telco, turismo y ventas digitales. Diagnostico por qué tu sistema no escala y llevo la solución a producción, con IA acelerando cada etapa.',
      en: "20 years in software, 12 designing architectures for banking, telecom, travel and digital sales. I find out why your system won't scale and take the fix all the way to production, with AI speeding up every stage.",
    },
    primaryCta: bookCall,
    secondaryCta: { es: 'Ver el caso de 1M eventos/día', en: 'See the 1M events/day case' },
    stats: [
      {
        value: { es: '1M', en: '1M' },
        label: { es: 'eventos diarios sin caídas', en: 'events a day, no outages' },
      },
      {
        value: { es: '+40%', en: '+40%' },
        label: { es: 'usuarios soportados', en: 'users supported' },
      },
      {
        value: { es: '+70%', en: '+70%' },
        label: { es: 'delivery del equipo', en: 'faster team delivery' },
      },
      {
        value: { es: '20 años', en: '20 years' },
        label: { es: 'en software, 12 en arquitectura', en: 'in software, 12 in architecture' },
      },
    ],
  },
  problems: {
    eyebrow: { es: '01 · ¿Te suena?', en: '01 · Sound familiar?' },
    heading: {
      es: 'Las señales de que tu arquitectura llegó a su techo',
      en: 'Signs your architecture has hit its ceiling',
    },
    items: [
      {
        signal: { es: 'campaña → caída', en: 'campaign → outage' },
        title: { es: 'Los picos te tiran el sistema', en: 'Traffic spikes take you down' },
        body: {
          es: 'Black Friday, la temporada alta o una campaña exitosa se vuelven un riesgo.',
          en: 'Black Friday, peak season or a campaign that actually works becomes a risk.',
        },
      },
      {
        signal: { es: 'deploy → miedo', en: 'deploy → fear' },
        title: { es: 'Cada cambio da miedo', en: 'Every change feels risky' },
        body: {
          es: 'Un monolito donde tocar algo rompe otra cosa.',
          en: 'A monolith where touching one thing breaks another.',
        },
      },
      {
        signal: { es: 'api → timeout', en: 'api → timeout' },
        title: { es: 'Integraciones frágiles', en: 'Fragile integrations' },
        body: {
          es: 'Pagos, CRM y proveedores que fallan en cadena.',
          en: 'Payments, CRM and vendors that fail like dominoes.',
        },
      },
      {
        signal: { es: 'equipo → incendios', en: 'team → firefighting' },
        title: { es: 'Tu equipo apaga incendios', en: 'Your team is always firefighting' },
        body: {
          es: 'Más tiempo sosteniendo el sistema que construyendo lo que sigue.',
          en: 'More time keeping things alive than building what comes next.',
        },
      },
    ],
  },
  featuredCase: {
    eyebrow: {
      es: '02 · Caso destacado · Telecomunicaciones',
      en: '02 · Featured case · Telecom',
    },
    heading: {
      es: 'De un sistema que se caía a 1 millón de eventos diarios',
      en: 'From constant outages to 1 million events a day',
    },
    context: {
      es: 'Gestión de fallas de la mayor telco de Argentina.',
      en: "Fault management for Argentina's largest telco.",
    },
    labels: {
      before: { es: 'Antes', en: 'Before' },
      decision: { es: 'Decisión', en: 'Decision' },
      after: { es: 'Resultado', en: 'Result' },
    },
    before: {
      es: 'El sistema de alarmas no soportaba el volumen de eventos de la red.',
      en: "The alarm system couldn't keep up with the network's event volume.",
    },
    decision: {
      es: 'Rediseño orientado a eventos, con reglas de negocio desacopladas y escalado horizontal.',
      en: 'An event-driven redesign with decoupled business rules and horizontal scaling.',
    },
    after: {
      es: '1M de eventos por día, sin caídas y escalando con la demanda.',
      en: '1M events a day, no outages, scaling with demand.',
    },
    demoLink: {
      es: 'Mirá una versión funcionando en vivo',
      en: 'See a working version live',
    },
    liveLabel: { es: 'en vivo', en: 'live' },
  },
  howIWork: {
    eyebrow: { es: '03 · Cómo trabajo', en: '03 · How I work' },
    heading: {
      es: 'Empezás con poco riesgo. Seguimos si suma.',
      en: 'Start small and low-risk. We only keep going if it pays off.',
    },
    steps: [
      {
        badge: { es: 'Paso 1 · Puerta de entrada', en: 'Step 1 · Where we start' },
        title: { es: 'Diagnóstico de arquitectura', en: 'Architecture assessment' },
        body: {
          es: 'Entiendo tu sistema, encuentro dónde se rompe al escalar y te entrego un plan priorizado.',
          en: 'I get to know your system, find where it breaks under load and hand you a prioritized plan.',
        },
        ai: {
          es: 'IA → análisis y decisiones documentadas (ADRs) en días, no semanas',
          en: 'AI → analysis and documented decisions (ADRs) in days, not weeks',
        },
      },
      {
        badge: { es: 'Paso 2 · Si lo necesitás', en: 'Step 2 · If you need it' },
        title: { es: 'Implementación de punta a punta', en: 'End-to-end implementation' },
        body: {
          es: 'Llevo la solución a producción, con las manos en el código.',
          en: 'I take the solution to production, hands-on in the code.',
        },
        ai: {
          es: 'IA → desarrollo más rápido, respaldado por tests de punta a punta',
          en: 'AI → faster development, backed by end-to-end tests',
        },
      },
      {
        badge: { es: 'Paso 2 · Alternativa', en: 'Step 2 · Alternative' },
        title: { es: 'Arquitecto en tu equipo', en: 'An architect on your team' },
        body: {
          es: 'Me sumo a tu equipo por un período para guiar decisiones y subir el nivel técnico.',
          en: 'I join your team for a set period to guide decisions and raise the technical bar.',
        },
        ai: {
          es: 'IA → tu equipo aprende a usarla bien',
          en: 'AI → your team learns to use it well',
        },
      },
    ],
    confidentiality: {
      es: 'Trabajo dentro de los estándares de confidencialidad y con las herramientas aprobadas por tu empresa.',
      en: "I work within your company's confidentiality standards and only with the tools it has approved.",
    },
  },
  results: {
    eyebrow: { es: '04 · Más resultados', en: '04 · More results' },
    heading: { es: 'Negocios digitales · Asistencia', en: 'Digital business · Assistance services' },
    items: [
      {
        title: { es: '+40% usuarios', en: '+40% users' },
        body: {
          es: 'Rediseño de la arquitectura de la webapp para soportar más carga.',
          en: 'Redesigned the web app architecture to support 40% more users.',
        },
      },
      {
        title: { es: 'Agente de IA', en: 'AI agent' },
        body: {
          es: 'Ventas automatizadas por WhatsApp.',
          en: 'Automated sales over WhatsApp.',
        },
      },
      {
        title: { es: '+70% delivery', en: '+70% faster delivery' },
        body: {
          es: 'Migración de Java 8/11 a Java 21 y nuevos flujos de trabajo del equipo.',
          en: 'Java 8/11 to Java 21 migration and new team workflows.',
        },
      },
    ],
  },
  lab: {
    eyebrow: { es: '05 · Laboratorio', en: '05 · Lab' },
    heading: { es: 'Patrones que aplico, con código', en: 'Patterns I apply, with code' },
    items: [
      {
        name: 'notification-service',
        pattern: {
          es: 'Notificaciones · Arquitectura hexagonal',
          en: 'Notifications · Hexagonal architecture',
        },
        githubUrl: 'https://github.com/alexis1986/notification-service',
      },
      {
        name: 'hazelcast-poc',
        pattern: {
          es: 'Caché distribuido · Hazelcast, Cache-Aside',
          en: 'Distributed cache · Hazelcast, Cache-Aside',
        },
        githubUrl: 'https://github.com/alexis1986/hazelcast-poc',
      },
      {
        name: 'super-app-poc',
        pattern: {
          es: 'Super App · Micro-frontends mobile',
          en: 'Super app · Mobile micro-frontends',
        },
        githubUrl: 'https://github.com/alexis1986/super-app-poc',
      },
      {
        name: 'homelab-infra',
        pattern: {
          es: 'Plataforma GitOps · Kubernetes, ArgoCD',
          en: 'GitOps platform · Kubernetes, ArgoCD',
        },
        githubUrl: null,
      },
    ],
    viewCode: { es: 'Ver código', en: 'View code' },
  },
  about: {
    eyebrow: { es: '06 · Sobre mí', en: '06 · About me' },
    name: 'Alexis Castellano',
    bio: {
      es: 'Analista de Sistemas de formación, en Buenos Aires. 20 años construyendo software, 12 diseñando arquitecturas para banca y finanzas, telecomunicaciones, marketing, turismo y ventas digitales. Trabajo con clientes de Latinoamérica y Europa.',
      en: 'Systems Analyst by training, based in Buenos Aires. 20 years building software, 12 designing architectures for banking and finance, telecom, marketing, travel and digital sales. I work with clients across Latin America and Europe.',
    },
    photoAlt: {
      es: 'Alexis Castellano, Arquitecto de Soluciones',
      en: 'Alexis Castellano, Solutions Architect',
    },
  },
  finalCta: {
    heading: {
      es: '¿Tu plataforma está frenando a tu negocio?',
      en: 'Is your platform holding your business back?',
    },
    body: {
      es: '30 minutos, sin costo. Me contás el problema y te digo con honestidad si puedo ayudarte.',
      en: "30 minutes, no cost. Tell me what's going on and I'll tell you honestly whether I can help.",
    },
    primary: bookCall,
    emailAlt: { es: 'o escribime por email', en: 'or email me' },
  },
  footer: { text: footerText, socialAriaLabel: { es: 'Redes sociales', en: 'Social media' } },
  languageToggleLabel,
  languageToggleAriaLabel,
};
