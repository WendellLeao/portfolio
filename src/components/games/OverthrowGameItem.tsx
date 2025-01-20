import GameItem from "./GameItem";

const OverthrowGameItem = () => {
    const overthrowUrl: string = "https://wendell-leao.itch.io/overthrow-2";
    const overthrowVideoUrl: string = "videos/overthrow.webm";
    
    return (
        <GameItem id="overthrow" title="Overthrow 2" synopses="overthrowSynopsis" description="overthrowDescription" store="itch"
                  side="right" url={overthrowUrl} videoUrl={overthrowVideoUrl} />
    )
}

export default OverthrowGameItem;