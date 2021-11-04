import { VFC } from "react";
import { useDevices } from "../../core/stores/app";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Device } from "../../core/onshape-types";
import { useHistory } from "react-router-dom";
import { isLoading } from "../../core/stores/utils";

const DeviceListItem: VFC<Device> = (device) => {
  const history = useHistory();

  const key = device.documentId + "-" + device.workspaceId;
  const thisUrl = `/devices/d/${device.documentId}/w/${device.workspaceId}`;
  const onClick = () => history.push(thisUrl);

  return (
    <IonItem key={key} onClick={onClick}>
      {device.name}
    </IonItem>
  );
};
const DeviceList: VFC = () => {
  const devices = useDevices();
  if (isLoading(devices)) return <>Loading...</>; // TODO: Loading

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
