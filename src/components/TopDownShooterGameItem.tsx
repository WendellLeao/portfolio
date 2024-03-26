import GameItem from "./GameItem";
import imageUrl from '../images/top-down-shooter-image.png';
import gifUrl from '../gifs/top-down-shooter.gif';

const TopDownShooterGameItem = () => {
    const topDownShooterUrl: string = "";
    const topDownShooterVideoUrl: string = "videos/top-down-shooter.mp4";
    
    return (
        <GameItem id="topDownShooter" title="Top Down Shooter" synopses="topDownShooterSynopsis" description="topDownShooterDescription" store="itch"
                  side="right" url={topDownShooterUrl} videoUrl={topDownShooterVideoUrl} imageUrl={imageUrl} gifUrl={gifUrl} />
    )
}

export default TopDownShooterGameItem;