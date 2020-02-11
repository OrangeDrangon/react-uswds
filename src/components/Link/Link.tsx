import React, { PropsWithChildren, AnchorHTMLAttributes } from "react";
import PropTypes from "prop-types";

import "./Link.scss";
import {
  ButtonTypes,
  getButtonClassName,
} from "../../utils/getButtonClassName";

interface Props {
  buttonStyle?: ButtonTypes;
  external: boolean;
}

const Link = ({
  buttonStyle,
  external,
  children,
  className: passedClassName,
  ...props
}: PropsWithChildren<Props & AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  let classNames = ["usa-link"];
  if (external) classNames.push(" usa-link--external");
  if (buttonStyle != null) {classNames.push(` ${getButtonClassName(buttonStyle)}`);}
  const className = classNames.reverse().join(" ");

  return (
    <a
      className={`${className}${passedClassName ? ` ${passedClassName}` : ""}`}
      {...props}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  buttonStyle: PropTypes.oneOf([
    "default",
    "secondary",
    "accent",
    "base",
    "outline",
    "outline-inverse",
    "big",
  ]),
  external: PropTypes.bool,
};

Link.defaultProps = {
  external: false,
} as Pick<Props, "external">;

export { Link };
