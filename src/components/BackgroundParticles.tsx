import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import './BackgroundParticles.css';

const MOBILE_MAX_WIDTH = 768;

const BackgroundParticles = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        if (isMobile) {
            return;
        }

        await loadSlim(engine);
    }, [isMobile]);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);

    if (isMobile) {
        return null;
    }
    
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                background: {
                    color: {
                        value: "#050505FF",
                    },
                    repeat: "no-repeat",
                    size: "contain",
                },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: "#45dbe9",
                    },
                    links: {
                        color: "#45dbe9",
                        distance: 300,
                        enable: true,
                        opacity: 0.1,
                        width: 0.5,
                    },
                    move: {
                        enable: true,
                        random: true,
                        speed: 0.05,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.2 },
                        animation: {
                            enable: true,
                            speed: 0.1,
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 8 },
                    },
                },
                detectRetina: false,
            }}
        />
    )
}

export default BackgroundParticles;
