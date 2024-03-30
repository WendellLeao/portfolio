import {RefObject, useRef, useState} from 'react';
import GameVideo from './GameVideo';
import GameDescription from './GameDescription';
import GameSideMenu from './GameSideMenu';
import useOnScreen from "./Utils";
import './GameItem.css';

interface Props {
    id: string;
    title: string;
    synopses: string;
    description: string;
    store: "steam" | "itch";
    url?: string;
    videoUrl: string;
    imageUrl: string;
    gifUrl: string;
    side: "right" | "left";
    shadow?: "top" | "bottom"
}

const GameItem = ({id, title, synopses, description, store = "itch", url = "", videoUrl, gifUrl, imageUrl, side, shadow}: Props) => {
    const [videoHasStarted, SetVideoHasStarted] = useState(false);
    
    const mediaRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const gameImageRef : RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null)

    const mediaIsVisible : boolean = useOnScreen(mediaRef)
    
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
        const imageElement : JSX.Element = <img ref={gameImageRef} src={imageUrl} alt="game image" />;
        
        if (!mediaQueryList.matches) {
            return <></>
        }

        SetDisplay(gameImageRef.current, !videoHasStarted ? "flex" : "none")
        
        if (mediaIsVisible || videoHasStarted) {
            return (
                <div className="videoContainer">
                    {imageElement}
                    <GameVideo videoUrl={videoUrl} onStart={() => SetVideoHasStarted(true)} />
                </div>
            )
        }

        return imageElement;
    }

    function GetClassName() : string {
        let className : string = "gamesItem " + id + " ";

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
    
    return (
        <div className={GetClassName()}>
            <div ref={mediaRef} className="mediaContainer">
                <img className="gameGif" src={gifUrl} alt="game gif" />
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
    )
}

export default GameItem;