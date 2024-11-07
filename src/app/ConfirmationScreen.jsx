// ConfirmationScreen.js
"use client";

import React, { useState, useEffect } from 'react';
import './ConfirmationScreen.scss';

function ConfirmationScreen() {
    const [declinePosition, setDeclinePosition] = useState({ top: 'auto', left: 'auto' });
    const [isShifted, setIsShifted] = useState(false);
    const [isAudioStarted, setIsAudioStarted] = useState(false);

    useEffect(() => {
        let audio;
        if (isAudioStarted) {
            audio = new Audio('/sounds/sound.mp3');
            audio.loop = true;
            audio.volume = 0.3;
            audio.play().catch(error => console.error("Erro ao reproduzir áudio:", error));
        }

        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, [isAudioStarted]);

    const handleDeclineHover = () => {
        if (!isShifted) {
            setIsShifted(true);
        }

        const buttonWidth = 100;
        const buttonHeight = 50;
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;

        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);

        setDeclinePosition({ top: `${y}px`, left: `${x}px` });
    };

    const startAudio = () => {
        setIsAudioStarted(true);
    };

    const handleConfirmClick = () => {
        alert("Amor está no ar <3 @rachid_martins");
    };

    return (
        <div className="container" onClick={startAudio}>
            <img src="/img/bob-sponja.jpg" alt="Bob Sponja" className="banner-image" />
            <h1>Hey Ana, vamos tirar o atraso de 3 anos sem flertar ? (Longe de mim, ser cara de pau)</h1>
            <h1>Te amo vida</h1>
            <div className="buttons">
                <button className="confirm" onClick={handleConfirmClick}>
                    Vamo beijaaaa!
                </button>
                <button
                    className="decline"
                    style={{
                        top: isShifted ? declinePosition.top : 'auto',
                        left: isShifted ? declinePosition.left : 'auto',
                        position: isShifted ? 'absolute' : 'relative',
                    }}
                    onClick={handleDeclineHover}
                >
                    Ta maluco porra ?
                </button>
            </div>
        </div>
    );
}

export default ConfirmationScreen;