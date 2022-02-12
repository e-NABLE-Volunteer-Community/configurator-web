import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";
import { VFC } from "react";
import { Route, useHistory, useRouteMatch } from "react-router";
import ScrollHeader from "../../components/header/scroll-header";
import ProfileItem from "../../components/profile-item/ProfileItem";
import { Profile } from "../../core/profile-types";
import { useProfiles } from "../../core/stores/app";
import { isLoading, Loading } from "../../core/stores/utils";
import "../PrintDevice/print-device.scss";
import ProfileItemCompact from "../../components/profile-item-compact/ProfileItem";
import Header from "../../components/header/header";

const PrintDeviceSelectProfile: VFC = () => {
  const history = useHistory();
  const profiles = useProfiles();
  const profileDevice = `/print-device/p/`;
  const onProfileClick = (profile: Profile) =>
    history.push(profileDevice + profile.profileId);

  if (isLoading(profiles)) return <div>loading...</div>;
  return (
    <IonPage>
      <Header backUrl="/home" title="test" title2="testeeer" />
      <IonContent>
        <div className="print-device-container">
          <div className="print-device-profile-card">
            {/* <h1 className="print-device-profile-header">
              Select who you want to create a device for
            </h1> */}
            <IonList lines="none">
              {profiles.map((profile) => (
                <div key={profile.profileId}>
                  <ProfileItemCompact
                    profile={profile}
                    onProfileClick={() => onProfileClick(profile)}
                  />
                </div>
              ))}
            </IonList>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PrintDeviceSelectProfile;
