import GameItem from "./GameItem";
import bloodlustImageUrl from '../images/bloodlust-image.png';

const BloodlustGameItem = () => {
    const bloodlustUrl: string = "https://alyson-morais.itch.io/bloodlust";
    const bloodlustVideoUrl: string = "https://dai.ly/k7hHwRxmkXeQejAk9F6";
    
    return (
        <GameItem id="bloodlust" title="Bloodlust" synopses="bloodlustSynopsis" description="bloodlustDescription" store="itch"
                  side="left" url={bloodlustUrl} videoUrl={bloodlustVideoUrl} imageUrl={bloodlustImageUrl} />
    )
}

export default BloodlustGameItem;