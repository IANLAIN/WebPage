// Language translations
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            interests: "Interests",
            contact: "Contact"
        },
        hero: {
            subtitle: "Systems & Computer Engineering Student",
            description: "Passionate about Computer Science, Mathematics & Astronomy"
        },
        about: {
            title: "About Me",
            paragraph1: "I'm a Systems and Computer Engineering student at the Universidad Tecnológica de Pereira, Colombia. My journey in technology is driven by an insatiable curiosity about how computational systems work and how they can be used to solve complex problems.",
            paragraph2: "Based in the beautiful coffee region of Colombia, I combine my technical studies with a deep appreciation for the mathematical foundations that underpin modern computing. My passion extends beyond Earth's boundaries into the vast realm of astronomy and space sciences.",
            education: {
                title: "Education",
                degree: "Systems & Computer Engineering",
                university: "Universidad Tecnológica de Pereira, Colombia",
                status: "Current Student"
            }
        },
        interests: {
            title: "Interests & Passions",
            computerScience: {
                title: "Computer Science",
                description: "Exploring algorithms, data structures, software engineering, and emerging technologies that shape our digital future."
            },
            mathematics: {
                title: "Mathematics",
                description: "Fascinated by mathematical concepts, from discrete mathematics to calculus, and their applications in computational problem-solving."
            },
            linux: {
                title: "Linux",
                description: "Passionate about open-source systems, command-line mastery, and the power of Linux in development and system administration."
            },
            astronomy: {
                title: "Astronomy",
                description: "Captivated by the cosmos, celestial mechanics, and the intersection of computational science with space exploration."
            }
        },
        contact: {
            title: "Let's Connect",
            description: "Interested in collaborating on projects, discussing technology, or just connecting? Feel free to reach out through my social channels."
        },
        footer: {
            text: "© 2025 IanLain. Crafted with passion for technology and the cosmos."
        }
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Acerca de",
            interests: "Intereses",
            contact: "Contacto"
        },
        hero: {
            subtitle: "Estudiante de Ingeniería de Sistemas y Computación",
            description: "Apasionado por las Ciencias de la Computación, las Matemáticas y la Astronomía"
        },
        about: {
            title: "Acerca de Mí",
            paragraph1: "Soy estudiante de Ingeniería de Sistemas y Computación en la Universidad Tecnológica de Pereira, Colombia. Mi viaje en la tecnología está impulsado por una curiosidad insaciable sobre cómo funcionan los sistemas computacionales y cómo pueden usarse para resolver problemas complejos.",
            paragraph2: "Ubicado en la hermosa región cafetera de Colombia, combino mis estudios técnicos con una profunda apreciación por las bases matemáticas que sustentan la computación moderna. Mi pasión se extiende más allá de los límites de la Tierra hacia el vasto reino de la astronomía y las ciencias espaciales.",
            education: {
                title: "Educación",
                degree: "Ingeniería de Sistemas y Computación",
                university: "Universidad Tecnológica de Pereira, Colombia",
                status: "Estudiante Actual"
            }
        },
        interests: {
            title: "Intereses y Pasiones",
            computerScience: {
                title: "Ciencias de la Computación",
                description: "Explorando algoritmos, estructuras de datos, ingeniería de software y tecnologías emergentes que dan forma a nuestro futuro digital."
            },
            mathematics: {
                title: "Matemáticas",
                description: "Fascinado por los conceptos matemáticos, desde las matemáticas discretas hasta el cálculo, y sus aplicaciones en la resolución de problemas computacionales."
            },
            linux: {
                title: "Linux",
                description: "Apasionado por los sistemas de código abierto, el dominio de la línea de comandos y el poder de Linux en el desarrollo y la administración de sistemas."
            },
            astronomy: {
                title: "Astronomía",
                description: "Cautivado por el cosmos, la mecánica celeste y la intersección de las ciencias computacionales con la exploración espacial."
            }
        },
        contact: {
            title: "Conectemos",
            description: "¿Interesado en colaborar en proyectos, discutir sobre tecnología o simplemente conectar? No dudes en contactarme a través de mis redes sociales."
        },
        footer: {
            text: "© 2025 IanLain. Creado con pasión por la tecnología y el cosmos."
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            interests: "Intérêts",
            contact: "Contact"
        },
        hero: {
            subtitle: "Étudiant en Génie des Systèmes et Informatique",
            description: "Passionné par l'Informatique, les Mathématiques et l'Astronomie"
        },
        about: {
            title: "À Propos de Moi",
            paragraph1: "Je suis étudiant en génie des systèmes et informatique à l'Universidad Tecnológica de Pereira, Colombie. Mon parcours dans la technologie est motivé par une curiosité insatiable sur le fonctionnement des systèmes informatiques et comment ils peuvent être utilisés pour résoudre des problèmes complexes.",
            paragraph2: "Basé dans la belle région caféière de Colombie, je combine mes études techniques avec une profonde appréciation des fondements mathématiques qui sous-tendent l'informatique moderne. Ma passion s'étend au-delà des frontières terrestres vers le vaste domaine de l'astronomie et des sciences spatiales.",
            education: {
                title: "Éducation",
                degree: "Génie des Systèmes et Informatique",
                university: "Universidad Tecnológica de Pereira, Colombie",
                status: "Étudiant Actuel"
            }
        },
        interests: {
            title: "Intérêts et Passions",
            computerScience: {
                title: "Informatique",
                description: "Explorer les algorithmes, les structures de données, le génie logiciel et les technologies émergentes qui façonnent notre avenir numérique."
            },
            mathematics: {
                title: "Mathématiques",
                description: "Fasciné par les concepts mathématiques, des mathématiques discrètes au calcul, et leurs applications dans la résolution de problèmes informatiques."
            },
            linux: {
                title: "Linux",
                description: "Passionné par les systèmes open-source, la maîtrise de la ligne de commande et la puissance de Linux dans le développement et l'administration système."
            },
            astronomy: {
                title: "Astronomie",
                description: "Captivé par le cosmos, la mécanique céleste et l'intersection de l'informatique avec l'exploration spatiale."
            }
        },
        contact: {
            title: "Connectons-nous",
            description: "Intéressé par une collaboration sur des projets, discuter de technologie ou simplement se connecter ? N'hésitez pas à me contacter via mes réseaux sociaux."
        },
        footer: {
            text: "© 2025 IanLain. Créé avec passion pour la technologie et le cosmos."
        }
    }
};

// Function to get nested translation
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, getNestedTranslation };
}