import React, { HTMLAttributes } from "react";

export const LogoTitle = ({
  onLogoClick,
  fontSize,
  isClickable = false,
}: {
  onLogoClick?: () => void;
  fontSize: "text-2xl" | "text-lg";
  isClickable?: boolean;
}) => {
  return (
    <h1
      className={`font-bold ${fontSize} ${isClickable ? "cursor-pointer" : ""}`}
      onClick={onLogoClick}
    >
      Earl.<span className="text-orange-500">Dev</span>
    </h1>
  );
};
