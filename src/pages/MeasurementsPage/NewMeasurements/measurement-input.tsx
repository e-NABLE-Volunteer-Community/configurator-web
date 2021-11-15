import { VFC } from "react";
import {
  Input,
  InputTypes,
  MeasurementInput,
} from "../../../core/view-measurement-types";
import NumericInputComponent from "./MeasurementInputs/numeric-input";
import TextInputComponent from "./MeasurementInputs/text-input";

type MeasurementFormItemProps = {
  input: MeasurementInput[];
  index: number;
};
export type InputProps<T extends Input> = {
  input: T;
  formIndex: number;
  inputIndex: number;
};
const MeasurementFormInput: VFC<MeasurementFormItemProps> = (props) => {
  return (
    <>
      {props.input.map(function (input, index) {
        if (input.inputType == InputTypes.Numeric)
          return (
            <NumericInputComponent
              input={input}
              formIndex={props.index}
              inputIndex={index}
              key={input.labelText}
            ></NumericInputComponent>
          );
        else if (input.inputType == InputTypes.Text)
          return (
            <TextInputComponent
              input={input}
              formIndex={props.index}
              inputIndex={index}
              key={input.labelText}
            ></TextInputComponent>
          );
      })}
    </>
  );
};
export default MeasurementFormInput;
