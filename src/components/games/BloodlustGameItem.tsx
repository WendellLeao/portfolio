import GameItem from "./GameItem";
import imageUrl from '../../images/bloodlust-image.png';
import gifUrl from '../../gifs/bloodlust.gif';

const BloodlustGameItem = () => {
    const bloodlustUrl: string = "https://alyson-morais.itch.io/bloodlust";
    const bloodlustVideoUrl: string = "videos/bloodlust.mp4";
    
    return (
        <GameItem id="bloodlust" title="Bloodlust" synopses="bloodlustSynopsis" description="bloodlustDescription" store="itch"
                  side="right" url={bloodlustUrl} videoUrl={bloodlustVideoUrl} imageUrl={imageUrl} gifUrl={gifUrl} />
    )
}

export default BloodlustGameItem;