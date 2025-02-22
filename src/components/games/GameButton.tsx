import ReactGA from "react-ga4";
import GameButtonDisabled from './GameButtonDisabled';
import steamImage from '../../images/steam.webp';
import googlePlayImage from '../../images/googleplay.webp';
import itchImage from '../../images/itchio.webp';
import './GameButton.css';

interface Props{
    name: string;
    store: string;
    url: string;
}

const GameButton = ({name, store, url}: Props) => {
    function GetGameButton() : JSX.Element {
        if(url !== ""){
            return (
                <div className="buttonContainer">
                    <a href={url} onClick={handleClick} target="_blank" rel="noopener noreferrer">
                        <img className={GetStoreImgClass(store)} src={GetStoreImage(store)} alt="store icon"></img>
                    </a>
                </div>
            )
        }

        return <GameButtonDisabled />
    }
    
    function GetStoreImgClass(store: string) : string {
        if (store === "steam"){
            return "steamLogo";
        }

        if (store === "google-play"){
            return "playStore";
        }

        return "itchLogo"
    }

    function GetStoreImage(store: string) : string {
        if (store === "steam"){
            return steamImage;
        }

        if (store === "google-play"){
            return googlePlayImage;
        }

        return itchImage;
    }

    const handleClick = () => {

        const lowerCaseName: string = (name ?? "").toLowerCase();
        const fixedName: string = lowerCaseName.replace(/\s+/g, "_");

        ReactGA.event({
            category: "user",
            action: fixedName,
            label: "game_button",
        });
    };
    
    return (
        <div>{GetGameButton()}</div>
    )
}

export default GameButton;