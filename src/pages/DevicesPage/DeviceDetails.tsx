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
import { isLoading } from "../../core/stores/utils";
import GenerateDeviceStls from "./GenerateDeviceStls";
import { devicePath, generatePath } from "./index";
import { IfMobile } from "../../components/responsive/breakpoints";

const DeviceDetailsContent: VFC = () => {
  const active = useActiveDevice();
  const history = useHistory();

  if (isLoading(active)) return <>Loading...</>; // TODO: Loading
  if (!active) return <>Pick a device</>;

  const title = isLoading(active)
    ? "Loading"
    : active?.name ?? "Select a Device";
  const generateUrl = `/devices/d/${active.documentId}/w/${active.workspaceId}/generate`;
  const generate = () => history.push(generateUrl);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
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
          }}
        >
          <IonImg
            src="assets/300x300.png"
            style={{
              width: 300,
              height: 300,
            }}
          />
          <IonTitle>{active.name}</IonTitle>
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
    </>
  );
};
export default DeviceDetails;
