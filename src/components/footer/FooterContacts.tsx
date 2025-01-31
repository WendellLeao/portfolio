import {useTranslation} from 'react-i18next';
import {OpenResumeFile} from '../Contacts';
import FooterContactsReveal from "./FooterContactsReveal";
import ContactImage from "../ContactImage";
import githubIcon from '../../images/github.webp';
import linkedinIcon from '../../images/linkedin.webp';
import resumeIcon from '../../images/resume.webp';
import youtubeIcon from '../../images/youtube.webp';
import './FooterContacts.css';

const FooterContacts = () => {
    const { t, i18n } = useTranslation();
    
    function HandleResumeButtonClick() : void {
        OpenResumeFile(i18n.language);
    }
    
    return (
        <ul>
            <li>
                <a href="https://github.com/WendellLeao" target="_blank" rel="noopener noreferrer">
                    <FooterContactsReveal delay={0.35}>
                        <ContactImage url={githubIcon} alt="github icon" />
                    </FooterContactsReveal>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/wendell-leao/" target="_blank" rel="noopener noreferrer">
                    <FooterContactsReveal delay={0.45}>
                        <ContactImage url={linkedinIcon} alt="linkedin icon" />
                    </FooterContactsReveal>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@wendell-leao" target="_blank" rel="noopener noreferrer">
                    <FooterContactsReveal delay={0.65}>
                        <ContactImage url={youtubeIcon} alt="youtube icon" />
                    </FooterContactsReveal>
                </a>
            </li>
            <li>
                <a className="pointerCursor" onClick={HandleResumeButtonClick} target="_blank" rel="noopener noreferrer">
                    <FooterContactsReveal delay={0.55}>
                        <ContactImage url={resumeIcon} alt="resume icon" />
                    </FooterContactsReveal>
                </a>
            </li>
        </ul>
    )
}

export default FooterContacts;