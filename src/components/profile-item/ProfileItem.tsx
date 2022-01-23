import { IonItem, IonImg } from "@ionic/react";
import { MouseEventHandler, VFC } from "react";
import { useHistory } from "react-router";
import { Profile } from "../../core/profile-types";
import "../profile-item/profile-item.scss";

export type ProfileItem = {
  profile: Profile;
  onProfileClick: MouseEventHandler;
};

const ProfileItem: VFC<ProfileItem> = ({ profile, onProfileClick }) => {
  const key = profile.profileId;
  return (
    <IonItem
      key={key}
      onClick={onProfileClick}
      className="profile-list-item-base"
    >
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

export default ProfileItem;
