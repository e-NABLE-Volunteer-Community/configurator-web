import { IonInput, IonItem, IonLabel, IonText } from "@ionic/react";
import { useState, VFC } from "react";
import { NumericInput } from "../../../../core/view-measurement-types";
import "./input.css";
import { InputProps } from "../measurement-input";

// Refactor to a store, not a constant for i18n reasons
const textForProblem = (): string => "Must be a number";

type NumericInputProps = InputProps<NumericInput>;
const NumericInputComponent: VFC<NumericInputProps> = (props) => {
  const [value, setValue] = useState<string | null>(null);
  const [problem, setProblem] = useState<boolean>();

  return (
    <form className="input-base">
      <IonItem>
        <IonLabel color={problem ? "danger" : undefined} position="floating">
          {props.input.labelText}
        </IonLabel>
        <IonInput
          type="number"
          value={value}
          placeholder="Enter Number"
          color={problem ? "danger" : undefined}
          onIonChange={(e) => {
            const newValue = e.detail.value ?? null;
            console.log({ newValue: e.detail.value });
            setValue(newValue);
            setProblem(isNaN(parseFloat(newValue ?? "")));
          }}
        />
        {problem && (
          <IonText className="hint" color="danger">
            {textForProblem()}
          </IonText>
        )}
      </IonItem>
    </form>
  );
};

export default NumericInputComponent;
