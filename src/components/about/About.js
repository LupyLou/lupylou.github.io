import React from 'react';
import Style from './About.module.scss';
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function About({innerRef}) {
    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'} sx={{ margin: '0% 3% 0% 3%' }}>
            
            <div className={Style.aboutSection}>                 
    <h2>Sobre mí</h2>                 
    <p>{info.bio}</p>                 
    <div style={{ border: '1px solid gray', fontSize: '110%', borderRadius: '10px', padding: '8px', marginTop: '10px' }}>                     
        {info.education.map((edu, index) => (                         
            <div key={index} style={{ fontSize: '110%', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="https://www.unam.mx/sites/default/files/images/unam.svg" alt="UNAM" style={{ width: '40px', height: '40px' }} />
                {edu}
            </div>                     
        ))}                 
    </div>             
</div>

            <div className={Style.aboutSection}>
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

            <div className={Style.aboutSection}>
                <h2>Certificados</h2>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    <ul>
                    {info.certificate.map((cert, index) => (
                        <li style={{listStyleType: 'square'}}>
                        <div key={index} style={{ marginBottom: '10px' }}>
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