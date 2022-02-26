import {
  isNumericInput,
  MeasurementInput,
  NumericInput,
  ViewMeasurement,
} from "../../../core/view-measurement-types";
import { VFC } from "react";
import { IonText } from "@ionic/react";
import * as R from "ramda";

export const checkNumericValue = (
  value: string | number | null,
  input: NumericInput
): [number, NumericProblem | undefined] => {
  const parsed = typeof value === "number" ? value : parseFloat(value ?? "");
  if (isNaN(parsed)) return [0, "NaN"];
  else if (parsed > input.inputRange.upperBound) return [parsed, "above_upper"];
  else if (parsed < input.inputRange.lowerBound) return [parsed, "below_lower"];
  return [parsed, undefined];
};

export type NumericProblem = "NaN" | "above_upper" | "below_lower";
// TODO: I18N
export const textForNumericProblem = (
  problem: NumericProblem,
  input: NumericInput
): string => {
  if (problem === "NaN") return "Must be a number";
  if (problem === "above_upper")
    return "Must be less than " + input.inputRange.upperBound;
  return "Must be greater than " + input.inputRange.lowerBound;
};

export const inputIsValid = (input: MeasurementInput) => {
  if (isNumericInput(input)) return !checkNumericValue(input.value, input)[1];
  return input.value !== "" && input.value !== null; // TODO: When a checkTextValue exists, use it here
};

export const viewMeasurementsAreAllValid = (
  viewMeasurements: ViewMeasurement[]
): boolean => {
  return !viewMeasurements
    .map((viewMeasurement) =>
      viewMeasurement.inputs.map(inputIsValid).map(R.not)
    )
    .flat()
    .reduce((a, b) => a || b, false);
};

export const textForNumericBounds = (input: NumericInput): string =>
  `Must be between ${input.inputRange.lowerBound} and ${input.inputRange.upperBound}`;

export type NumericProblemHintProps = {
  problem: NumericProblem | undefined;
  input: NumericInput;
};
export const NumericProblemHint: VFC<NumericProblemHintProps> = ({
  problem,
  input,
}) =>
  problem ? (
    <IonText className="hint" color="danger">
      {textForNumericProblem(problem, input)}
    </IonText>
  ) : null;
