import GameItem from "./GameItem";

const FunkinFighterGameItem = () => {
    const funkinFighterUrl: string = "";
    const funkinFighterVideoUrl: string = "videos/funkin-fighter.webm";
    
    return (
        <GameItem id="funkinFighter" title="Funkin' Fighter" synopses="funkinFighterSynopsis" description="funkinFighterDescription" store="itch"
                  side="right" url={funkinFighterUrl} videoUrl={funkinFighterVideoUrl} />
    )
}

export default FunkinFighterGameItem;