import { IonContent, IonPage } from "@ionic/react";
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

const PrintDeviceDeviceDetails: VFC = () => {
  const device = useActivePrintDevice();
  const history = useHistory();
  const onDeviceDetailsClick = (device: Device) => history.push("123123");
  if (isLoading(device) || !device) return <div>loading...</div>;
  return (
    <IonPage>
      <HeaderSmall backUrl="/home" />
      <IonContent className="device-details-container">
        <h1 className="device-content">{device.name}</h1>
        <p className="device-content">{device.description}</p>
        <div className="image-container"></div>
        <h5 className="device-content">Materials</h5>
        <p className="device-content"> lorem i[sepomsdg;lsdgf;ljsg</p>
        <h5 className="device-content">Designers</h5>
        <p className="device-content">ben and jeff and some other guys</p>
      </IonContent>
    </IonPage>
  );
};

export default PrintDeviceDeviceDetails;
