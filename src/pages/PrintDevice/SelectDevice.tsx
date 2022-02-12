import { IonContent, IonPage } from "@ionic/react";
import { VFC } from "react";
import { useHistory, useRouteMatch } from "react-router";
import DeviceItem from "../../components/device-item/device-item";
import ScrollHeader from "../../components/header/scroll-header";
import MeasurementSetItem from "../../components/measurement-set-item/measurement-set-item";
import { MeasurementSet } from "../../core/configurator-types";
import { useProfilePrintDevice } from "../../core/hooks/profiles";
import { Device } from "../../core/onshape-types";
import { useDevices, useProfiles } from "../../core/stores/app";
import { isLoading } from "../../core/stores/utils";

const PrintDeviceSelectDevice: VFC = () => {
  const devices = useDevices();
  const history = useHistory();
  const onDevDetailsClick = (device: Device) =>
    history.push(history.location.pathname + `/d/` + device.documentId);

  if (isLoading(devices)) return <div>Loading..</div>;
  return (
    <IonPage>
      <ScrollHeader backUrl="/home" />
      <IonContent>
        <h1 className="print-device-profile-header">
          Which device would you like to print?
        </h1>
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
