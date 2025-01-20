import GameItem from "./GameItem";

const AmazonGameItem = () => {
    const amazonUrl: string = "https://play.google.com/store/apps/details?id=com.Triplano.GuerreirosDaAmazonia&hl=en";
    const amazonVideoUrl: string = "videos/amazon-warriors.webm";

    return (
        <GameItem id="amazonWarriors" title="Amazon Warriors" synopses="amazonSynopsis" description="amazonDescription" store="google-play"
                  side="right" url={amazonUrl} videoUrl={amazonVideoUrl} />
    )
}

export default AmazonGameItem;