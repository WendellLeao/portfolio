import GameItem from "./GameItem";
import imageUrl from '../../images/arrow-image.png';

const Origens = () => {
    const arrowUrl: string = "https://wendell-leao.itch.io/arrow-is-cool-in-the-cemetery-skull";
    const arrowVideoUrl: string = "videos/arrow.webm";

    return (
        <GameItem id="arrow" title="Arrow is Cool in the Cemetery Skull" synopses="arrowSynopsis" description="arrowDescription" store="itch"
                  side="left" url={arrowUrl} videoUrl={arrowVideoUrl} imageUrl={imageUrl} />
    )
}

export default Origens;