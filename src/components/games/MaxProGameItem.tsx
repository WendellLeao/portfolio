import GameItem from "./GameItem";

const MaxProGameItem = () => {
    const storeUrl: string = "https://play.google.com/store/apps/details?id=com.MaxProFitness.GamesByMaxPro";
    const videoUrl: string = "videos/max-pro.webm";

    return (
        <GameItem id="maxPro" title="Games By MaxPro" synopses="maxProSynopsis" description="maxProDescription" store="google-play"
                  side="right" url={storeUrl} videoUrl={videoUrl} />
    )
}

export default MaxProGameItem;
