import { IonButton, IonContent, IonPage } from "@ionic/react";
import { VFC } from "react";
import { useHistory } from "react-router";
import "../PrintDevice/print-device.scss";
import { useActivePrintDevice } from "../../core/hooks/devices";
import { Device } from "../../core/onshape-types";
import HeaderSmall from "../../components/header/HeaderSmall";

const MeasurementCheck: VFC = () => {
  const device = useActivePrintDevice();
  const history = useHistory();
  const onDeviceDetailsClick = (device: Device) => history.push("123123");
  const onDeviceNextClick = () =>
    history.push(history.location.pathname + "/meas-check");
  if (!device) return <div>loading...</div>;
  return (
    <IonPage>
      <HeaderSmall backUrl="/home" />
      <IonContent className="device-details-container">
        <h1 className="device-content">Checking Measurements...</h1>
        <div className="device-next-button-container">
          <IonButton
            className="device-next-button"
            color="tertiary"
            onClick={onDeviceNextClick}
          >
            Next
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MeasurementCheck;
