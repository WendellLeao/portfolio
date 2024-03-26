import GameItem from "./GameItem";
import fruitsImageUrl from '../images/fruits-image.png';

const FruitsGameItem = () => {
    const fruitsUrl: string = "https://wendell-leao.itch.io/fruits";
    const fruitsVideoUrl: string = "https://dai.ly/k3Ff2MbWiQbA1BAk9F8";
    
    return (
        <GameItem id="fruits" title="Fruits" synopses="fruitsSynopsis" description="fruitsDescription" store="itch"
                  side="right" url={fruitsUrl} videoUrl={fruitsVideoUrl} imageUrl={fruitsImageUrl} />
    )
}

export default FruitsGameItem;