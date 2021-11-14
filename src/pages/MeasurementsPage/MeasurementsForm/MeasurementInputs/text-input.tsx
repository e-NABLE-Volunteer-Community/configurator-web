import { IonInput } from "@ionic/react";
import { useEffect, useState, VFC } from "react";
import {
  useSetViewMeasurements,
  useValueForUseMeasurement,
  useViewMeasurements,
  useViewMeasurementsFor,
} from "../../../../core/stores/app";
import { isLoading, Loading } from "../../../../core/stores/utils";
import {
  TextInput,
  ViewMeasurement,
} from "../../../../core/view-measurement-types";

import "./input.css";
import { InputProps } from "../measurement-input";

type TextInputProps = InputProps<TextInput>;

const TextInputComponent: VFC<TextInputProps> = ({
  formIndex,
  inputIndex,
  input,
}) => {
  const viewMeasurement: ViewMeasurement[] | Loading = useViewMeasurements();
  const [value, setValue] = useState<string | null>();
  const curInput = useViewMeasurementsFor(formIndex, inputIndex);
  const curInputValue = useValueForUseMeasurement(formIndex, inputIndex);

  const curInputIsLoading = isLoading(curInput);

  useEffect(() => {
    if (!curInputIsLoading) {
      if (typeof curInputValue === "string") {
        setValue(curInputValue as string);
      }
    }
  }, [curInputIsLoading]);

  const setViewMeasurements = useSetViewMeasurements();

  if (isLoading(viewMeasurement)) {
    return <div>loading...</div>;
  }

  return (
    <div className="input-base text-input">
      <IonInput
        type="text"
        value={value}
        placeholder={input.labelText}
        onIonChange={(e) => {
          const newValue = e.detail.value ?? null;
          setValue(newValue);

          if (newValue) {
            viewMeasurement[formIndex].inputs[inputIndex].value = newValue;
            setViewMeasurements(viewMeasurement);
          }
        }}
      />
    </div>
  );
};

export default TextInputComponent;
