import { VFC } from "react";
import {
  useMeasInput,
  useValueForMeasInput,
} from "../../../../core/stores/app";
import {
  isNumericInput,
  NumericInput,
} from "../../../../core/view-measurement-types";

import "./submit-item.css";
import { checkNumericValue, NumericProblemHint } from "../validation";

type NumericSubmitItemProps = { value: number | null; input: NumericInput };
const NumericSubmitItem: VFC<NumericSubmitItemProps> = ({ value, input }) => {
  const [parsed, problem] = checkNumericValue(value, input);

  const text = problem === "NaN" ? "Missing!" : `${parsed} ${input.units}`;

  return (
    <>
      <div className="submit-item">
        <div className="submit-title">{input.labelText}:</div>
        <div className={`submit-details ${problem ? "problem" : ""}`}>
          {text}
        </div>
      </div>
      {problem !== "NaN" && (
        <NumericProblemHint input={input} problem={problem} />
      )}
    </>
  );
};

type SubmitItemProps = { formIndex: number; inputIndex: number };
const SubmitItemComponent: VFC<SubmitItemProps> = ({
  formIndex,
  inputIndex,
}) => {
  const valueForInput = useValueForMeasInput(formIndex, inputIndex);

  //WARNING: this will not update on value change. Just being used here to get units which should not change ever (I hope)
  const inputObject = useMeasInput(formIndex, inputIndex);

  if (isNumericInput(inputObject)) {
    return (
      <NumericSubmitItem
        input={inputObject}
        value={valueForInput as number | null}
      />
    );
  }

  // TODO [Thysbe #3]: Refactor same as NumericSubmitItemProps
  const problem = valueForInput === "";
  return (
    <div className="submit-item">
      <div className="submit-title">{inputObject.labelText}:</div>
      <div className={`submit-details ${problem ? "problem" : ""}`}>
        {valueForInput === "" ? "Missing!" : valueForInput}
      </div>
    </div>
  );
};

export default SubmitItemComponent;
