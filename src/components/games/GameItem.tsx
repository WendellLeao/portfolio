import React, {RefObject, useRef, useState} from 'react';
import GameVideo from './GameVideo';
import GameDescription from './GameDescription';
import GameSideMenu from './GameSideMenu';
import useOnScreen from "../Utils";
import {Reveal} from "../Reveal";
import {GameItemReveal} from "./GameItemReveal";
import './GameItem.css';

interface Props {
    id: string;
    title: string;
    synopses: string;
    description: string;
    store: "steam" | "itch" | "google-play";
    url?: string;
    videoUrl: string;
    side: "right" | "left";
    shadow?: "top" | "bottom"
}

const GameItem = ({id, title, synopses, description, store = "itch", url = "", videoUrl, side, shadow}: Props) => {
    const [videoHasStarted, SetVideoHasStarted] = useState(false);
    
    const mediaRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    const gameDescriptionRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null); 
    const gameSideMenuRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const mediaQueryList : MediaQueryList = window.matchMedia("(min-width: 45em)");

    mediaQueryList.addEventListener("change", function() : void {
        if (mediaQueryList.matches) {
            ShowGameDescription();
        }
        else {
            ShowGameSideMenu();
        }
    });
    
    function ShowGameDescription() : void {
        SetDisplay(gameDescriptionRef.current, "flex")
        SetDisplay(gameSideMenuRef.current, "none")
    }
    
    function ShowGameSideMenu() : void {
        SetDisplay(gameSideMenuRef.current, "flex")
        SetDisplay(gameDescriptionRef.current, "none")
    }

    function GetVideoElement() : JSX.Element {
        return (
            <div className="videoContainer">
                <GameVideo videoUrl={videoUrl} onPlay={() => SetVideoHasStarted(true)} />
            </div>
        )
    }

    function GetClassName() : string {
        let className : string = "gamesItem " + id + " " + side + " ";

        if (shadow) {
            className += shadow + "Shadow";
        }

        return className;
    }
    
    function SetDisplay(current : HTMLDivElement | null, display : string) : void {
        if (current) {
            current.style.display = display;
        }
    }
    
    function GetElement() : JSX.Element {
        const element : JSX.Element =
            <div className={side}>
                <div className={GetClassName()}>
                    <div ref={mediaRef} className="mediaContainer">
                        {GetVideoElement()}
                    </div>
                    <div ref={gameDescriptionRef} id="gameDescription" className={side}>
                        <GameDescription name={title}
                                         synopses={synopses}
                                         description={description}
                                         store={store}
                                         url={url}
                                         onCloseButtonClick={ShowGameSideMenu}/>
                    </div>
                    <div ref={gameSideMenuRef} id="gameSideMenu" className={side}>
                        <GameSideMenu title={title} onInfoClick={ShowGameDescription} />
                    </div>
                </div>
            </div>;
        
        if (mediaQueryList.matches) {
            return (
                <Reveal>
                    <GameItemReveal>
                        {element}
                    </GameItemReveal>
                </Reveal>
            )
        }
        
        return element;
    }
    
    return GetElement()
}

export default GameItem;