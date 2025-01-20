import GameItem from "./GameItem";

const BloodlustGameItem = () => {
    const bloodlustUrl: string = "https://alyson-morais.itch.io/bloodlust";
    const bloodlustVideoUrl: string = "videos/bloodlust.webm";
    
    return (
        <GameItem id="bloodlust" title="Bloodlust" synopses="bloodlustSynopsis" description="bloodlustDescription" store="itch"
                  side="left" url={bloodlustUrl} videoUrl={bloodlustVideoUrl} />
    )
}

export default BloodlustGameItem;