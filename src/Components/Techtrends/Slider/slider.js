import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

// import Estilo from './styles2.css';

import './styles2.css'

import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';


const slider = () => (
    <div className = 'sliderDiv'>
        <AwesomeSlider clasName='sliderBar'>
            <div data-src={img1}></div>
            <div data-src={img2}></div>
            <div data-src={img3}></div>
        </AwesomeSlider>
    </div>
);

export default slider;