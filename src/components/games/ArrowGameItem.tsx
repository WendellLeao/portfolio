import GameItem from "./GameItem";

const Origens = () => {
    const arrowUrl: string = "https://wendell-leao.itch.io/arrow-is-cool-in-the-cemetery-skull";
    const arrowVideoUrl: string = "videos/arrow.webm";

    return (
        <GameItem id="arrow" title="Arrow is Cool in the Cemetery Skull" synopses="arrowSynopsis" description="arrowDescription" store="itch"
                  side="right" url={arrowUrl} videoUrl={arrowVideoUrl} />
    )
}

export default Origens;