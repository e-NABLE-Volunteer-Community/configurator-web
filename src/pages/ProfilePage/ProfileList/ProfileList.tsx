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
import ProfileItem from "../../../components/profile-item/ProfileItem";

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
  const homeUrl = "/home";
  const newProfile = `/profiles/new`;
  const profileUrl = "/profiles/p/";
  const onProfileClick = (profile: Profile) =>
    history.push(profileUrl + profile.profileId);

  const onNewProfileClick = () => history.push(newProfileUrl);
  const onHomeClick = () => history.push(homeUrl);
  if (isLoading(profiles)) return <>Loading...</>; // TODO: Loading

  return (
    <>
      <IonHeader className="people-header">
        <div className="home-container">
          <IonIcon
            icon={arrowBackOutline}
            color={"light"}
            className="back-arrow"
            onClick={onHomeClick}
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
          <IonList lines="none">
            {profiles.map((profile) => (
              <ProfileItem
                profile={profile}
                onProfileClick={() => onProfileClick(profile)}
              />
            ))}
          </IonList>
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
