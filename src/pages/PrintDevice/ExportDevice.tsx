import { IonButton, IonContent, IonPage } from "@ionic/react";
import { VFC } from "react";
import HeaderSmall from "../../components/header/HeaderSmall";
import { exportDevicePath } from "../../routes";
import "../PrintDevice/print-device.scss";

const ExportDevice: VFC = () => {
  return (
    <IonPage className="print-device__">
      <HeaderSmall></HeaderSmall>
      <IonContent className="device-details-container">
        <h1 className="device-content">Exporting....</h1>
        <div className="device-next-button-container">
          <IonButton
            className="device-next-button"
            color="primary"
            routerLink={exportDevicePath}
          >
            Next
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ExportDevice;
