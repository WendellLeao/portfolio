import {motion} from "framer-motion";
import arrowsImage from '../images/arrows.png';
import './Arrows.css';

const Arrows = () => {
    return (
        <div className="arrows">
            <a href={"#games"}>
                <motion.img
                    src={arrowsImage}
                    alt="arrows image"
                    animate={{ y: -15 }}
                    transition={{ ease: "linear", repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
                />
            </a>
        </div>
    )
}

export default Arrows;