import {AnimationControls, motion, useAnimation, useInView} from "framer-motion";
import React, {useEffect, useRef} from "react";
import arrowsImage from '../../images/arrows.png';
import './UpwardArrows.css';

const UpwardArrows = () => {
    const ref : React.MutableRefObject<null> = useRef(null);
    const isInView : boolean = useInView(ref, { once: true });

    const mainControls : AnimationControls = useAnimation();

    useEffect(() : void => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])
    
    return (
        <motion.div
            className="upwardArrows"
            variants={{
                hidden: { opacity: 0, rotate: 0 },
                visible: { opacity: 1, rotate: 180 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3 }}>
            <a href={"#"}>
                <motion.img
                    ref={ref}
                    src={arrowsImage}
                    alt="upward arrows image"
                    animate={{ y: 15 }}
                    transition={{ ease: "linear", repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
                />
            </a>
        </motion.div>
    )
}

export default UpwardArrows;