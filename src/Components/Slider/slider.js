import React from 'react';
import { Carousel } from "react-responsive-carousel";
import Card from '../Card/Card.js';
import './slider.css'


const slider = () => (
    <div className = 'sliderDiv'>
    <Carousel autoPlay emulateTouch={true} showStatus={false} showThumbs={false}>
        <div>
            <img src="" />
            <Card></Card>
        </div>
        <div>
            <img src="" />
            <Card></Card>
        </div>
        <div>
            <img src="" />
            <Card></Card>
        </div>
    </Carousel>
    </div>
);

export default slider;