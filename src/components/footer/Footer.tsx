import {useTranslation} from 'react-i18next';
import {ShowHomeDescription} from '../home/Home';
import {Reveal} from "../Reveal";
import FooterContacts from './FooterContacts';
import Line from '../Line';
import UpwardArrows from "./UpwardArrows";
import './Footer.css';

const Footer = () => {
    const { t, i18n } = useTranslation();
    
    function HandleButtonClick() : void {
        window.location.href='#top';
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
            <FooterContacts />
            <UpwardArrows />
            <Line />
        </footer>
    )
}

export default Footer;