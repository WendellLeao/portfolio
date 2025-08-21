import {ShowAboutDescription, ShowHomeDescription} from './Home';
import {useTranslation} from 'react-i18next';
import React, {useState} from 'react';
import {motion} from "framer-motion";
import { trackAboutButtonClick } from "../../analytics";
import './AboutButton.css';

const AboutButton = () => {
    const { t, i18n } = useTranslation();

    const [selectedText, SetSelectedText] = useState("aboutButtonText");
    
    function HandleAboutButtonClick() : void {
        const homeDescription : HTMLElement | null = document.getElementById("homeDescription");

        if(homeDescription) {
            if(homeDescription.style.display === "none") {
                ShowHomeDescription();
                SetSelectedText("aboutButtonText");
                return;
            }
    
            ShowAboutDescription();
            SetSelectedText("backButtonText");
            
            trackAboutButtonClick("home", i18n.language);
        }
    }
    
    return (
        <div className="aboutButton">
            <motion.button
                type="submit"
                onClick={HandleAboutButtonClick}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0 }}
                transition={{ ease: "easeOut", duration: 0.15 }}>
                {t(selectedText)}
            </motion.button>
        </div>
    )
}

export default AboutButton;
