// Core
import React, { useState, useRef } from 'react';

// Instruments
import './styles.css';

import video from './spring.mp4';

export const Player = () => {
    const [ isPlaying, setPlaying ] = useState(false);

    /**
     * Создаём реф для элемента video.
     * Реф в React — это прямой доступ к html-элементу.
     * С его помощью мы сможем управлять видеоплеером в явном виде.
     */
    const videoRef = useRef(null);

    /* Включаем или выключаем проигрывание видео. */
    const togglePlay = () => {
        const method = videoRef.current.paused ? 'play' : 'pause';

        videoRef.current[ method ]();
        setPlaying(method === 'play');
    };

    const playControl = isPlaying ? <>&#10074;&#10074;</> : <>&#9654;</>;

    return (
        <div className = 'player'>
            <video
                ref = { videoRef }
                src = { video }
            />
            <div className = 'controls'>
                <div className = 'progress'>
                    <div className = 'filled' />
                </div>
                <button title = 'Toggle Play'>{playControl}</button>
                <input
                    className = 'slider'
                    max = '1'
                    min = '0'
                    name = 'volume'
                    step = '0.05'
                    type = 'range'
                />
                <input
                    className = 'slider'
                    max = '2'
                    min = '0.5'
                    name = 'playbackRate'
                    step = '0.1'
                    type = 'range'
                />
                <button data-skip = '-10'>« 10s</button>
                <button data-skip = '25'>25s »</button>
                <button>&#10021;</button>
            </div>
        </div>
    );
};