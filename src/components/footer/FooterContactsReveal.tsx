import {motion, useInView, useAnimation, AnimationControls} from "framer-motion";
import React, {useEffect, useRef} from "react";

interface Props {
    children: JSX.Element;
    delay: number;
}

const FooterContactsReveal = ({ children, delay }: Props) => {
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
            ref={ref}
            variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: delay }}>
            {children}
        </motion.div>
    )
}

export default FooterContactsReveal;