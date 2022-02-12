import { IonContent, IonPage } from "@ionic/react";
import { VFC } from "react";
import { useHistory } from "react-router";
import DeviceItem from "../../components/device-item/device-item";
import HeaderSmall from "../../components/header/header-small";
import { Device } from "../../core/onshape-types";
import { useDevices } from "../../core/stores/app";
import { isLoading } from "../../core/stores/utils";

const PrintDeviceSelectDevice: VFC = () => {
  const devices = useDevices();
  const history = useHistory();
  const onDevDetailsClick = (device: Device) =>
    history.push(history.location.pathname + `/d/` + device.documentId);

  if (isLoading(devices)) return <div>Loading..</div>;
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
            ></DeviceItem>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default PrintDeviceSelectDevice;
