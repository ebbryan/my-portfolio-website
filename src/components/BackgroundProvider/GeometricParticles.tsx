"use client";
import { useEffect, useMemo } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "@tsparticles/engine";
import styles from "./geometry.module.scss";
import { settingOptions } from "./sourceOptionsObj";

const GeometricParticles = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => settingOptions, []);

  return (
    <>
      <Particles
        className={styles.tsParticles}
        id="tsParticles"
        options={options}
      />
    </>
  );
};

export default GeometricParticles;
