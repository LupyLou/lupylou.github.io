import React, { useState } from 'react';
import { info } from "../../info/Info";
import './Projects.css';
import videoPlayer from "../../img/Projects/videoPlayer.gif"; // Simulador de Reproductor si se manda un video a la galería

function PortfolioBlock() {
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
        if (currentImageIndex < projects[currentProjectIndex].gallery.length - 1) {
            setCurrentImageIndex((prev) => prev + 1);
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex((prev) => prev - 1);
        }
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
        setTouchStartXGallery(e.touches[0].clientX);
    };

    const handleTouchMoveGallery = (e) => {
        e.preventDefault(); // Evita el desplazamiento de la página
        setTouchEndXGallery(e.touches[0].clientX);
    };

    const handleTouchEndGallery = () => {
        if (touchStartXGallery - touchEndXGallery > 50) {
            nextImage(); // Swipe hacia la izquierda (siguiente imagen)
        } else if (touchEndXGallery - touchStartXGallery > 50) {
            prevImage(); // Swipe hacia la derecha (imagen anterior)
        }
        setTouchEndXGallery(0); // Resetea el valor
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
                            <a href={currentGalleryItem.url} target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={videoPlayer} 
                                    alt={`Video ${currentImageIndex + 1} ${projects[currentProjectIndex].title}`} 
                                    className="gallery-image"
                                />
                            </a>
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

            <div className="title" id="projectTitle">
                <h2>{projects[currentProjectIndex].title}</h2>
            </div>
            <div className="description" id="projectDescription">
                {projects[currentProjectIndex].description}
            </div>
        </div>
    );
}

export default PortfolioBlock;