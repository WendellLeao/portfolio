import {useEffect} from "react";
import {useTranslation} from 'react-i18next';
import usaImage from '../../images/usa.webp';
import brazilImage from '../../images/brazil.webp';
import './LanguagesSelector.css';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    const englishId : string = "en-US";
    const portugueseId : string = "pt-BR";
    
    useEffect(() : void => {
        HandleButtonActive(i18n.language);
    }, []);
    
    function HandleClick(language: string): void {
        i18n.changeLanguage(language);

        HandleButtonActive(language);
    }

    function HandleButtonActive(language: string) : void {
        const languages : Element | null = document.querySelector(".languages");

        if (languages) {
            const activeLanguage : Element | null = languages.querySelector(".active");

            if (activeLanguage) {
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
            <a id={englishId} onClick={() => HandleClick(englishId)}>
                <img src={usaImage} alt="usa icon"></img>
            </a>
            <a id={portugueseId} onClick={() => HandleClick(portugueseId)}>
                <img src={brazilImage} alt="brazil icon"></img>
            </a>
        </div>
    )
}

export default LanguageSelector;