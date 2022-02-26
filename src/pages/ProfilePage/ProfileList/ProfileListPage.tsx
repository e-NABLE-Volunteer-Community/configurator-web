import { VFC } from "react";
import { useProfiles } from "../../../core/stores/app";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "../ProfileList/profile-list.scss";
import HeaderBig from "../../../components/header/HeaderBig";
import ProfileItem from "./ProfileItem";

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
  const onNewProfileClick = () => history.push(newProfileUrl);

  return (
    <IonPage id="profile-list-page">
      <HeaderBig
        title="People"
        subtitle="View and create people in order to add and edit measurements"
      />
      <IonContent className="profile-list__">
        <IonList lines="inset">
          {profiles.map((profile) => (
            <ProfileItem profile={profile} key={profile.profileId} />
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
