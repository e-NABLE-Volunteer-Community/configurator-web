import { IonContent, IonList, IonPage } from "@ionic/react";
import { VFC } from "react";
import { useHistory } from "react-router";
import { Profile } from "../../core/profile-types";
import { useProfiles } from "../../core/stores/app";
import "../PrintDevice/print-device.scss";
import ProfileItemCompact from "../../components/profile-item-compact/ProfileItem";
import HeaderSmall from "../../components/header/HeaderSmall";

const PrintDeviceSelectProfile: VFC = () => {
  const history = useHistory();
  const profiles = useProfiles();
  const profileDevice = `/print-device/p/`;
  const onProfileClick = (profile: Profile) =>
    history.push(profileDevice + profile.profileId);

  return (
    <IonPage>
      <HeaderSmall
        backUrl="/home"
        title="dots here"
        subtitle="Who is the device for?"
      />
      <IonContent>
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
      </IonContent>
    </IonPage>
  );
};

export default PrintDeviceSelectProfile;
