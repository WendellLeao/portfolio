import {useEffect} from "react";
import {useTranslation} from 'react-i18next';
import usaImage from '../images/usa.png';
import brazilImage from '../images/brazil.png';
import './LanguagesSelector.css';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        HandleButtonActive(i18n.language);
    }, []);
    
    function HandleClick(language: string): void {
        i18n.changeLanguage(language);

        HandleButtonActive(language);
    }

    function HandleButtonActive(language: string) : void {
        const languages : Element | null = document.querySelector(".languages");

        if(languages){
            const activeLanguage : Element | null = languages.querySelector(".active");

            if(activeLanguage){
                activeLanguage.classList.remove("active");
            }
        }

        SetCurrentLanguageButtonActive(language);
    }
    
    function SetCurrentLanguageButtonActive(language: string) : void {
        const languageButtons : NodeListOf<Element> = document.querySelectorAll(".languages a");

        languageButtons.forEach(el => {
            if(el.id === language){
                el.classList.add("active");
            }
        })
    }
    
    return (
        <div className="languages">
            <a id="en" onClick={() => HandleClick("en")}>
                <img src={usaImage} alt="usa icon"></img>
            </a>
            <a id="pt" onClick={() => HandleClick("pt")}>
                <img src={brazilImage} alt="brazil icon"></img>
            </a>
        </div>
    )
}

export default LanguageSelector;