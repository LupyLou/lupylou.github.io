import React from 'react';
import Style from './About.module.scss';
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function About({innerRef, darkMode}) {
    // Estilo para las secciones que se adapta al tema
    const sectionStyle = {
        boxShadow: darkMode 
            ? '0 4px 8px rgba(255, 255, 255, 0.1)' 
            : '0 2px 4px rgba(0, 0, 0, 0.1)',
        border: darkMode 
            ? '1px solid rgba(255, 255, 255, 0.1)' 
            : '1px solid rgba(0, 0, 0, 0.05)'
    };
    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'} sx={{ margin: '0% 3% 0% 3%' }}>
            
            <div className={Style.aboutSection} style={sectionStyle}>                 
    <h2>Sobre mí</h2>                 
    <p>{info.bio}</p>                 
    <div style={{ 
        border: darkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid gray', 
        fontSize: '110%', 
        borderRadius: '10px', 
        padding: '8px', 
        marginTop: '10px' 
    }}>                     
        {info.education.map((edu, index) => (                         
            <div key={index} style={{ fontSize: '110%', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {edu.icon && edu.icon.trim() !== '' ? (
                    <img src={edu.icon} alt={edu.name.split(' - ')[1] || edu.name} style={{ width: '40px', height: '40px', borderRadius: '5px' }} onError={(e) => e.target.style.display = 'none'} />
                ) : (
                    <span style={{ fontSize: '18px', minWidth: '15px', display: 'inline-block' }}>🎓</span>
                )}
                <span>{edu.name}</span>
            </div>                     
        ))}                 
    </div>             
</div>

            <div className={Style.aboutSection} style={sectionStyle}>
                <h2>Habilidades</h2>
                <div>
                    <h3>Dominio</h3>
                    <ul className={Style.skills}>
                        {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>Conocimiento</h3>
                    <ul className={Style.skills}>
                        {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>Idiomas</h3>
                    <ul className={Style.lenguages}>
                        {info.skills.lenguages.map((lenguage, index) => <li key={index}>{lenguage}</li>)}
                    </ul>
                </div>
            </div>

            <div className={Style.aboutSection} style={sectionStyle}>
                <h2>Certificados</h2>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    {info.certificate.map((cert, index) => (
                        <li key={index} style={{
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '10px', 
                            marginBottom: '15px'
                        }}>
                            {cert.icon && cert.icon.trim() !== '' ? (
                                <img src={cert.icon} alt={cert.name} style={{ width: '30px', height: '30px', objectFit: 'contain', borderRadius: '5px' }} />
                            ) : (
                                <span style={{ fontSize: '18px', minWidth: '15px', display: 'inline-block' }}>◇</span>
                            )}
                            <div style={{ marginBottom: '5px' }}>
                                {cert.link ? (
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                        {cert.name}
                                    </a>
                                ) : (
                                    <span>{cert.name}</span>
                                )}
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

            <div className={Style.aboutSection}>
                <details>
                    <summary style={{ cursor: 'pointer' }}>Otras cosas sobre mí</summary>
                    <pre style={{ marginTop: '10px', whiteSpace: 'pre-line' }}>
                        {info.hobbies.info}
                    </pre>
                </details>
            </div>
        </Box>
    )
}