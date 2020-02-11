import React, { ReactNode, useContext } from "react";
import PropTypes from "prop-types";
import { context as AccordionContext } from "../context";

import "./AccordionItem.scss";

interface Props {
  header: ReactNode;
  content: ReactNode;
  id: string;
}

const AccordionItem = ({ header, content, id }: Props) => {
  const { open, setOpen } = useContext(AccordionContext);
  return (
    <>
      <h2 className="usa-accordion__heading">
        <button
          className="usa-accordion__button"
          aria-expanded={open === id}
          aria-controls={id}
          onClick={() => setOpen(val => (val === id ? null : id))}
        >
          {header}
        </button>
      </h2>
      <div
        id={id}
        className="usa-accordion__content usa-prose"
        hidden={open !== id}
      >
        {content}
      </div>
    </>
  );
};

AccordionItem.propTypes = {
  header: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export { AccordionItem };
