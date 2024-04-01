import GameItem from "./GameItem";
import imageUrl from '../../images/overthrow-image.png';
import gifUrl from '../../gifs/overthrow.gif';

const OverthrowGameItem = () => {
    const overthrowUrl: string = "https://wendell-leao.itch.io/overthrow-2";
    const overthrowVideoUrl: string = "videos/overthrow.mp4";
    
    return (
        <GameItem id="overthrow" title="Overthrow 2" synopses="overthrowSynopsis" description="overthrowDescription" store="itch"
                  side="left" url={overthrowUrl} videoUrl={overthrowVideoUrl} imageUrl={imageUrl} gifUrl={gifUrl} />
    )
}

export default OverthrowGameItem;