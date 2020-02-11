import React, { useState } from "react";
import { Alert, Button } from "../src";

export default {
  component: Alert,
  title: "Alert",
};

export const successAlert = () => (
  <Alert
    variant="success"
    header={"Success"}
    text={"Header and can text can be any react node!"}
  />
);

export const warningAlert = () => (
  <Alert
    variant="warning"
    header={"Warning"}
    text={"Header and can text can be any react node!"}
  />
);

export const errorAlert = () => (
  <Alert
    variant="error"
    header={"Error"}
    text={"Header and can text can be any react node!"}
  />
);

export const infoAlert = () => (
  <Alert
    variant="info"
    header={"Info"}
    text={"Header and can text can be any react node!"}
  />
);

export const interactiveAlert = () => {
  const [showAlert, setShowAlert] = useState(true);

  const toggleAlert = () => setShowAlert(val => !val);

  return (
    <>
      <Button onClick={toggleAlert}>Toggle Alert</Button>
      {showAlert && (
        <Alert
          variant="info"
          interactive
          header={"Important alert"}
          text={<><p>Very important information</p><Button onClick={toggleAlert}>Close</Button></>}
        />
      )}
    </>
  );
};
