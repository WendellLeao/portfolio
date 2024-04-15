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
                particles: {
                    color: {
                        value: "#45dbe9",
                    },
                    links: {
                        color: "#45dbe9",
                        distance: 100,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        random: true,
                        speed: 0.65,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: { min: 0.2, max: 0.5 },
                        animation: {
                            enable: true,
                            speed: 0.1,
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 3, max: 7 },
                    },
                },
                detectRetina: false,
            }}
        />
    )
}

export default BackgroundParticles;