import React from "react";

export const TechStack = ({
  stack,
  years,
}: {
  stack: string;
  years: string;
}) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-md">
      <h1 className="text-lg font-bold">{stack}</h1>
      <h1>{years}</h1>
    </div>
  );
};
