import {motion} from "framer-motion";
import arrowsImage from '../../images/arrows.webp';
import './DownwardArrows.css';

const DownwardArrows = () => {
    return (
        <div className="downwardArrows">
            <a href={"#games"}>
                <motion.img
                    src={arrowsImage}
                    alt="downward arrows image"
                    animate={{ y: -15 }}
                    transition={{ ease: "linear", repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
                />
            </a>
        </div>
    )
}

export default DownwardArrows;