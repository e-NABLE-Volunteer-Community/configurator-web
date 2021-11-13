import { IonRange, IonInput, IonLabel } from "@ionic/react";
import { useEffect, useState, VFC } from "react";
import { SliderInput } from "../../../../core/view-measurement-types";

import "./input.css";
import { InputProps } from "../measurement-input";
import { useUpdateNewMeasurementSet } from "../../../../core/stores/app";

type SliderInputProps = InputProps<SliderInput>;
const SliderInputComponent: VFC<SliderInputProps> = ({ input }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="input-base">
      Slider Input
      <IonInput>
        <div className="input-container">
          <IonRange
            className="range-container"
            min={input.inputRange.lowerBound}
            max={input.inputRange.upperBound}
            color="secondary"
            pin={true}
            value={value}
            onIonChange={(e) => setValue(e.detail.value as number)}
          >
            <IonLabel slot="end">{input.units}</IonLabel>
          </IonRange>
        </div>
      </IonInput>
    </div>
  );
};

export default SliderInputComponent;
