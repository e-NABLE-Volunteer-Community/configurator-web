import {
  ReactElement,
  JSXElementConstructor,
  ReactNodeArray,
  ReactPortal,
  VFC,
} from "react";
import {
  Input,
  InputTypes,
  MeasurementInput,
  SliderInput,
} from "../../../core/view-measurement-types";
import NumericInputComponent from "./MeasurementInputs/numeric-input";
import SliderInputComponent from "./MeasurementInputs/slider-input";
import TextInputComponent from "./MeasurementInputs/text-input";
import { Subject } from "rxjs";

type MeasurementFormItemProps = {
  input: MeasurementInput[];
  index: number;
  slideChangeSubject: Subject<void>;
};
export type InputProps<T extends Input> = {
  input: T;
  formIndex: number;
  inputIndex: number;
  slideChangeSubject: Subject<void>;
};
const MeasurementFormInput: VFC<MeasurementFormItemProps> = (props) => {
  return (
    <>
      {props.input.map(function (input, index) {
        if (input.inputType == InputTypes.Slider)
          return (
            <SliderInputComponent
              input={input}
              formIndex={props.index}
              inputIndex={index}
              key={input.labelText}
              slideChangeSubject={props.slideChangeSubject}
            ></SliderInputComponent>
          );
        else if (input.inputType == InputTypes.Numeric)
          return (
            <NumericInputComponent
              input={input}
              formIndex={props.index}
              inputIndex={index}
              key={input.labelText}
              slideChangeSubject={props.slideChangeSubject}
            ></NumericInputComponent>
          );
        else if (input.inputType == InputTypes.Text)
          return (
            <TextInputComponent
              input={input}
              formIndex={props.index}
              inputIndex={index}
              key={input.labelText}
              slideChangeSubject={props.slideChangeSubject}
            ></TextInputComponent>
          );
      })}
    </>
  );
};
export default MeasurementFormInput;
