import GameItem from "./GameItem";
import imageUrl from '../../images/fruits-image.png';

const FruitsGameItem = () => {
    const fruitsUrl: string = "https://wendell-leao.itch.io/fruits";
    const fruitsVideoUrl: string = "videos/fruits.webm";
    
    return (
        <GameItem id="fruits" title="Fruits" synopses="fruitsSynopsis" description="fruitsDescription" store="itch"
                  side="right" url={fruitsUrl} videoUrl={fruitsVideoUrl} imageUrl={imageUrl} />
    )
}

export default FruitsGameItem;