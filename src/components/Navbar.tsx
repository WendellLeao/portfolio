import {ShowAboutDescription} from './Home';
import {ShowHomeDescription} from './Home';
import {useTranslation} from 'react-i18next';
import {useState} from 'react';
import menuImage from '../images/menu.png'
import menuActiveImage from '../images/menu-active.png'
import './Navbar.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    
    const [currentMenuImage, SetCurrentMenuImage] = useState(menuImage);
    const [isMenuCollapsed, SetIsMenuCollapsed] = useState(true);
    
    function HandleInput() : void {
        SetIsMenuCollapsed(!isMenuCollapsed);

        isMenuCollapsed ? SetCurrentMenuImage(menuActiveImage) : SetCurrentMenuImage(menuImage);
    }

    function HandleAnchorClick(descriptionToOpen : string) : void {
        if(descriptionToOpen === "home"){
            ShowHomeDescription();
        }
        else if (descriptionToOpen === "about") {
            ShowAboutDescription();
        }

        SetIsMenuCollapsed(false);
        SetCurrentMenuImage(menuImage);
        
        document.getElementById("menuBar")?.click();
    }
    
    return (
        <nav>
            <input id="menuBar" type="checkbox" onInput={() : void => {HandleInput()}}></input>
            <label className="menuBarLabel" htmlFor="menuBar">
                <img src={currentMenuImage} alt="menu button"></img>
            </label>
            <ul className="ulContainer">
                <li>
                    <a href={"#top"} onClick={() : void => {HandleAnchorClick("home")}}>
                        {t("homeNavButton")}
                    </a>
                </li>
                <li>
                    <a href={"#home"} onClick={() : void => {HandleAnchorClick("about")}}>
                        {t("aboutMeNavButton")}
                    </a>
                </li>
                <li>
                    <a href={"#games"} onClick={() : void => {HandleAnchorClick("")}}>
                        {t("gamesNavButton")}
                    </a>
                </li>
                <li>
                    <a href={"#contacts"} onClick={() : void => {HandleAnchorClick("")}}>
                        {t("contactsNavButton")}
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;