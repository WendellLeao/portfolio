import GameItem from "./GameItem";
import imageUrl from '../../images/horror-image.png';

const HorrorGameItem = () => {
    const horrorUrl: string = "";
    const horrorVideoUrl: string = "videos/horror.webm";

    return (
        <GameItem id="horror" title="Where Are You?" synopses="horrorSynopsis" description="horrorDescription" store="steam"
                  side="left" url={horrorUrl} videoUrl={horrorVideoUrl} imageUrl={imageUrl} />
    )
}

export default HorrorGameItem;