import GameItem from "./GameItem";
import imageUrl from '../images/funkin-fighter-image.png';
import gifUrl from '../gifs/funkin-fighter.gif';

const FunkinFighterGameItem = () => {
    const funkinFighterUrl: string = "";
    const funkinFighterVideoUrl: string = "videos/funkin-fighter.mp4";
    
    return (
        <GameItem id="funkinFighter" title="Funkin' Fighter" synopses="funkinFighterSynopsis" description="funkinFighterDescription" store="itch"
                  side="right" url={funkinFighterUrl} videoUrl={funkinFighterVideoUrl} imageUrl={imageUrl} gifUrl={gifUrl} />
    )
}

export default FunkinFighterGameItem;