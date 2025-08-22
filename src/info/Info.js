import self from "../img/self.png";

import project1 from "../img/Projects/Project1/cover.jpg";
import project2 from "../img/Projects/Project2/cover.jpg";
import project3 from "../img/Projects/Project3/cover.jpg";

import p1_img1 from "../img/Projects/Project1/1.png";
import p1_img2 from "../img/Projects/Project1/2.png";

import p2_img1 from "../img/Projects/Project2/1.png";
import p2_img2 from "../img/Projects/Project2/2.png";
import p2_img3 from "../img/Projects/Project2/3.png";

import p3_img1 from "../img/Projects/Project3/1.png";
import p3_img2 from "../img/Projects/Project3/2.png";
import p3_img3 from "../img/Projects/Project3/3.png";
import cvFile from "./Guadalupe-Martinez-Vargas-CV.pdf";

export const websiteTitle = "Mi Portafolio";
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;

export const info = {
    firstName: "Guadalupe",
    lastName: "Mtz",
    // initials: "",
    position: "Licenciada en Ciencias de la Comunicación",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: "💼",
            text: "Líder Funcional",
            link: ""
        },
        {
            emoji: '🎓',
            text: 'Marketing Digital',
            link: ""
        },
        {
            emoji: '☕',
            text: 'Oracle Data Science',
            link: ""
        },
        {
            emoji: "📞",
            text: "55 3680 8208",
            link: "tel:+525536808208"
        },
        {
            emoji: "📧",
            text: "lupy.data@gmail.com",
            link: "mailto:lupy.data@gmail.com"
        },
        {
            emoji: "📄",
            text: "CV",
            link: cvFile  // Usando el archivo PDF importado
        }
    ],
    socials: [
        {
            link: "https://www.linkedin.com/in/gpemtzvgs/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com/LupyLou",
            icon: "fa fa-github",
            label: 'github'
        }
    ],
    bio: "Profesional con +10 años de experiencia en identificar oportunidades de mejora a través del análisis de datos, implementar soluciones innovadoras y liderar equipos para alcanzar objetivos estratégicos. Hábil en la coordinación de múltiples proyectos, garantizando cumplimiento de plazos, calidad y rentabilidad.",
    education: [
        {
            university: 'Mi mascota',
            icon: ''
        }
    ],
    skills: {
        proficientWith: ['•Office 365', '•Premiere', '•Illustrator', '•Canva', '•Git', '•Github', '•Power BI', '•Python', '•Pandas'],
        exposedTo: ['•Javascript', '•SQL'],
        lenguages: ['•Español nativo', '•Inglés B2']
    },
    certificate: [
        {
            training: 'Data Sciene - Oracle',
            icon: '',
            link: ''
        },
        {
            training: 'Visualización de Datos',
            icon: '',
            link: ''
        }
    ],
    education: [
        "Licenciatura en Ciencias de la Comunicación - UNAM",
        "Diplomado en Comunicación Digital y Redes Sociales - UNAM"
    ],
    certificate: [
        {
            name: "Data Science Oracle Next Education",
            link: "https://app.aluracursos.com/program/certificate/7da36ccc-fdc2-4d02-8777-22db769e9506"
        },
        {
            name: "Visualización de Datos",
            link: "https://app.aluracursos.com/certificate/ff40ccca-806c-447b-af20-530dede9b3a6"
        }
    ],
    hobbies: 
        {
            info: `Me encanta viajar en México y por el mundo. ✈️🗺️ 
            Tengo una perrita que se llama Ramona 🐶 tipo salchicha 🌭 es mi fiel compañera a donde voy.
            Me encanta la playa 🏖️🌊⛵, la música (fan de Pulp) 🎶 y mirar televisión 📺.
            Me gusta cocinar👩‍🍳; cochinita pibil es mi especialidad.
            Quiero seguir desarrollándome en la visualización de datos 📊, y superarme profesional y personalmente 🎖️.
            `
        },
    portfolio: [
        {
            title: "App Entrenamiento R9 2018",
            live: "",
            source: "",
            description: 
                `
                Participé en la propuesta de diseño de una app interna para vendedores Telcel. Su función principal era ofrecer contenidos, como guías con consejos y tips de ventas, que ayudaban a los usuarios a mejorar sus habilidades comerciales. A
                demás, la aplicación enviaba mensajes de alerta con una comunicación corporativa y formal, los cuales acompañaban al vendedor durante todo su recorrido en el aplicativo. Estos mensajes proporcionaban soporte continuo, asegurando que los usuarios pudieran aprovechar al máximo la capacitación y aplicarla en su día a día laboral. 
                De esta manera, la app se convirtió en una herramienta esencial para el desarrollo de los vendedores, optimizando su rendimiento y manteniéndolos actualizados con las mejores prácticas de ventas.
                    
                +12mil usuarios activos
                Disponible para Android | iOS
                `,
            stacks: [],
            image: project1,
            gallery: [
                { type: "image", url: p1_img1 },
                { type: "image", url: p1_img2 },
                
            ]
        },
        {
            title: "App Telcel Academy 2021",
            live: "",
            source: "",
            description: 
                `
                Lideré mejoras clave para optimizar la experiencia y el engagement del usuario. 
                Realicé la propuesta y seguimiento con los desarrolladores para un menú interactivo que mostraba secciones dinámicamente según el producto y el contenido seleccionado, facilitando la navegación. 
                Además, renové la comunicación dentro de la app, pasando de un tono corporativo a uno más fresco y amigable para el usuario. 
                También realicé la propuesta de push notifications a través del servicio Pushwoosh, utilizando deep links que dirigían a los usuarios directamente al contenido, asegurando una mayor tasa de interacción.
                En esta versión, además, se liberó una función de likes y dislikes para evaluar los cursos, lo que permitió generar datos valiosos que analicé en Analytics para optimizar la efectividad del contenido.
                            
                +17mil usuarios activos 
                Disponible para Android | iOS
                        `,
            stacks: [],
            image: project2,
            gallery: [
                { type: "image", url: p2_img1 },
                { type: "image", url: p2_img2 },
                { type: "image", url: p2_img3 }
            ]
        },
        {
            title: "App Tu Plan R9",
            live: "",
            source: "",
            description: 
                `
                En la versión de 2018, la aplicación mostraba toda la oferta disponible, segmentada entre planes prepago y pospago, junto con los equipos y promociones, como la oferta amigo. 
                Para la versión de 2021, participé en la propuesta de look and feel, se propuso un cambio de la experiencia al permitirle al usuario seleccionar directamente la marca del equipo que deseaba mostrar. 
                A partir de ahí, el vendedor podía elegir el plan adecuado para el cliente mediante una barra deslizante que ajustaba el precio del plan según las necesidades del cliente. 
                Además, una de las funciones más útiles fue la posibilidad de compartir toda la oferta seleccionada con el cliente a través de WhatsApp, facilitando la comunicación y mejorando la experiencia de compra. 
                Propuse la implementación de push notifications para impulsar la venta de equipos en stock que tenían en el portafolio comercial.
                Esta herramienta no solo optimizaba la labor del vendedor, sino que también mejoraba la interacción con el cliente, permitiendo ofrecerle opciones personalizadas de manera rápida y eficiente.
                        
                +15mil usuarios activos
                Disponible para Android | iOS
                `,
            stacks: [],
            image: project3,
            gallery: [
                { type: "image", url: p3_img1 },
                { type: "image", url: p3_img2 },
                { type: "image", url: p3_img3 },
                // { type: "video", url: "https://www.youtube.com/watch?v=yuTMWgOduFM" }
            ]
        }
    ]
};

//Si se necesita enviar vídeo de YouTube, usar en gallery { type: "video", url: "https://www.youtube.com/watch?v=yuTMWgOduFM" }