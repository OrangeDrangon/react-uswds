import React, { PropsWithChildren, useState } from "react";
import PropTypes from "prop-types";
import { AccordionContext as AccordionContext } from "./context";

import "./Accordion.scss";

interface Props {
  bordered: boolean;
}

const Accordion = ({ bordered, children }: PropsWithChildren<Props>) => {
  const [open, setOpen] = useState<string | null>(null);
  const classNameBordered = bordered
    ? "usa-accordion usa-accordion--bordered"
    : "usa-accordion";
  return (
    <AccordionContext.Provider value={{ open: open, setOpen }}>
      <div className={classNameBordered}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.propTypes = {
  bordered: PropTypes.bool,
};

Accordion.defaultProps = {
  bordered: false,
} as Pick<Props, "bordered">;

export { Accordion };
