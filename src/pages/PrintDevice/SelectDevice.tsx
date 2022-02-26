import { IonContent, IonPage } from "@ionic/react";
import { VFC } from "react";
import { useHistory } from "react-router";
import DeviceItem from "../../components/device-item/device-item";
import { Device } from "../../core/onshape-types";
import { useDevices } from "../../core/stores/app";
import HeaderSmall from "../../components/header/HeaderSmall";

const PrintDeviceSelectDevice: VFC = () => {
  const devices = useDevices();
  const history = useHistory();
  const onDevDetailsClick = (device: Device) =>
    history.push(history.location.pathname + `/d/` + device.documentId);

  return (
    <IonPage>
      <HeaderSmall
        backUrl="/home"
        title="dots here"
        subtitle="Which device would you like to print?"
      />
      <IonContent>
        {devices.map((d) => (
          <div key={d.documentId}>
            <DeviceItem
              device={d}
              onDeviceItemClick={() => onDevDetailsClick(d)}
            />
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default PrintDeviceSelectDevice;
