import type { FC } from "react";
import type { Icon } from "./icon";

export const MapPin: FC<Icon> = (props) => {
  const { color, size } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      className="w-6 h-6 stroke-gray-400 dark:stroke-gray-100"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        width: size,
        height: size,
        stroke: color,
      }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="12" cy="11" r="3"></circle>
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
    </svg>
  );
};
