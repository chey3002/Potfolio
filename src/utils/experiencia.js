export const experiencia = [
    {
        empresa: "Ensolvers",
        locacion: "Remote",
        cargo: "Software Engineer",
        fecha: "June 2025 — Present",
        actividades: [
            "Architected and deployed production-grade agentic workflows and multi-agent environments using <strong>LangGraph</strong> and LangChain, integrating internal enterprise tools via structured function calling.",
            "Designed and optimized high-performance RAG pipelines utilizing Azure OpenAI, <strong>Pinecone</strong>, and <strong>pgvector</strong>, applying semantic search strategies for efficient high-dimensional data retrieval.",
            "Implemented observability and evaluation mechanisms using <strong>LangSmith</strong> and Langfuse to monitor LLM execution, troubleshoot failures, and track task-success metrics in production.",
            "Led the frontend architecture of AI-driven platforms (Betti, Betterness) using Next.js, TypeScript, Tailwind CSS, and React Query for seamless user experiences.",
            "Built and maintained robust full-stack components, connecting backend services (Java 21, Spring Boot), hybrid databases (MySQL, Neo4j), and event-driven data pipelines (Apache Kafka).",
            "Integrated cloud-native capabilities, including AWS SDK (S3, Transcribe) for automated multimedia processing, and managed containerized environments via Docker.",
        ],
    },
    {
        empresa: "Black Horse Software Company SAS",
        locacion: "Cuenca, Ecuador",
        cargo: "Software Engineer",
        fecha: "December 2023 — January 2025",
        actividades: [
            "Engineered production-grade enterprise applications utilizing Java and TypeScript, owning feature delivery from design to production rollout.",
            "Built and maintained a Modular Design System, accelerating the development of frontend interfaces and reducing time-to-market by 40%.",
            "Managed secure API integrations and high-concurrency data processing pipelines with relentlessly high standards for reliability.",
        ],
    },
    {
        empresa: "UDIPSAI (Unidad de Diagnóstico e Investigación)",
        locacion: "Cuenca, Ecuador",
        cargo: "Software Engineer",
        fecha: "May 2024 — October 2024",
        actividades: [
            "Developed and deployed a comprehensive operational tool for patient management, leveraging Next.js (frontend) and Spring Boot (backend).",
            "Collaborated directly with stakeholders to navigate ambiguous requirements, successfully translating clinical needs into a scalable technical solution.",
        ],
    },
    {
        empresa: "Proyetic SAS",
        locacion: "Cuenca, Ecuador",
        cargo: "Software Engineer",
        fecha: "June 2022 — October 2022",
        actividades: [
            "Developed secure backend services and APIs for a transactional gateway using Python and Django.",
            "Designed and normalized PostgreSQL database schemas, optimizing SQL query performance and ensuring strict data integrity.",
            "Built responsive, client-facing interfaces with React to consume internal RESTful APIs.",
        ],
    },
    {
        empresa: "Banco del Austro",
        locacion: "Cuenca, Ecuador",
        cargo: "Software Engineer",
        fecha: "May 2022 — October 2022",
        actividades: [
            "Ensured the stability of corporate banking software through rigorous testing and systems thinking, mitigating critical security vulnerabilities.",
        ],
    },
    {
        empresa: "Kodeliv - SAS",
        locacion: "Cuenca, Ecuador",
        cargo: "Software Engineer",
        fecha: "October 2020 — June 2022",
        actividades: [
            "Developed responsive Single Page Applications using React.js, focusing on clean code practices and seamless API integrations.",
        ],
    },
    {
        empresa: "Superintendency of Territorial Planning, Use and Land Management",
        locacion: "Cuenca, Ecuador",
        cargo: "Web Developer",
        fecha: "August 2019 — September 2019",
        actividades: [
            "Development of a web application for user and file management for the Decentralized Autonomous Governments (GAD's), using JavaScript, Bootstrap, and MongoDB.",
        ],
    },
];

export const education = [
    {
        carrera: "Master's Degree in Artificial Intelligence",
        institucion: "Universidad Internacional de La Rioja (UNIR)",
        fecha: "Thesis defended, degree pending",
        location: "Online",
    },
    {
        carrera: "Software Engineering",
        institucion: "Universidad Católica de Cuenca",
        fecha: "February 2025",
        location: "Cuenca, Ecuador",
    },
];

/**
 * Las habilidades, agrupadas como en el CV. Cada grupo tiene un tono (un brillo
 * neon) en vez de un color por tecnologia: agregar una tecnologia es agregar un
 * string, sin tocar Tailwind ni el componente de la etiqueta.
 */
export const skillGroups = [
    {
        categoria: "AI & Agentic Engineering",
        tono: "ai",
        items: ["LangGraph", "LangChain", "LangSmith", "Langfuse", "RAG Pipelines", "Pinecone", "pgvector", "Azure Vector Search", "Claude & OpenAI LLMs"],
    },
    {
        categoria: "Languages",
        tono: "lenguajes",
        items: ["Python", "SQL", "TypeScript", "JavaScript", "Java 21"],
    },
    {
        categoria: "Frontend",
        tono: "frontend",
        items: ["React", "Next.js", "Tailwind CSS", "Material UI", "Zustand", "React Query"],
    },
    {
        categoria: "Backend & Systems",
        tono: "backend",
        items: ["Spring Boot", "FastAPI", "Django", "RESTful APIs", "Node.js", "Apache Kafka"],
    },
    {
        categoria: "Databases",
        tono: "datos",
        items: ["PostgreSQL", "MySQL", "Neo4j", "Redis"],
    },
    {
        categoria: "Cloud & DevOps",
        tono: "cloud",
        items: ["AWS", "Azure", "Docker Compose", "Git", "CI/CD Pipelines"],
    },
];

/**
 * Tecnologias que aparecen en los proyectos pero no en el CV. Llevan el tono del
 * grupo mas cercano y no se muestran en «My skills».
 */
const tecnologiasDeProyectos = {
    "Electron": "frontend",
    "Vite": "frontend",
    "React Color": "frontend",
    "HTML to Image": "frontend",
    "Chrome Extensions": "frontend",
    "PyTorch": "ai",
    "Playwright": "cloud",
};

/** El tono de una tecnologia, o null si no esta en ningun grupo. */
export function tonoDe(nombre) {
    const grupo = skillGroups.find((g) => g.items.includes(nombre));
    return grupo ? grupo.tono : tecnologiasDeProyectos[nombre] ?? null;
}
