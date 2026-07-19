import {useTranslation} from 'react-i18next';
import {OpenResumeFile} from '../Contacts';
import FooterContactsReveal from "./FooterContactsReveal";
import ContactImage from "../ContactImage";
import githubIcon from '../../images/github.webp';
import linkedinIcon from '../../images/linkedin.webp';
import resumeIcon from '../../images/resume.webp';
import emailIcon from '../../images/email.webp';
import './FooterContacts.css';
import {trackButtonClick} from "../../analytics";

const FooterContacts = () => {
    const { t, i18n } = useTranslation();

    function HandleResumeButtonClick() : void {
        OpenResumeFile(i18n.language);
        trackButtonClick("resume");
    }

    function HandleGithubButtonClick(){
        trackButtonClick("github");
    }

    function HandleLinkedInButtonClick(){
        trackButtonClick("linkedin");
    }

    function HandleEmailButtonClick(){
        trackButtonClick("email");
    }

    return (
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/wendellleao/" onClick={HandleLinkedInButtonClick} target="_blank" rel="noopener noreferrer">
                    <FooterContactsReveal delay={0.35}>
                        <ContactImage url={linkedinIcon} alt="linkedin icon" />
                    </FooterContactsReveal>
                </a>
            </li>
            <li>
                <a href="https://github.com/WendellLeao" onClick={HandleGithubButtonClick} target="_blank" rel="noopener noreferrer">
                    <FooterContactsReveal delay={0.45}>
                        <ContactImage url={githubIcon} alt="github icon" />
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
            <li>
                <a href="mailto:leaowendell@outlook.com" onClick={HandleEmailButtonClick}>
                    <FooterContactsReveal delay={0.65}>
                        <ContactImage url={emailIcon} alt="email icon" />
                    </FooterContactsReveal>
                </a>
            </li>
        </ul>
    )
}

export default FooterContacts;
