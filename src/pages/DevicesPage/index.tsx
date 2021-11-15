import { VFC } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { IfMobile, IfNotMobile } from "../../components/responsive/breakpoints";
import { MobileView } from "./DevicesMobileView";
import { TabletDesktopView } from "./DevicesFullView";

export const devicePath = "/devices/d/:documentId/w/:workspaceId";
export const generatePath = devicePath + "/generate";
export const watchExportPath = devicePath + "/status";

const DevicesPage: VFC = () => {
  return (
    <IonPage>
      <IfNotMobile>
        <TabletDesktopView />
      </IfNotMobile>
      <IfMobile>
        <MobileView />
      </IfMobile>
    </IonPage>
  );
};
export default DevicesPage;
