import { IonContent, IonPage, IonButton } from "@ionic/react";
import { VFC } from "react";
import { useHistory } from "react-router";
import "../PrintDevice/print-device.scss";
import { useActivePrintDevice } from "../../core/hooks/devices";
import { Device } from "../../core/onshape-types";
import HeaderSmall from "../../components/header/HeaderSmall";
import React from "react";
import {
  printDeviceDetailsForPrintPath,
  printDeviceMeasurementCheck,
} from "../../routes";

const PrintDeviceDeviceDetails: VFC = () => {
  var device = useActivePrintDevice();
  if (!device) throw new Error("No device");

  const history = useHistory();
  const onDeviceNextClick = () =>
    history.push(history.location.pathname + "/meas-check");

  return (
    <IonPage className="print-device__">
      <HeaderSmall backUrl="/home" />
      <IonContent className="device-details-container">
        <h1 className="device-content">{device.name}</h1>
        <p className="device-content">{device.description}</p>
        <div className="image-container"></div>
        <h5 className="device-content">Materials</h5>
        <p className="device-content"> lorem i[sepomsdg;lsdgf;ljsg</p>
        <h5 className="device-content">Designers</h5>
        <p className="device-content">ben and jeff and some other guys</p>
        <div className="device-next-button-container">
          <IonButton
            className="device-next-button"
            color="primary"
            routerLink={printDeviceDetailsForPrintPath("5627", "123", "1234")}
            onClick={() =>
              console.log(printDeviceDetailsForPrintPath("5627", "123", "1234"))
            }
          >
            Next
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PrintDeviceDeviceDetails;
