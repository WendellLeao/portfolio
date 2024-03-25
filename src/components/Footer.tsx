import {useTranslation} from 'react-i18next';
import {ShowHomeDescription} from './Home';
import FooterContacts from './FooterContacts';
import Line from './Line';
import './Footer.css';
import {Reveal} from "./Reveal";

const Footer = () => {
    const { t, i18n } = useTranslation();
    
    function HandleButtonClick() : void {
        location.href='#top';
        ShowHomeDescription();
    }
    
    return (
        <footer id="contacts">
            <Reveal>
                <h1>
                    {t("contactMe")}
                </h1>
            </Reveal>
            <Reveal>
                <p>
                    {t("contactMeDescription")}
                </p>
            </Reveal>
            <Reveal>
                <FooterContacts />
            </Reveal>
            <button onClick={HandleButtonClick}>
                {t("goHomeButtonText")}
            </button>
            <Line />
        </footer>
    )
}

export default Footer;