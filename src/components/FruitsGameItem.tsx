import GameItem from "./GameItem";
import imageUrl from '../images/fruits-image.png';
import gifUrl from '../gifs/fruits.gif';

const FruitsGameItem = () => {
    const fruitsUrl: string = "https://wendell-leao.itch.io/fruits";
    const fruitsVideoUrl: string = "videos/fruits.mp4";
    
    return (
        <GameItem id="fruits" title="Fruits" synopses="fruitsSynopsis" description="fruitsDescription" store="itch"
                  side="right" url={fruitsUrl} videoUrl={fruitsVideoUrl} imageUrl={imageUrl} gifUrl={gifUrl} />
    )
}

export default FruitsGameItem;