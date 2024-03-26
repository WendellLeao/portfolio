import GameItem from "./GameItem";
import topDownShooterImageUrl from '../images/top-down-shooter-image.png';

const TopDownShooterGameItem = () => {
    const topDownShooterUrl: string = "";
    const topDownShooterVideoUrl: string = "https://dai.ly/k2Mf45apgm0g86Ak9Fc";
    
    return (
        <GameItem id="topDownShooter" title="Top Down Shooter" synopses="topDownShooterSynopsis" description="topDownShooterDescription" store="itch"
                  side="right" url={topDownShooterUrl} videoUrl={topDownShooterVideoUrl} imageUrl={topDownShooterImageUrl} />
    )
}

export default TopDownShooterGameItem;