import {useTranslation} from 'react-i18next';
import {OpenResumeFile} from '../Contacts';
import FooterContactsReveal from "./FooterContactsReveal";
import ContactImage from "../ContactImage";
import githubIcon from '../../images/github.webp';
import linkedinIcon from '../../images/linkedin.webp';
import resumeIcon from '../../images/resume.webp';
import youtubeIcon from '../../images/youtube.webp';
import './FooterContacts.css';
import {trackContactButtonClick} from "../../analytics";

const FooterContacts = () => {
    const { t, i18n } = useTranslation();
    
    function HandleResumeButtonClick() : void {
        OpenResumeFile(i18n.language);
        trackContactButtonClick("resume");
    }

    function HandleGithubButtonClick(){
        trackContactButtonClick("github");
    }

    function HandleLinkedInButtonClick(){
        trackContactButtonClick("linkedin");
    }

    function HandleYouTubeButtonClick(){
        trackContactButtonClick("youtube");
    }
    
    return (
        <ul>
            <li>
                <a className="pointerCursor" onClick={HandleResumeButtonClick} target="_blank" rel="noopener noreferrer">
                    <FooterContactsReveal delay={0.55}>
                        <ContactImage url={resumeIcon} alt="resume icon" />
                    </FooterContactsReveal>
                </a>
            </li>
            <li>
                <a href="https://github.com/WendellLeao" onClick={HandleGithubButtonClick} target="_blank" rel="noopener noreferrer">
                    <FooterContactsReveal delay={0.35}>
                        <ContactImage url={githubIcon} alt="github icon" />
                    </FooterContactsReveal>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/wendell-leao/" onClick={HandleLinkedInButtonClick} target="_blank" rel="noopener noreferrer">
                    <FooterContactsReveal delay={0.45}>
                        <ContactImage url={linkedinIcon} alt="linkedin icon" />
                    </FooterContactsReveal>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@wendell-leao" onClick={HandleYouTubeButtonClick} target="_blank" rel="noopener noreferrer">
                    <FooterContactsReveal delay={0.65}>
                        <ContactImage url={youtubeIcon} alt="youtube icon" />
                    </FooterContactsReveal>
                </a>
            </li>
        </ul>
    )
}

export default FooterContacts;
