import GameButtonDisabled from './GameButtonDisabled';
import itchImage from '../images/itchio.png';
import steamImage from '../images/steam.png';
import './GameButton.css';

interface Props{
    store: string;
    url: string;
}

const GameButton = ({store, url}: Props) => {
    function GetGameButton() : JSX.Element {
        if(url !== ""){
            return (
                <div className="buttonContainer">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img className={GetStoreImgClass(store)} src={GetStoreImage(store)} alt="store icon"></img>
                    </a>
                </div>
            )
        }

        return <GameButtonDisabled />
    }
    
    function GetStoreImgClass(store: string) : string {
        return store === "itch" ? "itchLogo" : "steamLogo";
    }

    function GetStoreImage(store: string) : string {
        return store === "itch" ? itchImage : steamImage;
    }
    
    return (
        <div>{GetGameButton()}</div>
    )
}

export default GameButton;