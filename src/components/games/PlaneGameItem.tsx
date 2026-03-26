import GameItem from "./GameItem";

const PlaneGameItem = () => {
    const storeUrl: string = "";
    const videoUrl: string = "videos/plane.webm";

    return (
        <GameItem id="plane" title="Plane Game" synopses="planeSynopsis" description="planeDescription" store="steam"
                  side="right" url={storeUrl} videoUrl={videoUrl} />
    )
}

export default PlaneGameItem;
