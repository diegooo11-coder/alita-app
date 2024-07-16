import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import ImageSwitcher from '../components/ImageSwitcher';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export const FeelingPage = ({ handleLogout }) => {
    const [showLetter, setShowLetter] = useState(true);

    const toggleSection = () => {
        setShowLetter(!showLetter);
    };

    return (
        <div className="container-page-2">
            {showLetter ? (
                <div className="container-letter">
                    <h2>¡Feliz cumpleaños🎉, mi amoooor ❤️!</h2>
                    <p>
                        Amor, hoy que es un día especial para ti (ahora lo es para mí también) quería recordarte que eres <b>la chica más increíble de la galaxia</b> y que no puedo sentirme más afortunado por tenerte a mi lado. Quiero agradecerte por estar ahí conmigo en todo momento; sabes que yo estoy para ti de la misma manera. Te amo infinitamente y espero poder decirte feliz cumpleaños hasta que naturalmente ya no se pueda porque <b>quiero pasar contigo el resto de mi vida.</b>
                    </p>
                    <p><b>Con inmenso amor</b>,<br />
                        Diego
                    </p>
                </div>
            ) : (
                <ImageSwitcher></ImageSwitcher>
            )}
            {
                showLetter ? (
                    <Stack spacing={1} direction={'row'} sx={{ width: "100%", mt: 1.5 }}>
                        <Button sx={{ mt: 1.5 }} variant='contained' fullWidth onClick={handleLogout}>
                            <PowerSettingsNewIcon></PowerSettingsNewIcon>
                        </Button>
                        <Button sx={{ mt: 1.5 }} variant='contained' fullWidth onClick={toggleSection}>
                            <CachedOutlinedIcon></CachedOutlinedIcon>
                        </Button>
                    </Stack>
                ) : (
                    <Button sx={{ mt: 1.5 }} variant='contained' fullWidth onClick={toggleSection}>
                        <CachedOutlinedIcon></CachedOutlinedIcon>
                    </Button>
                )
            }
        </div>
    );
};
