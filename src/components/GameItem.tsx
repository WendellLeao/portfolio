import GameVideo from './GameVideo';
import GameDescription from './GameDescription';
import GameSideMenu from './GameSideMenu';
import {RefObject, useRef, useState} from 'react';
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
    side: "right" | "left";
    shadow?: "top" | "bottom"
}

const GameItem = ({id, title, synopses, description, store = "itch", url = "", videoUrl, imageUrl, side, shadow}: Props) => {
    const gameDescriptionRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null); 
    const gameSideMenuRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const mediaQueryList : MediaQueryList = window.matchMedia("(min-width: 45em)");

    mediaQueryList.addEventListener("change", function() : void {
        if(mediaQueryList.matches){
            ShowGameDescription();
        }
        else{
            ShowGameSideMenu();
        }
    });
    
    function GetClassName() : string {
        let className : string = "gamesItem " + id + " ";
        
        if(shadow){
            className += shadow + "Shadow";
        }
        
        return className;
    }
    
    function ShowGameDescription() : void {
        if(gameDescriptionRef.current){
            gameDescriptionRef.current.style.display = "flex";
        }
        
        if(gameSideMenuRef.current){
            gameSideMenuRef.current.style.display = "none";
        }
    }
    
    function ShowGameSideMenu() : void {
        if(gameSideMenuRef.current){
            gameSideMenuRef.current.style.display = "flex";
        }

        if(gameDescriptionRef.current){
            gameDescriptionRef.current.style.display = "none";
        }
    }

    const gameImageRef: RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);
    
    function HandleStart() : void {
        if (gameImageRef.current) {
            gameImageRef.current.style.display = "none";
        }
    }

    return (
        <div className={GetClassName()}>
            <div className="mediaContainer">
                <img ref={gameImageRef} src={imageUrl} alt="game image" />
                {/*<GameVideo videoUrl={videoUrl} onStart={HandleStart} />*/}
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