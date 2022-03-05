import { IonContent, IonPage } from "@ionic/react";
import { VFC } from "react";
import "../PrintDevice/print-device.scss";

const MeasurementCheck: VFC = () => {
  return (
    <IonPage>
      <IonContent className="device-details-container">
        <h1 className="device-content">Checking Measurements...</h1>
        <div className="device-next-button-container"></div>
      </IonContent>
    </IonPage>
  );
};

export default MeasurementCheck;
