import './GameVideo.css';

interface Props {
    videoUrl: string;
    onPlay: () => void;
}

const GameVideo = ({ videoUrl, onPlay }: Props) => {
    return (
        <video
            className="gameVideo"
            controls={false}
            autoPlay={true}
            muted={true}
            loop={true}
            onPlay={onPlay}>
            <source src={videoUrl} type="video/mp4"/>
        </video>
    )
}

export default GameVideo;