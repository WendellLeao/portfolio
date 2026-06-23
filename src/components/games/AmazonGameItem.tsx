import GameItem from "./GameItem";

const AmazonGameItem = () => {
    const amazonUrl: string = "https://apps.apple.com/tr/app/amazon-warriors/id6517349543";
    const amazonVideoUrl: string = "videos/amazon-warriors.webm";

    return (
        <GameItem id="amazonWarriors" title="Amazon Warriors" synopses="amazonSynopsis" description="amazonDescription" store="app-store"
                  side="left" url={amazonUrl} videoUrl={amazonVideoUrl} />
    )
}

export default AmazonGameItem;
