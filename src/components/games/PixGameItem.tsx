import GameItem from "./GameItem";

const PixGameItem = () => {
    const pixUrl: string = "https://store.steampowered.com/app/4195140/PIX_Football_Manager/";
    const pixVideoUrl: string = "videos/pix.webm";

    return (
        <GameItem id="pix" title="PIX Football Manager" synopses="pixSynopsis" description="pixDescription" store="steam"
                  side="right" url={pixUrl} videoUrl={pixVideoUrl} />
    )
}

export default PixGameItem;
