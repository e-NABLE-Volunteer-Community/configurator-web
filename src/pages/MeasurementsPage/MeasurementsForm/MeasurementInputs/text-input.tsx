import { IonInput } from "@ionic/react";
import { useState, VFC } from "react";
import {
  useSetViewMeasurements,
  useViewMeasurements,
} from "../../../../core/stores/app";
import { isLoading, Loading } from "../../../../core/stores/utils";
import {
  TextInput,
  ViewMeasurement,
} from "../../../../core/view-measurement-types";

import "./input.css";
import { InputProps } from "../measurement-input";

type TextInputProps = InputProps<TextInput>;

const TextInputComponent: VFC<TextInputProps> = (props) => {
  const [value, setValue] = useState<string | null>(null);
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
          const newValue = e.detail.value ?? null;
          setValue(newValue);

          if (newValue) {
            viewMeasurement[props.formIndex].inputs[props.inputIndex].value =
              newValue;
            setViewMeasurements(viewMeasurement);
          }
        }}
      />
    </div>
  );
};

export default TextInputComponent;
