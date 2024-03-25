import infoIcon from '/images/info-icon.png';
import './GameSideMenu.css';

interface Props {
    title: string;
    onInfoClick: () => void;
}

const GameSideMenu = ({ title, onInfoClick }: Props) => {
    return (
        <div className="gameSideMenuContainer">
            <h1>
                {title}
            </h1>
            <a onClick={onInfoClick} target="_blank" rel="noopener noreferrer">
                <img src={infoIcon} alt="information icon"></img>
            </a>
        </div>
    )
}

export default GameSideMenu;