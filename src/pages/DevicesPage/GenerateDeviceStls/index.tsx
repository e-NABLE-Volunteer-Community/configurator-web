import { VFC } from "react";
import { useHistory } from "react-router-dom";
import { useGeneratingDevice } from "../../../core/hooks/devices";
import {
  MeasurementSet,
  MeasurementSetId,
} from "../../../core/configurator-types";
import * as R from "ramda";
import { BaseMeasurementsList } from "../../MeasurementsPage/MeasurementsList";
import { isLoading } from "../../../core/stores/utils";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Device } from "../../../core/onshape-types";
import { useApp, useMeasurementSets } from "../../../core/stores/app";

type SelectMeasurementsProps = { device: Device };
const SelectMeasurements: VFC<SelectMeasurementsProps> = ({ device }) => {
  const history = useHistory();
  const newUrl = `/measurements/new?forDevice=[${device.workspaceId},${device.workspaceId}]`;
  const onNew = () => history.push(newUrl);
  const itemUrl = (m: MeasurementSet) =>
    `/devices/d/${device.documentId}/w/${device.workspaceId}/generate?m=${m.id}`;
  const onItem = R.compose(history.push, itemUrl);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select Measurements</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/devices" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <BaseMeasurementsList onNewClicked={onNew} onItemClicked={onItem} />
    </>
  );
};

type ConfirmGenerateProps = {
  device: Device;
  measurementSetId: MeasurementSetId;
};
const ConfirmGenerate: VFC<ConfirmGenerateProps> = ({
  device,
  measurementSetId,
}) => {
  const measurementSets = useMeasurementSets();
  const download = useApp(R.prop("download"));

  if (isLoading(measurementSets)) return <>Loading...</>; // TODO: Loading
  const measurementSet = measurementSets.find(R.propEq("id", measurementSetId));
  if (!measurementSet)
    throw new Error("No measurement set with ID: " + measurementSetId);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Confirm Your Selections</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/devices" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div>
            <IonText>Device: {device.name}</IonText>
          </div>
          <div>
            <IonText>Measurements: {measurementSet.name}</IonText>
          </div>
          <IonButton onClick={() => download(device)}>Generate STLs</IonButton>
        </div>
      </IonContent>
    </>
  );
};

const GenerateDeviceStls: VFC = () => {
  const history = useHistory();
  const device = useGeneratingDevice();

  if (isLoading(device)) return <>Loading...</>; // TODO: Loading

  const params = new URLSearchParams(history.location.search);
  const measurementSetId = params.get("m");
  if (!measurementSetId) return <SelectMeasurements device={device} />;
  return (
    <ConfirmGenerate device={device} measurementSetId={measurementSetId} />
  );
};
export default GenerateDeviceStls;
