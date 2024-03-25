import {ShowAboutDescription} from './Home';
import {ShowHomeDescription} from './Home';
import {useTranslation} from 'react-i18next';
import React, {useState} from 'react';
import './AboutButton.css';

const AboutButton = () => {
    const { t, i18n } = useTranslation();

    const [selectedText, SetSelectedText] = useState("aboutButtonText");
    
    function HandleAboutButtonClick() : void {
        const homeDescription : HTMLElement | null = document.getElementById("homeDescription");

        if(homeDescription){

            if(homeDescription.style.display === "none") {
                ShowHomeDescription();
                SetSelectedText("aboutButtonText");
                return;
            }
    
            ShowAboutDescription();
            SetSelectedText("backButtonText");
        }
    }
    
    return (
        <div className="aboutButton">
            <button type="submit" onClick={HandleAboutButtonClick}>
                {t(selectedText)}
            </button>
        </div>
    )
}

export default AboutButton;