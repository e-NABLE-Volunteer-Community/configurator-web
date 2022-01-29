import { VFC } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useActiveProfile } from "../../../core/hooks/profiles";
import { isLoading } from "../../../core/stores/utils";

import "../../../theme/header.scss";
import "../ProfileDetails/profile-details.scss";
import { MeasurementSet } from "../../../core/configurator-types";
import { Device } from "../../../core/onshape-types";
import { useHistory } from "react-router";

import { capitalizeFirstLetter } from "../../../core/util/string-manipulation";

import Header from "../../../components/header/header";
import DeviceItem from "../../../components/device-item/device-item";
import MeasurementSetItem from "../../../components/measurement-set-item/measurement-set-item";

const ProfileDetails: VFC = () => {
  const history = useHistory();
  const onNewMeasurementClick = () => history.push("/measurements");
  const onNewDeviceClick = () => history.push("/devices");

  const onMeasSetClick = (measurementSet: MeasurementSet) =>
    history.push(history.location.pathname + `/m${measurementSet.id}`);

  const activeProfile = useActiveProfile();
  if (isLoading(activeProfile) || !activeProfile) return <>Loading...</>;
  return (
    <>
      <IonPage>
        <Header title={activeProfile.name} backUrl="/profiles"></Header>
        <IonContent>
          <div className="profile-info-container">
            <div className="profile-image">
              <IonImg src={activeProfile.profileImageUrl} />
            </div>
            <div className="info-container">
              <div className="info-item">
                <div className="info-header">Location</div>
                <div className="info-text">$location</div>
              </div>
              <div className="info-item">
                <div className="info-header">Date Created</div>
                <div className="info-text">$date created</div>
              </div>
            </div>
          </div>
          <div className="items-container">
            <div className="profile-item-header">Measurements</div>
            <IonButton
              fill="solid"
              color="tertiary"
              className="profile-item-button"
              onClick={onNewMeasurementClick}
            >
              add new measurement set
            </IonButton>
            {activeProfile.measurements.map((measSet) => (
              <MeasurementSetItem
                key={measSet.id}
                measurementSet={measSet}
                onMeasSetClick={() => onMeasSetClick}
              />
            ))}
          </div>
          <div className="items-container">
            <div className="profile-item-header">Prosthetic Devices</div>
            <IonButton
              fill="solid"
              color="tertiary"
              className="profile-item-button"
              onClick={onNewDeviceClick}
            >
              add new device
            </IonButton>
            {activeProfile.devices.map((d) => (
              <div key={d.documentId}>
                <DeviceItem
                  key={d.documentId}
                  device={d}
                  onDeviceItemClick={onNewDeviceClick}
                ></DeviceItem>
              </div>
            ))}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default ProfileDetails;
// function MeasurementSetItem(
//   MeasurementSetItem: any
// ):
//   | string
//   | number
//   | boolean
//   | {}
//   | import("react").ReactElement<
//       any,
//       string | import("react").JSXElementConstructor<any>
//     >
//   | import("react").ReactNodeArray
//   | import("react").ReactPortal
//   | null
//   | undefined {
//   throw new Error("Function not implemented.");
// }
