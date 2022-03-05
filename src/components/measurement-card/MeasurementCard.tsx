import { VFC } from "react";
import { IonCard, IonCardContent, IonCheckbox, IonContent } from "@ionic/react";
import "./measurement-card.scss";
import { Measurement } from "../../core/configurator-types";

type MeasurementCardProps = {
  isChecked: boolean;
  measurement: Measurement;
};
const MeasurementCard: VFC<MeasurementCardProps> = ({
  isChecked,
  measurement,
}) => {
  return (
    <IonCard className="measurement-card">
      <IonCardContent>
        <p className="body-large">Name</p>
        <p className="body-medium">Value</p>
        <p className="info">Date</p>
      </IonCardContent>
      <IonCheckbox checked={isChecked} />
    </IonCard>
  );
};
export default MeasurementCard;
