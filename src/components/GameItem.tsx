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
    const mediaRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const gameImageRef: RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);

    const mediaIsVisible : boolean = useOnScreen(mediaRef)
    
    const gameDescriptionRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null); 
    const gameSideMenuRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const mediaQueryList : MediaQueryList = window.matchMedia("(min-width: 45em)");

    const [mediaQuery, SetMediaQuery] = useState(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", function() : void {
        if (mediaQueryList.matches) {
            ShowGameDescription();
        }
        else {
            ShowGameSideMenu();
        }
        
        SetMediaQuery(mediaQueryList.matches);
    });

    function HandleVideoStarted() : void {
        SetDisplay(gameImageRef.current, "none")
    }
    
    function ShowGameDescription() : void {
        SetDisplay(gameDescriptionRef.current, "flex")
        SetDisplay(gameSideMenuRef.current, "none")
    }
    
    function ShowGameSideMenu() : void {
        SetDisplay(gameSideMenuRef.current, "flex")
        SetDisplay(gameDescriptionRef.current, "none")
    }

    function GetMediaElement() : JSX.Element {
        const gameImage : JSX.Element = <img ref={gameImageRef} src={mediaQuery ? imageUrl : gifUrl} alt="game image" />;

        if (mediaQuery && mediaRef.current && mediaIsVisible) {
            return (
                <>
                    {gameImage}
                    <GameVideo videoUrl={videoUrl} onStart={HandleVideoStarted} />
                </>
            )
        }

        SetDisplay(gameImageRef.current, "flex")
        return gameImage;
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
                {GetMediaElement()}
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