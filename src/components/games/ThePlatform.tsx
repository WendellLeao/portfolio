import GameItem from "./GameItem";

const ThePlatformItem = () => {
    const url: string = "https://store.steampowered.com/app/2333280/The_Platform/";
    const videoUrl: string = "videos/the-platform.webm";

    return (
        <GameItem id="thePlatform" title="The Platform" synopses="thePlatformSynopsis" description="thePlatformDescription" store="steam"
                  side="left" url={url} videoUrl={videoUrl} />
    )
}

export default ThePlatformItem;
