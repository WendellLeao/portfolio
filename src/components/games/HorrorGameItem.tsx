import GameItem from "./GameItem";
import imageUrl from '../../images/horror-image.png';
import gifUrl from '../../gifs/horror.gif';

const HorrorGameItem = () => {
    const horrorUrl: string = "";
    const horrorVideoUrl: string = "videos/horror.mp4";

    return (
        <GameItem id="horror" title="Where Are You?" synopses="horrorSynopsis" description="horrorDescription" store="steam"
                  side="right" url={horrorUrl} videoUrl={horrorVideoUrl} imageUrl={imageUrl} gifUrl={gifUrl} />
    )
}

export default HorrorGameItem;