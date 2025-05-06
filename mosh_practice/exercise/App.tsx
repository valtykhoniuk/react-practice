import React from "react";
import Button from "./Button";
import Alert from "./Alert";
import { useState } from "react";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
};

export default App;
