import GameItem from "./GameItem";
import imageUrl from '../../images/top-down-shooter-image.png';

const TopDownShooterGameItem = () => {
    const topDownShooterUrl: string = "";
    const topDownShooterVideoUrl: string = "videos/top-down-shooter.webm";
    
    return (
        <GameItem id="topDownShooter" title="Roguelike Shooter" synopses="topDownShooterSynopsis" description="topDownShooterDescription" store="itch"
                  side="left" url={topDownShooterUrl} videoUrl={topDownShooterVideoUrl} imageUrl={imageUrl} />
    )
}

export default TopDownShooterGameItem;