import { motion } from "framer-motion"
import './ContactImage.css';

interface Props {
    url: string;
    alt: string;
}

const ContactImage = ({ url, alt }: Props) => {
    return (
        <motion.img
            className="contactImage"
            src={url}
            alt={alt}
            whileHover={{
                scale: [1, 1.2, 1, 1],
                rotate: 360,
            }}
            whileTap={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}>
        </motion.img>
    )
}

export default ContactImage;