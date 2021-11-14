import { useEffect, useState, VFC } from "react";
import {
  useValueForUseMeasurement,
  useViewMeasurementsFor,
} from "../../../../core/stores/app";
import { isLoading } from "../../../../core/stores/utils";

type SubmitItemProps = { formIndex: number; inputIndex: number };
const SubmitItemComponent: VFC<SubmitItemProps> = ({
  formIndex,
  inputIndex,
}) => {
  const curInput = useValueForUseMeasurement(formIndex, inputIndex);
  const curInputIsLoading = isLoading(curInput);
  if (curInputIsLoading) {
    return <div>loading.</div>;
  }
  return <div>{curInput}</div>;
};

export default SubmitItemComponent;
