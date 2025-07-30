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
