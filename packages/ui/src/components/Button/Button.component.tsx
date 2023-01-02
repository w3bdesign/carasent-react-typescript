import type { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react";

export type TVariant = "primary" | "secondary";
export type TType = "submit" | "reset";
export type TChildren = ReactNode | JSX.Element;

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: TChildren;
  variant?: TVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

import { classX } from "../../utils/functions";

/**
 * Button component used for submit and reset
 * @function Button
 * @param {TChildren} children - JSX children to render in the button
 * @param {TVariant} variant - Variant of the button, primary or secondary
 * @param {TType} type - Type of the button, either submit or reset
 * @param {MouseEventHandler<HTMLButtonElement>?} onClick - onClick handler for button
 * @returns {JSX.Element} - Rendered component
 */

export const Button = ({
  variant = "primary",
  type = "submit",
  children,
  onClick,
}: IButtonProps) => {
  const baseStyle =
    "text-white mt-4 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800";

  return (
    <button
      type={type}
      onClick={onClick}
      data-cy="submit"
      className={classX(baseStyle, [
        variant === "primary" &&
          "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",

        variant === "secondary" &&
          "bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
      ])}
    >
      {children}
    </button>
  );
};
