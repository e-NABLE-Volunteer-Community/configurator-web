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
} from "@ionic/react";
import { Profile } from "../../../core/profile-types";
import { useHistory } from "react-router-dom";
import { isLoading } from "../../../core/stores/utils";
import { addOutline } from "ionicons/icons";

const ProfileListItem: VFC<Profile> = (profile) => {
  const history = useHistory();

  const key = profile.profileId;
  const thisUrl = `/profiles/p/${profile.profileId}`;
  const onClick = () => history.push(thisUrl);
  return (
    <IonItem key={key} onClick={onClick}>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
            <IonText>
              <h5>{profile.name}</h5>
            </IonText>
          </div>
          <div>
            <IonImg src={profile.profileImageUrl} />
          </div>
        </div>
      </div>
    </IonItem>
  );
};

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

const ProfileList: VFC = () => {
  const profiles = useProfiles();
  if (isLoading(profiles)) return <>Loading...</>; // TODO: Loading

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profiles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <NewProfileItem />
          {profiles.map(ProfileListItem)}
        </IonList>
      </IonContent>
    </>
  );
};
export default ProfileList;
