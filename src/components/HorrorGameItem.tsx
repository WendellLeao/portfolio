import GameItem from "./GameItem";
import horrorImageUrl from '/images/horror-image.png';

const HorrorGameItem = () => {
    const horrorUrl: string = "";
    const horrorVideoUrl: string = "https://dai.ly/k6reVdC5CfvckUAk9Fa";

    return (
        <GameItem id="horror" title="Where Are You?" synopses="horrorSynopsis" description="horrorDescription" store="steam"
                  side="left" url={horrorUrl} videoUrl={horrorVideoUrl} imageUrl={horrorImageUrl} />
    )
}

export default HorrorGameItem;