import GameItem from "./GameItem";
import funkinFighterImageUrl from '../images/funkin-fighter-image.png';

const FunkinFighterGameItem = () => {
    const funkinFighterUrl: string = "";
    const funkinFighterVideoUrl: string = "https://dai.ly/k2JL8SvGjEqiKOAk9F2";
    
    return (
        <GameItem id="funkinFighter" title="Funkin' Fighter" synopses="funkinFighterSynopsis" description="funkinFighterDescription" store="itch"
                  side="right" url={funkinFighterUrl} videoUrl={funkinFighterVideoUrl} imageUrl={funkinFighterImageUrl} />
    )
}

export default FunkinFighterGameItem;