import GameItem from "./GameItem";
import imageUrl from '../../images/funkin-fighter-image.png';

const FunkinFighterGameItem = () => {
    const funkinFighterUrl: string = "";
    const funkinFighterVideoUrl: string = "videos/funkin-fighter.webm";
    
    return (
        <GameItem id="funkinFighter" title="Funkin' Fighter" synopses="funkinFighterSynopsis" description="funkinFighterDescription" store="itch"
                  side="right" url={funkinFighterUrl} videoUrl={funkinFighterVideoUrl} imageUrl={imageUrl} />
    )
}

export default FunkinFighterGameItem;