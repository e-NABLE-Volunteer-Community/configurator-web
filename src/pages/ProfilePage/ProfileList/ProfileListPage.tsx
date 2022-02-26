import { VFC } from "react";
import { useProfiles } from "../../../core/stores/app";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonTitle,
  IonToolbar,
  IonInput,
  IonPage,
  IonFabButton,
  IonFab,
} from "@ionic/react";
import {
  arrowBackOutline,
  funnelOutline,
  filterCircleOutline,
} from "ionicons/icons";

import { Profile } from "../../../core/profile-types";
import { useHistory } from "react-router-dom";
import { addOutline } from "ionicons/icons";
import "../ProfileList/profile-list.scss";
import ProfileItem from "../../../components/profile-item/ProfileItem";
import HeaderBig from "../../../components/header/HeaderBig";

const NewProfileItem: VFC = () => {
  const history = useHistory();
  const key = "new-profile";
  const thisUrl = `/profiles/new`;
  const onClick = () => history.push(thisUrl);
  return (
    <IonItem key={key} onClick={onClick}>
      <div style={{ display: "flex" }}>
        <div>
          <IonItem>
            <IonToolbar>
              <IonButtons>
                <IonButton onClick={() => history.push("/profiles/new")}>
                  <IonIcon icon={addOutline} style={{ marginRight: "1rem" }} />
                  <IonLabel>Create New Profile</IonLabel>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonItem>
          <div>
            <IonImg />
          </div>
        </div>
      </div>
    </IonItem>
  );
};

const ProfileListPage: VFC = () => {
  const profiles = useProfiles();
  const history = useHistory();
  const newProfileUrl = "/profiles/new";
  const profileUrl = "/profiles/p/";
  const onProfileClick = (profile: Profile) =>
    history.push(profileUrl + profile.profileId);

  const onNewProfileClick = () => history.push(newProfileUrl);

  return (
    <IonPage id="profile-list-page">
      <HeaderBig title="People" />
      <IonContent className="profile-list__">
        <IonList lines="inset">
          {profiles.map((profile) => (
            <div key={profile.profileId}>
              <ProfileItem
                profile={profile}
                onProfileClick={() => onProfileClick(profile)}
              />
            </div>
          ))}
        </IonList>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={onNewProfileClick} color="primary">
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
export default ProfileListPage;
