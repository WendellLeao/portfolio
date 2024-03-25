import Line from './Line';
import Navbar from './Navbar';
import LanguageSelector from './LanguageSelector';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Line />
            <div className="headerContainer">
                <Navbar />
                <LanguageSelector />
            </div>
        </header>
    )
}

export default Header;