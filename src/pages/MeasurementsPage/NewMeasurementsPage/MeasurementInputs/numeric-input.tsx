import { IonInput, IonItem, IonLabel, IonText } from "@ionic/react";
import { useState, VFC } from "react";
import { NumericInput } from "../../../../core/view-measurement-types";
import "./input.css";
import { InputProps } from "../measurement-input";
import {
  useSetValueForMeasInput,
  useValueForMeasInput,
} from "../../../../core/stores/app";
import { isLoading } from "../../../../core/stores/utils";
import {
  checkNumericValue,
  NumericProblem,
  NumericProblemHint,
  textForNumericBounds,
} from "../validation";
import { InputChangeEventDetail } from "@ionic/core";

type NumericRangeHintProps = { value: string | null; input: NumericInput };
const NumericRangeHint: VFC<NumericRangeHintProps> = ({ value, input }) =>
  value === null ? (
    <IonText className="hint">{textForNumericBounds(input)}</IonText>
  ) : null;

// TODO: I18N
const renderedWhileLoadingMsg = "Inputs must be loaded before rendered";

type NumericInputProps = InputProps<NumericInput>;
const NumericInputComponent: VFC<NumericInputProps> = (props) => {
  const { formIndex, inputIndex, input } = props;
  const setValueForMeasInput = useSetValueForMeasInput(formIndex, inputIndex);
  const [problem, setProblem] = useState<NumericProblem | undefined>();

  const valueForInput = useValueForMeasInput(formIndex, inputIndex);
  if (isLoading(valueForInput)) throw new Error(renderedWhileLoadingMsg);
  const initialValue = valueForInput?.toString() ?? null;
  const [value, setValue] = useState<string | null>(initialValue);

  const onChange = (e: CustomEvent<InputChangeEventDetail>) => {
    const newValue = e.detail.value ?? null;
    setValue(newValue);
    const [parsed, problem] = checkNumericValue(newValue, input);
    setProblem(problem);
    setValueForMeasInput(parsed);
  };

  return (
    <form className="input-base">
      <IonItem className="input-base">
        <IonLabel color={problem ? "danger" : undefined} position="floating">
          {input.labelText} ({input.units})
        </IonLabel>
        <IonInput
          type="number"
          value={value}
          color={problem ? "danger" : "dark"}
          onIonChange={onChange}
        />
      </IonItem>
      <NumericProblemHint input={input} problem={problem} />
      <NumericRangeHint input={input} value={value} />
    </form>
  );
};

export default NumericInputComponent;
