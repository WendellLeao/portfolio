import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

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
                    size: "cover",
                },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: "#0b364b",
                    },
                    links: {
                        color: "#0b364b",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        random: false,
                        speed: 0.1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 150,
                    },
                    opacity: {
                        value: { min: 0.2, max: 0.5 },
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