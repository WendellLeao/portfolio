import {motion, useInView, useAnimation, AnimationControls} from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
    children: JSX.Element;
    delay?: number;
}

export const Reveal = ({ children, delay }: Props) => {
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
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: delay }}>
            {children}
        </motion.div>
    )
}