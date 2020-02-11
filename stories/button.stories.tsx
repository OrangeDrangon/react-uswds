import React from "react";
import { Button } from "../src";
import { action } from "@storybook/addon-actions";

export default {
  component: Button,
  title: "Button",
};

export const defaultButton = () => <Button>Default</Button>;

export const explicitDefaultButton = () => (
  <Button variant="default">Default</Button>
);

export const secondaryButton = () => (
  <Button variant="secondary">Secondary</Button>
);

export const accentCoolButton = () => (
  <Button variant="accent">Accent Cool</Button>
);

export const baseButton = () => <Button variant="base">Base</Button>;

export const outlineButton = () => <Button variant="outline">Outline</Button>;

export const outlineInverseButton = () => (
  <Button variant="outline-inverse">Outline Inverse</Button>
);

export const bigButton = () => <Button variant="big">Big</Button>;

export const disabledButton = () => <Button disabled>Disabled</Button>;

export const customStyleButton = () => (
  <Button style={{ width: "500px" }}>Custom Class</Button>
);

export const clickActionButton = () => (
  <Button onClick={() => action("Clicked")("I have been clicked")}>
    Click Action
  </Button>
);
