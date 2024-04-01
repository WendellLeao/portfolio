import {useTranslation} from 'react-i18next';
import HomeContacts from './HomeContacts';
import {motion} from "framer-motion";
import profileImage from '../../images/profile.png';
import './HomeDescription.css';

const HomeDescription = () => {
    const { t, i18n } = useTranslation();
    
    return (
        <div id="homeDescription">
            <div className="descriptionContainer">
                <h2>
                    {t("homeSubTitle")}
                </h2>
                <h1>
                    Wendell Leão
                </h1>
                <div className="homeDescriptionPicture">
                    <img id="profileImg" src={profileImage} alt="profile picture"></img>
                </div>
                <p>
                    {t("homeDescription")}
                </p>
                <HomeContacts />
            </div>
            <div className="homePicture">
                <motion.img
                    id="pictureImage"
                    src={profileImage}
                    alt="profile picture"
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: "linear", duration: 0.3 }}/>
            </div>
        </div>
    )
}

export default HomeDescription;