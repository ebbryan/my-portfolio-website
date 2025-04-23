import { ReactNode } from "react";
import GeometricParticles from "./GeometricParticles";

const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <GeometricParticles />
    </>
  );
};

export default BackgroundProvider;
