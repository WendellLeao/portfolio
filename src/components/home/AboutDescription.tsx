import {useTranslation} from 'react-i18next';
import profileImage from '../../images/profile.webp';
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
            <div className="descriptionText">
                <p>
                    {t("aboutDescription")}
                </p>
            </div>
        </div>
    )
}

export default AboutDescription;
