import React from "react";
import GameButton from './GameButton';
import {useTranslation} from 'react-i18next';
import {Reveal} from "./Reveal";
import closeImage from '../images/close-image.png';
import './GameDescription.css';

interface Props {
    name: string;
    synopses: string;
    description: string;
    store: string;
    url: string;
    onCloseButtonClick: () => void;
}

const GameDescription = ({name, synopses, description, store, url, onCloseButtonClick} : Props) => {
    const { t, i18n } = useTranslation();
    
    return (
        <Reveal>
            <div className="gameDescriptionContainer">
                <Reveal>
                    <h1>
                        {name}
                        <div className="gameDescriptionLine"></div>
                    </h1>
                </Reveal>
                <Reveal>
                    <em>
                        <p className="synopses">
                            {t(synopses)}
                        </p>
                    </em>
                </Reveal>
                <Reveal>
                    <p className="description">
                        {t(description)}
                    </p>
                </Reveal>
                <Reveal>
                    <GameButton store={store} url={url} />
                </Reveal>
                <a className="closeButton" onClick={onCloseButtonClick}>
                    <img src={closeImage} alt="close image"/>
                </a>
            </div>
        </Reveal>
    )
}

export default GameDescription;