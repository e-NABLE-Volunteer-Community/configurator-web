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

const ProfileListItem: VFC<Profile> = (profile) => {
  const history = useHistory();

  const key = profile.profileId;
  const thisUrl = `/profiles/p/${profile.profileId}`;
  const onClick = () => history.push(thisUrl);
  return (
    <IonItem key={key} onClick={onClick} className="profile-list-item-base">
      <div className="profile-list-item">
        <IonImg className="profile-image" src={profile.profileImageUrl} />
        <div className="profile-info">
          <h5>{profile.name}</h5>
          <div className="profile-measurement-count">3 measurements</div>
          <div className="profile-location">location</div>
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
  const history = useHistory();
  const newProfileUrl = "/profiles/new";
  const onNewProfileClick = () => history.push(newProfileUrl);
  if (isLoading(profiles)) return <>Loading...</>; // TODO: Loading

  return (
    <>
      <IonHeader className="people-header">
        <div className="home-container">
          <IonIcon
            icon={arrowBackOutline}
            color={"light"}
            className="back-arrow"
          />
          <div>home</div>
        </div>
        <div className="header-items">
          <div className="header-text">People</div>
          <div>
            <IonInput
              placeholder=" Search for someone..."
              className="people-search"
            ></IonInput>
          </div>
          <div className="sort-filter-row">
            <div className="sort-filter-item">
              <IonIcon icon={funnelOutline} />
              <div>Sort</div>
            </div>
            <div className="sort-filter-item">
              <IonIcon icon={filterCircleOutline} />
              <div>Filter</div>
            </div>
          </div>
        </div>
      </IonHeader>

      <IonContent>
        <div className="list-container">
          <IonList lines="none">{profiles.map(ProfileListItem)}</IonList>{" "}
        </div>
        <div className="list-spacer"></div>
        <IonButton
          fill="solid"
          color="tertiary"
          className="add-new-person"
          onClick={onNewProfileClick}
        >
          + add new person
        </IonButton>
      </IonContent>
    </>
  );
};
export default ProfileList;
