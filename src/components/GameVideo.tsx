import ReactPlayer from "react-player";
import './GameVideo.css';

interface Props {
    videoUrl: string;
    onStart: () => void;
}

const GameVideo = ({ videoUrl, onStart }: Props) => {
    return (
        <ReactPlayer
            className="reactPlayer"
            url={videoUrl}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            loop={true}
            controls={false}
            onStart={onStart}
        />
    )
}

export default GameVideo;