import { IonRange, IonInput, IonLabel } from "@ionic/react";
import { useState, VFC } from "react";
import { SliderInput } from "../../../../core/view-measurement-types";

import "./input.css";

type SliderInputProps = { input: SliderInput };

const SliderInputComponent: VFC<SliderInputProps> = (props) => {
  const [value, setValue] = useState(0);

  return (
    <div className="input-base">
      Slider Input
      <IonInput>
        <div className="input-container">
          <IonRange
            className="range-container"
            min={props.input.inputRange.lowerBound}
            max={props.input.inputRange.upperBound}
            color="secondary"
            pin={true}
            value={value}
            onIonChange={(e) => setValue(e.detail.value as number)}
          >
            <IonLabel slot="end">{props.input.units}</IonLabel>
          </IonRange>
        </div>
      </IonInput>
    </div>
  );
};

export default SliderInputComponent;
