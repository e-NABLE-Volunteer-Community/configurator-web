import { IonButton, IonPage } from "@ionic/react";
import { VFC } from "react";
import { Route, useHistory } from "react-router-dom";
import DeviceItem from "../../../components/device-item/device-item";
import MeasurementItem from "../../../components/measurement-item/measurement-item";
import { MeasurementSet } from "../../../core/configurator-types";
import { useProfileMeasurementSet } from "../../../core/hooks/measurements";
import { useActiveProfile } from "../../../core/hooks/profiles";
import { isLoading, Loading } from "../../../core/stores/utils";
import "../MeasurementSetDetails/measurement-set-details.scss";
import HeaderSmall from "../../../components/header/HeaderSmall";
import { profilesPath } from "../../../routes";

const MeasurementSetDetailsPage: VFC<MeasurementSet> = () => {
  const profileMeasurementSet = useProfileMeasurementSet();
  const activeProfile = useActiveProfile();
  const history = useHistory();
  const onNewMeasurementClick = () => history.push("/measurements");

  const onDeviceItemClick = () => history.push("d/");

  if (
    !profileMeasurementSet ||
    !activeProfile ||
    isLoading(profileMeasurementSet) ||
    isLoading(activeProfile)
  )
    return <div>loading</div>;

  return (
    <IonPage>
      <HeaderSmall
        title={activeProfile.name + "'s " + profileMeasurementSet.name}
        backUrl={profilesPath}
      />

      <div className="measurement-set-items-container">
        <div className="titlez">
          Measurements for {profileMeasurementSet.name}
        </div>
        <IonButton
          fill="solid"
          color="tertiary"
          className="profile-item-button"
          onClick={onNewMeasurementClick}
        >
          add new measurement
        </IonButton>
        {profileMeasurementSet.data.map((measurementItem) => (
          <MeasurementItem {...measurementItem} key={measurementItem.id} />
        ))}
      </div>
      <div className="measurement-set-items-container">
        <div className="title">
          Prosthetic devices for {profileMeasurementSet.name}
        </div>
        <IonButton
          fill="solid"
          color="tertiary"
          className="profile-item-button"
        >
          add new device
        </IonButton>
        {profileMeasurementSet.associatedDevices.map((ad) => (
          <DeviceItem
            device={ad.device}
            onDeviceItemClick={onDeviceItemClick}
            key={ad.device.documentId}
          />
        ))}
      </div>
    </IonPage>
  );
};

export default MeasurementSetDetailsPage;
