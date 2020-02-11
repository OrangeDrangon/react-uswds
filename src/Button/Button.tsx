import React, { ButtonHTMLAttributes } from "react";
import PropTypes from "prop-types";

import "./Button.scss";

interface Props {
  variant:
    | "default"
    | "secondary"
    | "accent"
    | "base"
    | "outline"
    | "outline-inverse"
    | "big";
}

const Button = ({
  children,
  variant,
  className,
  ...props
}: React.PropsWithChildren<
  Props & ButtonHTMLAttributes<HTMLButtonElement>
>) => {
  let classNameUsa = "usa-button";

  switch (variant) {
    case "default":
      break;
    case "secondary":
      classNameUsa += " usa-button--secondary";
      break;
    case "accent":
      classNameUsa += " usa-button--accent-cool";
      break;
    case "base":
      classNameUsa += " usa-button--base";
      break;
    case "outline":
      classNameUsa += " usa-button--outline";
      break;
    case "outline-inverse":
      classNameUsa += " usa-button--outline usa-button--inverse";
      break;
    case "big":
      classNameUsa += " usa-button--big";
      break;
    default:
      break;
  }

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
