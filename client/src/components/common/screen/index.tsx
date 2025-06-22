import React from "react";
import { IScreenWrapperProps } from "@/interfaces/home";

const ScreenWrapper: React.FC<IScreenWrapperProps> = ({
  className = "mt-20",
  desktopWidth,
  children,
}) => {
  return (
    <div
      className={`w-full mb-16 md:mb-0 mx-auto max-w-[1225px] min-h-[100vh] relative flex justify-center ${className}`}
    >
      <div className={`relative container ${desktopWidth}  w-full`}>
        {children}
      </div>
    </div>
  );
};

export default ScreenWrapper;
