import ReactPlayer from "react-player/dailymotion";
import './GameVideo.css';

interface Props {
    videoUrl: string;
    onStart: () => void;
}

const GameVideo = ({ videoUrl, onStart }: Props) => {
    return (
        <div className="playerWrapper">
            <ReactPlayer
                className="reactPlayer"
                url={videoUrl}
                width="100%"
                height="100%"
                playing={false}
                muted={true}
                loop={true}
                controls={false}
                playsinline={true}
                fallback={<h1>Loading...</h1>}
                config={{
                    params: { related: 0 }
                }}
                onStart={onStart}
            />
        </div>
    );
}

export default GameVideo;