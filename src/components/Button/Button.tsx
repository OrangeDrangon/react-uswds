import React, { ButtonHTMLAttributes } from "react";
import PropTypes from "prop-types";

import "./Button.scss";
import { ButtonTypes, getButtonClassName } from '../../utils/getButtonClassName';

interface Props {
  variant: ButtonTypes
}

const Button = ({
  children,
  variant,
  className,
  ...props
}: React.PropsWithChildren<
  Props & ButtonHTMLAttributes<HTMLButtonElement>
>) => {
  const classNameUsa = getButtonClassName(variant);
  return (
    <button className={`${classNameUsa} ${className}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "default",
    "secondary",
    "accent",
    "base",
    "outline",
    "outline-inverse",
    "big",
  ]),
};

Button.defaultProps = {
  variant: "default",
} as Pick<Props, "variant">;

export { Button };
