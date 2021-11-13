import {
  ReactElement,
  JSXElementConstructor,
  ReactNodeArray,
  ReactPortal,
  VFC,
} from "react";
import {
  InputTypes,
  MeasurementInput,
} from "../../../core/view-measurement-types";
import NumericInputComponent from "./MeasurementInputs/numeric-input";
import SliderInputComponent from "./MeasurementInputs/slider-input";
import TextInputComponent from "./MeasurementInputs/text-input";

type MeasurementFormItemProps = { input: MeasurementInput[] };
const MeasurementFormInput: VFC<MeasurementFormItemProps> = (props) => {
  return (
    <>
      {props.input.map(function (input, index) {
        if (input.inputType == InputTypes.Slider)
          return <SliderInputComponent input={input}></SliderInputComponent>;
        else if (input.inputType == InputTypes.Numeric)
          return <NumericInputComponent input={input}></NumericInputComponent>;
        else if (input.inputType == InputTypes.Text)
          return <TextInputComponent input={input}></TextInputComponent>;
      })}
    </>
  );
};
export default MeasurementFormInput;
