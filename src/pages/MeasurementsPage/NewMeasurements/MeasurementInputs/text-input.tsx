import { IonInput, IonItem, IonLabel } from "@ionic/react";
import { useEffect, useState, VFC } from "react";
import {
  useSetViewMeasurements,
  useValueForMeasInput,
  useViewMeasurements,
  useMeasInput,
} from "../../../../core/stores/app";
import { isLoading, Loading } from "../../../../core/stores/utils";
import {
  TextInput,
  ViewMeasurement,
} from "../../../../core/view-measurement-types";

import "./input.css";
import { InputProps } from "../measurement-input";

type TextInputProps = InputProps<TextInput>;

// TODO [Thysbe #3]: Redo same as NumericInputProps
const TextInputComponent: VFC<TextInputProps> = ({
  formIndex,
  inputIndex,
  input,
}) => {
  const viewMeasurement: ViewMeasurement[] | Loading = useViewMeasurements();
  const [value, setValue] = useState<string | null>();
  const curInput = useMeasInput(formIndex, inputIndex);
  const curInputValue = useValueForMeasInput(formIndex, inputIndex);

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
    <IonItem className="input-base text-input">
      <IonLabel position="floating">{input.labelText}</IonLabel>
      <IonInput
        type="text"
        value={value}
        placeholder={input.labelText}
        onIonChange={(e) => {
          const newValue = e.detail.value ?? null;
          setValue(newValue);

          viewMeasurement[formIndex].inputs[inputIndex].value = newValue ?? "";
          setViewMeasurements(viewMeasurement);
        }}
      />
    </IonItem>
  );
};

export default TextInputComponent;
