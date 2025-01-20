import GameItem from "./GameItem";

const HorrorGameItem = () => {
    const horrorUrl: string = "";
    const horrorVideoUrl: string = "videos/horror.webm";

    return (
        <GameItem id="horror" title="Where Are You?" synopses="horrorSynopsis" description="horrorDescription" store="steam"
                  side="left" url={horrorUrl} videoUrl={horrorVideoUrl} />
    )
}

export default HorrorGameItem;