import { IonContent, IonPage } from "@ionic/react";
import { VFC } from "react";
import { useHistory } from "react-router";
import { isLoading } from "../../core/stores/utils";
import "../PrintDevice/print-device.scss";
import DeviceDetails from "../../components/device-details/DeviceDetails";
import { useActiveDevice } from "../../core/hooks/devices";
import { Device } from "../../core/onshape-types";
import HeaderSmall from "../../components/header/HeaderSmall";

const PrintDeviceDeviceDetails: VFC = () => {
  const device = useActiveDevice();
  const history = useHistory();
  const onDeviceDetailsClick = (device: Device) => history.push("123123");
  if (isLoading(device) || !device) return <div>loading...</div>;
  return (
    <IonPage>
      <HeaderSmall />
      <IonContent>
        <h1>Confirm Device</h1>
        <DeviceDetails
          device={device}
          onDeviceDetailsClick={() => onDeviceDetailsClick(device)}
        />
      </IonContent>
    </IonPage>
  );
};

export default PrintDeviceDeviceDetails;
