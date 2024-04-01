import {useTranslation} from 'react-i18next';
import './GameButtonDisabled.css';

const GameButtonDisabled = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="disabledButtonContainer">
            <button type="submit" disabled>
                {t("disabledGameButton")}
            </button>
        </div>
    )
}

export default GameButtonDisabled;