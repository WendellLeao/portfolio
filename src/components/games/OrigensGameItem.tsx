import GameItem from "./GameItem";
import imageUrl from '../../images/origens-image.png';

const OrigensGameItem = () => {
    const origensUrl: string = "https://wendell-leao.itch.io/origens";
    const origensVideoUrl: string = "videos/origens.webm";
    
    return (
        <GameItem id="origens" title="Origens" synopses="origensSynopsis" description="origensDescription" store="itch"
                  side="right" url={origensUrl} videoUrl={origensVideoUrl} imageUrl={imageUrl} />
    )
}

export default OrigensGameItem;