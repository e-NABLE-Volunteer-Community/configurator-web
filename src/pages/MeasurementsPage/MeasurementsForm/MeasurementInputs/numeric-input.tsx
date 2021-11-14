import { IonInput, IonItem, IonLabel, IonText } from "@ionic/react";
import { useEffect, useState, VFC } from "react";
import {
  NumericInput,
  ViewMeasurement,
} from "../../../../core/view-measurement-types";
import "./input.css";
import { InputProps } from "../measurement-input";
import {
  useSetViewMeasurements,
  useViewMeasurements,
  useViewMeasurementsFor,
} from "../../../../core/stores/app";
import { isLoading, Loading } from "../../../../core/stores/utils";

// Refactor to a store, not a constant for i18n reasons
const textForProblem = (): string => "Must be a number";

type NumericInputProps = InputProps<NumericInput>;
const NumericInputComponent: VFC<NumericInputProps> = ({
  formIndex,
  inputIndex,
  input,
}) => {
  const [value, setValue] = useState<number | null>(null);
  const viewMeasurement: ViewMeasurement[] | Loading = useViewMeasurements();
  const setViewMeasurements = useSetViewMeasurements();

  const curInput = useViewMeasurementsFor(formIndex, inputIndex);
  const curInputIsLoading = isLoading(curInput);

  useEffect(() => {
    if (!curInputIsLoading) {
      if (curInput.value) {
        setValue(curInput.value as number);
      }
    }
  }, [curInputIsLoading]);

  const [problem, setProblem] = useState<boolean>();

  if (isLoading(viewMeasurement)) {
    return <div>loading...</div>;
  }

  return (
    <form className="input-base">
      <IonItem>
        <IonLabel color={problem ? "danger" : undefined} position="floating">
          {input.labelText}
        </IonLabel>
        <IonInput
          type="number"
          value={value}
          placeholder="Enter Number"
          color={problem ? "danger" : undefined}
          onIonChange={(e) => {
            const newValue = e.detail.value ?? null;
            setProblem(isNaN(parseFloat(newValue ?? "")));
            if (newValue) {
              setValue(parseInt(newValue as string));
              viewMeasurement[formIndex].inputs[inputIndex].value = newValue;
              setViewMeasurements(viewMeasurement);
            }
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
