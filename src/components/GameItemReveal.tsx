import {AnimationControls, motion, useAnimation, useInView} from "framer-motion";
import React, {useEffect, useRef} from "react";

interface Props {
    children: JSX.Element;
}

export const GameItemReveal = ({ children }: Props) => {
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
                hidden: { scale: 0.8 },
                visible: { scale: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}>
            {children}
        </motion.div>
    )
}