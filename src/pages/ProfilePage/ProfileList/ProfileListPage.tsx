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
} from "@ionic/react";
import {
  arrowBackOutline,
  funnelOutline,
  filterCircleOutline,
} from "ionicons/icons";

import { Profile } from "../../../core/profile-types";
import { useHistory } from "react-router-dom";
import { isLoading } from "../../../core/stores/utils";
import { addOutline } from "ionicons/icons";
import "../ProfileList/profile-list.scss";
import ProfileItem from "../../../components/profile-item/ProfileItem";
import HeaderBig from "../../../components/header/header-big";

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
  if (isLoading(profiles)) return <>Loading...</>; // TODO: Loading

  return (
    <IonPage>
      <HeaderBig title="People" />

      <IonContent className="profile-list__">
        <div className="list-container">
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
        </div>
        <div className="list-spacer"></div>
        {/* the heck does that spacer do? nothing happens if I remove it... */}
        <IonButton
          fill="solid"
          color="tertiary"
          className="add-new-person"
          onClick={onNewProfileClick}
        >
          + add new person
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default ProfileListPage;
