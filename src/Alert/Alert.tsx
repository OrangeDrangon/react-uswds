import React, { ReactNode } from "react";
import PropTypes from "prop-types";

import "./Alert.scss";

interface Props {
  variant: "success" | "warning" | "error" | "info";
  interactive: boolean;
  header?: ReactNode;
  text?: ReactNode;
}

const Alert = ({ variant, interactive, header, text }: Props) => {
  let alertType = "usa-alert ";

  switch (variant) {
    case "success":
      alertType += "usa-alert--success";
      break;
    case "warning":
      alertType += "usa-alert--warning";
      break;
    case "error":
      alertType += "usa-alert--error";
      break;
    case "info":
      alertType += "usa-alert--info";
      break;
  }

  let araiRole = interactive ? "alertdialog" : "alert";

  return (
    <div className={alertType} role={araiRole}>
      <div className="usa-alert__body">
        <h3 className="usa-alert__heading">{header}</h3>
        <div className="usa-alert__text">{text}</div>
      </div>
    </div>
  );
};

Alert.protoTypes = {
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired,
  interactive: PropTypes.bool,
  header: PropTypes.node,
  text: PropTypes.node,
};

Alert.defaultProps = {
  interactive: false,
} as Pick<Props, "interactive">;

export { Alert };
