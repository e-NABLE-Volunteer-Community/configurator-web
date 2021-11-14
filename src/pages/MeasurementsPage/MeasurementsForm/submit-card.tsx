import { IonInput, IonItem, IonLabel, IonText } from "@ionic/react";
import { useState, VFC } from "react";
import { MeasurementInput } from "../../../core/view-measurement-types";

// Refactor to a store, not a constant for i18n reasons
const textForProblem = (): string => "Must be a number";

const SubmitComponent: VFC<MeasurementInput> = (props) => {
  const [value, setValue] = useState<string | null>(null);

  return <div>SUBMIT TO MY WRATH</div>;
};

export default SubmitComponent;
