import GameItem from "./GameItem";

const OrigensGameItem = () => {
    const origensUrl: string = "https://wendell-leao.itch.io/origens";
    const origensVideoUrl: string = "videos/origens.webm";
    
    return (
        <GameItem id="origens" title="Origens" synopses="origensSynopsis" description="origensDescription" store="itch"
                  side="left" url={origensUrl} videoUrl={origensVideoUrl} />
    )
}

export default OrigensGameItem;