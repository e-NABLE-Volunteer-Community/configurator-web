import { VFC } from "react";
import { useDevices } from "../../core/stores/app";
import {
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonList,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { Device } from "../../core/types/bill-of-materials.types.new";

const DeviceListItem: VFC<Device> = (device) => {
  const history = useHistory();

  const key = device.documentId + "-" + device.workspaceId;
  const thisUrl = `/devices/d/${device.documentId}/w/${device.workspaceId}`;
  const onClick = () => history.push(thisUrl);

  return (
    <IonItem key={key} onClick={onClick}>
      <div style={{ display: "flex" }}>
        <IonImg src="assets/300x300.png" style={{ marginRight: "1rem" }} />
        <div>
          <div style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
            <IonText>
              <h5>{device.name}</h5>
            </IonText>
          </div>
          <div>
            <IonImg src="assets/Unlimbited Phoenix.jpg" />
          </div>
        </div>
      </div>
    </IonItem>
  );
};

const DeviceList: VFC = () => {
  const devices = useDevices();

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Devices</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>{devices.map(DeviceListItem)}</IonList>
      </IonContent>
    </>
  );
};
export default DeviceList;
