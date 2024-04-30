'use client';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    const tabSliders = [
        { src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754829/images/pc_portable_cz8v2b.jpg" },
        { src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754821/images/gaer_banniere_40_g1ktuz.jpg" },
        { src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754784/images/Banner-2-Code-Promo_smhykd.jpg" },
        { src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754792/images/banniere_smartphone_1_p0ftki.jpg" }

    ]
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {tabSliders.map((tab, i) => <Carousel.Item key={i}>
                <img src={tab.src} />
            </Carousel.Item>)
            }
        </Carousel>
    )
}

export default ControlledCarousel;
