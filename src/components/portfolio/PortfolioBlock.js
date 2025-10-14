import React, { useState } from 'react';
import { info } from "../../info/Info";
import './Projects.css';
import 'lite-youtube-embed/src/lite-yt-embed.css';
import 'lite-youtube-embed';

// Registrar manualmente el custom element si no está definido
if (typeof window !== 'undefined' && !customElements.get('lite-youtube')) {
    import('lite-youtube-embed').then(module => {
        // El paquete ya lo registra, pero por si acaso
    });
}

function PortfolioBlock({ darkMode }) {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStartXProjects, setTouchStartXProjects] = useState(0);
    const [touchEndXProjects, setTouchEndXProjects] = useState(0);
    const [touchStartXGallery, setTouchStartXGallery] = useState(0);
    const [touchEndXGallery, setTouchEndXGallery] = useState(0);

    const projects = info.portfolio;

    const nextProject = () => {
        setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
        setCurrentImageIndex(0);
    };

    const prevProject = () => {
        setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setCurrentImageIndex(0);
    };

const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projects[currentProjectIndex].gallery.length);
};

const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projects[currentProjectIndex].gallery.length) % projects[currentProjectIndex].gallery.length);
};

    const handleTouchStartProjects = (e) => {
        setTouchStartXProjects(e.touches[0].clientX);
    };

    const handleTouchMoveProjects = (e) => {
        e.preventDefault(); // Evita el desplazamiento de la página
        setTouchEndXProjects(e.touches[0].clientX);
    };

    const handleTouchEndProjects = () => {
        if (touchStartXProjects - touchEndXProjects > 50) {
            nextProject();
        } else if (touchEndXProjects - touchStartXProjects > 50) {
            prevProject();
        }
        setTouchEndXProjects(0); // Resetea el valor
    };

    const handleTouchStartGallery = (e) => {
        setTouchEndXGallery(0); // Reset al inicio
        setTouchStartXGallery(e.touches[0].clientX);
    };

    const handleTouchMoveGallery = (e) => {
        e.preventDefault(); // Evita el desplazamiento de la página
        setTouchEndXGallery(e.touches[0].clientX);
    };

    const handleTouchEndGallery = () => {
        const swipeThreshold = 50;
        const swipeDistance = touchStartXGallery - touchEndXGallery;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe izquierda -> siguiente imagen
                nextImage();
            } else {
                // Swipe derecha -> imagen anterior  
                prevImage();
            }
        }
        
        // Reset valores
        setTouchStartXGallery(0);
        setTouchEndXGallery(0);
    };

    const currentGalleryItem = projects[currentProjectIndex].gallery[currentImageIndex];

    return (
        <div>
            <div
                className="projects"
                id="projects"
                onTouchStart={handleTouchStartProjects}
                onTouchMove={handleTouchMoveProjects}
                onTouchEnd={handleTouchEndProjects}
            >
                {projects.map((project, index) => {
                    const isCenter = index === currentProjectIndex;
                    const isLeft = index === (currentProjectIndex - 1 + projects.length) % projects.length;
                    const isRight = index === (currentProjectIndex + 1) % projects.length;

                    return (
                        <img
                            key={index}
                            src={project.image}
                            alt={`Proyecto ${project.title}`}
                            className={
                                isCenter ? 'center' : isLeft ? 'left' : isRight ? 'right' : ''
                            }
                            onClick={isLeft ? prevProject : isRight ? nextProject : null}
                        />
                    );
                })}
            </div>

            <div className="title" id="projectTitle">
                <h2>{projects[currentProjectIndex].title}</h2>
            </div>

            <div 
                className="gallery"
                onTouchStart={handleTouchStartGallery}
                onTouchMove={handleTouchMoveGallery}
                onTouchEnd={handleTouchEndGallery}
            >
                <div className="gallery-container">
                    <div className="image-wrapper">
                        {currentGalleryItem.type === "image" ? (
                            <img
                                src={currentGalleryItem.url}
                                alt={`Foto ${currentImageIndex + 1} Proyecto ${projects[currentProjectIndex].title}`}
                                className="gallery-image"
                            />
                        ) : (
                            (() => {
                                // Extracción robusta del videoId de YouTube
                                const url = currentGalleryItem.url;
                                let videoId = null;
                                const regExp = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([\w-]{11})/;
                                const match = url.match(regExp);
                                if (match && match[1]) {
                                    videoId = match[1];
                                }
                                return videoId ? (
                                    <div
                                        className="gallery-video"
                                        style={{ width: '100%', maxWidth: '560px', margin: '0 auto' }}
                                        dangerouslySetInnerHTML={{ __html: `<lite-youtube videoid='${videoId}' style='width:100%;height:315px;'></lite-youtube>` }}
                                    />
                                ) : (
                                    <span>Video no válido</span>
                                );
                            })()
                        )}
                        {currentImageIndex > 0 && (
                            <button className="nav-button prev" onClick={prevImage}>&lt;</button>
                        )}
                        {currentImageIndex < projects[currentProjectIndex].gallery.length - 1 && (
                            <button className="nav-button next" onClick={nextImage}>&gt;</button>
                        )}
                    </div>
                </div>
                <div className="bullets">
                    {projects[currentProjectIndex].gallery.map((_, index) => (
                        <span
                            key={index}
                            className={`bullet ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>


            <div className="description" id="projectDescription" 
                dangerouslySetInnerHTML={{ __html: projects[currentProjectIndex].description }}>
            </div>
            
            {projects[currentProjectIndex].stacks && projects[currentProjectIndex].stacks.length > 0 && (
                <div className="project-stacks" style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap',
                    justifyContent: 'center', 
                    gap: '10px', 
                    margin: '15px 0' 
                }}>
                    {projects[currentProjectIndex].stacks.map((stack, index) => (
                        <span
                            key={index}
                            style={{
                                padding: '5px 10px',
                                backgroundColor: darkMode ? '#444' : '#e7e7e7ff',
                                color: darkMode ? '#fff' : '#333',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}
                        >
                            {stack}
                        </span>
                    ))}
                </div>
            )}
            
            {(projects[currentProjectIndex].live || projects[currentProjectIndex].source) && (
                <div className="project-links" style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '15px 0' }}>
                    {projects[currentProjectIndex].live && (
                        <a 
                            href={projects[currentProjectIndex].live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                padding: '8px 16px',
                                backgroundColor: 'transparent',
                                color: darkMode ? '#ebe9e9ff' : '#333',
                                border: '2px solid #333',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}
                        >
                            <i className="fa fa-eye" style={{ marginRight: '8px' }}></i> Ver Sitio
                        </a>
                    )}
                    {projects[currentProjectIndex].source && (
                        <a 
                            href={projects[currentProjectIndex].source} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                padding: '8px 16px',
                                backgroundColor: 'transparent',
                                color: darkMode ? '#ebe9e9ff' : '#333',
                                border: '2px solid #333',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}
                        >
                            <i className="fa fa-code" style={{ marginRight: '8px' }}></i> Ver Código
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export default PortfolioBlock;