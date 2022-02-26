import { VFC } from "react";
import { useActiveDevice } from "../../core/hooks/devices";
import { Route, useHistory } from "react-router-dom";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import GenerateDeviceStls from "./GenerateDeviceStls";
import { devicePath, generatePath, watchExportPath } from "./index";
import { IfMobile } from "../../components/responsive/breakpoints";
import ExportDeviceProgress from "./GenerateDeviceStls/ExportDeviceProgress";

const DeviceDetailsContent: VFC = () => {
  const active = useActiveDevice();
  const history = useHistory();

  if (!active) return <>Pick a device</>; // TODO

  const generateUrl = `/devices/d/${active.documentId}/w/${active.workspaceId}/generate`;
  const generate = () => history.push(generateUrl);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select a Device</IonTitle>
          <IfMobile>
            {active && (
              <IonButtons slot="start">
                <IonBackButton defaultHref="/devices" />
              </IonButtons>
            )}
          </IfMobile>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <IonTitle>{active.name}</IonTitle>

          <IonImg
            src="assets/300x300.png"
            style={{
              width: 300,
              height: 300,
            }}
          />

          <IonButton onClick={generate}>
            Generate STLs From Measurements
          </IonButton>
        </div>
      </IonContent>
    </>
  );
};

const DeviceDetails: VFC = () => {
  return (
    <>
      <Route path={devicePath} exact component={DeviceDetailsContent} />
      <Route path={generatePath} exact component={GenerateDeviceStls} />
      <Route path={watchExportPath} exact component={ExportDeviceProgress} />
    </>
  );
};
export default DeviceDetails;
