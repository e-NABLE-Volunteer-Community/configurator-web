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

const ProfileDetails: VFC = () => {
  const history = useHistory();
  const onNewMeasurementClick = () => history.push("/measurements");
  const onNewDeviceClick = () => history.push("/devices");
  const activeProfile = useActiveProfile();
  if (isLoading(activeProfile) || !activeProfile) return <>Loading...</>;
  return (
    <>
      <IonPage>
        <IonHeader className="small-header">
          <IonToolbar>
            <IonTitle>{activeProfile.name}</IonTitle>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/profiles" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
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
            {activeProfile.measurements.map(MeasurementItem)}
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
            {activeProfile.devices.map(DeviceItem)}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

const MeasurementItem: VFC<MeasurementSet> = (
  measurementSet: MeasurementSet
) => {
  return (
    <div className="profile-item-card">
      <div>img</div>
      <div className="card-details">
        <div>{measurementSet.type}</div>
        <div>meas details</div>
      </div>
      <div>{measurementSet.modifiedAt.toDateString()}</div>
    </div>
  );
};

const DeviceItem: VFC<Device> = (device: Device) => {
  return <div>DEV</div>;
};
export default ProfileDetails;
