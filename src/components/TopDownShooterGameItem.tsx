import GameItem from "./GameItem";
import topDownShooterImageUrl from '../images/top-down-shooter-image.png';

const TopDownShooterGameItem = () => {
    const topDownShooterUrl: string = "";
    const topDownShooterVideoUrl: string = "videos/top-down-shooter.mp4";
    
    return (
        <GameItem id="topDownShooter" title="Top Down Shooter" synopses="topDownShooterSynopsis" description="topDownShooterDescription" store="itch"
                  side="right" url={topDownShooterUrl} videoUrl={topDownShooterVideoUrl} imageUrl={topDownShooterImageUrl} />
    )
}

export default TopDownShooterGameItem;