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
import Header from "../../../components/responsive/header/header";

const ProfileDetails: VFC = () => {
  const history = useHistory();
  const onNewMeasurementClick = () => history.push("/measurements");
  const onNewDeviceClick = () => history.push("/devices");

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
  const history = useHistory();

  const thisUrl = history.location.pathname + `/m/${measurementSet.id}`;
  const onClick = () => history.push(thisUrl);

  var details: number | string;
  var unit: string;
  details = "todo";
  unit = "also todo";

  return (
    <div
      key={measurementSet.id}
      className="profile-item-card"
      onClick={onClick}
    >
      <div className="item-image">img</div>
      <div className="card-details">
        <div className="detail-title">
          {capitalizeFirstLetter(measurementSet.type)}
        </div>
        <div className="detail-text">{measurementSet.name}</div>
      </div>
      <div className="item-date">
        {measurementSet.modifiedAt.toDateString()}
      </div>
    </div>
  );
};

const DeviceItem: VFC<Device> = (device: Device) => {
  return (
    <div key={device.documentId} className="profile-item-card">
      <div className="item-image">img</div>
      <div className="card-details">
        <div className="detail-title">{capitalizeFirstLetter(device.name)}</div>
        <div className="detail-text">$deviceNote</div>
      </div>
      <div className="item-date">$modifiedDate</div>
    </div>
  );
};
export default ProfileDetails;
