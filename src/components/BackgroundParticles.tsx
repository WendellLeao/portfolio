import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import './BackgroundParticles.css';

const BackgroundParticles = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        // console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // await console.log(container);
    }, []);

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
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 150,
                            links: {
                                blink: false,
                                consent: false,
                                opacity: 0.7,
                            }
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#45dae8",
                    },
                    links: {
                        color: "#45dae8",
                        distance: 80,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        random: true,
                        speed: 0.3,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 70,
                    },
                    opacity: {
                        value: { min: 0.4, max: 0.6 },
                        animation: {
                            enable: true,
                            speed: 0.2,
                            startValue: "min",
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 6.5 },
                    },
                },
                detectRetina: false,
            }}
        />
    )
}

export default BackgroundParticles;