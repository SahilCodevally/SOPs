import cx from "classnames";
import { FC, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  id?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  variant?: ButtonVariants;
  type?: "submit" | "reset" | "button";
};

export enum ButtonVariants {
  Red = "Red",
  Gray = "Gray",
  LightBlue = "Light Blue",
  PureBlack = "Pure Black",
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  type = "button",
  variant = ButtonVariants.PureBlack,
  ...props
}) => {
  const classes = cx(
    "py-[7px] px-[16px] rounded-[6px] hover:opacity-75",
    {
      "text-white bg-black": variant === ButtonVariants.PureBlack,
      "text-blue-purple bg-light-blue": variant === ButtonVariants.LightBlue,
    },
    className,
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
