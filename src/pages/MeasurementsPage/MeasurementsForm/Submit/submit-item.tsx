import { is } from "ramda";
import { useEffect, useState, VFC } from "react";
import {
  useValueForUseMeasurement,
  useViewMeasurementsFor,
} from "../../../../core/stores/app";
import { isLoading } from "../../../../core/stores/utils";
import {
  InputTypes,
  isNumericInput,
} from "../../../../core/view-measurement-types";

import "./submit-item.css";

type SubmitItemProps = { formIndex: number; inputIndex: number };
const SubmitItemComponent: VFC<SubmitItemProps> = ({
  formIndex,
  inputIndex,
}) => {
  const curInput = useValueForUseMeasurement(formIndex, inputIndex);
  const curInputIsLoading = isLoading(curInput);

  //WARNING: this will not update on value change. Just being used here to get units which should not change ever (I hope)
  const curInputObj = useViewMeasurementsFor(formIndex, inputIndex);
  const curInputObjIsLoading = isLoading(curInputObj);

  if (curInputIsLoading || curInputObjIsLoading) {
    return <div>loading.</div>;
  }
  if (isNumericInput(curInputObj)) {
    return (
      <div className="submit-item">
        <div className="submit-title">{curInputObj.labelText}:</div>
        <div className="submit-details">
          {curInput} {curInputObj.units}
        </div>
      </div>
    );
  }
  return (
    <div className="submit-item">
      <div className="submit-title">{curInputObj.labelText}: </div>
      <div className="submit-details">{curInput}</div>
    </div>
  );
};

export default SubmitItemComponent;
