import {AnimationControls, motion, useAnimation, useInView} from "framer-motion";
import React, {useEffect, useRef} from "react";
import arrowsImage from '../../images/arrows.webp';
import './UpwardArrows.css';

const UpwardArrows = () => {
    const ref : React.MutableRefObject<null> = useRef(null);
    const isInView : boolean = useInView(ref, { once: true });

    const mainControls : AnimationControls = useAnimation();

    const mediaQueryList : MediaQueryList = window.matchMedia("(min-width: 60em)");
    
    useEffect(() : void => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])
    
    function GetElement() : JSX.Element {
        const anchorElement : JSX.Element =
            <a href={"#"}>
                <motion.img
                    ref={ref}
                    src={arrowsImage}
                    alt="upward arrows image"
                    animate={{ y: 15 }}
                    transition={{ ease: "linear", repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
                />
            </a>
        
        const variants1 = {
            hidden: { opacity: 0, rotate: 0 },
            visible: { opacity: 1, rotate: 180 },
        }

        const variants2 = {
            hidden: { opacity: 0, rotate: 180, scale: 0.5 },
            visible: { opacity: 1, rotate: 180, scale: 1 },
        }

        return (
            <motion.div
                className="upwardArrows"
                variants={ mediaQueryList.matches ? variants1 : variants2 }
                initial="hidden"
                animate={mainControls}
                transition={{ duration: mediaQueryList.matches ? 0.3 : 0.5 }}>
                {anchorElement}
            </motion.div>
        )
    }
    
    return GetElement()
}

export default UpwardArrows;