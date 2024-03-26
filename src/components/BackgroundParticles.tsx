import {
    clamp,
    type Container,
    type ISourceOptions,
    randomInRange,
} from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './BackgroundParticles.css';

const BackgroundParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        // console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
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
                    opacity: clamp(randomInRange(0.5), 0.2, 0.5),
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
                    value: { min: 0.15, max: 0.5 },
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
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                className="particles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
}

export default BackgroundParticles;