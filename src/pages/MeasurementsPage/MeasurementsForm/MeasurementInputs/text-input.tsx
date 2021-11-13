import { IonInput } from "@ionic/react";
import { useState, VFC } from "react";
import {
  useViewMeasurements,
  useSetViewMeasurements,
} from "../../../../core/stores/app";
import { isLoading, Loading } from "../../../../core/stores/utils";
import {
  TextInput,
  ViewMeasurement,
} from "../../../../core/view-measurement-types";

import "./input.css";

type TextInputProps = {
  input: TextInput;
  formIndex: number;
  inputIndex: number;
};

const TextInputComponent: VFC<TextInputProps> = (props) => {
  const [value, setValue] = useState("");
  const viewMeasurement: ViewMeasurement[] | Loading = useViewMeasurements();
  const setViewMeasurements = useSetViewMeasurements();

  if (isLoading(viewMeasurement)) {
    return <div>loading...</div>;
  }
  return (
    <div className="input-base">
      Text Input
      <IonInput
        type="text"
        value={value}
        placeholder="Enter Text"
        onIonChange={(e) => {
          if (e.detail.value) {
            setValue(e.detail.value);
            const newVals = viewMeasurement.slice();
            if (value != undefined) {
              newVals[props.formIndex].inputs[props.inputIndex].value =
                e.detail.value;
            }
            setViewMeasurements(newVals);
          }
        }}
      ></IonInput>
    </div>
  );
};

export default TextInputComponent;
