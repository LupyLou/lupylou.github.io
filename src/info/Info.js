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

export const websiteTitle = "Mi Portafolio";
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;

export const info = {
    firstName: "Guadalupe",
    lastName: "Mtz",
    initials: "YO",
    position: "Licenciada en Ciencias de la Comunicación",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: "💼",
            text: "Líder Funcional"
        },
        {
            emoji: '🎓',
            text: 'Marketing Digital'
        },
        {
            emoji: '☕',
            text: 'Oracle Next Education'
        },
        {
            emoji: "📞",
            text: "5536-8082-08"
        },
        {
            emoji: "📧",
            text: "lupy.data@gmail.com"
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
    skills: {
        proficientWith: ['Office 365', 'Premiere', 'Illustrator', 'Inglés B2', 'Git', 'Github', 'Power BI', 'Figma'],
        exposedTo: ['Javascript', 'Python', 'SQL']
    },
    hobbies: [
        {
            label: 'Mi mascota',
            emoji: '🐕'
        },
        {
            label: 'Series y Películas',
            emoji: '📺'
        },
        {
            label: 'Música',
            emoji: '🎶'
        },
        {
            label: 'Cocinar',
            emoji: '👩‍🍳'
        }
    ],
    portfolio: [
        {
            title: "App Entrenamiento R9 2018",
            live: "",
            source: "",
            description: 
                `
                Diseñada para capacitar a los vendedores de Telcel. Su función principal era ofrecer contenidos, como guías con consejos y tips de ventas, que ayudaban a los usuarios a mejorar sus habilidades comerciales. Además, la aplicación enviaba mensajes de alerta con una comunicación corporativa y formal, los cuales acompañaban al vendedor durante todo su recorrido en el aplicativo. Estos mensajes proporcionaban soporte continuo, asegurando que los usuarios pudieran aprovechar al máximo la capacitación y aplicarla en su día a día laboral. 
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
                Implementé un menú interactivo que mostraba secciones dinámicamente según el producto y el contenido seleccionado, facilitando la navegación. Además, renové la comunicación dentro de la app, pasando de un tono corporativo a uno más fresco y amigable para el usuario. 
                También integré push notifications  a través del servicio Pushwoosh, utilizando deep links que dirigían a los usuarios directamente al contenido, asegurando una mayor tasa de interacción. En esta versión, además, se liberó una función de likes y dislikes para evaluar los cursos, lo que permitió generar datos valiosos que analicé en Analytics para optimizar la efectividad del contenido.
                            
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
                Para la versión de 2021,  se cambió de look and feel, mejoré la experiencia al permitirle al usuario seleccionar directamente la marca del equipo que deseaba mostrar. A partir de ahí, el vendedor podía elegir el plan adecuado para el cliente mediante una barra deslizante que ajustaba el precio del plan según las necesidades del cliente. 
                Además, una de las funciones más útiles fue la posibilidad de compartir toda la oferta seleccionada con el cliente a través de WhatsApp, facilitando la comunicación y mejorando la experiencia de compra. 
                Implementé push notifications para impulsar la venta de equipos en stock que tenían en el portafolio comercial.
                Esta herramienta no solo optimizaba la labor del vendedor, sino que también mejoraba la interacción con el cliente, permitiendo ofrecerle opciones personalizadas de manera rápida y eficiente.
                        
                +15mil usuarios activos
                Disponible para Android | iOS
                `,
            stacks: [],
            image: project3,
            gallery: [
                { type: "image", url: p3_img1 },
                { type: "image", url: p3_img2 },
                { type: "image", url: p3_img3 }
            ]
        }
    ]
};

//Si se necesita enviar vídeo de YouTube, usar en gallery { type: "video", url: "https://www.youtube.com/watch?v=yuTMWgOduFM" }