import React from "react";

export const SiteAboutMeSection = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="flex justify-center items-center h-screen bg-black min-h-screen"
    >
      <div>Inner div</div>
    </section>
  );
};
