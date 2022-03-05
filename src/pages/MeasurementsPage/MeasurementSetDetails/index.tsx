import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
} from "@ionic/react";
import { VFC } from "react";
import { Route, useHistory } from "react-router-dom";
import DeviceItem from "../../../components/device-item/device-item";
import { MeasurementSet } from "../../../core/configurator-types";
import { useProfileMeasurementSet } from "../../../core/hooks/measurements";
import { useActiveProfile } from "../../../core/hooks/profiles";
import "../MeasurementSetDetails/measurement-set-details.scss";
import HeaderSmall from "../../../components/header/HeaderSmall";
import { profileDetailsPathForProfile, profilesPath } from "../../../routes";
import * as R from "ramda";
import MeasurementCard from "../../../components/measurement-card/MeasurementCard";
import MeasurementGrid from "../../../components/measurement-grid/MeasurementGrid";
import { arrowForward } from "ionicons/icons";

const MeasurementSetDetailsPage: VFC<MeasurementSet> = () => {
  const profileMeasurementSet = useProfileMeasurementSet();
  const activeProfile = useActiveProfile();
  const history = useHistory();
  const onNewMeasurementClick = () => history.push("/measurements");

  const onDeviceItemClick = () => history.push("d/");

  if (!profileMeasurementSet) throw new Error(); // TODO
  if (!activeProfile) throw new Error(); // TODO

  return (
    <IonPage>
      <HeaderSmall backUrl={profileDetailsPathForProfile(activeProfile)} />
      <IonContent>
        <div className="measurement-set-details-container">
          <h2>Measurements for {profileMeasurementSet.name}</h2>
          {/*TODO: Handle no measurements*/}
          <MeasurementGrid
            measurements={profileMeasurementSet.data.slice(0, 2)}
          />
          {profileMeasurementSet.data.length > 2 && (
            <div className="view-all">
              <IonButton fill="clear">
                View all
                <IonIcon icon={arrowForward} slot="end" />
              </IonButton>
            </div>
          )}
          <IonButton
            fill="solid"
            color="primary"
            className="profile-item-button"
            onClick={onNewMeasurementClick}
            expand="full"
          >
            add new measurement
          </IonButton>

          <h2>Prosthetic devices for {profileMeasurementSet.name}</h2>
          {profileMeasurementSet.associatedDevices.map((ad) => (
            <DeviceItem
              device={ad.device}
              onDeviceItemClick={onDeviceItemClick}
              key={ad.device.documentId}
            />
          ))}
          <IonButton
            fill="solid"
            color="primary"
            className="profile-item-button"
            expand="full"
          >
            add new device
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MeasurementSetDetailsPage;
