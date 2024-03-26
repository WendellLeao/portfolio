import {useTranslation} from 'react-i18next';
import profileImage from '../images/profile.png';
import './AboutDescription.css';

const AboutDescription = () => {
    const { t, i18n } = useTranslation();
    
    return (
        <div id="aboutDescription" hidden>
            <h1>
                {t("aboutSubTitle")}
            </h1>
            <div className="picture">
                <img id="profileImg" src={profileImage} alt="profile picture"></img>
            </div>
            <p>
                {t("aboutDescription")}
            </p>
        </div>
    )
}

export default AboutDescription;