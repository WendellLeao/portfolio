import {useTranslation} from 'react-i18next';
import {OpenResumeFile} from '../Contacts';
import githubIcon from '../../images/github.png';
import linkedinIcon from '../../images/linkedin.png';
import resumeIcon from '../../images/resume.png';
import emailIcon from '../../images/email.png';
import './HomeContacts.css';

const HomeContacts = () => {
    const { t, i18n } = useTranslation();

    function HandleResumeButtonClick(){
        OpenResumeFile(i18n.language);
    }

    return (
        <ul className="homeContacts">
            <li>
                <a href="https://github.com/WendellLeao" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="github icon"></img>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/wendell-leao/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="linkedin icon"></img>
                </a>
            </li>
            <li>
                <a className="pointerCursor" onClick={HandleResumeButtonClick} target="_blank" rel="noopener noreferrer">
                    <img src={resumeIcon} alt="resume icon"></img>
                </a>
            </li>
            <li>
                <a href="mailto:leaowendell@outlook.com?" target="_blank" rel="noopener noreferrer">
                    <img src={emailIcon} alt="email icon"></img>
                </a>
            </li>
        </ul>
    )
}

export default HomeContacts;