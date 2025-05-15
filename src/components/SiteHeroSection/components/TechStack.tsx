import React from "react";

export const TechStack = ({
  stack,
  years,
}: {
  stack: string;
  years: string;
}) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-md w-full flex flex-col items-center lg:block">
      <h1 className="text-lg font-bold lg:text-sm">{stack}</h1>
      <h1>{years}</h1>
    </div>
  );
};
