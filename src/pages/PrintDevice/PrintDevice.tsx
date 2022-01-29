import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { VFC } from "react";
import { Route, useHistory, useRouteMatch } from "react-router";
import ScrollHeader from "../../components/header/scroll-header";
import ProfileItem from "../../components/profile-item/ProfileItem";
import { Profile } from "../../core/profile-types";
import { useProfiles } from "../../core/stores/app";
import { isLoading, Loading } from "../../core/stores/utils";
import "../PrintDevice/print-device.scss";
import PrintDeviceSelectArm from "./SelectArm";

const PrintDevice: VFC = () => {
  return (
    <IonContent>
      <ScrollHeader backUrl="/home" />
      <Route path="/print-device" exact component={PrintDeviceSelectProfile} />
      <Route
        path="/print-device/p/:profileId"
        exact
        component={PrintDeviceSelectArm}
      />
    </IonContent>
  );
};

const PrintDeviceSelectProfile: VFC = () => {
  const history = useHistory();
  const profiles = useProfiles();
  const profileDevice = `/print-device/p/`;
  const onProfileClick = (profile: Profile) =>
    history.push(profileDevice + profile.profileId);

  if (isLoading(profiles)) return <div>loading...</div>;
  return (
    <IonContent className="print-device-container">
      <IonCard className="print-device-profile-card">
        <h1 className="print-device-profile-header">
          Select who you want to create a device for
        </h1>
        <IonContent>
          <IonList lines="none">
            {profiles.map((profile) => (
              <div key={profile.profileId}>
                <ProfileItem
                  profile={profile}
                  onProfileClick={() => onProfileClick(profile)}
                />
              </div>
            ))}
          </IonList>
        </IonContent>
      </IonCard>
    </IonContent>
  );
};

export default PrintDevice;
