import GameItem from "./GameItem";

const UniqKillerGameItem = () => {
    const uniqKillerUrl: string = "https://play.google.com/store/apps/details?id=com.HypeJoeGames.UniqKiller";
    const uniqKillerVideoUrl: string = "videos/uniq-killer.webm";

    return (
        <GameItem id="uniqKiller" title="Uniqkiller" synopses="uniqKillerSynopsis" description="uniqKillerDescription" store="google-play"
                  side="left" url={uniqKillerUrl} videoUrl={uniqKillerVideoUrl} />
    )
}

export default UniqKillerGameItem;
