import React from "react";
import s from "./SpinnerbLoader.module.css";
import cn from "clsx";

interface SpinnerbLoaderProps {
  className?: string; // className is optional and should be a string
}

const SpinnerbLoader: React.FC<SpinnerbLoaderProps> = ({ className }) => {
  return <span className={cn(s.Loader, {}, className)}></span>;
};

export default SpinnerbLoader;
