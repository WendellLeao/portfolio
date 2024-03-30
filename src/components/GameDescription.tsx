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
    
    const delay : number = 0.35;
    
    return (
        <Reveal delay={delay}>
            <div className="gameDescriptionContainer">
                <Reveal delay={delay}>
                    <h1>
                        {name}
                        <div className="gameDescriptionLine"></div>
                    </h1>
                </Reveal>
                <Reveal delay={delay}>
                    <em>
                        <p className="synopses">
                            {t(synopses)}
                        </p>
                    </em>
                </Reveal>
                <Reveal delay={delay}>
                    <p className="description">
                        {t(description)}
                    </p>
                </Reveal>
                <Reveal delay={delay}>
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