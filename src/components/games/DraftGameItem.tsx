import GameItem from "./GameItem";
import imageUrl from '../../images/draft-fever-image.png';

const RogueGameItem = () => {
    const rogueUrl: string = "https://store.steampowered.com/app/3100820/Draft_Fever_Bowl/";
    const rogueVideoUrl: string = "videos/draft-fever.webm";

    return (
        <GameItem id="rogue" title="Draft Fever Bowl" synopses="draftFeverSynopsis" description="draftFeverDescription" store="steam"
                  side="right" url={rogueUrl} videoUrl={rogueVideoUrl} imageUrl={imageUrl} />
    )
}

export default RogueGameItem;