import { VFC } from "react";
import { IonButton, IonContent, IonImg, IonPage } from "@ionic/react";
import { useActiveProfile } from "../../../core/hooks/profiles";

import "../../../components/header/header.scss";
import "../ProfileDetails/profile-details.scss";
import { MeasurementSet } from "../../../core/configurator-types";
import { useHistory } from "react-router";

import DeviceItem from "../../../components/device-item/device-item";
import MeasurementSetItem from "../../../components/measurement-set-item/measurement-set-item";
import HeaderSmall from "../../../components/header/HeaderSmall";
import { newMeasurementSetPathForProfile } from "../../../routes";

const ProfileDetailsPage: VFC = () => {
  const history = useHistory();

  const onNewDeviceClick = () => history.push("/devices");

  const onMeasSetClick = (measurementSet: MeasurementSet) =>
    history.push(history.location.pathname + `/m${measurementSet.id}`);

  const activeProfile = useActiveProfile();
  if (!activeProfile) throw new Error(); // TODO

  return (
    <IonPage>
      <HeaderSmall title={activeProfile.name} backUrl="/profiles" />
      <IonContent className="profile-details__">
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
            routerLink={newMeasurementSetPathForProfile(
              activeProfile.profileId
            )}
            routerDirection="forward"
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
              />
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProfileDetailsPage;
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
