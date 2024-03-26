import GameItem from "./GameItem";
import imageUrl from '../images/origens-image.png';
import gifUrl from '../gifs/origens.gif';

const OrigensGameItem = () => {
    const origensUrl: string = "https://wendell-leao.itch.io/origens";
    const origensVideoUrl: string = "videos/origens.mp4";
    
    return (
        <GameItem id="origens" title="Origens" synopses="origensSynopsis" description="origensDescription" store="itch"
                  side="right" url={origensUrl} videoUrl={origensVideoUrl} imageUrl={imageUrl} gifUrl={gifUrl} />
    )
}

export default OrigensGameItem;