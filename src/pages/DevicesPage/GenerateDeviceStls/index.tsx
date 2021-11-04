import { VFC } from "react";
import { useHistory } from "react-router-dom";
import { useGeneratingDevice } from "../../../core/hooks/devices";
import { MeasurementSet } from "../../../core/configurator-types";
import * as R from "ramda";
import { BaseMeasurementsList } from "../../MeasurementsPage/MeasurementsList";
import { isLoading } from "../../../core/stores/utils";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const GenerateDeviceStls: VFC = () => {
  const history = useHistory();
  const device = useGeneratingDevice();

  if (isLoading(device)) return <>Loading...</>; // TODO: Loading

  // TODO: Generate for measurements
  // const params = new URLSearchParams(history.location.search);
  // if (params.has('measurements'))

  const newUrl = `/measurements/new?forDevice=[${device.workspaceId},${device.workspaceId}]`;
  const onNew = () => history.push(newUrl);
  const itemUrl = (m: MeasurementSet) =>
    `/devices/d/${device.documentId}/w/${device.workspaceId}/generate?measurements=${m.id}`;
  const onItem = R.compose(history.push, itemUrl);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select One</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/devices" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <BaseMeasurementsList onNewClicked={onNew} onItemClicked={onItem} />
    </>
  );
};
export default GenerateDeviceStls;
