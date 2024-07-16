import React, { useState } from 'react';
import img1 from '../assets/ali1.jfif';
import img2 from '../assets/ali2.jfif';
import img3 from '../assets/ali3.jfif';
import img4 from '../assets/ali4.jfif';
import img5 from '../assets/ali5.jfif';
import img6 from '../assets/ali6.jfif';
import { Stack, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageSwitcher = () => {
    const images = [img1, img2, img3, img4, img5, img6];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='img-switcher'>
            <img src={images[currentIndex]} alt="current display" style={{ width: '300px', height: 'auto' }} />
            <Stack spacing={1} sx={{ mt: 1 }} direction='row' >
                <Button variant='contained' fullWidth onClick={goLeft}>
                    <ArrowBackIcon></ArrowBackIcon>
                </Button>
                <Button variant='contained' fullWidth onClick={goRight}>
                    <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
            </Stack>
        </div>
    );
};

export default ImageSwitcher;
