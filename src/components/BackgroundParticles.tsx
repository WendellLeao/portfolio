import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import './BackgroundParticles.css';

const BackgroundParticles = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
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
                        value: "#0b364b",
                    },
                    move: {
                        enable: true,
                        random: false,
                        speed: 0.1,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 110,
                    },
                    opacity: {
                        value: { min: 0.4, max: 0.7 },
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