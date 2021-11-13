import { IonInput } from "@ionic/react";
import { useState, VFC } from "react";
import { NumericInput } from "../../../../core/view-measurement-types";
import "./input.css";

type NumericInputProps = { input: NumericInput };

const NumericInputComponent: VFC<NumericInputProps> = (props) => {
  const [value, setValue] = useState<number>();
  return (
    <div className="input-base">
      Numeric Input
      <IonInput
        type="number"
        value={value}
        placeholder="Enter Number"
        onIonChange={(e) => setValue(parseInt(e.detail.value!, 10))}
      ></IonInput>
    </div>
  );
};

export default NumericInputComponent;
