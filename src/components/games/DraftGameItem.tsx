import GameItem from "./GameItem";

const DraftGameItem = () => {
    const draftFeverUrl: string = "https://store.steampowered.com/app/3100820/Draft_Fever_Bowl/";
    const draftFeverVideoUrl: string = "videos/draft-fever.webm";

    return (
        <GameItem id="draftFever" title="Draft Fever Bowl" synopses="draftFeverSynopsis" description="draftFeverDescription" store="steam"
                  side="right" url={draftFeverUrl} videoUrl={draftFeverVideoUrl} />
    )
}

export default DraftGameItem;