import React from "react";
import { Accordion, AccordionItem } from "../src";

export default {
  component: Accordion,
  title: "Accordion",
};

export const accordion = () => (
  <Accordion>
    <>
      <AccordionItem
        header="First"
        id="first"
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            blanditiis sed! Dolorum eos, molestiae nesciunt sunt unde inventore
            consectetur placeat accusantium! Fugit dicta, molestias laborum
            assumenda officia ipsa voluptate asperiores.
          </p>
        }
      />
      <AccordionItem
        header="Second"
        id="second"
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            blanditiis sed! Dolorum eos, molestiae nesciunt sunt unde inventore
            consectetur placeat accusantium! Fugit dicta, molestias laborum
            assumenda officia ipsa voluptate asperiores.
          </p>
        }
      />
    </>
  </Accordion>
);

export const borderedAccordion = () => (
  <Accordion bordered>
    <>
      <AccordionItem
        header="First"
        id="first"
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            blanditiis sed! Dolorum eos, molestiae nesciunt sunt unde inventore
            consectetur placeat accusantium! Fugit dicta, molestias laborum
            assumenda officia ipsa voluptate asperiores.
          </p>
        }
      />
      <AccordionItem
        header="Second"
        id="second"
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            blanditiis sed! Dolorum eos, molestiae nesciunt sunt unde inventore
            consectetur placeat accusantium! Fugit dicta, molestias laborum
            assumenda officia ipsa voluptate asperiores.
          </p>
        }
      />
    </>
  </Accordion>
);
