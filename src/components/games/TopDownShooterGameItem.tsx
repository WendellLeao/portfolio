import GameItem from "./GameItem";

const TopDownShooterGameItem = () => {
    const topDownShooterUrl: string = "";
    const topDownShooterVideoUrl: string = "videos/top-down-shooter.webm";
    
    return (
        <GameItem id="topDownShooter" title="Roguelike Shooter" synopses="topDownShooterSynopsis" description="topDownShooterDescription" store="itch"
                  side="right" url={topDownShooterUrl} videoUrl={topDownShooterVideoUrl} />
    )
}

export default TopDownShooterGameItem;