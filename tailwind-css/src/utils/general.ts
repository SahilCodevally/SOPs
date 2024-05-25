import { IconColor } from "@/enum";

export const iconColorClass = (color: string) => {
  let className = color;

  switch (color) {
    case IconColor.Black:
      className = "fill-black";
      break;
    case IconColor.White:
      className = "fill-white";
      break;
    case IconColor.LightBlue:
      className = "fill-light-blue";
      break;
    case IconColor.BluePurple:
      className = "fill-blue-purple";
      break;
  }

  return className;
};
