import { IonInput } from "@ionic/react";
import { useState, VFC } from "react";
import { TextInput } from "../../../../core/view-measurement-types";

import "./input.css";

type TextInputProps = { input: TextInput };

const TextInputComponent: VFC<TextInputProps> = (props) => {
  const [value, setValue] = useState("Enter Text");
  return (
    <div className="input-base">
      Text Input
      <IonInput
        type="text"
        value={value}
        placeholder="Enter Text"
        onIonChange={(e) => setValue(value)}
      ></IonInput>
    </div>
  );
};

export default TextInputComponent;
