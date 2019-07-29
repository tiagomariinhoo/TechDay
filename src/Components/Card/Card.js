import React from 'react';
import './card.css';

const Card = () => (
    <div>
        <div class='cardContainer'>
                <div class='contentLeft'>
                <img src='data:image/png;base64,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'></img>
                    <div class='subcontentLeft'>
                        <h4><b>Tiago Marinho</b></h4>
                        <p>Professor da Ufal</p>
                    </div>
                </div>

                <div class='contentRight'>
                    <h2>Palestra sobre redes neurais</h2>
                    <p>Horário: 09:30</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
        </div>
    </div>
);

export default Card;