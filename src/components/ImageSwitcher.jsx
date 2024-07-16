import React, { useState } from 'react';
import img1 from '../assets/alita1.jfif';
import img2 from '../assets/alita2.jfif';
import img3 from '../assets/alita3.jfif';
import img4 from '../assets/alita4.jfif';
import img5 from '../assets/alita5.jfif';
import img6 from '../assets/alita6.jfif';
import img7 from '../assets/alita7.jfif';
import img8 from '../assets/alita8.jfif';
import { Stack, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageSwitcher = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='img-switcher-container'>
            <img src={images[currentIndex]} alt="current display" />
            <Stack spacing={1} sx={{ mt: 1, alignItems: "center" }} direction='row' >
                <Button variant='contained' fullWidth onClick={goLeft}>
                    <ArrowBackIcon></ArrowBackIcon>
                </Button>
                <h4 style={{ color: "#fff" }}>{currentIndex + 1}/{images.length}</h4>
                <Button variant='contained' fullWidth onClick={goRight}>
                    <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
            </Stack>
        </div>
    );
};

export default ImageSwitcher;
