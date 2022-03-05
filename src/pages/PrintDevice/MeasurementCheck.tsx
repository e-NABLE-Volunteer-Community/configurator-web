import { IonContent, IonPage, IonButton } from "@ionic/react";
import { VFC } from "react";
import { useHistory } from "react-router";
import { isLoading } from "../../core/stores/utils";
import "../PrintDevice/print-device.scss";
import DeviceDetails from "../../components/device-details/DeviceDetails";
import {
  useActiveDevice,
  useActivePrintDevice,
} from "../../core/hooks/devices";
import { Device } from "../../core/onshape-types";
import HeaderSmall from "../../components/header/header-small";

const MeasurementCheck: VFC = () => {
  const device = useActivePrintDevice();
  const history = useHistory();
  const onDeviceDetailsClick = (device: Device) => history.push("123123");
  const onDeviceNextClick = () =>
    history.push(history.location.pathname + "/meas-check");
  if (isLoading(device) || !device) return <div>loading...</div>;
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
