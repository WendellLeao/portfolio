import GameItem from "./GameItem";
import rogueImageUrl from '../images/rogue-image.png';

const RogueGameItem = () => {
    const rogueUrl: string = "https://store.steampowered.com/app/1063590/Rogue_Masters";
    const rogueVideoUrl: string = "videos/rogue.mp4";
    
    return (
        <GameItem id="rogue" title="Rogue Masters" synopses="rogueSynopsis" description="rogueDescription" store="steam"
                  side="right" url={rogueUrl} videoUrl={rogueVideoUrl} imageUrl={rogueImageUrl} />
    )
}

export default RogueGameItem;