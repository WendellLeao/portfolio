import GameItem from "./GameItem";
import imageUrl from '../../images/jump-up-image.png';
import gifUrl from '../../gifs/jump-up-2.gif';

const JumpGameItem = () => {
    const jumpUrl: string = "https://wendell-leao.itch.io/jump-up-2";
    const jumpVideoUrl: string = "videos/jump-up-2.mp4";
    
    return (
        <GameItem id="jump" title="Jump Up 2" synopses="jumpSynopsis" description="jumpDescription" store="itch"
                  side="left" url={jumpUrl} videoUrl={jumpVideoUrl} imageUrl={imageUrl} gifUrl={gifUrl} />
    )
}

export default JumpGameItem;