import { IonItem, IonImg, IonLabel, IonIcon } from "@ionic/react";
import { MouseEventHandler, VFC } from "react";
import { useHistory } from "react-router";
import { Profile } from "../../core/profile-types";
import "../profile-item/profile-item.scss";
import { chevronForwardOutline, link } from "ionicons/icons";

export type ProfileItem = {
  profile: Profile;
  onProfileClick: MouseEventHandler;
};

const ProfileItem: VFC<ProfileItem> = ({ profile, onProfileClick }) => {
  const key = profile.profileId;
  return (
    <IonItem key={key} onClick={onProfileClick}>
      <IonLabel>
        <div className="profile-item-label">
          <IonImg
            className="profile-item-image"
            src={profile.profileImageUrl}
          />
          <div className="profile-item-display">
            <div className="profile-item-name">{profile.name}</div>
            <div>3 measurements</div>
            <div className="profile-item-location">location</div>
          </div>
        </div>
      </IonLabel>
      <IonIcon className="profile-arrow" icon={chevronForwardOutline} />
    </IonItem>
  );
};

export default ProfileItem;
