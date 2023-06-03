import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
// import { loadColorUpdater } from "tsparticles-updater-color";
// import { loadCircleShape } from "tsparticles-shape-circle";
// import { loadBaseMover } from "tsparticles-move-base";
// import { loadSizeUpdater } from "tsparticles-updater-size";
// import { loadOpacityUpdater } from "tsparticles-updater-opacity";
// import { loadOutModesUpdater } from "tsparticles-updater-out-modes";
// import { loadParticlesLinksInteraction } from "tsparticles-interaction-particles-links";

import * as S from "./ParticlesBackground.styles";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // await loadCircleShape(engine);
    // await loadBaseMover(engine);
    // await loadSizeUpdater(engine);
    // await loadColorUpdater(engine);
    // await loadOpacityUpdater(engine);
    // await loadOutModesUpdater(engine);
    // await loadParticlesLinksInteraction(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <S.ParticleCanvas
      id="particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        smooth: true,
        fullScreen: { enable: true },
        background: {
          color: {
            value: "#00000078",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
      }}
    />
  );
};
