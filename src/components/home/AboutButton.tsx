import {ShowAboutDescription, ShowHomeDescription} from './Home';
import {useTranslation} from 'react-i18next';
import React, {useState} from 'react';
import {motion} from "framer-motion";
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
            <motion.button
                type="submit"
                onClick={HandleAboutButtonClick}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ ease: "linear", duration: 0.2 }}>
                {t(selectedText)}
            </motion.button>
        </div>
    )
}

export default AboutButton;