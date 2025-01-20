import GameItem from "./GameItem";

const FruitsGameItem = () => {
    const fruitsUrl: string = "https://wendell-leao.itch.io/fruits";
    const fruitsVideoUrl: string = "videos/fruits.webm";
    
    return (
        <GameItem id="fruits" title="Fruits" synopses="fruitsSynopsis" description="fruitsDescription" store="itch"
                  side="left" url={fruitsUrl} videoUrl={fruitsVideoUrl} />
    )
}

export default FruitsGameItem;