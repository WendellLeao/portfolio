import GameItem from "./GameItem";
import imageUrl from '../images/arrow-image.png';
import gifUrl from '../gifs/arrow.gif';

const Origens = () => {
    const arrowUrl: string = "https://wendell-leao.itch.io/arrow-is-cool-in-the-cemetery-skull";
    const arrowVideoUrl: string = "videos/arrow.mp4";

    return (
        <GameItem id="arrow" title="Arrow is Cool in the Cemetery Skull" synopses="arrowSynopsis" description="arrowDescription" store="itch"
                  side="left" url={arrowUrl} videoUrl={arrowVideoUrl} imageUrl={imageUrl} gifUrl={gifUrl} />
    )
}

export default Origens;