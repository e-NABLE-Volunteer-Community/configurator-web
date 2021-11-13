import { IonInput, IonLabel } from "@ionic/react";
import { useState, VFC } from "react";
import {
  useSetViewMeasurements,
  useViewMeasurements,
} from "../../../../core/stores/app";
import { Loading, isLoading } from "../../../../core/stores/utils";
import {
  NumericInput,
  ViewMeasurement,
} from "../../../../core/view-measurement-types";
import "./input.css";

type NumericInputProps = {
  input: NumericInput;
  formIndex: number;
  inputIndex: number;
};

const NumericInputComponent: VFC<NumericInputProps> = (props) => {
  const [value, setValue] = useState<number>();
  const viewMeasurement: ViewMeasurement[] | Loading = useViewMeasurements();
  const setViewMeasurements = useSetViewMeasurements();

  if (isLoading(viewMeasurement)) {
    return <div>loading...</div>;
  }
  return (
    <div className="input-base">
      Numeric Input
      <IonInput
        type="number"
        value={value}
        placeholder="Enter Number"
        onIonChange={(e) => {
          setValue(parseInt(e.detail.value!, 10));
          const newVals = viewMeasurement.slice();
          if (value != undefined) {
            newVals[props.formIndex].inputs[props.inputIndex].value = value;
          }
          setViewMeasurements(newVals);
        }}
      >
        <IonLabel slot="end">{props.input.units}</IonLabel>
      </IonInput>
    </div>
  );
};

export default NumericInputComponent;
