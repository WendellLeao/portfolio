import GameItem from "./GameItem";
import imageUrl from '../../images/jump-up-image.png';

const JumpGameItem = () => {
    const jumpUrl: string = "https://wendell-leao.itch.io/jump-up-2";
    const jumpVideoUrl: string = "videos/jump-up-2.webm";
    
    return (
        <GameItem id="jump" title="Jump Up 2" synopses="jumpSynopsis" description="jumpDescription" store="itch"
                  side="right" url={jumpUrl} videoUrl={jumpVideoUrl} imageUrl={imageUrl} />
    )
}

export default JumpGameItem;