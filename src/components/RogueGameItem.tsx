import GameItem from "./GameItem";
import rogueImageUrl from '../images/rogue-image.png';

const RogueGameItem = () => {
    const rogueUrl: string = "https://store.steampowered.com/app/1063590/Rogue_Masters";
    const rogueVideoUrl: string = "https://dai.ly/k6TruWYDU5CG9JAk9Fg";
    
    return (
        <GameItem id="rogue" title="Rogue Masters" synopses="rogueSynopsis" description="rogueDescription" store="steam"
                  side="right" url={rogueUrl} videoUrl={rogueVideoUrl} imageUrl={rogueImageUrl} />
    )
}

export default RogueGameItem;