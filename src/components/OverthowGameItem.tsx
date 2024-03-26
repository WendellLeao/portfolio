import GameItem from "./GameItem";
import overthrowImageUrl from '../images/overthrow-image.png';

const OverthowGameItem = () => {
    const overthrowUrl: string = "https://wendell-leao.itch.io/overthrow-2";
    const overthrowVideoUrl: string = "https://dai.ly/k38JKVhPcAt9OyAk9Fe";
    
    return (
        <GameItem id="overthrow" title="Overthrow 2" synopses="overthrowSynopsis" description="overthrowDescription" store="itch"
                  side="left" url={overthrowUrl} videoUrl={overthrowVideoUrl} imageUrl={overthrowImageUrl} />
    )
}

export default OverthowGameItem;