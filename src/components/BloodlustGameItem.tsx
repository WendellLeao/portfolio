import GameItem from "./GameItem";
import bloodlustImageUrl from '../images/bloodlust-image.png';

const BloodlustGameItem = () => {
    const bloodlustUrl: string = "https://alyson-morais.itch.io/bloodlust";
    const bloodlustVideoUrl: string = "videos/bloodlust.mp4";
    
    return (
        <GameItem id="bloodlust" title="Bloodlust" synopses="bloodlustSynopsis" description="bloodlustDescription" store="itch"
                  side="left" url={bloodlustUrl} videoUrl={bloodlustVideoUrl} imageUrl={bloodlustImageUrl} />
    )
}

export default BloodlustGameItem;