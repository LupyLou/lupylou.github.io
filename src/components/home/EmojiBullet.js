import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text, link} = props;

    const textContent = link && link.trim() !== '' ? (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            {text}
        </a>
    ) : text;

    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: (link && link.trim() !== '') ? 'pointer' : 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}</Box> {textContent}
        </Box>
    );
}

export default EmojiBullet;