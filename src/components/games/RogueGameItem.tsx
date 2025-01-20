import GameItem from "./GameItem";

const RogueGameItem = () => {
    const rogueUrl: string = "https://store.steampowered.com/app/1063590/Rogue_Masters";
    const rogueVideoUrl: string = "videos/rogue.webm";
    
    return (
        <GameItem id="rogue" title="Rogue Masters" synopses="rogueSynopsis" description="rogueDescription" store="steam"
                  side="left" url={rogueUrl} videoUrl={rogueVideoUrl} />
    )
}

export default RogueGameItem;